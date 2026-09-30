#!/usr/bin/env python3
"""Gate a new batch against CRITERIA.md before it is published.

  python3 scripts/check_batch.py 2026-10-05-weekly

Checks, per pick: symbol is in the market snapshot; refPrice/refDate equal the
snapshot's last close; every hard check passes; levels are no wider than the
rule-based ones and reward:risk meets the minimum; buy zone brackets the close;
3 reasons, 4 data rows, 3 sources, a watch note. Per market: at most 5 picks,
at most 2 per sector, at most 2 High risk. Exits non-zero if anything fails,
so a routine can't publish a batch that breaks the rules.
"""
from __future__ import annotations

import sys
from collections import Counter

from marketlib import DATA, HORIZONS, checks, levels, load_market, market_of, read_assigned


def main() -> int:
    if len(sys.argv) != 2:
        print(__doc__)
        return 2
    batch_id = sys.argv[1]
    picks = read_assigned(DATA / "picks.js", "window.PICKS = ")
    batch = next((b for b in picks["batches"] if b["id"] == batch_id), None)
    if not batch:
        print(f"FAIL: batch {batch_id} not found in data/picks.js")
        return 1
    horizon = batch.get("horizon", "monthly")
    rules = HORIZONS[horizon]
    stocks = load_market().get("stocks", {})
    problems: list[str] = []

    for p in batch["picks"]:
        t, mk = p["yahoo"], market_of(p["yahoo"])
        tag = f"{mk} {p['symbol']}"
        m = stocks.get(t)
        if not m:
            problems.append(f"{tag}: not in data/market.js (unknown or illiquid symbol)")
            continue
        if abs(p["refPrice"] - m["close"]) > 0.011 or p.get("refDate") != m["date"]:
            problems.append(f"{tag}: refPrice/refDate {p['refPrice']} {p.get('refDate')} must equal snapshot close "
                            f"{m['close']} {m['date']}")
        for c in checks(m, horizon, mk, p):
            if not c["pass"]:
                problems.append(f"{tag}: fails '{c['name']}' ({c['detail']})")
        lv = levels(m, horizon, mk)
        if p["stop"] < lv["stop"] - 0.011:
            problems.append(f"{tag}: stop {p['stop']} is wider than the rule-based {lv['stop']}")
        if p["target"] > lv["target"] + 0.011:
            problems.append(f"{tag}: target {p['target']} is above the rule-based {lv['target']}")
        if not (p["buyLow"] <= p["refPrice"] <= p["buyHigh"]):
            problems.append(f"{tag}: buy zone {p['buyLow']}-{p['buyHigh']} doesn't contain the close {p['refPrice']}")
        mid = (p["buyLow"] + p["buyHigh"]) / 2
        rr = (p["target"] - mid) / (mid - p["stop"]) if mid > p["stop"] else 0
        if rr < rules["min_rr"] - 0.05:
            problems.append(f"{tag}: reward:risk {rr:.2f} below {rules['min_rr']}")
        for key, n in (("reasons", 3), ("data", 4), ("sources", 3)):
            if len(p.get(key, [])) < n:
                problems.append(f"{tag}: needs {n} {key}, has {len(p.get(key, []))}")
        if not p.get("watch") or not p.get("thesis"):
            problems.append(f"{tag}: missing thesis or watch note")
        if p.get("risk") not in ("Low", "Low–Medium", "Medium", "High"):
            problems.append(f"{tag}: risk must be Low, Low–Medium, Medium or High")

    for mk in ("US", "IN"):
        lst = [p for p in batch["picks"] if p["market"] == mk]
        if len(lst) > 5:
            problems.append(f"{mk}: {len(lst)} picks (max 5)")
        for sector, n in Counter(p.get("sector", "").split("/")[0].strip() for p in lst).items():
            if n > 2:
                problems.append(f"{mk}: {n} picks in sector '{sector}' (max 2)")
        if sum(p.get("risk") == "High" for p in lst) > 2:
            problems.append(f"{mk}: more than 2 High-risk picks")

    if problems:
        print(f"FAIL: {batch_id} breaks CRITERIA.md:")
        for x in problems:
            print("  -", x)
        return 1
    print(f"PASS: {batch_id} meets every automated CRITERIA.md check "
          f"({len(batch['picks'])} picks). Now do the manual self-check in CRITERIA.md section 8.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
