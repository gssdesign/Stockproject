#!/usr/bin/env python3
"""Stream the Nifty 50 level during NSE hours to the `live-data` branch.

Started by the Live Nifty workflow each trading morning (with backup starts
later in the day). Every INTERVAL seconds it fetches the latest Nifty 50
level (scripts/live_index.fetch) and force-pushes a one-commit `live-data`
branch holding live.json. The site reads that file straight from
raw.githubusercontent.com, so no site rebuild is needed per update.
Exits after the close (or right away on a holiday / weekend).

Usage:  python scripts/live_loop.py <worktree_dir>
"""
from __future__ import annotations

import datetime as dt
import json
import pathlib
import subprocess
import sys
import time

from live_index import IST, fetch

INTERVAL = 120          # seconds between fetches
STOP = dt.time(15, 40)  # a few minutes after the 15:30 close, to catch the final level


def push(wt: pathlib.Path, data: dict) -> None:
    (wt / "live.json").write_text(json.dumps(data), encoding="utf-8")
    git = ["git", "-C", str(wt)]
    subprocess.run(git + ["add", "live.json"], check=True)
    has_head = subprocess.run(git + ["rev-parse", "--verify", "-q", "HEAD"], capture_output=True).returncode == 0
    subprocess.run(git + ["commit", "-q", "-m", f"Nifty {data['price']} at {data['time']}"]
                   + (["--amend"] if has_head else []), check=True)
    subprocess.run(git + ["push", "-q", "-f", "origin", "HEAD:live-data"], check=True)


def main() -> int:
    wt = pathlib.Path(sys.argv[1])
    last = None
    while True:
        now = dt.datetime.now(IST)
        try:
            data = fetch()
        except Exception as exc:
            print(f"fetch failed: {exc}", file=sys.stderr)
            data = None
        if data and (data["price"], data["time"]) != last:
            push(wt, data)
            last = (data["price"], data["time"])
            print(f"{now:%H:%M} pushed NIFTY {data['price']} ({data['changePct']:+.2f}%) [{data['state']}]", flush=True)
        traded_today = bool(data) and data["time"][:10] == now.date().isoformat()
        if now.time() >= STOP or now.weekday() >= 5:
            break
        if not traded_today and now.time() >= dt.time(9, 45):
            print("no session today (holiday?); stopping", flush=True)
            break
        time.sleep(INTERVAL)
    return 0


if __name__ == "__main__":
    sys.exit(main())
