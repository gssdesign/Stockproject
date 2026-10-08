#!/usr/bin/env python3
"""Build data/market.js: exact closes and technicals for the pick universe.

Runs in GitHub Actions (which has internet access) after each market close.
The research routines can't reach market-data sites, so they read this file
for every price, ATR, moving average and relative-strength figure instead of
relying on web-search snippets.

Universe: S&P 500 (from Wikipedia) and Nifty 200 (from niftyindices.com),
with built-in fallback lists if either download fails, plus every ticker in
the active picks. Also writes a pre-screened candidate list per market and
holding period: the stocks that pass every hard check in CRITERIA.md.

Usage:  pip install -r requirements.txt && python scripts/market_snapshot.py
"""
from __future__ import annotations

import datetime as dt
import io
import sys

import pandas as pd
import requests
import yfinance as yf

from marketlib import BENCHMARK, DATA, HORIZONS, checks, completed, levels, market_of, metrics, read_assigned, write_assigned

UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36"}

US_FALLBACK = """AAPL MSFT NVDA AMZN GOOGL META AVGO TSLA BRK-B JPM LLY V UNH XOM MA JNJ PG HD COST ABBV MRK CVX
KO PEP ADBE CRM WMT BAC NFLX AMD TMO LIN ACN MCD CSCO ABT ORCL DHR WFC INTU TXN QCOM CAT GE IBM AMGN VZ PM
NOW GS MS RTX SPGI ISRG BKNG HON UNP LOW ELV PLD BLK SYK DE MDT LMT ADP GILD VRTX C SCHW MMC CB ADI REGN
MU LRCX KLAC AMAT PANW SNPS CDNS ETN BSX CI SO DUK ZTS BA MO NOC GD PFE T CMCSA NKE SBUX UPS MPC VLO PSX COP
EOG SLB OXY DAL UAL PLTR ANET CRWD UBER ABNB DIS""".split()

IN_FALLBACK = """RELIANCE TCS HDFCBANK ICICIBANK INFY BHARTIARTL ITC SBIN LT HINDUNILVR BAJFINANCE KOTAKBANK AXISBANK
HCLTECH MARUTI SUNPHARMA M&M TITAN ULTRACEMCO NTPC ONGC ADANIENT ADANIPORTS POWERGRID BAJAJFINSV ASIANPAINT
NESTLEIND COALINDIA WIPRO JSWSTEEL TATASTEEL BAJAJ-AUTO TECHM HINDALCO GRASIM SBILIFE HDFCLIFE DRREDDY CIPLA
EICHERMOT BRITANNIA APOLLOHOSP HEROMOTOCO INDUSINDBK SHRIRAMFIN TRENT BEL HAL TATACONSUM DIVISLAB LTIM DMART
SIEMENS ADANIGREEN ADANIPOWER PIDILITIND DLF GODREJCP IOC BPCL GAIL VEDL TVSMOTOR BANKBARODA PNB CANBK
UNIONBANK CHOLAFIN ETERNAL JIOFIN IRFC PFC RECLTD HAVELLS DABUR AMBUJACEM ICICIGI BAJAJHLDNG TORNTPHARM
LODHA MOTHERSON INDIGO NAUKRI SHREECEM ABB CGPOWER TATAPOWER INDHOTEL VBL ZYDUSLIFE HDFCAMC BOSCHLTD POLYCAB
PERSISTENT COFORGE MUTHOOTFIN SOLARINDS MAZDOCK BHEL OIL HINDPETRO SAIL NMDC LUPIN AUROPHARMA ALKEM MANKIND
MAXHEALTH TIINDIA ASHOKLEY BHARATFORG IDFCFIRSTB FEDERALBNK AUBANK POLICYBZR IRCTC CUMMINSIND SRF PIIND
MARICO JINDALSTEL NATIONALUM HINDZINC DIXON BDL SUZLON JSWENERGY NHPC TMPV LICI""".split()


def us_universe() -> dict[str, dict]:
    try:
        html = requests.get("https://en.wikipedia.org/wiki/List_of_S%26P_500_companies", headers=UA, timeout=30).text
        table = pd.read_html(io.StringIO(html))[0]
        out = {str(r["Symbol"]).replace(".", "-"): {"name": r["Security"], "sector": r["GICS Sector"]}
               for _, r in table.iterrows()}
        if len(out) > 400:
            return out
    except Exception as exc:  # network or layout change: fall back to a fixed list
        print(f"warn: S&P 500 list: {exc}", file=sys.stderr)
    return {t: {} for t in US_FALLBACK}


def in_universe() -> dict[str, dict]:
    for url in ("https://niftyindices.com/IndexConstituent/ind_nifty200list.csv",
                "https://archives.nseindia.com/content/indices/ind_nifty200list.csv"):
        try:
            text = requests.get(url, headers=UA, timeout=30).text
            table = pd.read_csv(io.StringIO(text))
            out = {f"{r['Symbol']}.NS": {"name": r["Company Name"], "sector": r["Industry"]} for _, r in table.iterrows()}
            if len(out) > 150:
                return out
        except Exception as exc:
            print(f"warn: Nifty 200 list from {url}: {exc}", file=sys.stderr)
    return {f"{t}.NS": {} for t in IN_FALLBACK}


def pick_tickers() -> set[str]:
    try:
        picks = read_assigned(DATA / "picks.js", "window.PICKS = ")
        return {p["yahoo"] for b in picks["batches"] for p in b["picks"]}
    except Exception:
        return set()


def download(tickers: list[str]) -> dict[str, list[dict]]:
    out: dict[str, list[dict]] = {}
    for i in range(0, len(tickers), 100):  # chunks keep Yahoo happy
        chunk = tickers[i:i + 100]
        df = yf.download(chunk, period="14mo", interval="1d", group_by="ticker", auto_adjust=False,
                         threads=True, progress=False)
        for t in chunk:
            try:
                out[t] = completed(bars_from(df[t] if len(chunk) > 1 else df), t)
            except Exception:
                continue
    return out


def bars_from(df) -> list[dict]:
    df = df.dropna(subset=["Close"])
    return [{"date": idx.date().isoformat(), "open": float(r["Open"]), "high": float(r["High"]),
             "low": float(r["Low"]), "close": float(r["Close"]), "volume": float(r["Volume"] or 0)}
            for idx, r in df.iterrows()]


def latest_by_market(bars: dict[str, list[dict]]) -> dict[str, str]:
    out: dict[str, str] = {}
    for t, b in bars.items():
        if b:
            mk = market_of(t)
            out[mk] = max(out.get(mk, ""), b[-1]["date"])
    return out


def fill_stale(bars: dict[str, list[dict]]) -> dict[str, str]:
    """Yahoo's bulk download sometimes omits the newest session for many
    tickers for a few hours after the close (even when the index has it).
    Re-fetch those tickers one by one and append the missing sessions, so
    every price in the snapshot is from the market's latest session."""
    latest = latest_by_market(bars)
    stale = [t for t, b in bars.items() if b and b[-1]["date"] < latest[market_of(t)]]
    if stale:
        print(f"{len(stale)} ticker(s) missing the latest session; re-fetching individually")
    for t in stale:
        try:
            extra = completed(bars_from(yf.Ticker(t).history(period="1mo", auto_adjust=False)), t)
        except Exception as exc:
            print(f"warn: {t}: {exc}", file=sys.stderr)
            continue
        last = bars[t][-1]["date"]
        bars[t].extend(b for b in extra if b["date"] > last)
    still = [t for t, b in bars.items() if b and b[-1]["date"] < latest[market_of(t)]]
    if still:
        print(f"warning: {len(still)} ticker(s) still lack the latest session: {', '.join(still[:20])}")
    return latest


def regime(m: dict | None) -> str:
    if not m or not m.get("sma50") or not m.get("sma200"):
        return "unknown"
    if m["close"] > m["sma50"] and m["sma50Rising"] and m["close"] > m["sma200"]:
        return "risk-on"
    if m["close"] < m["sma50"] and m["close"] < m["sma200"]:
        return "risk-off"
    return "neutral"


def main() -> int:
    universe = {**us_universe(), **in_universe()}
    for t in pick_tickers():
        universe.setdefault(t, {})
    tickers = sorted(universe)
    print(f"universe: {len(tickers)} tickers")
    bars = download(tickers + list(BENCHMARK.values()))
    latest = fill_stale(bars)

    bench = {mk: metrics(bars.get(sym, [])) for mk, sym in BENCHMARK.items()}
    stocks, screen = {}, {"US": {}, "IN": {}}
    for t in tickers:
        mk = market_of(t)
        m = metrics(bars.get(t, []), bars.get(BENCHMARK[mk]))
        if not m:
            continue
        m.update({k: v for k, v in universe[t].items() if v})
        stocks[t] = m
    # Yahoo sometimes serves bars that stop a session short for a few hours (seen around
    # midnight UTC). Never let that replace a newer close we already have: keep the
    # previous snapshot's entry for any stock or benchmark that would go back in time.
    prev = read_assigned(DATA / "market.js", "window.MARKET = ") if (DATA / "market.js").exists() else {}
    kept = 0
    for t, old in (prev.get("stocks") or {}).items():
        if t in stocks and old.get("date", "") > stocks[t].get("date", ""):
            stocks[t], kept = old, kept + 1
    for mk, old in (prev.get("benchmarks") or {}).items():
        if old.get("date") and (not bench.get(mk) or old["date"] > bench[mk].get("date", "")):
            bench[mk] = {k: v for k, v in old.items() if k not in ("symbol", "regime")}
    if kept:
        print(f"kept the previous snapshot for {kept} ticker(s) whose new data was older")
    for mk, old in (prev.get("latestSession") or {}).items():
        latest[mk] = max(latest.get(mk, ""), old)
    for t, m in stocks.items():
        mk = market_of(t)
        for h in HORIZONS:
            lv = levels(m, h, mk)
            if all(c["pass"] for c in checks(m, h, mk, lv)):
                screen[mk].setdefault(h, []).append(t)
    for mk in screen:  # strongest relative strength first
        for h, lst in screen[mk].items():
            key = "rs1m" if h == "daily" else "rs3m"
            lst.sort(key=lambda t: stocks[t].get(key) or -999, reverse=True)

    payload = {
        "generated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
        "source": "Yahoo Finance daily bars (unadjusted closes) via yfinance",
        "latestSession": latest,
        "benchmarks": {mk: {**(m or {}), "symbol": BENCHMARK[mk], "regime": regime(m)} for mk, m in bench.items()},
        "screen": screen,
        "stocks": stocks,
    }
    write_assigned(DATA / "market.js",
                   "// Generated by scripts/market_snapshot.py - do not edit by hand.\n"
                   "// Exact closes + technicals for the pick universe; read by scripts/levels.py.\n",
                   "window.MARKET = ", payload)
    counts = {mk: {h: len(v) for h, v in s.items()} for mk, s in screen.items()}
    print(f"wrote data/market.js: {len(stocks)} stocks; regime US={payload['benchmarks']['US']['regime']} "
          f"IN={payload['benchmarks']['IN']['regime']}; passing screen: {counts}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
