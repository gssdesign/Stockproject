# Stock selection & recommendation criteria

The single rulebook for **daily, weekly and monthly** picks. The research routines
must follow it exactly, and the site's Method tab summarizes it. Numbers in §3–§4
are implemented in `scripts/marketlib.py` (some are tuned automatically, §7); change both together.

## 0. Principles
1. **Accuracy over quantity.** Publish fewer than 5 picks when fewer qualify. Never pad the list.
2. **Every number comes from data, not memory or snippets.** Prices, averages, ATR and
   relative strength come from `data/market.js` (exact exchange closes built nightly by
   the *Market data* GitHub Action) via `scripts/levels.py`.
3. **Buy strength with a reason, not hope.** A pick needs a trend, relative strength
   *and* a dated catalyst. A good story on a broken chart doesn't qualify.
4. **Plan the exit before the entry.** Buy zone, target and stop are fixed at publication.

## 1. Workflow for every run
1. `git pull`. Check that `data/market.js` was generated within the last 36 hours
   (`python3 scripts/levels.py daily --screen US` prints its age). If it's stale or
   missing, say so in the context summary and publish **only** picks whose prices you can
   confirm from two reputable sources (§5). Mark them clearly.
2. **Read the regime** from the snapshot (S&P 500 / Nifty 50 vs their 50- and 200-day
   averages): `risk-on`, `neutral` or `risk-off`. In `risk-off`, prefer low-volatility
   leaders and publish at most 3 picks per market unless more are exceptionally strong.
3. **Start from the screen:** `python3 scripts/levels.py <horizon> --screen US|IN`
   lists stocks that pass every hard check (§3), strongest relative strength first.
4. **Find catalysts** (§2) for screen names with WebSearch, from reputable sources (§5).
   A stock outside the screen may be used only if `levels.py <horizon> TICKER` shows
   it passes every check.
5. **Take all prices and levels from `levels.py`.** You may tighten a target (e.g. to
   sit below a clear resistance or the analyst consensus) as long as reward:risk stays
   at or above the minimum (§4). Never widen the stop or raise the target beyond the tool's values.
6. Apply the portfolio rules (§6), then run the self-check (§8) before writing.

## 2. Catalyst: what counts (strongest evidence first)
| Catalyst | Why it works | How to use it |
|---|---|---|
| **Positive earnings surprise + raised guidance, already reported** | Post-earnings-announcement drift: prices keep moving toward the news for weeks (Bernard & Thomas, 1989) | Buy *after* the report if the stock held its gain. Best for weekly/monthly. |
| **Analyst upgrade / big target raise from a major broker** | Prices drift after upgrades for weeks (Womack, 1996) | Name the broker, the old and new rating or target, and the date. |
| **Material order / contract win** | New revenue the market prices in over time | Value ≥ ~2% of annual revenue; official press release or filing. |
| **Scheduled data inside the window** (monthly sales, cargo, RBI/Fed decision) | Known date, estimates available | Say what's expected and why it should beat. |
| **Sector tailwind with the stock leading** | Industry momentum (Moskowitz & Grinblatt, 1999) | Only together with one of the above. |

Rules:
- The catalyst must land **inside the holding window** (daily: that session or overnight;
  weekly: ≤ 7 days; monthly: ≤ 30 days), or have happened within the last 3 / 7 / 21 days.
- **Binary events** (earnings or FDA-style decisions not yet announced):
  - **Daily:** never pick a stock that reports during or just before the session you're picking for.
  - **Weekly:** a report inside the 7-day window counts as a binary event: at most **one** per list,
    `"risk": "High"`, with the date in `watch`.
  - **Monthly:** in earnings season most stocks report inside a 30-day window. That's allowed, but the
    date must be stated in `watch` ("reassess before the report on …"). At most **one** pick per list
    may have a thesis that *depends* on the unreported result, and it's marked `"risk": "High"`.
  - A pick that depends only on an unreported result is a coin flip, not a catalyst. The Market data job
    also flags any earnings date inside the window on the site automatically.
- Momentum over 3–12 months tends to persist (Jegadeesh & Titman, 1993), but last week's
  biggest winners tend to give some back (Jegadeesh, 1990). So prefer **strong 3-month leaders on a
  pullback or tight consolidation**, not stocks that just spiked.

## 3. Hard checks (all must pass; `levels.py` shows PASS/FAIL)
| Check | Daily | Weekly | Monthly |
|---|---|---|---|
| **Liquidity**: 20-day avg traded value | US ≥ $50M, India ≥ ₹100 cr; price ≥ $10 / ₹50 | same | same |
| **Trend** | close > 20-day avg | close > 50-day avg **and** 50-day avg rising | same as weekly |
| **Relative strength** vs S&P 500 / Nifty 50 | 1-month > 0 | 3-month > 0 | 3-month > 0 |
| **Not a falling knife** | ≥ 10% above 52-week low | same | same |
| **Not overextended** | ≤ 3 ATR above 20-day avg | same | same |
| **Volatility fits horizon** (ATR % of price) | ≤ 4% | ≤ 5% | ≤ 4.5% |
| **Reward : risk** from the buy-zone middle | ≥ 1.5 | ≥ 1.8 | ≥ 2.0 |

India extras (check by search): skip stocks in NSE's ASM/GSM surveillance lists, stocks
stuck at circuit limits, and, for daily picks, stocks in the F&O ban list.

## 4. Levels (computed by `levels.py` from the last exact close C and ATR(14))
| | Buy zone | Stop (below zone middle) | Target (above zone middle) | Stop clamp |
|---|---|---|---|---|
| Daily | C − 0.40 ATR … C + 0.20 ATR | 0.75 ATR | 1.25 ATR | 1.0%–3.5% |
| Weekly | C − 0.50 ATR … C + 0.25 ATR | 1.25 ATR | 2.25 ATR | 2%–7% |
| Monthly | C − 0.75 ATR … C + 0.25 ATR | 1.75 ATR | 3.5 ATR | 4%–10% |

ATR (Wilder, 1978) scales every level to how much the stock normally moves, so a sleepy
utility and a volatile chip stock get stops and targets of fair size. `refPrice` is always
the **official close of the last completed session** before the picks take effect, and
`refDate` is that session's date. Never use intraday or older prices.

## 5. Sources
- **Use:** exchange filings (NSE/BSE, SEC EDGAR), company investor-relations releases,
  Reuters, Bloomberg, Business Standard, Economic Times, Mint, Moneycontrol, BusinessToday,
  CNBC/CNBC-TV18, WSJ, FT, Barron's, MarketWatch, Yahoo Finance news, Investopedia (definitions only).
- **Don't use:** SEO or aggregator blogs, auto-generated "stock at X" pages (e.g. ad-hoc-news),
  prediction or "target 2030" sites, social media posts, YouTube, crypto sites, broker marketing pages.
- **Freshness:** sources dated within 3 days (daily), 7 days (weekly), 21 days (monthly),
  except background facts such as market share.
- **Two-source rule:** any figure not taken from `data/market.js` (estimates, contract value,
  broker target) needs a reputable source; if two sources disagree, use the more authoritative
  one or drop the claim.

## 6. Portfolio rules (per market, per list)
- At most **2 picks from the same sector**, and no two picks relying on the same single catalyst.
- At most **2 `High`-risk picks**; at most **1 binary event** (weekly/monthly only).
- Don't repeat a pick from the previous batch of the same horizon unless there's a new catalyst.
- The same stock may appear in different horizons only if each has its own reason.

## 7. Learning from results (automated)
`scripts/learn.py` runs after every results update (Market data Action). For each holding
period × market it measures the last 40 finished picks (target-met rate, stop rate, average
return, typical best/worst move in ATRs, and how winners and losers differed in entry
stretch and relative strength) and, **only with at least 20 finished picks**, nudges **one**
rule a small step, at most once every 7 days, within hard bounds:

| Rule | Tuned when | Step | Bounds |
|---|---|---|---|
| `target` (ATRs) | met < 30% and typical best move < 0.8× target → lower; met > 60%, stops < 25% and best move > 1.2× target → raise | 0.25 | ≥ min R:R × stop, 0.75×–1.5× default |
| `max_ext` (ATRs above 20-day avg) | stops > 50%, or losers bought ≥ 0.75 ATR more stretched than winners → tighten; stops < 25% and met ≥ 40% → relax | 0.5 | 1.0–3.0 |
| `min_rs` (pts vs index) | lower-strength half averaged ≥ 1 pt worse → raise toward the median | 1.0 | 0–10 |
| `stop` (ATRs) | never loosened beyond the default | 0.25 | 0.6×–1× default |

Learned values live in `data/tuning.js` and are applied automatically by `levels.py`, the
screen and `check_batch.py`, so routines must not override them. Every change is logged with
its reason on the site (How it works → How the rules are learning). Routines: read that line
in `levels.py` output and mention any rule in force in the context summary.

## 8. Self-check before publishing (every item must be true)
- [ ] Every pick shows **ELIGIBLE** in `levels.py` for this horizon, and its refPrice/refDate
      match the tool's close and date exactly.
- [ ] Buy zone, target and stop come from the tool, or are tightened within §1.5.
- [ ] Each pick has a dated catalyst inside the window, 3 numbered reasons with figures, a
      specific "what could go wrong", and 3 reputable, fresh sources.
- [ ] Portfolio rules (§6) hold; binary events are labeled.
- [ ] The context summary states the regime, the index close and date, and any data caveats.

After you push, the *Market data* Action re-checks every new pick against the real close
(`verified` field) and records its checks. Anything more than 0.3% off is re-anchored
automatically and shown on the site.

## References
- Bernard, V. & Thomas, J. (1989). Post-earnings-announcement drift. *Journal of Accounting Research*, 27.
- Jegadeesh, N. (1990). Evidence of predictable behavior of security returns. *Journal of Finance*, 45(3).
- Jegadeesh, N. & Titman, S. (1993). Returns to buying winners and selling losers. *Journal of Finance*, 48(1).
- Moskowitz, T. & Grinblatt, M. (1999). Do industries explain momentum? *Journal of Finance*, 54(4).
- Womack, K. (1996). Do brokerage analysts' recommendations have investment value? *Journal of Finance*, 51(1).
- Wilder, J. W. (1978). *New Concepts in Technical Trading Systems* (average true range).
