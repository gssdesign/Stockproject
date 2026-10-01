#!/usr/bin/env python3
"""Verify every new pick's reference price against the real exchange close.

Runs in GitHub Actions whenever data/picks.js changes (and on the regular
schedule). For each pick in an active batch that hasn't been verified yet:

  * Find the official close of the last session that completed before the
    batch's own start date (Yahoo Finance daily bars, unadjusted).
  * If the researched refPrice is off by more than 0.3%, re-anchor the pick:
    buy zone, target and stop move by the same percentage, so the plan keeps
    its shape but is priced off the real close. The original numbers are kept
    in pick["verified"]["original"]. More than 3% off is flagged "mismatch".
  * Record the CRITERIA.md checks as of that close (liquidity, trend,
    relative strength, 52-week-low distance, overextension, volatility,
    reward/risk) and any earnings date that falls inside the holding window.

If the reference session hasn't closed yet (e.g. a US pick published before
the previous US session ends), the pick is left for the next run.
"""
from __future__ import annotations

import datetime as dt
import sys

import yfinance as yf

from marketlib import BENCHMARK, DATA, checks, completed, market_of, metrics, read_assigned, tick_round, write_assigned

PICKS_JS = DATA / "picks.js"
CLOSE_UTC_HOUR = {"US": 20, "IN": 10}  # regular-session close, UTC (US uses EDT; +1h slack below)


def bars_for(symbol: str, start: dt.date) -> list[dict]:
    df = yf.Ticker(symbol).history(start=start.isoformat(), auto_adjust=False)
    return completed([{"date": i.date().isoformat(), "open": float(r["Open"]), "high": float(r["High"]), "low": float(r["Low"]),
                       "close": float(r["Close"]), "volume": float(r["Volume"] or 0)} for i, r in df.iterrows()], symbol)


def expected_ref(batch_date: dt.date) -> dt.date:
    d = batch_date - dt.timedelta(days=1)
    while d.weekday() >= 5:
        d -= dt.timedelta(days=1)
    return d


def earnings_in_window(symbol: str, start: str, end: str) -> str | None:
    try:
        cal = yf.Ticker(symbol).calendar
        dates = cal.get("Earnings Date", []) if isinstance(cal, dict) else []
        for d in dates:
            iso = d.isoformat() if hasattr(d, "isoformat") else str(d)[:10]
            if start <= iso[:10] <= end:
                return iso[:10]
    except Exception:
        pass
    return None


def main() -> int:
    header = PICKS_JS.read_text(encoding="utf-8")
    header = header[: header.index("window.PICKS = ")]
    picks = read_assigned(PICKS_JS, "window.PICKS = ")
    now = dt.datetime.now(dt.timezone.utc)
    cache: dict[str, list[dict]] = {}
    changed = 0

    for batch in picks["batches"]:
        bdate = dt.date.fromisoformat(batch["date"])
        if bdate < now.date() - dt.timedelta(days=45):
            continue
        exp = expected_ref(bdate)
        for p in batch["picks"]:
            if p.get("verified", {}).get("status") in ("ok", "adjusted", "mismatch", "unverifiable"):
                continue
            mk = market_of(p["yahoo"])
            for sym in (p["yahoo"], BENCHMARK[mk]):
                if sym not in cache:
                    try:
                        cache[sym] = bars_for(sym, bdate - dt.timedelta(days=420))
                    except Exception as exc:
                        print(f"warn: {sym}: {exc}", file=sys.stderr)
                        cache[sym] = []
            before = [b for b in cache[p["yahoo"]] if b["date"] < batch["date"]]
            if not before:
                p["verified"] = {"status": "unverifiable", "note": "no price history found for this symbol"}
                changed += 1
                continue
            ref = before[-1]
            deadline = dt.datetime.combine(exp, dt.time(CLOSE_UTC_HOUR[mk] + 1), dt.timezone.utc) + dt.timedelta(hours=6)
            if ref["date"] < exp.isoformat() and now < deadline:
                print(f"pending: {batch['id']} {p['yahoo']}: {exp} close not available yet")
                continue

            close = round(ref["close"], 2)
            diff = (p["refPrice"] / close - 1) * 100
            info = {"source": "Yahoo Finance daily close", "close": close, "date": ref["date"],
                    "researchPrice": p["refPrice"], "researchDate": p.get("refDate"), "diffPct": round(diff, 2)}
            if abs(diff) <= 0.3:
                info["status"] = "ok"
            else:
                f = close / p["refPrice"]
                info["original"] = {k: p[k] for k in ("refPrice", "refDate", "buyLow", "buyHigh", "target", "stop")}
                for k in ("buyLow", "buyHigh", "target", "stop"):
                    p[k] = tick_round(p[k] * f, mk)
                info["status"] = "mismatch" if abs(diff) > 3 else "adjusted"
            p["refPrice"], p["refDate"] = close, ref["date"]
            p["verified"] = info

            bench = [b for b in cache[BENCHMARK[mk]] if b["date"] <= ref["date"]]
            m = metrics(before, bench)
            if m:
                horizon = batch.get("horizon", "monthly")
                p["checks"] = checks(m, horizon, mk, p)
                p["metricsAtPick"] = {k: m.get(k) for k in ("atrPct", "sma20", "sma50", "sma200", "rs1m", "rs3m",
                                                             "fromHigh52", "fromLow52", "avgValue20")}
            ev = earnings_in_window(p["yahoo"], batch["date"], batch["expires"])
            if ev:
                p["eventRisk"] = f"Earnings on {ev}, inside the holding window"
            changed += 1
            print(f"{batch['id']:<22} {p['yahoo']:<16} research {p['verified']['researchPrice']} -> close {close} "
                  f"({ref['date']}, {diff:+.2f}%) {info['status']}")

    if changed:
        write_assigned(PICKS_JS, header, "window.PICKS = ", picks)
    print(f"verified {changed} pick(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
