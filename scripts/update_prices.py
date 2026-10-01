#!/usr/bin/env python3
"""Refresh live quotes and score every pick in data/picks.js.

Writes data/prices.js (window.PRICES = {...}) which index.html reads.

Scoring rules for each pick (entry = the pick's reference close):
  * Walk daily bars from the day after the pick date up to the expiry date.
    Daily batches are dated with the session they are for, so that day
    itself is included.
  * If a day's low touches the stop -> "Stopped out" at the stop price.
    (If the same day also touched the target we assume the stop came first:
    conservative scoring, no cherry-picking.)
  * Else if a day's high touches the target -> "Target hit" at the target.
  * If neither happens and the window has ended -> "Expired" at the last
    close on/before the expiry date.
  * Otherwise the pick is still "Open" and is marked to the latest close.

Usage:  pip install yfinance && python scripts/update_prices.py
"""
from __future__ import annotations

import datetime as dt
import json
import pathlib
import sys

import yfinance as yf

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from marketlib import completed  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
PICKS_JS = ROOT / "data" / "picks.js"
PRICES_JS = ROOT / "data" / "prices.js"


def load_picks() -> dict:
    text = PICKS_JS.read_text(encoding="utf-8")
    start = text.index("{", text.index("window.PICKS = "))
    return json.loads(text[start: text.rindex("}") + 1])


def history(symbol: str, start: dt.date):
    df = yf.Ticker(symbol).history(start=start.isoformat(), auto_adjust=False)
    if df.empty:
        return []
    return completed([
        {
            "date": idx.date().isoformat(),
            "open": float(row["Open"]),
            "high": float(row["High"]),
            "low": float(row["Low"]),
            "close": float(row["Close"]),
        }
        for idx, row in df.iterrows()
    ], symbol)


def in_window(day: str, batch: dict) -> bool:
    if batch.get("horizon") == "daily":
        return batch["date"] <= day <= batch["expires"]
    return batch["date"] < day <= batch["expires"]


def score(pick: dict, bars: list[dict], batch: dict, today: str) -> dict:
    expires = batch["expires"]
    window = [b for b in bars if in_window(b["date"], batch)]
    entry = pick["refPrice"]
    result = {"status": "Open", "exitPrice": None, "exitDate": None,
              "maxHigh": None, "minLow": None}
    if window:
        result["maxHigh"] = max(b["high"] for b in window)
        result["minLow"] = min(b["low"] for b in window)
    for b in window:
        if b["low"] <= pick["stop"]:
            result.update(status="Stopped out", exitPrice=pick["stop"], exitDate=b["date"])
            break
        if b["high"] >= pick["target"]:
            result.update(status="Target hit", exitPrice=pick["target"], exitDate=b["date"])
            break
    # The window is over once we're past expiry, or once the expiry session's
    # own bar exists (the Action runs after each market's close).
    final = bool(window) and (today > expires or window[-1]["date"] == expires)
    if result["status"] == "Open" and final:
        last = window[-1]
        result.update(status="Expired", exitPrice=last["close"], exitDate=last["date"])
    mark = result["exitPrice"] if result["exitPrice"] is not None else (bars[-1]["close"] if bars else entry)
    result["markPrice"] = round(mark, 2)
    result["returnPct"] = round((mark / entry - 1) * 100, 2)
    # Plain buy-and-hold view for the "Past picks" table: the close on the last
    # session of the window (or the latest close so far), and whether the
    # target / stop was touched at any point in the window.
    if window:
        result["periodClose"] = round(window[-1]["close"], 2)
        result["periodCloseDate"] = window[-1]["date"]
        result["periodFinal"] = final
        result["closeReturnPct"] = round((window[-1]["close"] / entry - 1) * 100, 2)
        result["targetHit"] = result["maxHigh"] >= pick["target"]
        result["stopHit"] = result["minLow"] <= pick["stop"]
    return result


def main() -> int:
    picks = load_picks()
    today = dt.date.today().isoformat()
    earliest = min((dt.date.fromisoformat(b["date"]) for b in picks["batches"]),
                   default=dt.date.today()) - dt.timedelta(days=7)

    symbols = {p["yahoo"] for b in picks["batches"] for p in b["picks"]}
    symbols |= {c["benchmark"] for b in picks["batches"] for c in b["context"].values()}

    bars: dict[str, list[dict]] = {}
    quotes: dict[str, dict] = {}
    for sym in sorted(symbols):
        try:
            bars[sym] = history(sym, earliest)
        except Exception as exc:  # network hiccup on one ticker shouldn't kill the run
            print(f"warn: {sym}: {exc}", file=sys.stderr)
            bars[sym] = []
        series = bars[sym]
        if len(series) >= 2:
            last, prev = series[-1], series[-2]
            quotes[sym] = {
                "price": round(last["close"], 2),
                "prevClose": round(prev["close"], 2),
                "changePct": round((last["close"] / prev["close"] - 1) * 100, 2),
                "asOf": last["date"],
            }
        print(f"{sym:15s} {quotes.get(sym, {}).get('price', 'n/a')}")

    tracking: dict[str, dict] = {}
    for batch in picks["batches"]:
        scored = {}
        for p in batch["picks"]:
            scored[p["yahoo"]] = score(p, bars.get(p["yahoo"], []), batch, today)
        for key, ctx in batch["context"].items():
            series = [b for b in bars.get(ctx["benchmark"], []) if in_window(b["date"], batch)]
            if series:
                scored[ctx["benchmark"]] = {
                    "markPrice": round(series[-1]["close"], 2),
                    "returnPct": round((series[-1]["close"] / ctx["benchmarkRef"] - 1) * 100, 2),
                }
        tracking[batch["id"]] = scored

    payload = {"updated": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
               "quotes": quotes, "tracking": tracking}
    PRICES_JS.write_text(
        "// Generated by scripts/update_prices.py - do not edit by hand.\n"
        f"window.PRICES = {json.dumps(payload, indent=2)};\n",
        encoding="utf-8",
    )
    print(f"wrote {PRICES_JS.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
