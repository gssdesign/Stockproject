#!/usr/bin/env python3
"""Rank Indian equity mutual funds and pick the top 2 per category.

Data (free, official): AMFI's daily NAV file for the scheme list and SEBI
categories, and the NAV history of each scheme from api.mfapi.in (which
mirrors AMFI). Only Direct Plan - Growth options with at least MIN_YEARS of
history are considered.

Evidence first: most active Indian equity funds trail their index over 5-10
years (S&P SPIVA India), so each category is anchored on a low-cost INDEX
FUND (the default), and an active fund is suggested only if it beat that index
fund in at least BEAT_INDEX_MIN % of rolling 3-year windows by a median of at
least EXCESS_MIN %-points a year (enough to justify its higher cost).

Score among active funds (percentile ranks within the category):
  20%  share of rolling 3-yr windows beating the index fund
  15%  median rolling 3-yr CAGR      15%  share of windows beating the category median
  10%  5-year CAGR    10%  3-year CAGR
  20%  3-year Sortino ratio (risk-free RF)   10%  3-year maximum drawdown

Cadence: NAV metrics refresh every run (weekly); the top-2 picks are
re-ranked once per calendar month. An incumbent stays while it remains in
the category's top KEEP_RANK, to avoid churn.

Writes data/funds.js (window.FUNDS = {...}).
Usage:  python scripts/mutual_funds.py
"""
from __future__ import annotations

import datetime as dt
import math
import re
import statistics as st
import sys
import time

import requests

from marketlib import DATA, read_assigned, write_assigned

AMFI_URLS = ["https://portal.amfiindia.com/spages/NAVAll.txt", "https://www.amfiindia.com/spages/NAVAll.txt"]
MFAPI = "https://api.mfapi.in/mf"
CATEGORIES = {"large": "Large Cap Fund", "mid": "Mid Cap Fund", "small": "Small Cap Fund"}
TITLES = {"large": "Large cap", "mid": "Mid cap", "small": "Small cap"}
MIN_YEARS = 5
RF = 6.0          # % a year, assumed risk-free rate for Sortino
KEEP_RANK = 4
BEAT_INDEX_MIN = 60   # % of rolling 3-yr windows an active pick must beat the index fund in
EXCESS_MIN = 1.0      # median outperformance vs the index fund, %-points a year
ROLL_MONTHS = 61      # rolling 3-yr windows ending each month over the last 5 years (several market phases)
MIN_WINDOWS = 24      # need at least 2 years of windows comparable with the index fund to qualify
# Low-cost index funds used as each category's benchmark and default option (first match wins).
INDEX_FUNDS = {
    "large": [r"uti nifty 50 index fund", r"hdfc (index fund\W+)?nifty 50 (index|plan)", r"icici prudential nifty 50 index"],
    "mid": [r"motilal oswal nifty midcap 150 index", r"nippon india nifty midcap 150 index", r"edelweiss nifty midcap150"],
    "small": [r"motilal oswal nifty smallcap 250 index", r"nippon india nifty smallcap 250 index", r"edelweiss nifty smallcap"],
}
INDEX_NAMES = {"large": "Nifty 50", "mid": "Nifty Midcap 150", "small": "Nifty Smallcap 250"}
OUT = DATA / "funds.js"
UA = {"User-Agent": "Mozilla/5.0 (StockPicksDesk research; github.com/gssdesign/Stockproject)"}
EXCLUDE = re.compile(r"idcw|dividend|bonus|payout|reinvest|segregated|regular", re.I)


# ---------------------------------------------------------------- data
def amfi_candidates() -> dict[str, list[dict]]:
    """Direct-growth schemes per category from AMFI's NAV file (tries each known address)."""
    for url in AMFI_URLS:
        try:
            text = requests.get(url, headers=UA, timeout=60).text
        except Exception as exc:
            print(f"AMFI {url}: {exc}", file=sys.stderr)
            continue
        out = parse_amfi(text)
        print(f"AMFI {url}: {len(text)} bytes, candidates " + ", ".join(f"{k}={len(v)}" for k, v in out.items()))
        if all(out.values()):
            return out
    raise RuntimeError("AMFI NAV file unavailable or unparseable")


def parse_amfi(text: str) -> dict[str, list[dict]]:
    out = {k: [] for k in CATEGORIES}
    cat = amc = None
    for line in text.splitlines():
        line = line.strip()
        if not line:
            continue
        if ";" not in line:
            m = re.search(r"\((.*?)\)\s*$", line)
            if line.lower().startswith(("open ended", "close ended", "interval")) and m:
                cat = next((k for k, v in CATEGORIES.items() if same_cat(m.group(1), v)), None)
            else:
                amc = line
            continue
        parts = line.split(";")
        if cat is None or len(parts) < 6 or not parts[0].isdigit():
            continue
        name = parts[3].strip()
        if "direct" in name.lower() and "growth" in name.lower() and not EXCLUDE.search(name):
            out[cat].append({"code": parts[0], "name": name, "amc": amc or "", "isin": parts[1].strip()})
    return out


def same_cat(label: str, category: str) -> bool:
    """Exact SEBI category match: 'Equity Scheme - Mid Cap Fund' is not 'Large & Mid Cap Fund'."""
    norm = lambda t: re.sub(r"\s+", " ", str(t)).strip().lower()
    return norm(label).split(" - ")[-1] == norm(category)


def mfapi_candidates() -> dict[str, list[dict]]:
    """Fallback when AMFI is unreachable: filter mfapi's scheme list by name, confirm the category later."""
    allm = requests.get(MFAPI, headers=UA, timeout=60).json()
    out = {k: [] for k in CATEGORIES}
    # Broad name hints only pick candidates ("Midcap", "Mid-Cap", "Bluechip", ...); the scheme's
    # official SEBI category (from its NAV history) decides membership, so spelling can't drop a fund.
    hints = {"large": r"large|blue\s*chip|top\s*100|frontline", "mid": r"mid|emerging", "small": r"small|micro"}
    for s in allm:
        name = s.get("schemeName", "")
        low = name.lower()
        if "direct" not in low or "growth" not in low or EXCLUDE.search(name) or re.search(r"index|etf|fof|fund of fund|nifty|sensex", low):
            continue
        for k, v in CATEGORIES.items():
            if re.search(hints[k], low):
                out[k].append({"code": str(s["schemeCode"]), "name": name, "amc": "", "isin": "", "confirm": v})
    return out


def find_index_funds() -> dict[str, dict]:
    """Locate each category's index fund (Direct, Growth) in mfapi's scheme list."""
    try:
        allm = requests.get(MFAPI, headers=UA, timeout=60).json()
    except Exception as exc:
        print(f"index-fund lookup failed: {exc}", file=sys.stderr)
        return {}
    out = {}
    for key, pats in INDEX_FUNDS.items():
        for pat in pats:
            hit = next((x for x in allm if re.search(pat, x.get("schemeName", "").lower())
                        and "direct" in x["schemeName"].lower() and "growth" in x["schemeName"].lower()
                        and not EXCLUDE.search(x["schemeName"])), None)
            if hit:
                out[key] = {"code": str(hit["schemeCode"]), "name": hit["schemeName"]}
                break
        print(f"index fund for {key}: {out.get(key, {}).get('name', 'NOT FOUND')}")
    return out


def history(code: str) -> tuple[list[tuple[dt.date, float]], dict]:
    for attempt in range(3):
        try:
            j = requests.get(f"{MFAPI}/{code}", headers=UA, timeout=30).json()
            rows = [(dt.datetime.strptime(r["date"], "%d-%m-%Y").date(), float(r["nav"])) for r in j.get("data", [])
                    if r.get("nav") not in (None, "", "0", "0.0")]
            rows.sort()
            return rows, j.get("meta", {})
        except Exception:
            time.sleep(2 * (attempt + 1))
    return [], {}


# ---------------------------------------------------------------- metrics
def nav_on(series: list[tuple[dt.date, float]], day: dt.date) -> float | None:
    """NAV on the last date at or before `day` (binary search)."""
    lo, hi = 0, len(series) - 1
    if hi < 0 or series[0][0] > day:
        return None
    while lo < hi:
        mid = (lo + hi + 1) // 2
        if series[mid][0] <= day:
            lo = mid
        else:
            hi = mid - 1
    return series[lo][1]


def years_back(day: dt.date, years: float) -> dt.date:
    return day - dt.timedelta(days=round(365.25 * years))


def cagr(series, end: dt.date, years: float) -> float | None:
    a, b = nav_on(series, years_back(end, years)), nav_on(series, end)
    if not a or not b:
        return None
    return ((b / a) ** (1 / years) - 1) * 100


def month_ends(end: dt.date, n: int) -> list[dt.date]:
    """`end` plus the n-1 previous calendar month-ends, oldest first."""
    out, d = [end], end.replace(day=1) - dt.timedelta(days=1)
    for _ in range(n - 1):
        out.append(d)
        d = d.replace(day=1) - dt.timedelta(days=1)
    return sorted(out)


def metrics(series, end: dt.date, ends: list[dt.date]) -> dict:
    last3 = [(d, v) for d, v in series if d > years_back(end, 3)]
    rets = [math.log(b[1] / a[1]) for a, b in zip(last3, last3[1:]) if a[1] > 0]
    vol = st.pstdev(rets) * math.sqrt(252) * 100 if len(rets) > 100 else None
    downside = [r for r in rets if r < 0]
    dd_dev = math.sqrt(sum(r * r for r in downside) / len(rets)) * math.sqrt(252) * 100 if rets and downside else None
    peak, mdd = 0.0, 0.0
    for _, v in last3:
        peak = max(peak, v)
        mdd = min(mdd, (v / peak - 1) * 100)
    c3 = cagr(series, end, 3)
    return {
        "ret1y": _r(cagr(series, end, 1)), "cagr3y": _r(c3), "cagr5y": _r(cagr(series, end, 5)),
        "vol3y": _r(vol), "maxDD3y": _r(mdd), "sortino3y": _r((c3 - RF) / dd_dev) if c3 is not None and dd_dev else None,
        "rolling": {d.isoformat(): cagr(series, d, 3) for d in ends},
    }


def _r(v, n=2):
    return None if v is None or (isinstance(v, float) and math.isnan(v)) else round(v, n)


def pct_rank(values: list[float | None], higher_better=True) -> list[float]:
    ok = sorted(v for v in values if v is not None)
    out = []
    for v in values:
        if v is None or not ok:
            out.append(0.0)
            continue
        below = sum(1 for x in ok if (x < v if higher_better else x > v))
        out.append(below / max(1, len(ok) - 1))
    return out


# ---------------------------------------------------------------- ranking
def rank_category(funds: list[dict], ends: list[dt.date], index: dict | None) -> list[dict]:
    keys = [e.isoformat() for e in ends]
    med = {k: st.median([f["m"]["rolling"][k] for f in funds if f["m"]["rolling"].get(k) is not None] or [0]) for k in keys}
    idx_roll = (index or {}).get("m", {}).get("rolling", {})
    idx_lvl = (index or {}).get("levels", {})
    for f in funds:
        roll = [f["m"]["rolling"].get(k) for k in keys]
        roll_ok = [r for r in roll if r is not None]
        f["m"]["roll3yMedian"] = _r(st.median(roll_ok)) if roll_ok else None
        f["m"]["beatPct"] = _r(100 * sum(1 for k, r in zip(keys, roll) if r is not None and r >= med[k]) / len(roll_ok), 0) if roll_ok else None
        f["m"]["windows"] = len(roll_ok)
        pairs = [(r, idx_roll[k]) for k, r in zip(keys, roll) if r is not None and idx_roll.get(k) is not None]
        f["m"]["indexWindows"] = len(pairs)
        if pairs:
            f["m"]["beatIndexPct"] = _r(100 * sum(1 for a, b in pairs if a > b) / len(pairs), 0)
            f["m"]["excessVsIndex"] = _r(st.median(a - b for a, b in pairs))
        # Downside capture: average fund return in months the index fell, as % of the index's average fall.
        lv = f.get("levels", {})
        down = [((lv[b] / lv[a] - 1), (idx_lvl[b] / idx_lvl[a] - 1)) for a, b in zip(keys, keys[1:])
                if lv.get(a) and lv.get(b) and idx_lvl.get(a) and idx_lvl.get(b) and idx_lvl[b] < idx_lvl[a]]
        if len(down) >= 3:
            f["m"]["downCapture"] = _r(100 * st.mean(d[0] for d in down) / st.mean(d[1] for d in down), 0)
    parts = [("beatIndexPct", 0.20, True), ("roll3yMedian", 0.15, True), ("beatPct", 0.15, True), ("cagr5y", 0.10, True),
             ("cagr3y", 0.10, True), ("sortino3y", 0.20, True), ("maxDD3y", 0.10, True)]
    scores = [0.0] * len(funds)
    for key, w, hb in parts:
        for i, p in enumerate(pct_rank([f["m"].get(key) for f in funds], hb)):
            scores[i] += w * p
    for f, s in zip(funds, scores):
        f["score"] = round(100 * s, 1)
        m = f["m"]
        f["qualified"] = (bool(index) and m.get("indexWindows", 0) >= MIN_WINDOWS
                          and (m.get("beatIndexPct") or 0) >= BEAT_INDEX_MIN and (m.get("excessVsIndex") or 0) >= EXCESS_MIN)
    funds.sort(key=lambda f: f["score"], reverse=True)
    for i, f in enumerate(funds, 1):
        f["rank"] = i
    return funds


def reasons(f: dict, cat_med: dict, idx_name: str) -> list[str]:
    m, out = f["m"], []
    if m.get("beatIndexPct") is not None:
        out.append(f"Beat the {idx_name} index fund in {m['beatIndexPct']:.0f}% of {m['indexWindows']} rolling 3-year periods (monthly, last 5 years), "
                   f"by a median {m['excessVsIndex']:+.1f} %-points a year")
    if m.get("downCapture") is not None:
        out.append(f"In months the index fell, it fell {m['downCapture']:.0f}% as much (below 100% = better protection)")
    if m.get("cagr5y") is not None and cat_med.get("cagr5y") is not None:
        out.append(f"5-year CAGR {m['cagr5y']:.1f}% vs category median {cat_med['cagr5y']:.1f}%")
    if m.get("maxDD3y") is not None and cat_med.get("maxDD3y") is not None:
        better = "shallower" if m["maxDD3y"] > cat_med["maxDD3y"] else "deeper"
        out.append(f"Worst fall in 3 years {m['maxDD3y']:.1f}% ({better} than the median {cat_med['maxDD3y']:.1f}%)")
    if m.get("sortino3y") is not None and cat_med.get("sortino3y") is not None:
        out.append(f"Return per unit of downside risk (Sortino) {m['sortino3y']:.2f} vs median {cat_med['sortino3y']:.2f}")
    return out


def main() -> int:
    today = dt.date.today()
    prev = read_assigned(OUT, "window.FUNDS = ") if OUT.exists() else {}
    try:
        cands = amfi_candidates()
        source = "AMFI NAV file + api.mfapi.in NAV history"
    except Exception as exc:
        print(f"{exc}; using the api.mfapi.in scheme list instead", file=sys.stderr)
        cands, source = mfapi_candidates(), "api.mfapi.in (AMFI data)"
        print("mfapi candidates " + ", ".join(f"{k}={len(v)}" for k, v in cands.items()))
    review = not prev.get("reviewed") or prev["reviewed"][:7] != today.isoformat()[:7]
    out_cats, changes, nav_dates = {}, list(prev.get("changes", [])), []
    index_funds = find_index_funds()
    for key, lst in cands.items():
        loaded, why = [], {"no history": 0, "category mismatch": 0, "under 5 years": 0, "stale": 0}
        for c in lst:
            series, meta = history(c["code"])
            time.sleep(0.15)
            if not series:
                why["no history"] += 1
                continue
            if c.get("confirm") and not same_cat(meta.get("scheme_category", ""), c["confirm"]):
                why["category mismatch"] += 1
                continue
            if len(series) < 200 or series[0][0] > years_back(series[-1][0], MIN_YEARS):
                why["under 5 years"] += 1
                continue
            if (today - series[-1][0]).days > 10:  # stale / merged scheme
                why["stale"] += 1
                continue
            loaded.append((c, series, meta))
        funds = []
        if loaded:
            end = max(s[-1][0] for _, s, _ in loaded)
            nav_dates.append(end)
            ends = month_ends(end, ROLL_MONTHS)  # monthly rolling-window end dates, same for every fund
            for c, series, meta in loaded:
                funds.append({**c, "amc": c["amc"] or meta.get("fund_house", ""), "nav": series[-1][1],
                              "navDate": series[-1][0].isoformat(), "inception": series[0][0].isoformat(),
                              "m": metrics(series, end, ends), "levels": {d.isoformat(): nav_on(series, d) for d in ends}})
            # The category's index fund: benchmark for every comparison and the default suggestion.
            index = None
            if key in index_funds:
                iseries, imeta = history(index_funds[key]["code"])
                if iseries and (today - iseries[-1][0]).days <= 10:
                    index = {**index_funds[key], "amc": imeta.get("fund_house", ""), "isin": "", "nav": iseries[-1][1],
                             "navDate": iseries[-1][0].isoformat(), "inception": iseries[0][0].isoformat(),
                             "m": metrics(iseries, end, ends), "levels": {d.isoformat(): nav_on(iseries, d) for d in ends}}
        if len(funds) < 3:
            print(f"{key}: only {len(funds)} eligible of {len(lst)} candidates {why}; keeping previous data", file=sys.stderr)
            if prev.get("categories", {}).get(key):
                out_cats[key] = prev["categories"][key]
            continue
        rank_category(funds, ends, index)
        # Only funds that consistently beat the index fund can be suggested. Without an index
        # benchmark (lookup failed) fall back to plain ranking, and say so on the page.
        eligible = [f for f in funds if f["qualified"]] if index else funds
        elig_codes = {f["code"] for f in eligible}
        cat_med = {k: _r(st.median([f["m"][k] for f in funds if f["m"].get(k) is not None])) for k in
                   ("ret1y", "cagr3y", "cagr5y", "vol3y", "maxDD3y", "sortino3y", "roll3yMedian")}
        by_code = {f["code"]: f for f in funds}
        old = prev.get("categories", {}).get(key, {})
        old_codes = [p["code"] for p in old.get("picks", [])]
        if not old_codes:  # first ranking for this category: nothing to compare against
            picks = [f["code"] for f in eligible[:2]]
        elif review:
            keep = [c for c in old_codes if c in elig_codes and by_code[c]["rank"] <= KEEP_RANK][:2]
            picks = keep + [f["code"] for f in eligible if f["code"] not in keep][: 2 - len(keep)]
            for c in old_codes:
                if c not in picks:
                    gone = by_code.get(c)
                    why_out = ("no longer beats the index fund consistently" if gone and not gone["qualified"]
                               else f"fell to rank {gone['rank']} of {len(funds)}" if gone else "no longer eligible")
                    changes.append({"date": today.isoformat(), "category": key, "out": next((p["name"] for p in old["picks"] if p["code"] == c), c),
                                    "in": None, "reason": why_out})
            for c in picks:
                if c not in old_codes:
                    changes.append({"date": today.isoformat(), "category": key, "in": by_code[c]["name"], "out": None,
                                    "reason": f"ranked {by_code[c]['rank']} of {len(funds)} (score {by_code[c]['score']})"})
        else:
            picks = [c for c in old_codes if c in by_code] or [f["code"] for f in eligible[:2]]
        since = {p["code"]: p.get("since") for p in old.get("picks", [])}

        def card(f, is_pick=True):
            m = {k: v for k, v in f["m"].items() if k != "rolling"}
            d = {"code": f["code"], "name": f["name"], "amc": f["amc"], "isin": f["isin"], "nav": f["nav"], "navDate": f["navDate"],
                 "inception": f["inception"], "rank": f.get("rank"), "score": f.get("score"), **m}
            if is_pick:
                d["since"] = since.get(f["code"]) or today.isoformat()
                d["why"] = reasons(f, cat_med, INDEX_NAMES[key])
                d["qualified"] = f.get("qualified", False)
            return d
        out_cats[key] = {"title": TITLES[key], "sebiCategory": CATEGORIES[key], "eligible": len(funds), "median": cat_med,
                         "index": ({**{k: v for k, v in index["m"].items() if k != "rolling"}, "code": index["code"], "name": index["name"],
                                    "amc": index["amc"], "nav": index["nav"], "navDate": index["navDate"], "inception": index["inception"],
                                    "indexName": INDEX_NAMES[key]} if index else None),
                         "beatIndexCount": sum(1 for f in funds if f["qualified"]),
                         "picks": [card(by_code[c]) for c in picks],
                         "runnersUp": [card(f, False) for f in funds if f["code"] not in picks][:3]}
        print(f"{key}: {len(funds)} eligible, {out_cats[key]['beatIndexCount']} beat the index fund; "
              f"index {index['name'] if index else 'MISSING'}; picks {[by_code[c]['name'] for c in picks]}")
    if not out_cats:
        print("no fund data; nothing written", file=sys.stderr)
        return 0
    nxt = (today.replace(day=1) + dt.timedelta(days=32)).replace(day=1)
    data = {"updated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
            "navDate": max(nav_dates).isoformat() if nav_dates else prev.get("navDate"),
            "reviewed": today.isoformat() if review else prev.get("reviewed"), "nextReview": nxt.isoformat(),
            "source": source, "riskFree": RF, "minYears": MIN_YEARS, "keepRank": KEEP_RANK,
            "beatIndexMin": BEAT_INDEX_MIN, "excessMin": EXCESS_MIN, "rollYears": round((ROLL_MONTHS - 1) / 12), "minWindows": MIN_WINDOWS,
            "categories": out_cats, "changes": changes[-60:]}
    write_assigned(OUT, "// Generated by scripts/mutual_funds.py - do not edit by hand.\n", "window.FUNDS = ", data)
    return 0


if __name__ == "__main__":
    sys.exit(main())
