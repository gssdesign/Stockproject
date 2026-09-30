# Stock Picks Desk

A static web page with **top-5 stock ideas for the US and Indian markets, in two holding periods: weekly (≤ 7 days) and monthly (≤ 30 days)**. Each idea includes the reasons to buy, the supporting data with source links, today's price, a buy zone, a sell target and a stop-loss. A **Track record** tab scores every past batch of picks.

> Research and education only. This is not investment advice.

## Open it
- Locally: open `index.html` in a browser. There's no build step, and the data loads from `data/*.js`, so `file://` works.
- Hosted: enable GitHub Pages (Settings → Pages → deploy from branch, root).

## Files
| Path | Purpose |
|---|---|
| `index.html` | The page, with tabs: Today's picks · Track record · Method |
| `data/picks.js` | All pick batches. Each has `"horizon": "weekly"` or `"monthly"`. The newest batch per horizon is shown as current picks, and older ones appear under Past picks & results |
| `data/prices.js` | Generated: latest quotes plus scoring for every pick |
| `scripts/update_prices.py` | Pulls daily bars (Yahoo Finance via `yfinance`) and scores picks: target hit / stopped out / expired / open |
| `.github/workflows/update-prices.yml` | Runs the updater after NSE and NYSE closes each weekday and commits `data/prices.js` |

## Refresh prices manually
```bash
pip install -r requirements.txt
python scripts/update_prices.py
```
