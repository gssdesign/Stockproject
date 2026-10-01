#!/usr/bin/env python3
"""Write the latest Nifty 50 level for the strip at the top of the site.

Runs inside the Publish site workflow (every ~10 minutes during NSE hours and
on every other publish) and writes <site_dir>/data/live.json. Yahoo's index
quotes may lag the exchange by up to ~15 minutes, so the page labels it.
Never fails the build: on any error it writes nothing and the page falls
back to the last close in data/prices.js.

Usage:  python scripts/live_index.py <site_dir>
"""
from __future__ import annotations

import datetime as dt
import json
import pathlib
import sys
from zoneinfo import ZoneInfo

IST = ZoneInfo("Asia/Kolkata")
OPEN, CLOSE = dt.time(9, 15), dt.time(15, 30)


def main() -> int:
    out = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else ".") / "data" / "live.json"
    try:
        import yfinance as yf
        t = yf.Ticker("^NSEI")
        daily = t.history(period="10d", interval="1d", auto_adjust=False).dropna(subset=["Close"])
        intra = t.history(period="1d", interval="1m", auto_adjust=False).dropna(subset=["Close"])
        now = dt.datetime.now(IST)
        if not intra.empty and intra.index[-1].astimezone(IST).date() == now.date():
            last_ts = intra.index[-1].astimezone(IST)
            price = float(intra["Close"].iloc[-1])
            prev = [float(c) for i, c in daily["Close"].items() if i.astimezone(IST).date() < now.date()]
        else:  # market hasn't traded today: show the last completed session
            last_ts = daily.index[-1].astimezone(IST).replace(hour=15, minute=30)
            price = float(daily["Close"].iloc[-1])
            prev = [float(c) for c in daily["Close"].iloc[:-1]]
        if not prev:
            raise ValueError("no previous close")
        prev_close = prev[-1]
        is_open = (now.weekday() < 5 and OPEN <= now.time() <= CLOSE and last_ts.date() == now.date()
                   and (now - last_ts) < dt.timedelta(minutes=30))
        data = {
            "symbol": "^NSEI", "name": "NIFTY 50",
            "price": round(price, 2), "prevClose": round(prev_close, 2),
            "change": round(price - prev_close, 2), "changePct": round((price / prev_close - 1) * 100, 2),
            "time": last_ts.isoformat(timespec="minutes"), "state": "open" if is_open else "closed",
            "fetched": dt.datetime.now(dt.timezone.utc).isoformat(timespec="minutes"),
        }
    except Exception as exc:  # never break the publish
        print(f"live_index: skipped ({exc})", file=sys.stderr)
        return 0
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(data), encoding="utf-8")
    print(f"live_index: NIFTY {data['price']} ({data['changePct']:+.2f}%) at {data['time']} [{data['state']}]")
    return 0


if __name__ == "__main__":
    sys.exit(main())
