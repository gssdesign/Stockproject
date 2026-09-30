# Stock Picks Desk

A static web page with **top-5 stock ideas for the US and Indian markets, in three holding periods: daily (1 session), weekly (≤ 7 days) and monthly (≤ 30 days)**. Each idea includes the reasons to buy, the supporting data with source links, today's price, a buy zone, a sell target and a stop-loss. A **Track record** tab scores every past batch of picks.

> Research and education only. This is not investment advice.

## Open it
- Locally: open `index.html` in a browser. There's no build step, and the data loads from `data/*.js`, so `file://` works.
- Hosted: enable GitHub Pages (Settings → Pages → deploy from branch, root).

## Files
| Path | Purpose |
|---|---|
| `index.html` | The page, with tabs: Today's picks · Track record · Method |
| `CRITERIA.md` | **The rulebook** for selecting daily/weekly/monthly picks: checks, catalysts, ATR-sized levels, sources, portfolio rules, self-check |
| `data/market.js` | Generated nightly: exact closes + technicals (ATR, 20/50/200-day averages, relative strength, 52-week range, liquidity) for the S&P 500 and Nifty 200, plus a pre-screened list |
| `data/picks.js` | All pick batches. Each has `"horizon": "daily"`, `"weekly"` or `"monthly"`. The newest batch per horizon is shown as current picks, and older ones appear under Past picks & results |
| `data/prices.js` | Generated: latest quotes plus scoring for every pick |
| `data/archive/` | Permanent monthly archive: `<YYYY-MM>.js` holds finished batches with their final results; `index.js` lists every archived batch. Loaded by the page on demand |
| `scripts/archive.py` | Moves batches that finished 45+ days ago into the archive (never deletes anything) |
| `scripts/market_snapshot.py` | Builds `data/market.js` from Yahoo Finance daily bars |
| `scripts/levels.py` | `python3 scripts/levels.py weekly MU TCS.NS` prints the exact close, rule-based buy zone/target/stop and PASS/FAIL checks; `--screen US` lists eligible stocks |
| `scripts/check_batch.py` | Gate: `python3 scripts/check_batch.py <batch-id>` fails if a batch breaks CRITERIA.md |
| `scripts/verify_prices.py` | After picks are pushed, checks each reference price against the real close and re-anchors levels if it's off by more than 0.3% |
| `scripts/update_prices.py` | Pulls daily bars (Yahoo Finance via `yfinance`) and scores picks: target hit / stopped out / expired / open |
| `.github/workflows/market-data.yml` | After each NSE/NYSE close and on every picks push: snapshot → verify → score → archive, then commits `data/` |

## Refresh prices manually
```bash
pip install -r requirements.txt
python scripts/update_prices.py
```
