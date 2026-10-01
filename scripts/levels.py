#!/usr/bin/env python3
"""Exact prices, rule-based levels and checks for candidate picks.

Reads data/market.js (built by scripts/market_snapshot.py in GitHub Actions),
so it works offline. Use it for EVERY number that goes into a pick.

  python3 scripts/levels.py weekly MU TCS.NS        # levels + checks for tickers
  python3 scripts/levels.py monthly --screen IN     # stocks passing every check
  python3 scripts/levels.py daily MU --json         # machine-readable

Levels follow CRITERIA.md: buy zone around the last close, stop and target
sized by ATR(14) with a minimum reward-to-risk per holding period.
"""
from __future__ import annotations

import argparse
import datetime as dt
import json
import sys

from marketlib import HORIZONS, checks, levels, load_market, market_of
from marketlib import tuning as load_tuning


LATEST: dict[str, str] = {}  # latest session per market in the snapshot


def describe(t: str, m: dict, horizon: str) -> dict:
    mk = market_of(t)
    lv = levels(m, horizon, mk)
    ch = checks(m, horizon, mk, lv)
    return {"ticker": t, "market": mk, "name": m.get("name"), "sector": m.get("sector"),
            "levels": lv, "checks": ch, "allPass": all(c["pass"] for c in ch), "metrics": m,
            "stale": LATEST.get(mk) if m.get("date", "") < LATEST.get(mk, "") else None}


def show(d: dict) -> None:
    m, lv, cur = d["metrics"], d["levels"], "₹" if d["market"] == "IN" else "$"
    print(f"\n{d['ticker']}  {d.get('name') or ''}  [{d.get('sector') or ''}]")
    print(f"  close {cur}{m['close']:,} on {m['date']} ({m['changePct']:+.2f}%)   ATR {m['atr']:.2f} ({m['atrPct']}%)")
    print(f"  20/50/200-day avg {m['sma20']} / {m['sma50']} / {m['sma200']}   1m {m['ret1m']}%  3m {m['ret3m']}%  "
          f"RS1m {m.get('rs1m')}  RS3m {m.get('rs3m')}   52w {m['low52']}–{m['high52']} ({m['fromHigh52']}% from high)")
    print(f"  LEVELS  buy {cur}{lv['buyLow']:,}–{lv['buyHigh']:,}   target {cur}{lv['target']:,} ({lv['targetPct']:+.1f}%)   "
          f"stop {cur}{lv['stop']:,} ({lv['stopPct']:+.1f}%)   R:R {lv['rr']}")
    for c in d["checks"]:
        print(f"  {'PASS' if c['pass'] else 'FAIL'}  {c['name']}: {c['detail']}")
    print(f"  => {'ELIGIBLE' if d['allPass'] else 'NOT ELIGIBLE (fails a hard check)'}")
    if d.get("stale"):
        print(f"  WARNING: STALE PRICE. This close is from {m['date']} but the market's latest session is {d['stale']}. "
              "Don't publish it; wait for the next Market data run or use another stock.")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("horizon", choices=list(HORIZONS))
    ap.add_argument("tickers", nargs="*", help="Yahoo symbols, e.g. MU or TCS.NS")
    ap.add_argument("--screen", choices=["US", "IN"], help="list stocks passing every check")
    ap.add_argument("--top", type=int, default=40)
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    market = load_market()
    LATEST.update(market.get("latestSession") or {})
    for mk, bm in market.get("benchmarks", {}).items():
        LATEST[mk] = max(LATEST.get(mk, ""), (bm or {}).get("date") or "")
    for t, m in market.get("stocks", {}).items():  # older snapshots lack latestSession
        mk = market_of(t)
        LATEST[mk] = max(LATEST.get(mk, ""), m.get("date", ""))
    stocks = market.get("stocks", {})
    if not stocks:
        print("data/market.js is missing or empty: the Market data GitHub Action hasn't run yet.", file=sys.stderr)
        return 2
    gen = market.get("generated", "?")
    age_h = (dt.datetime.now(dt.timezone.utc) - dt.datetime.fromisoformat(gen)).total_seconds() / 3600 if gen != "?" else 999
    if not args.json:
        b = market.get("benchmarks", {})
        print(f"snapshot generated {gen} ({age_h:.0f}h ago). Regime: US {b.get('US', {}).get('regime')} "
              f"(S&P close {b.get('US', {}).get('close')} on {b.get('US', {}).get('date')}), "
              f"IN {b.get('IN', {}).get('regime')} (Nifty close {b.get('IN', {}).get('close')} on {b.get('IN', {}).get('date')})")
        tuned = (load_tuning().get("params") or {}).get(args.horizon) or {}
        if tuned:
            print("Learned rule adjustments in force for " + args.horizon + ": " +
                  "; ".join(f"{mk}: " + ", ".join(f"{k}={v}" for k, v in d.items()) for mk, d in tuned.items()))
        if age_h > 36:
            print("WARNING: snapshot is more than 36h old; prices may be stale.")

    rows = []
    if args.screen:
        for t in market.get("screen", {}).get(args.screen, {}).get(args.horizon, [])[: args.top]:
            rows.append(describe(t, stocks[t], args.horizon))
    for t in args.tickers:
        if t not in stocks:
            print(f"\n{t}: not in the snapshot universe (not liquid enough or unknown symbol). Don't use it.", file=sys.stderr)
            continue
        rows.append(describe(t, stocks[t], args.horizon))

    if args.json:
        json.dump(rows, sys.stdout, indent=2, ensure_ascii=False)
        print()
    elif args.screen:
        print(f"\n{len(rows)} {args.screen} stocks pass every {args.horizon} check (strongest relative strength first):")
        for d in rows:
            m, lv = d["metrics"], d["levels"]
            print(f"  {d['ticker']:<14} {str(d.get('name') or '')[:28]:<28} close {m['close']:>10,} ({m['date']})  "
                  f"RS3m {m.get('rs3m')!s:>6}  ATR% {m['atrPct']:>4}  tgt {lv['targetPct']:+.1f}% stop {lv['stopPct']:+.1f}%")
    else:
        for d in rows:
            show(d)
    return 0


if __name__ == "__main__":
    sys.exit(main())
