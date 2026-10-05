#!/usr/bin/env python3
"""Gate data/styles.js against STYLES.md before it is published.

  python3 scripts/check_styles.py

Per pick: the stock passes its style's hard filters in data/fundamentals.js;
price/priceDate equal the market snapshot close; fair value, buy-below price
and the metrics shown equal the fundamentals data; moat, thesis, 3 reasons,
a "what could go wrong" note and 3 sources are present. Per list: at most 5
(Buffett style) or 3 (Munger style) ideas and at most 2 per sector.
"""
from __future__ import annotations

import sys
from collections import Counter

from marketlib import DATA, load_market, market_of, read_assigned

MAX = {"buffett": 5, "munger": 3}
METRICS = ("avgRoe", "netMargin", "debtEquity", "pe", "fcfYield", "revCagr")


def close(a, b, tol):
    return a is None and b is None or (a is not None and b is not None and abs(a - b) <= tol)


def main() -> int:
    styles = read_assigned(DATA / "styles.js", "window.STYLES = ")
    fund = read_assigned(DATA / "fundamentals.js", "window.FUNDAMENTALS = ")
    stocks = load_market().get("stocks", {})
    problems: list[str] = []
    for style, lists in styles.get("lists", {}).items():
        if style not in MAX:
            problems.append(f"unknown style '{style}'")
            continue
        for mk, lst in lists.items():
            screen = {r["ticker"]: r for r in fund["screens"][style].get(mk, [])}
            if len(lst) > MAX[style]:
                problems.append(f"{style} {mk}: {len(lst)} ideas (max {MAX[style]})")
            for sector, n in Counter((p.get("sector") or "").split("/")[0].strip() for p in lst).items():
                if n > 2:
                    problems.append(f"{style} {mk}: {n} ideas in sector '{sector}' (max 2)")
            for p in lst:
                t, tag = p["yahoo"], f"{style} {mk} {p.get('symbol')}"
                if market_of(t) != mk:
                    problems.append(f"{tag}: listed under the wrong market")
                r, f, m = screen.get(t), fund["stocks"].get(t, {}), stocks.get(t)
                if not r:
                    problems.append(f"{tag}: doesn't pass the {style} hard filters in data/fundamentals.js")
                    continue
                if not m or not close(p.get("price"), m["close"], 0.011) or p.get("priceDate") != m["date"]:
                    problems.append(f"{tag}: price/priceDate must equal the snapshot close "
                                    f"{m and m['close']} {m and m['date']}")
                if not close(p.get("fairValue"), r.get("fairValue"), 0.011) or not close(p.get("buyBelow"), r.get("buyBelow"), 0.011):
                    problems.append(f"{tag}: fairValue/buyBelow must equal the screen ({r.get('fairValue')} / {r.get('buyBelow')})")
                for k in METRICS:
                    if not close((p.get("metrics") or {}).get(k), f.get(k), 1e-6):
                        problems.append(f"{tag}: metrics.{k} must equal data/fundamentals.js ({f.get(k)})")
                for key, n in (("reasons", 3), ("sources", 3)):
                    if len(p.get(key, [])) < n:
                        problems.append(f"{tag}: needs {n} {key}")
                for key in ("moat", "thesis", "watch", "addedOn"):
                    if not p.get(key):
                        problems.append(f"{tag}: missing {key}")
    if problems:
        print("FAIL: data/styles.js breaks STYLES.md:")
        for x in problems:
            print("  -", x)
        return 1
    n = sum(len(v) for lists in styles["lists"].values() for v in lists.values())
    print(f"PASS: data/styles.js meets every automated STYLES.md check ({n} ideas).")
    return 0


if __name__ == "__main__":
    sys.exit(main())
