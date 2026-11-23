#!/usr/bin/env python3
"""Fundamentals for the investor-style lists: Buffett and Munger style (US),
Raamdeo Agrawal QGLP style and Vijay Kedia SMILE style (India).

Runs in GitHub Actions (the research routines can't reach market-data sites).
For every stock in data/market.js it reads Yahoo Finance's annual income
statement, balance sheet and cash-flow statement (up to 4 fiscal years) plus
current valuation, computes the quality and value measures in STYLES.md, and
writes data/fundamentals.js with the metrics and the stocks that pass each
style's hard filters. The research routine then picks from those lists and
writes data/styles.js; nothing here is a recommendation by itself.

  pip install yfinance && python scripts/fundamentals.py
"""
from __future__ import annotations

import concurrent.futures as cf
import datetime as dt
import math
import sys
import time

import yfinance as yf

from marketlib import DATA, load_market, market_of, write_assigned

OUT = DATA / "fundamentals.js"

# Hard filters (STYLES.md). Values in local currency; ratios as fractions.
STYLES = {
    "buffett": {
        "min_cap": {"US": 10e9, "IN": 2e11},     # $10B / ₹20,000 cr
        "min_years_profit": 4,                    # profitable in every reported year (up to 4)
        "min_avg_roe": 0.15, "min_roe": 0.15,
        "max_debt_equity": 1.0,                   # total debt / equity
        "min_net_margin": 0.10,
        "max_pe": {"US": 25.0, "IN": 35.0},       # a sensible price ...
        "min_fcf_yield": {"US": 0.03, "IN": 0.02},  # ... or this free-cash-flow yield
        "mos": 0.20,                              # buy below fair value less 20%
    },
    "munger": {
        "min_cap": {"US": 20e9, "IN": 4e11},     # $20B / ₹40,000 cr
        "min_years_profit": 4,
        "min_avg_roe": 0.20, "min_roe": 0.20,
        "min_roa": 0.08,                          # capital-light, high return on all assets
        "max_debt_equity": 0.8,
        "min_rev_growth": 0.05,                   # still growing: a long runway
        "max_pe": {"US": 40.0, "IN": 60.0},       # will pay a fair price for quality, not any price
        "mos": 0.10,                              # wonderful business at a fair price
    },
    # India styles (STYLES.md section 6). Numbers are our reading of their published rules.
    "agrawal": {                                  # QGLP: Quality, Growth, Longevity, Price
        "min_cap": {"IN": 5e10},                  # ₹5,000 cr: established businesses
        "min_years_profit": 4,
        "min_avg_roe": 0.15, "min_roe": 0.15,     # Q: RoE well above the cost of equity
        "min_any_roe": 0.12,                      # L: no year below 12% (sustained RoE)
        "max_debt_equity": 1.0,                   # Q: little debt
        "min_profit_growth": 0.15,                # G: earnings growth 15%+ (avoid quality traps)
        "min_rev_growth": 0.10,
        "max_peg": 1.5,                           # P: P/E ÷ earnings growth; buy at PEG ≤ 1
        "mos": 0.0,                               # buy-below = price at PEG 1
    },
    "kedia": {                                    # SMILE: Small, Medium experience, Large aspiration, XL potential
        "min_cap": {"IN": 1e10}, "max_cap": {"IN": 3e11},  # ₹1,000–30,000 cr: small in size
        "min_years_profit": 4,
        "min_avg_roe": 0.12, "min_roe": 0.12,
        "max_debt_equity": 1.0,
        "min_rev_growth": 0.15,                   # L: aspiration visible in the numbers
        "min_profit_growth": 0.15,
        "min_promoter": 0.40,                     # skin in the game (insider/promoter holding)
        "max_pe": {"IN": 60.0}, "max_peg": 2.0,   # balance valuation and growth
        "growth_cap": 0.20,                       # fair value: DCF with growth up to 20%/yr
        "mos": 0.0,                               # buy-below = fair value
    },
}
STYLE_MARKETS = {"buffett": ("US",), "munger": ("US",), "agrawal": ("IN",), "kedia": ("IN",)}
DISCOUNT = {"US": 0.10, "IN": 0.12}               # required return for the fair-value estimate
TERMINAL_G = {"US": 0.03, "IN": 0.05}


def num(v):
    try:
        f = float(v)
        return None if math.isnan(f) or math.isinf(f) else f
    except (TypeError, ValueError):
        return None


def row(df, *names):
    """Values (newest first) of the first statement row that exists."""
    if df is None or getattr(df, "empty", True):
        return []
    for n in names:
        if n in df.index:
            return [num(v) for v in df.loc[n].tolist()]
    return []


def fair_value(fcf_ps: float | None, growth: float | None, mk: str, cap: float | None = None) -> float | None:
    """10-year two-stage DCF on free cash flow per share (STYLES.md)."""
    if not fcf_ps or fcf_ps <= 0:
        return None
    g = max(0.0, min(growth if growth is not None else 0.0, cap or (0.12 if mk == "IN" else 0.10)))
    r, tg = DISCOUNT[mk], TERMINAL_G[mk]
    pv, cf_ = 0.0, fcf_ps
    for year in range(1, 11):
        cf_ *= 1 + g
        pv += cf_ / (1 + r) ** year
    terminal = cf_ * (1 + tg) / (r - tg)
    return pv + terminal / (1 + r) ** 10


_FX: dict[tuple[str, str], float | None] = {}


def fx(src: str | None, dst: str | None) -> float | None:
    """Rate to convert statement currency into the trading currency (1.0 if the same)."""
    if not src or not dst or src == dst:
        return 1.0
    if (src, dst) not in _FX:
        try:
            h = yf.Ticker(f"{src}{dst}=X").history(period="10d")["Close"].dropna()
            _FX[(src, dst)] = float(h.iloc[-1]) if len(h) else None
        except Exception:
            _FX[(src, dst)] = None
    return _FX[(src, dst)]


def fetch(t: str) -> dict | None:
    for attempt in range(3):
        try:
            tk = yf.Ticker(t)
            info = tk.info or {}
            inc, bal, cfs = tk.income_stmt, tk.balance_sheet, tk.cashflow
            break
        except Exception as exc:  # rate limits, timeouts
            if attempt == 2:
                print(f"warn: {t}: {exc}", file=sys.stderr)
                return None
            time.sleep(3 * (attempt + 1))
    mk = market_of(t)
    ni = [v for v in row(inc, "Net Income", "Net Income Common Stockholders") if v is not None]
    rev = [v for v in row(inc, "Total Revenue", "Operating Revenue") if v is not None]
    eq = [v for v in row(bal, "Stockholders Equity", "Common Stock Equity", "Total Equity Gross Minority Interest")]
    assets = [v for v in row(bal, "Total Assets")]
    debt = row(bal, "Total Debt")
    fcf = [v for v in row(cfs, "Free Cash Flow") if v is not None]
    roes = [n / e for n, e in zip(ni, eq) if n is not None and e and e > 0]
    roas = [n / a for n, a in zip(ni, assets) if n is not None and a and a > 0]
    years = min(len(ni), 4)
    rev_cagr = None
    if len(rev) >= 2 and rev[-1] and rev[-1] > 0 and rev[0] > 0:
        rev_cagr = (rev[0] / rev[-1]) ** (1 / (len(rev) - 1)) - 1
    ni4 = ni[:4]
    ni_cagr = None  # net profit growth per year over the reported years (both ends positive)
    if len(ni4) >= 2 and ni4[-1] and ni4[-1] > 0 and ni4[0] > 0:
        ni_cagr = (ni4[0] / ni4[-1]) ** (1 / (len(ni4) - 1)) - 1
    price = num(info.get("currentPrice")) or num(info.get("regularMarketPrice"))
    shares = num(info.get("sharesOutstanding"))
    cap = num(info.get("marketCap"))
    # Statements can be in another currency than the shares (e.g. Infosys reports in USD).
    rate = fx(info.get("financialCurrency"), info.get("currency"))
    # Yahoo's financialCurrency label is sometimes wrong (statements actually in the trading
    # currency). Keep whichever factor makes reported net income agree with marketCap / P/E.
    pe_now = num(info.get("trailingPE"))
    if rate and rate != 1.0 and ni and ni[0] and ni[0] > 0 and cap and pe_now and pe_now > 0:
        implied = cap / pe_now
        rate = min((1.0, rate), key=lambda r: abs(math.log(ni[0] * r / implied)))
    financial = (info.get("sector") or "") == "Financial Services"
    # Owner earnings: last reported annual free cash flow; for banks, insurers and asset
    # managers free cash flow isn't meaningful, so net income is used instead (STYLES.md).
    owner = (ni[0] if ni else None) if financial else (fcf[0] if fcf else None)
    owner = owner * rate if owner is not None and rate else None
    fcf_ttm = owner
    fcf_ps = owner / shares if owner and shares else None
    fv = fair_value(fcf_ps, rev_cagr, mk)
    fv_growth = fair_value(fcf_ps, rev_cagr, mk, STYLES["kedia"]["growth_cap"]) if mk == "IN" else None
    pe_t, eps = num(info.get("trailingPE")), num(info.get("trailingEps"))
    peg = pe_t / (ni_cagr * 100) if pe_t and pe_t > 0 and ni_cagr and ni_cagr > 0 else None
    # Price at PEG 1 (Motilal Oswal's buy rule): EPS x earnings growth in %, growth capped at 30%.
    peg1 = eps * min(ni_cagr, 0.30) * 100 if eps and eps > 0 and ni_cagr and ni_cagr > 0 else None
    d0, e0 = (debt[0] if debt else None), (eq[0] if eq else None)
    return {
        "name": info.get("shortName") or info.get("longName"),
        "sector": info.get("sector"), "industry": info.get("industry"),
        "currency": info.get("currency"), "price": price, "marketCap": cap,
        "years": years, "profitYears": sum(1 for v in ni[:4] if v > 0),
        "roe": num(info.get("returnOnEquity")) or (roes[0] if roes else None),
        "avgRoe": sum(roes[:4]) / len(roes[:4]) if roes else None,
        "roa": num(info.get("returnOnAssets")) or (roas[0] if roas else None),
        "netMargin": num(info.get("profitMargins")),
        "opMargin": num(info.get("operatingMargins")),
        "grossMargin": num(info.get("grossMargins")),
        "debtEquity": (d0 / e0) if d0 is not None and e0 and e0 > 0 else None,
        "pe": num(info.get("trailingPE")), "forwardPe": num(info.get("forwardPE")),
        "pb": num(info.get("priceToBook")),
        "fcfYield": (fcf_ttm / cap) if fcf_ttm and cap else None,
        "fcfPositiveYears": sum(1 for v in fcf[:4] if v > 0), "fcfYears": len(fcf[:4]),
        "revCagr": rev_cagr, "revGrowth": num(info.get("revenueGrowth")),
        "profitCagr": ni_cagr, "peg": peg, "eps": eps,
        "minRoe": min(roes[:4]) if roes else None,
        "fcfSum": sum(fcf[:4]) if fcf else None,
        "promoterHolding": num(info.get("heldPercentInsiders")),
        "fairValueGrowth": round(fv_growth, 2) if fv_growth else None,
        "pegOnePrice": round(peg1, 2) if peg1 else None,
        "dividendYield": num(info.get("dividendYield")),
        "fairValue": round(fv, 2) if fv else None,
        "ownerEarnings": "net income" if financial else "free cash flow",
        "fxRate": rate,
        "fiscalYearEnd": (inc.columns[0].date().isoformat() if inc is not None and not inc.empty else None),
    }


def passes(f: dict, style: str, mk: str) -> list[str]:
    """Names of the hard filters this stock fails (empty list = passes)."""
    s, fails = STYLES[style], []
    def need(ok, name):
        if not ok:
            fails.append(name)
    need((f.get("marketCap") or 0) >= s["min_cap"][mk], "size")
    need(f["years"] >= 3 and f["profitYears"] == f["years"], "profitable every year")
    need((f.get("avgRoe") or 0) >= s["min_avg_roe"] and (f.get("roe") or 0) >= s["min_roe"], "return on equity")
    need(f.get("debtEquity") is not None and f["debtEquity"] <= s["max_debt_equity"], "low debt")
    if style in ("buffett", "munger"):
        need(f["fcfYears"] >= 3 and f["fcfPositiveYears"] == f["fcfYears"], "free cash flow every year")
    if style == "buffett":
        need((f.get("netMargin") or 0) >= s["min_net_margin"], "net margin")
        pe, fy = f.get("pe"), f.get("fcfYield")
        need((pe is not None and 0 < pe <= s["max_pe"][mk]) or (fy or 0) >= s["min_fcf_yield"][mk], "sensible price")
    elif style == "munger":
        need((f.get("roa") or 0) >= s["min_roa"], "return on assets")
        need((f.get("revCagr") or 0) >= s["min_rev_growth"], "growing revenue")
        need(f.get("pe") is not None and 0 < f["pe"] <= s["max_pe"][mk], "fair price")
    elif style == "agrawal":
        need((f.get("minRoe") or 0) >= s["min_any_roe"], "sustained return on equity")
        need((f.get("profitCagr") or 0) >= s["min_profit_growth"], "earnings growth")
        need((f.get("revCagr") or 0) >= s["min_rev_growth"], "growing revenue")
        need((f.get("fcfSum") or 0) > 0, "cash generative")
        need(f.get("peg") is not None and f["peg"] <= s["max_peg"] and f.get("pegOnePrice"), "reasonable price (PEG)")
    elif style == "kedia":
        need((f.get("marketCap") or 0) <= s["max_cap"][mk], "small in size")
        need((f.get("revCagr") or 0) >= s["min_rev_growth"], "large aspiration (revenue growth)")
        need((f.get("profitCagr") or 0) >= s["min_profit_growth"], "profit growth")
        ph = f.get("promoterHolding")
        need(ph is not None and ph >= s["min_promoter"], "promoter holding")
        pe = f.get("pe")
        need(pe is not None and 0 < pe <= s["max_pe"][mk] and f.get("peg") is not None and f["peg"] <= s["max_peg"],
             "valuation vs growth")
        need(f.get("fairValueGrowth"), "fair value")
    return fails


def fair_and_buy(f: dict, style: str) -> tuple[float | None, float | None]:
    """Fair value and buy-below price for a style (STYLES.md)."""
    s = STYLES[style]
    fv = {"agrawal": f.get("pegOnePrice"), "kedia": f.get("fairValueGrowth")}.get(style, f.get("fairValue"))
    return fv, (round(fv * (1 - s["mos"]), 2) if fv else None)


def main() -> int:
    stocks = load_market().get("stocks", {})
    if not stocks:
        print("data/market.js is empty; run market_snapshot.py first", file=sys.stderr)
        return 2
    out, done = {}, 0
    with cf.ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(fetch, t): t for t in stocks}
        for fut in cf.as_completed(futs):
            t, f = futs[fut], fut.result()
            done += 1
            if f:
                out[t] = f
            if done % 100 == 0:
                print(f"{done}/{len(stocks)}")
    screens = {}
    for style, s in STYLES.items():
        screens[style] = {}
        for mk in STYLE_MARKETS[style]:
            ok, names = [], set()
            for t, f in sorted(out.items()):
                if market_of(t) != mk or passes(f, style, mk) or (f.get("name") in names):
                    continue
                names.add(f.get("name"))
                price = stocks[t]["close"]  # exact close from the market snapshot
                fv, buy_below = fair_and_buy(f, style)
                ok.append({"ticker": t, "price": price, "date": stocks[t]["date"], "fairValue": fv,
                           "buyBelow": buy_below,
                           "discount": round((1 - price / fv) * 100, 1) if fv else None,
                           "avgRoe": f.get("avgRoe"), "pe": f.get("pe"), "fcfYield": f.get("fcfYield"),
                           "peg": f.get("peg"), "profitCagr": f.get("profitCagr"), "revCagr": f.get("revCagr"),
                           "marketCap": f.get("marketCap"), "promoterHolding": f.get("promoterHolding"),
                           "styleOnly": bool(stocks[t].get("styleOnly"))})
            if style == "agrawal":    # Price comes last, but among passers the cheapest growth first
                ok.sort(key=lambda r: (r["peg"] or 99, -(r["avgRoe"] or 0)))
            elif style == "kedia":    # the fastest-growing small companies first
                ok.sort(key=lambda r: (-(r["revCagr"] or 0), r["peg"] or 99))
            else:                     # quality first, then value
                ok.sort(key=lambda r: (-(r["avgRoe"] or 0), -(r["discount"] or -999)))
            screens[style][mk] = ok
    payload = {"generated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
               "rules": {k: {kk: vv for kk, vv in v.items()} for k, v in STYLES.items()},
               "discount": DISCOUNT, "terminalGrowth": TERMINAL_G,
               "styleMarkets": STYLE_MARKETS, "screens": screens, "stocks": out}
    write_assigned(OUT, "// Generated by scripts/fundamentals.py - do not edit by hand.\n", "window.FUNDAMENTALS = ", payload)
    print(f"wrote {OUT.name}: {len(out)} stocks; passing " +
          ", ".join(f"{st} {mk} {len(v)}" for st, d in screens.items() for mk, v in d.items()))
    return 0


if __name__ == "__main__":
    sys.exit(main())
