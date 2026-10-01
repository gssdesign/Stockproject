#!/usr/bin/env python3
"""Learn from finished picks and tune the stock-selection rules.

Runs after every results update (Market data workflow). For each holding
period and market it measures the recent finished picks and, only when the
evidence is strong enough, nudges one rule a small step within hard bounds.
Everything it does is written to data/tuning.js (read by marketlib.params,
so levels.py, the screen and check_batch.py use the tuned rules) and shown
on the site's "How it works" tab.

Tunable rules (per horizon x market):
  target   target distance in ATRs        (lower if targets are rarely reached)
  stop     stop distance in ATRs          (never loosened beyond the default)
  max_ext  max distance above the 20-day average in ATRs (tighter entries)
  min_rs   minimum relative strength vs the index, in % points

Guardrails against chasing noise:
  * no change until MIN_N finished picks exist for that horizon x market
  * at most one change per horizon x market per COOLDOWN_DAYS
  * small steps, hard bounds, reward:risk never below the rulebook minimum
  * decisions use the last WINDOW finished picks (recent, not all-time)

Usage:  python scripts/learn.py
"""
from __future__ import annotations

import datetime as dt
import json
import statistics as st
import sys

from marketlib import DATA, HORIZONS, TUNABLE_DEFAULTS, read_assigned, write_assigned

MIN_N = 20
WINDOW = 40
COOLDOWN_DAYS = 7
STEP = {"target": 0.25, "stop": 0.25, "max_ext": 0.5, "min_rs": 1.0}
TUNING_JS = DATA / "tuning.js"


def bounds(h: str, key: str, cur: dict) -> tuple[float, float]:
    d = HORIZONS[h]
    if key == "target":  # never below the rulebook minimum reward:risk
        return max(d["min_rr"] * cur["stop"], 0.75 * d["target"]), 1.5 * d["target"]
    if key == "stop":
        return 0.6 * d["stop"], d["stop"]
    if key == "max_ext":
        return 1.0, TUNABLE_DEFAULTS["max_ext"]
    return 0.0, 10.0  # min_rs


def load_all() -> tuple[list[dict], dict]:
    picks = read_assigned(DATA / "picks.js", "window.PICKS = ")["batches"]
    prices = read_assigned(DATA / "prices.js", "window.PRICES = ") if (DATA / "prices.js").exists() else {}
    tracking = dict(prices.get("tracking", {}))
    idx = DATA / "archive" / "index.js"
    if idx.exists():
        for mo in read_assigned(idx, "window.ARCHIVE_INDEX = ").get("months", []):
            path = DATA / "archive" / f"{mo['month']}.js"
            if path.exists():
                a = read_assigned(path, f'window.ARCHIVE["{mo["month"]}"] = ')
                picks += a.get("batches", [])
                tracking.update(a.get("tracking", {}))
    return picks, tracking


def finished(batches: list[dict], tracking: dict, h: str, mk: str) -> list[dict]:
    """Recent finished picks with outcome features, newest first."""
    rows = []
    for b in sorted(batches, key=lambda b: b["date"], reverse=True):
        if (b.get("horizon") or "monthly") != h or b.get("superseded"):
            continue
        tr = tracking.get(b["id"], {})
        for p in b["picks"]:
            t = tr.get(p["yahoo"]) or {}
            if p["market"] != mk or not t.get("periodFinal"):
                continue
            m = p.get("metricsAtPick") or {}
            ref, atr_pct = p["refPrice"], m.get("atrPct")
            row = {"date": b["date"], "hit": bool(t.get("targetHit")), "stop": bool(t.get("stopHit")),
                   "ret": t.get("closeReturnPct"), "atrPct": atr_pct, "rs": m.get("rs1m" if h == "daily" else "rs3m"),
                   "ext": m.get("extAtr")}
            if row["ext"] is None and atr_pct and m.get("sma20"):
                row["ext"] = (ref - m["sma20"]) / (atr_pct / 100 * ref)
            if atr_pct and t.get("maxHigh") is not None:  # best and worst move in the window, in ATRs
                row["mfe"] = (t["maxHigh"] / ref - 1) * 100 / atr_pct
                row["mae"] = (1 - t["minLow"] / ref) * 100 / atr_pct
            rows.append(row)
    return rows[:WINDOW]


def summarize(rows: list[dict]) -> dict:
    n = len(rows)
    if not n:
        return {"n": 0}
    rets = [r["ret"] for r in rows if r["ret"] is not None]
    mfe = [r["mfe"] for r in rows if r.get("mfe") is not None]
    mae = [r["mae"] for r in rows if r.get("mae") is not None]
    return {"n": n, "hitRate": round(sum(r["hit"] for r in rows) / n, 3),
            "stopRate": round(sum(r["stop"] for r in rows) / n, 3),
            "avgRet": round(st.mean(rets), 2) if rets else None,
            "medMFE": round(st.median(mfe), 2) if mfe else None,
            "medMAE": round(st.median(mae), 2) if mae else None,
            "from": rows[-1]["date"], "to": rows[0]["date"]}


def decide(h: str, rows: list[dict], s: dict, cur: dict) -> tuple[str, float, str] | None:
    """At most one evidence-based change: (key, new value, reason)."""
    if s["n"] < MIN_N:
        return None
    hr, sr = s["hitRate"], s["stopRate"]
    pct = lambda v: f"{v * 100:.0f}%"
    # 1. Targets rarely reached and the typical best move falls short: bring the target in.
    if hr < 0.30 and s["medMFE"] is not None and s["medMFE"] < 0.8 * cur["target"]:
        return "target", cur["target"] - STEP["target"], (
            f"target met only {pct(hr)} of the last {s['n']}; typical best move {s['medMFE']:.2f} ATR vs target {cur['target']:.2f} ATR")
    # 2. Too many stops: demand entries closer to the 20-day average (CRITERIA §7).
    if sr > 0.50:
        return "max_ext", cur["max_ext"] - STEP["max_ext"], f"stop hit on {pct(sr)} of the last {s['n']}: require entries closer to the 20-day average"
    # 3. Losers bought more stretched than winners: tighten the overextension cap.
    win = [r["ext"] for r in rows if r["ext"] is not None and (r["hit"] or (r["ret"] or 0) > 0)]
    lose = [r["ext"] for r in rows if r["ext"] is not None and r["stop"]]
    if len(win) >= 5 and len(lose) >= 5 and st.mean(lose) - st.mean(win) >= 0.75:
        return "max_ext", cur["max_ext"] - STEP["max_ext"], (
            f"stopped picks were bought {st.mean(lose):.1f} ATR above the 20-day avg vs {st.mean(win):.1f} for winners")
    # 4. Weaker relative strength did clearly worse: raise the minimum.
    both = [r for r in rows if r["rs"] is not None and r["ret"] is not None]
    if len(both) >= MIN_N:
        med = st.median(r["rs"] for r in both)
        low = [r["ret"] for r in both if r["rs"] <= med]
        high = [r["ret"] for r in both if r["rs"] > med]
        if low and high and st.mean(high) - st.mean(low) >= 1.0 and med > cur["min_rs"]:
            return "min_rs", min(cur["min_rs"] + STEP["min_rs"], med), (
                f"picks with relative strength ≤ {med:+.1f} pts averaged {st.mean(low):+.1f}% vs {st.mean(high):+.1f}% above it")
    # 5. Targets hit often and moves run well past them: let winners run a little further.
    if hr > 0.60 and sr < 0.25 and s["medMFE"] is not None and s["medMFE"] > 1.2 * cur["target"]:
        return "target", cur["target"] + STEP["target"], (
            f"target met {pct(hr)} of the last {s['n']}; typical best move {s['medMFE']:.2f} ATR exceeds target {cur['target']:.2f} ATR")
    # 6. Entries were tightened and stops are now rare: relax back toward the default.
    if cur["max_ext"] < TUNABLE_DEFAULTS["max_ext"] and sr < 0.25 and hr >= 0.40:
        return "max_ext", cur["max_ext"] + STEP["max_ext"], f"stops down to {pct(sr)} with {pct(hr)} targets met: relaxing the entry filter"
    return None


def main() -> int:
    today = dt.date.today().isoformat()
    old = read_assigned(TUNING_JS, "window.TUNING = ") if TUNING_JS.exists() else {}
    params, log = old.get("params", {}), old.get("log", [])
    batches, tracking = load_all()
    stats = {}
    for h in HORIZONS:
        for mk in ("US", "IN"):
            d = HORIZONS[h]
            cur = {"target": d["target"], "stop": d["stop"], **TUNABLE_DEFAULTS, **params.get(h, {}).get(mk, {})}
            rows = finished(batches, tracking, h, mk)
            s = summarize(rows)
            stats.setdefault(h, {})[mk] = s
            last = max((e["date"] for e in log if e["horizon"] == h and e["market"] == mk), default="")
            if last and (dt.date.fromisoformat(today) - dt.date.fromisoformat(last)).days < COOLDOWN_DAYS:
                continue
            change = decide(h, rows, s, cur) if s["n"] else None
            if not change:
                continue
            key, val, why = change
            lo, hi = bounds(h, key, cur)
            val = round(min(max(val, lo), hi), 2)
            if abs(val - cur[key]) < 1e-9:
                continue
            log.append({"date": today, "horizon": h, "market": mk, "param": key, "from": cur[key], "to": val,
                        "reason": why, "sample": s["n"]})
            params.setdefault(h, {}).setdefault(mk, {})[key] = val
            print(f"learn: {h} {mk} {key} {cur[key]} -> {val} ({why})")
    out = {"updated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
           "rules": {"minSample": MIN_N, "window": WINDOW, "cooldownDays": COOLDOWN_DAYS},
           "params": params, "stats": stats, "log": log[-200:]}
    write_assigned(TUNING_JS, "// Generated by scripts/learn.py - do not edit by hand.\n", "window.TUNING = ", out)
    counts = {h: {mk: stats[h][mk]["n"] for mk in stats[h]} for h in stats}
    print(f"learn: finished picks per horizon/market {counts}; {len(log)} change(s) on record")
    return 0


if __name__ == "__main__":
    sys.exit(main())
