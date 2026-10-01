#!/usr/bin/env python3
"""Write a small JSON summary for the iOS home-screen widget.

Reads data/picks.js and data/prices.js and writes <out>/data/widget.json
(default: the repo's data/ folder). Per market it holds today's daily picks
with their last close and levels, the last finished daily result, and a
one-line status of the current weekly and monthly lists. The Publish site
workflow runs this, so the file on the website is always current.

Usage:  python scripts/widget_data.py [site_dir]
"""
from __future__ import annotations

import datetime as dt
import json
import pathlib
import sys

from marketlib import DATA, read_assigned

SITE = "https://gssdesign.github.io/Stockproject/"


def current(batches: list[dict], horizon: str, market: str) -> dict | None:
    for b in batches:  # newest first in picks.js
        if b.get("horizon") == horizon and not b.get("superseded") and any(p["market"] == market for p in b["picks"]):
            return b
    return None


def pick_row(p: dict, t: dict, quotes: dict) -> dict:
    q = quotes.get(p["yahoo"], {})
    close = q.get("price", p["refPrice"])
    final = t.get("periodClose")
    ret = t.get("closeReturnPct")
    if ret is None and t.get("maxHigh") is not None:
        ret = round((t.get("markPrice", close) / p["refPrice"] - 1) * 100, 2)
    return {"s": p["symbol"], "name": p["name"], "cur": "₹" if p["currency"] == "INR" else "$",
            "close": round(close, 2), "asOf": q.get("asOf", p["refDate"]),
            "buy": [p["buyLow"], p["buyHigh"]], "target": p["target"], "stop": p["stop"],
            "status": t.get("status", "Open") if t.get("maxHigh") is not None else "Awaiting close",
            "final": bool(t.get("periodFinal")), "ret": ret, "hit": t.get("targetHit"),
            "periodClose": final}


def summary(b: dict | None, market: str, tracking: dict) -> dict | None:
    if not b:
        return None
    tr = tracking.get(b["id"], {})
    rets = []
    for p in b["picks"]:
        if p["market"] != market:
            continue
        t = tr.get(p["yahoo"], {})
        if t.get("maxHigh") is not None and t.get("markPrice"):
            rets.append(t.get("closeReturnPct", (t["markPrice"] / p["refPrice"] - 1) * 100))
    n = sum(1 for p in b["picks"] if p["market"] == market)
    return {"date": b["date"], "expires": b["expires"], "n": n,
            "avgRet": round(sum(rets) / len(rets), 2) if rets else None}


def last_result(batches: list[dict], market: str, tracking: dict) -> dict | None:
    for b in batches:
        if b.get("horizon") != "daily" or b.get("superseded"):
            continue
        ps = [p for p in b["picks"] if p["market"] == market]
        tr = tracking.get(b["id"], {})
        if ps and all(tr.get(p["yahoo"], {}).get("periodFinal") for p in ps):
            rets = [tr[p["yahoo"]].get("closeReturnPct") for p in ps]
            rets = [r for r in rets if r is not None]
            return {"date": b["date"], "n": len(ps),
                    "hits": sum(1 for p in ps if tr[p["yahoo"]].get("targetHit")),
                    "avgRet": round(sum(rets) / len(rets), 2) if rets else None}
    return None


def main() -> int:
    out_dir = pathlib.Path(sys.argv[1]) / "data" if len(sys.argv) > 1 else DATA
    picks = read_assigned(DATA / "picks.js", "window.PICKS = ")
    prices = read_assigned(DATA / "prices.js", "window.PRICES = ") if (DATA / "prices.js").exists() else {}
    tracking, quotes = prices.get("tracking", {}), prices.get("quotes", {})
    batches = picks["batches"]

    markets = {}
    for mk in ("US", "IN"):
        d = current(batches, "daily", mk)
        tr = tracking.get(d["id"], {}) if d else {}
        markets[mk] = {
            "daily": {"date": d["date"],
                      "picks": [pick_row(p, tr.get(p["yahoo"], {}), quotes) for p in d["picks"] if p["market"] == mk]}
            if d else None,
            "lastResult": last_result(batches, mk, tracking),
            "weekly": summary(current(batches, "weekly", mk), mk, tracking),
            "monthly": summary(current(batches, "monthly", mk), mk, tracking),
        }

    data = {"generated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
            "pricesUpdated": prices.get("updated"), "site": SITE, "markets": markets}
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "widget.json").write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    print(f"wrote {out_dir / 'widget.json'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
