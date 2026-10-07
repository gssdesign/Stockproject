// Source of truth for every batch of picks, newest first.
// scripts/update_prices.py parses the object assigned to window.PICKS as JSON,
// so keep it valid JSON: double quotes, no trailing commas, no comments inside.
window.PICKS = {
  "batches": [
    {
      "id": "2026-10-07-daily",
      "horizon": "daily",
      "date": "2026-10-07",
      "horizonDays": 1,
      "expires": "2026-10-07",
      "criteriaVersion": "2026-09-30",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7818.93,
          "summary": "Risk-on: the S&P 500 closed at a record 7,818.93 on 2026-10-06 (+0.58%) as Treasury yields and oil eased and chip stocks led. One standard pick, AMD, after Citi and Mizuho raised their targets on 6 Oct; yesterday's picks (Microsoft, Nvidia) had no new catalyst and other screen stocks either lacked a fresh dated catalyst or had just spiked, so the list isn't padded."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22776.1,
          "summary": "Risk-off: the Nifty 50 closed at 22,776.10 on 2026-10-06 (+0.98%), its second straight gain but still below its 50-day (about 23,800) and 200-day (about 24,350) averages. Two standard picks with fresh Q2 business updates (Trent, Kotak Mahindra Bank). The RBI policy decision is due this morning (a 25 bp hike to 5.50% is widely expected) and TCS reports on 8 Oct; this week's weekly list has APL Apollo Tubes."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "AMD",
          "yahoo": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Information Technology / Semiconductors",
          "currency": "USD",
          "refPrice": 649.42,
          "refDate": "2026-10-06",
          "buyLow": 639.83,
          "buyHigh": 654.22,
          "target": 676.99,
          "stop": 629.04,
          "risk": "Medium",
          "thesis": "Two big broker target raises on 6 Oct (Citi to $800 from $575, Mizuho to $705 from $580) pushed AMD to a record close while chip stocks led the S&P 500 to a new high.",
          "reasons": [
            "Citi reiterated Buy on 6 Oct 2026 and raised its target to $800 from $575, arguing AI agents will drive a server-CPU market of about $300B by 2030; Mizuho raised its target to $705 from $580 the same day.",
            "The stock rose 2.80% to a record close of $649.42 on 6 Oct as the S&P 500 (7,818.93) and Nasdaq both closed at records and chip stocks led.",
            "It is a strong leader: up 36.0% in 1 month and 25.5% in 3 months (21.0 pts ahead of the S&P 500), above its 20-, 50- and 200-day averages; it hit its target as a daily pick on 2 Oct."
          ],
          "data": [
            [
              "Close (10/06)",
              "$649.42"
            ],
            [
              "3-month vs index",
              "+21.0 pts"
            ],
            [
              "Distance from 20-day avg",
              "+2.8 ATR"
            ],
            [
              "ATR",
              "3.69% of price"
            ]
          ],
          "watch": "It is 2.8 ATR above its 20-day average after a 36% one-month run, close to the 3-ATR limit, so a pullback can come quickly if chip stocks cool. Skip it if it opens outside $639.83–654.22. No earnings until November.",
          "sources": [
            [
              "CNBC – Here are Tuesday's biggest analyst calls of the day: Nvidia, AMD, Procter & Gamble, Meta & more (Oct 6, 2026)",
              "https://www.cnbc.com/2026/10/06/tuesday-biggest-analyst-calls-like-nvidia.html"
            ],
            [
              "Seeking Alpha – AMD rises as Citi ups price target as firm sees CPU market hitting $300B by 2030",
              "https://seekingalpha.com/news/4650495-amd-rises-as-citi-ups-price-target-as-firm-sees-cpu-market-hitting-300b-by-2030"
            ],
            [
              "Yahoo Finance – Stock market today: S&P 500, Nasdaq hit record highs as Nvidia, AMD lead tech higher (Oct 6, 2026)",
              "https://finance.yahoo.com/markets/live/stock-market-today-tuesday-october-6-dow-sp-500-nasdaq-080526166.html"
            ]
          ]
        },
        {
          "market": "IN",
          "symbol": "TRENT",
          "yahoo": "TRENT.NS",
          "name": "Trent",
          "sector": "Consumer Services / Retail",
          "currency": "INR",
          "refPrice": 2906.0,
          "refDate": "2026-10-06",
          "buyLow": 2876.55,
          "buyHigh": 2920.7,
          "target": 2990.6,
          "stop": 2843.45,
          "risk": "Medium",
          "thesis": "A Q2 FY27 business update on 6 Oct showing 23% revenue growth, the fastest in five quarters and ahead of estimates, sent the stock up 12.6%.",
          "reasons": [
            "Trent's standalone revenue rose 23% year on year to ₹5,788 crore in Q2 FY27 (update on 6 Oct 2026), versus 16–20% growth in the previous four quarters and ahead of Citi's 18% estimate; Zudio crossed 1,000 stores.",
            "The stock closed 12.64% higher at ₹2,906 on 6 Oct, the top Nifty 50 gainer, and Morgan Stanley rates it Overweight with a ₹3,406 target.",
            "A fresh, dated beat after a long slump: the stock is 40% below its 52-week high, so the update can draw buyers for several sessions (post-announcement drift); it is now above its 20-, 50- and 200-day averages."
          ],
          "data": [
            [
              "Close (10/06)",
              "₹2,906.00"
            ],
            [
              "1-month vs index",
              "+7.8 pts"
            ],
            [
              "Distance from 20-day avg",
              "+2.4 ATR"
            ],
            [
              "ATR",
              "2.53% of price"
            ]
          ],
          "watch": "After a 12.6% one-day jump some profit-taking is likely, and at least one brokerage kept a Sell call. The RBI policy decision this morning (a 25 bp hike is widely expected) can move the whole market. Skip it if it opens outside ₹2,876.55–2,920.70.",
          "sources": [
            [
              "Business Standard – Trent rallies 10% after Q2 business update, m-cap tops ₹1.5 trillion (Oct 6, 2026)",
              "https://www.business-standard.com/markets/news/trent-share-price-rallies-10-after-q2-business-update-m-cap-tops-1-5-trillion-126100600160_1.html"
            ],
            [
              "Upstox News – Trent shares jump 13% after Q2 revenue beats estimates despite festive shift; analysts weigh in",
              "https://upstox.com/news/market-news/stocks/trent-shares-in-focus-after-q2-revenue-jumps-23-yo-y-zudio-crosses-1-000-store-milestone/article-201309/"
            ],
            [
              "Retail Insight Network – Trent standalone revenue rises 23% in second quarter of FY27",
              "https://www.retail-insight-network.com/news/trent-q2-standalone-revenue-rises-23/"
            ]
          ]
        },
        {
          "market": "IN",
          "symbol": "KOTAKBANK",
          "yahoo": "KOTAKBANK.NS",
          "name": "Kotak Mahindra Bank",
          "sector": "Financial Services / Banks",
          "currency": "INR",
          "refPrice": 431.9,
          "refDate": "2026-10-06",
          "buyLow": 428.25,
          "buyHigh": 433.75,
          "target": 442.4,
          "stop": 424.15,
          "risk": "Medium",
          "thesis": "A strong Q2 FY27 business update on 6 Oct (net advances +24.7%, deposits +23.2%) on a bank that is already a 3-month leader.",
          "reasons": [
            "Kotak's Q2 FY27 update (6 Oct 2026) showed standalone net advances up 24.7% year on year to ₹5,77,094 crore (+12.7% on the quarter) and total deposits up 23.2% to ₹6,51,491 crore.",
            "The stock rose 3.82% to ₹431.90 on 6 Oct, among the top Nifty 50 gainers, as the Bank Nifty rose on strong Q2 updates from HDFC Bank and Kotak.",
            "It is a leader: up 14.5% in 3 months (21.2 pts ahead of the Nifty), above its 20-, 50- and 200-day averages, and 4.7% below its 52-week high of ₹453.20."
          ],
          "data": [
            [
              "Close (10/06)",
              "₹431.90"
            ],
            [
              "3-month vs index",
              "+21.2 pts"
            ],
            [
              "Distance from 20-day avg",
              "+1.9 ATR"
            ],
            [
              "ATR",
              "2.11% of price"
            ]
          ],
          "watch": "Banks are the most exposed to the RBI decision this morning: a bigger-than-expected hike or a hawkish tone could hit the sector. CASA growth (11.3%) lagged loan growth, which some analysts may question. Skip it if it opens outside ₹428.25–433.75.",
          "sources": [
            [
              "Moneycontrol (via TradingView) – Bank Nifty rises for 5th day to reclaim 56,000 mark on strong Q2 biz updates from HDFC, Kotak Mahindra Bank",
              "https://ru.tradingview.com/news/moneycontrol:19e31c63e094b:0-bank-nifty-rises-for-5th-day-to-reclaim-56-000-mark-on-strong-q2-biz-updates-from-hdfc-kotak-mahindra-bank"
            ],
            [
              "Upstox News – Top gainers and losers, Oct 6: Trent rallies 13%, BSE, Kotak Bank shares jump 4%",
              "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-oct-6-trent-rallies-13-bse-kotak-bank-shares-jump-4-coal-india-falls-3-check-list/article-201378/"
            ],
            [
              "Business Standard – Stock Market Close: Sensex rises 685 pts, Nifty ends at 22,776 ahead of RBI MPC meet outcome (Oct 6, 2026)",
              "https://www.business-standard.com/amp/markets/news/stock-market-live-october-6-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-srit-india-ipo-listing-126100600087_1.html"
            ]
          ]
        }
      ],
      "marketSources": [
        [
          "Yahoo Finance – Stock Market Today (Oct. 6, 2026): S&P 500 sets new record as oil prices, Treasury yields settle",
          "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-oct-6-134418919.html"
        ],
        [
          "Business Standard – Stock Market Close: Sensex rises 685 pts, Nifty ends at 22,776 ahead of RBI MPC meet outcome (Oct 6, 2026)",
          "https://www.business-standard.com/amp/markets/news/stock-market-live-october-6-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-srit-india-ipo-listing-126100600087_1.html"
        ],
        [
          "CNBC – Stock futures are little changed after S&P 500 hits fresh record: Live updates (Oct 6, 2026)",
          "https://cnbc.com/2026/10/06/stock-market-today-live-updates.html"
        ]
      ]
    },
    {
      "id": "2026-10-06-daily",
      "horizon": "daily",
      "date": "2026-10-06",
      "horizonDays": 1,
      "expires": "2026-10-06",
      "criteriaVersion": "2026-09-30",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7773.95,
          "summary": "Risk-on: the S&P 500 closed at 7,773.95 on 2026-10-05 (+0.66%) and the Nasdaq Composite at a record 27,477 (+1.05%), led by tech and AI names as Fed rate-hike bets eased. Two standard picks with fresh catalysts: Microsoft (Melius upgrade to Buy on 5 Oct) and Nvidia (record close, Bernstein Outperform reiterated on 5 Oct); no other screen stock had a fresh, dated catalyst, so the list isn't padded. Data caveat: Yahoo Finance's overnight data briefly dropped the 5 Oct bars for US stocks, so both closes come from the Market data run of 21:22 UTC on 5 Oct (exact Yahoo closes), matched by news reports; the Market data job re-checks them automatically."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22421.95,
          "summary": "Risk-off: the Nifty 50 closed at 22,555.75 on 2026-10-05 (+0.6%, snapping a four-day losing run, per Business Standard), still well below its 50-day (23,870) and 200-day (24,356) averages; the data feed's index bar still shows 1 Oct (22,421.95), so relative-strength figures are measured against that close. One standard pick: Nykaa, after its Q2 business update on 5 Oct. The RBI policy decision is due Wed 7 Oct. This week's weekly list has APL Apollo Tubes."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "MSFT",
          "yahoo": "MSFT",
          "name": "Microsoft",
          "sector": "Information Technology / Software",
          "currency": "USD",
          "refPrice": 525.18,
          "refDate": "2026-10-05",
          "buyLow": 520.45,
          "buyHigh": 527.54,
          "target": 538.77,
          "stop": 515.14,
          "risk": "Low–Medium",
          "thesis": "A fresh broker upgrade on 5 Oct (Melius Research, Hold to Buy, $665 target) on a 3-month leader that is still 5% below its 52-week high.",
          "reasons": [
            "Melius Research upgraded Microsoft to Buy from Hold on 5 Oct 2026 with a $665 target (about 27% above Monday's close), arguing enterprises will favour Microsoft's software and security stack for lower-risk AI deployment; the stock rose 1.48% to $525.18.",
            "Analyst upgrades tend to keep working for days to weeks (Womack, 1996), and this one lands on a leader: up 35.1% in 3 months, 31.5 pts ahead of the S&P 500, with the 50-day average ($490.59) rising.",
            "There is room to the prior high: Monday's close is 5.2% below the 52-week high of $553.72 and only 1.9 ATR above the 20-day average ($502.95), so it is not overextended."
          ],
          "data": [
            [
              "Close (10/05)",
              "$525.18"
            ],
            [
              "3-month vs index",
              "+31.5 pts"
            ],
            [
              "Distance from 20-day avg",
              "+1.9 ATR"
            ],
            [
              "ATR",
              "2.25% of price"
            ]
          ],
          "watch": "A one-day pop on an upgrade can fade if the Nasdaq pulls back from Monday's record; higher Treasury yields are the main macro risk this week. Skip it if it opens outside $520.45–527.54. Next earnings are due late October, outside today's window.",
          "sources": [
            [
              "Yahoo Finance – Melius Research upgrades Microsoft stock to Buy, $665 target (Oct 5, 2026)",
              "https://finance.yahoo.com/markets/stocks/articles/melius-research-upgrades-microsoft-stock-173111124.html"
            ],
            [
              "Investing.com – Melius upgrades Microsoft stock rating on AI security demand",
              "https://www.investing.com/news/analyst-ratings/melius-upgrades-microsoft-stock-rating-on-ai-security-demand-93CH-4931593"
            ],
            [
              "CNBC – Here are Monday's biggest analyst calls: Nvidia, SpaceX, Tesla, Apple, Microsoft, Wells Fargo, Samsara & more (Oct 5, 2026)",
              "https://www.cnbc.com/2026/10/05/monday-biggest-analyst-calls-on-wall-street.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 525.18,
            "date": "2026-10-05",
            "researchPrice": 525.18,
            "researchDate": "2026-10-05",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $10,928M (min $50M), price $525.18"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $502.95"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +2.6 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+50.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.9 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.25% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.25,
            "sma20": 502.95,
            "sma50": 490.59,
            "sma200": 433.07,
            "rs1m": 2.61,
            "rs3m": 31.46,
            "fromHigh52": -5.15,
            "fromLow52": 50.4,
            "avgValue20": 10927956025,
            "extAtr": 1.88
          }
        },
        {
          "market": "US",
          "symbol": "NVDA",
          "yahoo": "NVDA",
          "name": "Nvidia",
          "sector": "Information Technology / Semiconductors",
          "currency": "USD",
          "refPrice": 238.9,
          "refDate": "2026-10-05",
          "buyLow": 236.53,
          "buyHigh": 240.09,
          "target": 245.72,
          "stop": 233.86,
          "risk": "Medium",
          "thesis": "A breakout to a record close on 5 Oct, with Bernstein reiterating Outperform the same day, led a Nasdaq that also closed at a record.",
          "reasons": [
            "Nvidia closed at a record $238.90 on 5 Oct 2026 (+2.12%), its highest close ever, with its market value near $5.7 trillion; the Nasdaq Composite also closed at a record (27,477, +1.05%).",
            "Bernstein reiterated Outperform on 5 Oct, citing the size of the datacenter opportunity, so the breakout came with fresh analyst support rather than on no news.",
            "Trend and strength line up: up 21.3% in 3 months (17.7 pts ahead of the S&P 500), above its 20-, 50- and 200-day averages, and 1-month relative strength is +4.2 pts."
          ],
          "data": [
            [
              "Close (10/05)",
              "$238.90"
            ],
            [
              "3-month vs index",
              "+17.7 pts"
            ],
            [
              "Distance from 20-day avg",
              "+2.5 ATR"
            ],
            [
              "ATR",
              "2.48% of price"
            ]
          ],
          "watch": "It is 2.5 ATR above its 20-day average after a record close, so a quick pullback is possible if tech cools; a failed breakout back below $236 would weaken the case. Skip it if it opens outside $236.53–240.09. No earnings until November.",
          "sources": [
            [
              "Yahoo Finance – Stock market today: Nasdaq, Nvidia post record highs as tech strength outshines bond weakness (Oct 5, 2026)",
              "https://finance.yahoo.com/markets/live/stock-market-today-monday-october-5-dow-sp-500-nasdaq-081220790.html"
            ],
            [
              "Yahoo Finance – Nvidia stock hits all-time high, as market cap closes in on $6 trillion",
              "https://finance.yahoo.com/technology/article/nvidia-stock-hits-all-time-high-as-market-cap-closes-in-on-6-trillion-141332917.html"
            ],
            [
              "CNBC – Here are Monday's biggest analyst calls: Nvidia, SpaceX, Tesla, Apple, Microsoft, Wells Fargo, Samsara & more (Oct 5, 2026)",
              "https://www.cnbc.com/2026/10/05/monday-biggest-analyst-calls-on-wall-street.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 238.9,
            "date": "2026-10-05",
            "researchPrice": 238.9,
            "researchDate": "2026-10-05",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $24,592M (min $50M), price $238.9"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $224.21"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +4.2 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+45.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+2.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.48% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.48,
            "sma20": 224.21,
            "sma50": 218.92,
            "sma200": 201.02,
            "rs1m": 4.23,
            "rs3m": 17.71,
            "fromHigh52": -0.5,
            "fromLow52": 45.43,
            "avgValue20": 24591951574,
            "extAtr": 2.48
          }
        },
        {
          "market": "IN",
          "symbol": "NYKAA",
          "yahoo": "NYKAA.NS",
          "name": "FSN E-Commerce Ventures (Nykaa)",
          "sector": "Consumer Services / E-commerce",
          "currency": "INR",
          "refPrice": 339.55,
          "refDate": "2026-10-05",
          "buyLow": 336.0,
          "buyHigh": 341.3,
          "target": 349.7,
          "stop": 332.05,
          "risk": "Medium",
          "thesis": "A strong Q2 FY27 business update on 5 Oct (GMV growth close to 30%, fashion accelerating) that Morgan Stanley said ran ahead of its estimates.",
          "reasons": [
            "Nykaa's provisional Q2 FY27 update (5 Oct 2026) guided consolidated GMV growth close to 30%, NSV growth in the early thirties and net revenue growth in the late twenties; the stock closed up 4.5% at ₹339.55.",
            "Morgan Stanley kept Overweight with a ₹356 target, saying revenue growth is tracking in the high twenties against its 26% estimate and fashion revenue growth in the low 50s against its 35% estimate; JM Financial also flagged 'excellent trends'.",
            "The chart supports it: the close is 2.9% below the 52-week high (₹349.55), above its 20-, 50- and 200-day averages, and 3-month relative strength vs the Nifty is +14.4 pts."
          ],
          "data": [
            [
              "Close (10/05)",
              "₹339.55"
            ],
            [
              "3-month vs index",
              "+14.4 pts"
            ],
            [
              "Distance from 20-day avg",
              "+0.7 ATR"
            ],
            [
              "ATR",
              "2.6% of price"
            ]
          ],
          "watch": "The broader market is in a downtrend (risk-off) and the RBI policy decision on Wed 7 Oct could swing sentiment. The 52-week high near ₹349.55 may act as resistance, which is why the target stops at ₹349.70. Skip it if it opens outside ₹336.00–341.30. Full Q2 results come later in the quarter, outside today's window.",
          "sources": [
            [
              "BusinessToday – Nykaa stock gains 6% post Q2 update, Morgan Stanley shares target price (Oct 5, 2026)",
              "https://www.businesstoday.in/amp/markets/trending-stocks/story/nykaa-stock-gains-6-post-q2-update-morgan-stanley-shares-target-price-559456-2026-10-05"
            ],
            [
              "Business Standard – Nykaa Q2 update: JM sees 'excellent trends' in BPC & Fashion; stock up 5% (Oct 5, 2026)",
              "https://www.business-standard.com/markets/news/nykaa-q2-update-jm-sees-excellent-trends-in-bpc-fashion-stock-up-5-126100500310_1.html"
            ],
            [
              "Entrackr – Nykaa expects around 30% GMV growth in Q2 FY27",
              "https://entrackr.com/news/nykaa-expects-around-30-gmv-growth-in-q2-fy27-12623169"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 339.55,
            "date": "2026-10-05",
            "researchPrice": 339.55,
            "researchDate": "2026-10-05",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹148 cr (min ₹100 cr), price ₹339.55"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg ₹333.72"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +8.9 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+46.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.7 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.6% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.6,
            "sma20": 333.72,
            "sma50": 333.33,
            "sma200": 285.9,
            "rs1m": 8.91,
            "rs3m": 14.41,
            "fromHigh52": -2.86,
            "fromLow52": 46.36,
            "avgValue20": 1476913051,
            "extAtr": 0.66
          }
        }
      ],
      "marketSources": [
        [
          "Yahoo Finance – Stock market today: Nasdaq, Nvidia post record highs as tech strength outshines bond weakness (Oct 5, 2026)",
          "https://finance.yahoo.com/markets/live/stock-market-today-monday-october-5-dow-sp-500-nasdaq-081220790.html"
        ],
        [
          "Business Standard – Stock Market Close: Sensex snaps 4-day losing run, gains 473 pts; Nifty ends at 22,556; ITC up 5% (Oct 5, 2026)",
          "https://www.business-standard.com/markets/news/stock-market-live-october-5-nse-bse-sensex-today-nifty50-gift-nifty-crude-oil-prices-snapdeal-listing-today-rvnl-share-price-today-ipo-today-126100500057_1.html"
        ],
        [
          "CNBC – Stock market next week: Outlook for Oct. 5-9, 2026",
          "https://cnbc.com/2026/10/02/stock-market-next-week-outlook-for-oct-5-9-2026-.html"
        ]
      ]
    },
    {
      "id": "2026-10-05-daily",
      "horizon": "daily",
      "date": "2026-10-05",
      "horizonDays": 1,
      "expires": "2026-10-05",
      "criteriaVersion": "2026-09-30",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7722.72,
          "summary": "Risk-on: the S&P 500 closed at 7,722.72 on 2026-10-02 (+0.73%) after a weak September jobs report (29,000 jobs) pulled Treasury yields lower. Plan B list: none of the stocks passing the daily screen had a fresh, dated catalyst for today (AMD and Meta were Friday's picks with no new news, and Target is this week's weekly pick), so today's three US ideas come from the looser Plan B rule (CRITERIA.md section 9, minimum 3 picks): strong 3-month leaders in three different sectors pulling back to their 20-day averages. All price and risk checks still apply; treat it as lower-conviction. ISM services data at 10 AM ET is the main event today."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22421.95,
          "summary": "Risk-off: the Nifty 50 closed at 22,421.95 on 2026-10-01 after eight straight weekly falls, below its 50-day (23,870) and 200-day (24,356) averages. Plan B list: no stock on the daily screen had a fresh, verifiable catalyst, so three Plan B ideas (the minimum, and the maximum in a risk-off market) were added mid-session (12:30–2:30 PM IST): leaders pulling back to their 20-day averages and one stock with a 4-day-old catalyst. Because it was published mid-session, only buy if the live price is inside the buy zone. The RBI policy decision is due Wed 7 Oct (a 25 bp hike is widely expected). This week's weekly list has APL Apollo Tubes."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "TMO",
          "yahoo": "TMO",
          "name": "Thermo Fisher Scientific",
          "sector": "Health Care / Life Science Tools",
          "currency": "USD",
          "refPrice": 654.8,
          "refDate": "2026-10-02",
          "buyLow": 648.58,
          "buyHigh": 657.91,
          "target": 672.7,
          "stop": 641.57,
          "risk": "Medium",
          "planB": true,
          "planBBasis": "setup",
          "thesis": "Plan B (no fresh catalyst): a strong 3-month leader that has pulled back to just above its 20-day average after a 3.3% drop on 1 Oct, with no earnings until 21 Oct.",
          "reasons": [
            "It's a leader: up 26.5% in 3 months, beating the S&P 500 by 24.1 pts, with the 50-day average ($617) rising and the stock 4.2% below its 52-week high ($683.63).",
            "The pullback is orderly: after falling 3.3% on 1 Oct as yields rose, it closed at $654.80 on 2 Oct (+0.35%), only 0.55 ATR above its 20-day average ($646.26), where leaders often find support.",
            "Fundamentals back it up: Q2 2026 organic growth returned to 5% (the best since 2021), adjusted EPS rose 13% and the 2026 outlook was raised. Q3 results come on 21 Oct, outside today's window."
          ],
          "data": [
            [
              "Close (10/02)",
              "$654.80"
            ],
            [
              "3-month vs index",
              "+24.1 pts"
            ],
            [
              "Distance from 20-day avg",
              "+0.55 ATR"
            ],
            [
              "ATR",
              "2.38% of price"
            ]
          ],
          "watch": "There's no fresh news behind this pick, so it relies on the uptrend holding. A rise in Treasury yields (e.g. after a hot ISM services print) hit it on 1 Oct and could again. Skip it if it opens outside $648.58–657.91, and keep the size smaller than a standard pick.",
          "sources": [
            [
              "Yahoo Finance – Thermo Fisher Scientific to hold earnings conference call on Wednesday, October 21, 2026",
              "https://finance.yahoo.com/markets/stocks/articles/thermo-fisher-scientific-hold-earnings-120000258.html"
            ],
            [
              "Yahoo Finance – Stock market today, Oct 2: stocks rally as Fed rate-hike expectations fade",
              "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html"
            ],
            [
              "WTOP/AP – Wall Street week ahead: Fed minutes, unemployment data, consumer sentiment",
              "https://wtop.com/national/2026/10/wall-street-week-ahead-fed-minutes-unemployment-data-consumer-sentiment-update"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 654.8,
            "date": "2026-10-02",
            "researchPrice": 654.8,
            "researchDate": "2026-10-02",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $1,499M (min $50M), price $654.8"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $646.26"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +6.9 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+50.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.6 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.38% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.38,
            "sma20": 646.26,
            "sma50": 617.45,
            "sma200": 542.61,
            "rs1m": 6.87,
            "rs3m": 24.05,
            "fromHigh52": -4.22,
            "fromLow52": 50.44,
            "avgValue20": 1499415425,
            "extAtr": 0.55
          }
        },
        {
          "market": "US",
          "symbol": "EXPD",
          "yahoo": "EXPD",
          "name": "Expeditors International",
          "sector": "Industrials / Logistics",
          "currency": "USD",
          "refPrice": 192.47,
          "refDate": "2026-10-02",
          "buyLow": 190.87,
          "buyHigh": 193.27,
          "target": 197.06,
          "stop": 189.08,
          "risk": "Medium",
          "planB": true,
          "planBBasis": "setup",
          "thesis": "Plan B (no fresh catalyst): a low-volatility logistics leader within 1.1% of its 52-week high, sitting just above its 20-day average, with no earnings until 3 Nov.",
          "reasons": [
            "It's a steady leader: up 16.2% in 3 months, beating the S&P 500 by 13.7 pts, with the 50-day average ($184.88) rising and the stock 1.1% below its 52-week high ($194.59).",
            "Entry is close to support: $192.47 (2 Oct close) is 0.84 ATR above the 20-day average ($189.10), and with an ATR of only 2.07% it has the tightest stop on the list (−1.8%).",
            "Fundamentals back it up: Q2 2026 EPS rose 51% to $2.03 on revenue up 32% to $3.50B (reported 4 Aug), a technology restructuring should cut about $50M a year of costs, and Q3 results aren't due until 3 Nov."
          ],
          "data": [
            [
              "Close (10/02)",
              "$192.47"
            ],
            [
              "3-month vs index",
              "+13.7 pts"
            ],
            [
              "Q2 2026 EPS",
              "$2.03 (+51% YoY)"
            ],
            [
              "ATR",
              "2.07% of price"
            ]
          ],
          "watch": "There's no fresh news behind this pick, and several valuation models call the stock expensive after its run. Trade or tariff headlines can move freight names quickly. Skip it if it opens outside $190.87–193.27, and keep the size smaller than a standard pick.",
          "sources": [
            [
              "Yahoo Finance – Expeditors reports second quarter 2026 EPS of $2.03",
              "https://finance.yahoo.com/markets/stocks/articles/expeditors-reports-second-quarter-2026-123000310.html"
            ],
            [
              "SEC EDGAR – Expeditors Form 8-K, Q2 2026 results (Exhibit 99.1)",
              "https://www.sec.gov/Archives/edgar/data/0000746515/000119312526332198/expd-ex99_1.htm"
            ],
            [
              "Yahoo Finance – Stock market today, Oct 2: stocks rally as Fed rate-hike expectations fade",
              "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 192.47,
            "date": "2026-10-02",
            "researchPrice": 192.47,
            "researchDate": "2026-10-02",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $203M (min $50M), price $192.47"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $189.1"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +2.7 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+70.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.8 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.07% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.07,
            "sma20": 189.1,
            "sma50": 184.88,
            "sma200": 162.72,
            "rs1m": 2.66,
            "rs3m": 13.7,
            "fromHigh52": -1.09,
            "fromLow52": 70.4,
            "avgValue20": 203316898,
            "extAtr": 0.84
          }
        },
        {
          "market": "US",
          "symbol": "PSX",
          "yahoo": "PSX",
          "name": "Phillips 66",
          "sector": "Energy / Refining",
          "currency": "USD",
          "refPrice": 264.58,
          "refDate": "2026-10-02",
          "buyLow": 261.08,
          "buyHigh": 266.33,
          "target": 274.64,
          "stop": 257.15,
          "risk": "Medium",
          "planB": true,
          "planBBasis": "setup",
          "thesis": "Plan B (no fresh catalyst): a refining leader (up 49% in 3 months) consolidating 0.5 ATR above its 20-day average while refining margins stay elevated.",
          "reasons": [
            "It's one of the strongest large caps: up 49.2% in 3 months, beating the S&P 500 by 46.7 pts, with the 50-day average ($240.64) rising and the stock 4.5% below its 52-week high ($277.12).",
            "It's a calm consolidation, not a spike: $264.58 on 2 Oct (+0.13%) is just 0.5 ATR above its 20-day average ($260.18), while peers Marathon and Valero jumped 5–6% on 1 Oct on refining margins.",
            "Refining margins are the driver: Phillips 66's realized refining margin more than doubled to $24.08/bbl in Q2 2026 (from $10.11), and Q3 results aren't due until late October."
          ],
          "data": [
            [
              "Close (10/02)",
              "$264.58"
            ],
            [
              "3-month vs index",
              "+46.7 pts"
            ],
            [
              "Q2 refining margin",
              "$24.08/bbl (vs $10.11 in Q1)"
            ],
            [
              "ATR",
              "3.31% of price"
            ]
          ],
          "watch": "Refiners are crowded after a huge run, and any sign of easing fuel tightness or a crude spike could hit margins fast. It was in last week's weekly list. Skip it if it opens outside $261.08–266.33, and keep the size smaller than a standard pick.",
          "sources": [
            [
              "Yahoo Finance – Phillips 66 profit jumps as refining margins more than double",
              "https://finance.yahoo.com/energy/articles/phillips-66-profit-jumps-refining-021800484.html"
            ],
            [
              "Yahoo Finance – Marathon Petroleum (MPC) and Valero Energy (VLO) have exploded in 2026. But Barron's sees more upside",
              "https://finance.yahoo.com/energy/articles/marathon-petroleum-mpc-valero-energy-020319205.html"
            ],
            [
              "Phillips 66 – Second-quarter 2026 results news release",
              "https://investor.phillips66.com/financial-information/news-releases/news-release-details/2026/Phillips-66-Delivers-Strong-Second-Quarter-Results-and-Operating-Performance/default.aspx"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 264.58,
            "date": "2026-10-02",
            "researchPrice": 264.58,
            "researchDate": "2026-10-02",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $866M (min $50M), price $264.58"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $260.18"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +2.6 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+108.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.31% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.31,
            "sma20": 260.18,
            "sma50": 240.64,
            "sma200": 184.02,
            "rs1m": 2.59,
            "rs3m": 46.74,
            "fromHigh52": -4.53,
            "fromLow52": 108.76,
            "avgValue20": 865774845,
            "extAtr": 0.5
          }
        },
        {
          "market": "IN",
          "symbol": "LAURUSLABS",
          "yahoo": "LAURUSLABS.NS",
          "name": "Laurus Labs",
          "sector": "Healthcare / Pharmaceuticals",
          "currency": "INR",
          "refPrice": 1984.0,
          "refDate": "2026-10-01",
          "buyLow": 1965.25,
          "buyHigh": 1993.4,
          "target": 2037.95,
          "stop": 1944.1,
          "risk": "Medium",
          "planB": true,
          "planBBasis": "setup",
          "thesis": "Plan B (no fresh catalyst): one of the strongest Nifty-200 leaders, in pharma, a defensive sector, sitting just above its 20-day average while the broad market falls.",
          "reasons": [
            "It's a strong leader in a falling market: up 29.7% in 3 months, beating the Nifty by 37.4 pts over 3 months and 13.2 pts over 1 month, 3.5% below its 52-week high (₹2,055.30).",
            "Entry is close to support: ₹1,984.00 (1 Oct close) is only 0.44 ATR above the 20-day average (₹1,963.15), and the 50-day average (₹1,881) is rising.",
            "Pharma is the market's defensive refuge this year (export earnings gain from a weak rupee), and Laurus' Q1 FY27 net profit more than doubled (+125% YoY to ₹367.6 cr). Q2 results are due later in October, outside today's window."
          ],
          "data": [
            [
              "Close (10/01)",
              "₹1,984.0"
            ],
            [
              "3-month vs index",
              "+37.4 pts"
            ],
            [
              "Distance from 20-day avg",
              "+0.44 ATR"
            ],
            [
              "ATR",
              "2.36% of price"
            ]
          ],
          "watch": "There's no fresh news behind this pick, and the market is risk-off (8 straight weekly falls, RBI decision on 7 Oct). It was published mid-session (~12:30 PM IST), so check the live price first. Skip it if it's outside ₹1,965.25–1,993.40, and keep the size smaller than a standard pick.",
          "sources": [
            [
              "BusinessToday – Laurus Labs Ltd share price and news (Oct 2026)",
              "https://www.businesstoday.in/stocks/laurus-labs-ltd-lauruslabs-share-price-364161"
            ],
            [
              "Business Standard – Patent wins vs tariff risks: analysts pick top pharma stocks",
              "https://www.business-standard.com/markets/news/india-pharma-stocks-outlook-2026-domestic-focus-us-trump-tariffs-iran-war-stocks-dr-reddy-sun-pharma-torrent-pharma-divis-labs-cipla-126040300420_1.html"
            ],
            [
              "IANS – Market outlook: RBI policy stance, Q2 earnings key triggers next week (Oct 4, 2026)",
              "https://ianslive.in/market-outlook-rbi-policy-stance-q2-earnings-key-triggers-next-week--20261004110048"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1984.0,
            "date": "2026-10-01",
            "researchPrice": 1984.0,
            "researchDate": "2026-10-01",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹317 cr (min ₹100 cr), price ₹1,984.0"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg ₹1963.15"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +13.2 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+135.3% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.36% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.66 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.36,
            "sma20": 1963.15,
            "sma50": 1881.41,
            "sma200": 1363.19,
            "rs1m": 13.23,
            "rs3m": 37.36,
            "fromHigh52": -3.47,
            "fromLow52": 135.35,
            "avgValue20": 3170239118,
            "extAtr": 0.44
          }
        },
        {
          "market": "IN",
          "symbol": "KOTAKBANK",
          "yahoo": "KOTAKBANK.NS",
          "name": "Kotak Mahindra Bank",
          "sector": "Financial Services / Banks",
          "currency": "INR",
          "refPrice": 418.35,
          "refDate": "2026-10-01",
          "buyLow": 414.85,
          "buyHigh": 420.1,
          "target": 428.45,
          "stop": 410.85,
          "risk": "Medium",
          "planB": true,
          "planBBasis": "older-catalyst",
          "thesis": "Plan B (catalyst 4 days old): the RBI-approved appointment of a new MD & CEO on 1 Oct briefly lifted the stock 4%, and it has since held just above its 20-day average.",
          "reasons": [
            "On 1 Oct the RBI approved Anup Kumar Saha as Kotak's MD & CEO for three years from 1 Jan 2027. The shares jumped as much as 4% to ₹435.50 intraday, a 3-year high, on 2.98 crore shares traded, before closing at ₹418.35 (+0.3%).",
            "It's beating a falling Nifty by 17.3 pts over 3 months and 5.6 pts over 1 month, sitting 0.49 ATR above its 20-day average (₹414.04) with a rising 50-day average (₹405.47).",
            "Analysts are positive: the average of 36 targets is about ₹487, and Prabhudas Lilladher kept a Buy with a ₹500 target."
          ],
          "data": [
            [
              "Close (10/01)",
              "₹418.35"
            ],
            [
              "3-month vs index",
              "+17.3 pts"
            ],
            [
              "New MD & CEO",
              "RBI-approved 1 Oct (from Jan 2027)"
            ],
            [
              "ATR",
              "2.10% of price"
            ]
          ],
          "watch": "Banks react to the RBI decision on Wed 7 Oct (a 25 bp hike is expected), and the market is risk-off. It was published mid-session (~2:30 PM IST), so check the live price first. Skip it if it's outside ₹414.85–420.10, and keep the size smaller than a standard pick.",
          "sources": [
            [
              "Moneycontrol via TradingView – Kotak Mahindra Bank shares jump 4%, hit over 3-year high on key leadership changes",
              "https://tr.tradingview.com/news/moneycontrol:d1b13de3e094b:0-kotak-mahindra-bank-shares-jump-4-hit-over-3-year-high-on-key-leadership-changes"
            ],
            [
              "TradingView News – Kotak Mahindra Bank shares climb 4% after naming new MD, CEO",
              "https://www.tradingview.com/news/moodys:8539392f07021:0-kotak-mahindra-bank-shares-climb-4-after-naming-new-md-ceo/"
            ],
            [
              "IANS – Market outlook: RBI policy stance, Q2 earnings key triggers next week (Oct 4, 2026)",
              "https://ianslive.in/market-outlook-rbi-policy-stance-q2-earnings-key-triggers-next-week--20261004110048"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 418.35,
            "date": "2026-10-01",
            "researchPrice": 418.35,
            "researchDate": "2026-10-01",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹670 cr (min ₹100 cr), price ₹418.35"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg ₹414.04"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +5.6 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+21.1% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.1% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.66 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.1,
            "sma20": 414.04,
            "sma50": 405.47,
            "sma200": 399.3,
            "rs1m": 5.57,
            "rs3m": 17.34,
            "fromHigh52": -7.69,
            "fromLow52": 21.09,
            "avgValue20": 6698835035,
            "extAtr": 0.49
          }
        },
        {
          "market": "IN",
          "symbol": "LENSKART",
          "yahoo": "LENSKART.NS",
          "name": "Lenskart Solutions",
          "sector": "Consumer Services / Retail",
          "currency": "INR",
          "refPrice": 691.15,
          "refDate": "2026-10-01",
          "buyLow": 682.4,
          "buyHigh": 695.55,
          "target": 716.35,
          "stop": 672.5,
          "risk": "Medium",
          "planB": true,
          "planBBasis": "setup",
          "thesis": "Plan B (no fresh catalyst): one of the Nifty-200's strongest 3-month leaders, holding just above its 20-day average and the ₹682 block-deal price while the market falls.",
          "reasons": [
            "It's a strong leader: up 28.9% in 3 months, beating the Nifty by 36.5 pts over 3 months and 10.1 pts over 1 month, 4.7% below its 52-week high (₹725).",
            "Entry is close to support: ₹691.15 (1 Oct close) is only 0.3 ATR above its 20-day average (₹684.60), and a ₹2,047 cr block deal last month cleared at ₹682.45, just below today's buy zone.",
            "The trend is intact: the 50-day average (₹639.43) is rising, and the next result (Q2) is after today's session."
          ],
          "data": [
            [
              "Close (10/01)",
              "₹691.15"
            ],
            [
              "3-month vs index",
              "+36.5 pts"
            ],
            [
              "Block-deal price",
              "₹682.45 (Sep)"
            ],
            [
              "ATR",
              "3.17% of price"
            ]
          ],
          "watch": "There's no fresh news, more stake sales by early investors could add supply, and the market is risk-off. It was published mid-session (~2:30 PM IST), so check the live price first. Skip it if it's outside ₹682.40–695.55, and keep the size smaller than a standard pick.",
          "sources": [
            [
              "Business Standard – Block deal alert: Lenskart Solutions slips 3% amid heavy volume on NSE",
              "https://www.business-standard.com/amp/markets/news/block-deal-alert-lenskart-solutions-slips-3-amid-heavy-volume-on-nse-126092100132_1.html"
            ],
            [
              "Value Research – Lenskart Solutions Ltd share price and data",
              "https://www.valueresearchonline.com/stocks/371529/lenskart-solutions-ltd/"
            ],
            [
              "IANS – Market outlook: RBI policy stance, Q2 earnings key triggers next week (Oct 4, 2026)",
              "https://ianslive.in/market-outlook-rbi-policy-stance-q2-earnings-key-triggers-next-week--20261004110048"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 691.15,
            "date": "2026-10-01",
            "researchPrice": 691.15,
            "researchDate": "2026-10-01",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹562 cr (min ₹100 cr), price ₹691.15"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg ₹684.6"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +10.1 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+94.1% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.17% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.66 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.17,
            "sma20": 684.6,
            "sma50": 639.43,
            "sma200": 532.32,
            "rs1m": 10.12,
            "rs3m": 36.53,
            "fromHigh52": -4.67,
            "fromLow52": 94.09,
            "avgValue20": 5620701922,
            "extAtr": 0.3
          }
        }
      ],
      "marketSources": [
        [
          "Yahoo Finance – Stock market today, Oct 2: stocks rally as Fed rate-hike expectations fade",
          "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html"
        ],
        [
          "IANS – Market outlook: RBI policy stance, Q2 earnings key triggers next week (Oct 4, 2026)",
          "https://ianslive.in/market-outlook-rbi-policy-stance-q2-earnings-key-triggers-next-week--20261004110048"
        ],
        [
          "WTOP/AP – Wall Street week ahead: Fed minutes, unemployment data, consumer sentiment",
          "https://wtop.com/national/2026/10/wall-street-week-ahead-fed-minutes-unemployment-data-consumer-sentiment-update"
        ]
      ]
    },
    {
      "id": "2026-10-05-weekly",
      "horizon": "weekly",
      "date": "2026-10-05",
      "horizonDays": 7,
      "expires": "2026-10-12",
      "criteriaVersion": "2026-09-30",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7722.72,
          "summary": "Risk-on: the S&P 500 closed at 7,722.72 on 2026-10-02 (+0.73%), above its 50-day (7,658) and 200-day (7,226) averages, after September payrolls came in at just 29,000 jobs (unemployment 4.2%), pulling the 10-year yield to about 5.18% and cutting the odds of an October Fed hike to roughly 20%. This week brings the September FOMC minutes (Wed 7 Oct), ISM services and the first big earnings (PepsiCo 8 Oct, Delta 9 Oct). Only one stock combined a fresh, dated catalyst with a clean chart: Target (HSBC upgrade to Buy, 30 Sep). Accenture fell 6.3% on 2 Oct after its record post-earnings jump and now fails the volatility check; NetApp and AMD are too stretched after big runs; the refiners spiked with no company news. Data note: the US 2 Oct closes only reached the snapshot this morning (05 Oct 00:43 UTC); all levels use them. No learned rule changes are in force yet (fewer than 20 finished weekly picks)."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22421.95,
          "summary": "Risk-off: the Nifty 50 closed at 22,421.95 on 2026-10-01, well below its 50-day (23,870) and 200-day (24,356) averages after an eighth straight weekly fall, its longest losing run in about 25 years (3-month −7.6%). Key events this week: the RBI policy decision on Wed 7 Oct (most economists in a Reuters poll expect a 25 bp repo hike to 5.50%) and TCS's Q2 results on 8 Oct, which open the earnings season. In a market this weak only a stock with hard, fresh numbers qualifies, so there is one pick: APL Apollo Tubes on its record Q2 volumes. The snapshot is current for India (NSE was closed 2 Oct). No learned rule changes are in force yet."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "TGT",
          "yahoo": "TGT",
          "name": "Target Corporation",
          "sector": "Consumer Staples / Retail",
          "currency": "USD",
          "refPrice": 156.0,
          "refDate": "2026-10-02",
          "buyLow": 154.12,
          "buyHigh": 156.94,
          "target": 163.98,
          "stop": 150.84,
          "risk": "Low–Medium",
          "thesis": "HSBC's 30 Sep double-notch call (Hold to Buy, target $125 to $190) on a traffic-led recovery lands on a 3-month leader that has pulled back to its 20-day average.",
          "reasons": [
            "On 30 Sep HSBC upgraded Target to Buy from Hold and lifted its target to $190 from $125, citing comparable sales up 3.8% driven by more store visits, not higher prices, and EPS about 5% above expectations excluding a $994M tariff refund.",
            "It's beating the S&P 500 by 21.3 pts over 3 months, and after a 4.5% dip over the past month it sits at $156.00 (2 Oct), just 0.4 ATR below its 20-day average ($157.64) and above a rising 50-day ($155.68).",
            "Low volatility for a weekly hold (ATR 2.4%), and no earnings until mid-November, so there's no binary event in the window. Softer rate-hike odds after the weak jobs report also help consumer names."
          ],
          "data": [
            [
              "Close (10/02)",
              "$156.00"
            ],
            [
              "3-month vs index",
              "+21.3 pts"
            ],
            [
              "HSBC target",
              "$190 (Buy, 09/30)"
            ],
            [
              "ATR",
              "2.41% of price"
            ]
          ],
          "watch": "A hot ISM services print or hawkish Fed minutes (7 Oct) could revive rate-hike fears and hit consumer stocks. The past month's relative strength is negative, so if it closes below the 50-day average (~$155.7) the setup is weakening. Skip it if it opens outside $154.12–156.94.",
          "sources": [
            [
              "CNBC – Target has been on fire this year. HSBC sees more upside ahead (Sep 30, 2026)",
              "https://www.cnbc.com/2026/09/30/target-has-been-on-fire-this-year-hsbc-sees-more-upside-ahead.html"
            ],
            [
              "Yahoo Finance – Target upgraded at HSBC as \"traffic-driven recovery is underway\"",
              "https://finance.yahoo.com/markets/stocks/articles/target-upgraded-hsbc-footfall-points-122607131.html"
            ],
            [
              "Investing.com – HSBC upgrades Target stock rating on earnings recovery potential",
              "https://www.investing.com/news/analyst-ratings/hsbc-upgrades-target-stock-rating-on-earnings-recovery-potential-93CH-4925668"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 156.0,
            "date": "2026-10-02",
            "researchPrice": 156.0,
            "researchDate": "2026-10-02",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $549M (min $50M), price $156.0"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $155.68, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +21.2 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+87.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.41% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.41,
            "sma20": 157.64,
            "sma50": 155.68,
            "sma200": 128.81,
            "rs1m": -5.24,
            "rs3m": 21.25,
            "fromHigh52": -8.64,
            "fromLow52": 86.96,
            "avgValue20": 549131992,
            "extAtr": -0.44
          }
        },
        {
          "market": "IN",
          "symbol": "APLAPOLLO",
          "yahoo": "APLAPOLLO.NS",
          "name": "APL Apollo Tubes",
          "sector": "Capital Goods / Steel Tubes",
          "currency": "INR",
          "refPrice": 2115.7,
          "refDate": "2026-10-01",
          "buyLow": 2085.75,
          "buyHigh": 2130.65,
          "target": 2242.9,
          "stop": 2033.4,
          "risk": "Medium",
          "thesis": "Record Q2 FY27 sales volume (9.63 lakh tonnes, +13% YoY, 1 Oct) on a 3-month leader that has pulled back below its 20-day average with the market.",
          "reasons": [
            "On 1 Oct APL Apollo reported its highest-ever quarterly sales volume, 963,143 tonnes in Q2 FY27, up 13% YoY and 29% QoQ, beating the previous record of 924,881 tonnes (Q4 FY26). The APL Apollo brand alone grew to 774,751 tonnes from 653,680.",
            "It's beating the Nifty by 24.9 pts over 3 months and is still above a rising 50-day average (₹2,099), although it fell 3.4% to ₹2,115.70 on 1 Oct with the broad sell-off.",
            "Volume growth feeds directly into Q2 results (due later in October), and the shares are 8% below their 52-week high of ₹2,301, so there's room to recover if the market steadies."
          ],
          "data": [
            [
              "Close (10/01)",
              "₹2,115.7"
            ],
            [
              "3-month vs index",
              "+24.9 pts"
            ],
            [
              "Q2 FY27 volume",
              "9.63 lakh t (+13% YoY, record)"
            ],
            [
              "ATR",
              "2.83% of price"
            ]
          ],
          "watch": "Risk-off market: Nifty is down 8 weeks in a row, FIIs are selling, and an RBI rate hike on 7 Oct could hit rate-sensitive construction demand. Exit on the stop (₹2,033.40), which sits just below the 50-day average. Skip it if it opens outside ₹2,085.75–2,130.65.",
          "sources": [
            [
              "CNBC-TV18 via TradingView – APL Apollo Tubes Q2 sales volume (Oct 1, 2026)",
              "https://www.tradingview.com/news/cnbctv:57efc2cb1094b:0/"
            ],
            [
              "Free Press Journal – APL Apollo Tubes reports 13% YoY growth in Q2FY27 sales volume to 9.63 lakh tonnes",
              "https://www.freepressjournal.in/business/apl-apollo-tubes-reports-13-yoy-growth-in-q2fy27-sales-volume-to-963-lakh-tonnes"
            ],
            [
              "IANS – Market outlook: RBI policy stance, Q2 earnings key triggers next week (Oct 4, 2026)",
              "https://ianslive.in/market-outlook-rbi-policy-stance-q2-earnings-key-triggers-next-week--20261004110048"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 2115.7,
            "date": "2026-10-01",
            "researchPrice": 2115.7,
            "researchDate": "2026-10-01",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹132 cr (min ₹100 cr), price ₹2,115.7"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg ₹2099.29, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +24.9 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+25.5% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.1 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.83% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.83,
            "sma20": 2181.99,
            "sma50": 2099.29,
            "sma200": 1988.56,
            "rs1m": 2.52,
            "rs3m": 24.87,
            "fromHigh52": -8.07,
            "fromLow52": 25.54,
            "avgValue20": 1317795208,
            "extAtr": -1.11
          }
        }
      ],
      "marketSources": [
        [
          "Yahoo Finance – Stock market today, Oct 2: stocks rally as Fed rate-hike expectations fade",
          "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-2-dow-sp-500-nasdaq-september-jobs-report-080623878.html"
        ],
        [
          "WTOP/AP – Wall Street week ahead: Fed minutes, unemployment data, consumer sentiment",
          "https://wtop.com/national/2026/10/wall-street-week-ahead-fed-minutes-unemployment-data-consumer-sentiment-update"
        ],
        [
          "Outlook Money – Stock market outlook next week: RBI MPC decision, Q2 earnings, FII outflows",
          "https://www.outlookmoney.com/invest/key-factors-set-to-affect-stock-market-next-week-rbi-policy-q2-earnings-and-fii-outflows-in-focus"
        ]
      ],
      "superseded": {
        "by": "2026-10-01-weekly",
        "reason": "Withdrawn on 5 Oct 2026: it was published while the 1 Oct weekly list was still running (until 8 Oct). Weekly and monthly lists now stay fixed for their whole window, so the 1 Oct list remains the current weekly list."
      }
    },
    {
      "id": "2026-10-02-daily",
      "horizon": "daily",
      "date": "2026-10-02",
      "horizonDays": 1,
      "expires": "2026-10-02",
      "criteriaVersion": "2026-09-30",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7666.45,
          "summary": "Risk-on: the S&P 500 closed at 7,666.45 on 2026-10-01 (+0.19%), above its 50-day (7,651) and 200-day (7,221) averages, as Treasury yields eased back from their highest levels in more than 20 years. The big event today is the September jobs report at 8:30 AM ET, before the open: consensus is about 90,000 jobs with unemployment at 4.1%, and a surprise either way could move yields and the open sharply. That's why the list is short and each pick has a firm skip-outside-the-zone rule. Only two names had a fresh, dated catalyst on a clean chart: AMD (HPE's first $1.2B Helios rack order, announced 30 Sep–1 Oct) and Meta (named a Deutsche Bank top AI pick on 1 Oct). Refiners MPC and VLO pass the screen but jumped 5–6% on 1 Oct with no company news, so they were left out. Yesterday's NVDA and ANET weren't repeated, since neither has a new catalyst. No learned rule changes are in force yet: fewer than 20 daily picks have finished."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22620.45,
          "summary": "Risk-off, and no India picks today: NSE and BSE are closed on Fri 2 Oct 2026 for Gandhi Jayanti. The Nifty 50 last closed at 22,620.45 on 2026-09-30, below its 50-day (23,902) and 200-day (24,373) averages. India daily picks resume next trading day, Mon 5 Oct."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "AMD",
          "yahoo": "AMD",
          "name": "Advanced Micro Devices",
          "sector": "Information Technology / Semiconductors",
          "currency": "USD",
          "refPrice": 615.73,
          "refDate": "2026-10-01",
          "buyLow": 606.22,
          "buyHigh": 620.49,
          "target": 643.08,
          "stop": 595.52,
          "risk": "Medium",
          "thesis": "HPE's first order for AMD's Helios AI rack, $1.2 billion from Vultr announced 30 Sep–1 Oct, is real-world proof of AMD's full-rack GPU push, and the stock is just 3.6% below its high.",
          "reasons": [
            "HPE announced a $1.2B order from Vultr for AMD Helios racks (72 Instinct MI455X GPUs plus EPYC 'Venice' CPUs per rack) at its 30 Sep–1 Oct Networking Investor Day. It's the first Helios order disclosed and raised HPE's fiscal-2027 networking growth outlook to high-teens to low-20s %.",
            "AMD closed at $615.73 on 1 Oct (+0.65%), up 34% in a month and beating the S&P 500 by 33.5 pts over 1 month and 16.5 pts over 3 months, 3.6% below its 52-week high of $639.",
            "AI hardware demand is still strong: Micron's 30 Sep results ($54.2B revenue vs $51.1B expected, Q1 guide ~$61.5B) and its higher capex point to sustained AI data-center spending."
          ],
          "data": [
            [
              "Close (10/01)",
              "$615.73"
            ],
            [
              "1-month vs index",
              "+33.5 pts"
            ],
            [
              "Helios order (HPE/Vultr)",
              "$1.2B, first disclosed"
            ],
            [
              "ATR",
              "3.86% of price"
            ]
          ],
          "watch": "It's stretched (2.4 ATR above its 20-day average after a 34% month), and the 8:30 AM ET jobs report could jolt yields and chip stocks at the open. Skip it if it opens outside $606.22–620.49.",
          "sources": [
            [
              "Yahoo Finance – HPE raises networking outlook, lands $1.2 billion Vultr AI order",
              "https://finance.yahoo.com/technology/ai/articles/hpe-raises-networking-outlook-lands-123217459.html"
            ],
            [
              "Fortune – HPE's $1.2 billion order from Vultr puts its AI networking strategy to the test (Oct 1, 2026)",
              "https://fortune.com/2026/10/01/hpe-1-2-billion-vultr-order-puts-ai-networking-strategy-test-cfo/"
            ],
            [
              "SEC EDGAR – HPE Form 8-K, Networking Investor Day",
              "https://www.sec.gov/Archives/edgar/data/0001645590/000164559026000084/hpenetworkinginvestorday20.htm"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 615.73,
            "date": "2026-10-01",
            "researchPrice": 615.73,
            "researchDate": "2026-10-01",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $12,595M (min $50M), price $615.73"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $557.6"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +33.5 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+283.7% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+2.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.86% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.86,
            "sma20": 557.6,
            "sma50": 511.65,
            "sma200": 372.59,
            "rs1m": 33.51,
            "rs3m": 16.46,
            "fromHigh52": -3.64,
            "fromLow52": 283.66,
            "avgValue20": 12594651687,
            "extAtr": 2.44
          }
        },
        {
          "market": "US",
          "symbol": "META",
          "yahoo": "META",
          "name": "Meta Platforms",
          "sector": "Communication Services / Interactive Media",
          "currency": "USD",
          "refPrice": 725.93,
          "refDate": "2026-10-01",
          "buyLow": 715.46,
          "buyHigh": 731.16,
          "target": 756.02,
          "stop": 703.69,
          "risk": "Medium",
          "thesis": "Deutsche Bank named Meta one of its top picks for the next leg of the AI trade on 1 Oct, and the stock is consolidating 7% below its high after a 25% month.",
          "reasons": [
            "On 1 Oct Deutsche Bank named Meta among nine tech stocks it expects to lead the next phase of the AI trade, favouring companies already turning AI agents into revenue.",
            "Meta's AI push is gaining traction: the Muse agent launched on 8 Sep and topped the iOS App Store, and Meta has since launched an enterprise AI platform. It's beating the S&P 500 by 25.0 pts over 1 month and 22.1 pts over 3 months.",
            "The setup is a pause, not a spike: at $725.93 (1 Oct) it's 6.9% below its $779.82 high and 1.4 ATR above its 20-day average ($690.05), with ATR 3.6%."
          ],
          "data": [
            [
              "Close (10/01)",
              "$725.93"
            ],
            [
              "3-month vs index",
              "+22.1 pts"
            ],
            [
              "Deutsche Bank",
              "Top AI pick (10/01)"
            ],
            [
              "ATR",
              "3.6% of price"
            ]
          ],
          "watch": "Capex worries (2026 capex floor raised to $130B) and a jobs-report jump in yields could hit megacap tech. It's also in this week's weekly list, so don't double up on size. Skip it if it opens outside $715.46–731.16.",
          "sources": [
            [
              "Yahoo Finance – Deutsche Bank picks Meta, ServiceNow for next AI trade leg",
              "https://finance.yahoo.com/technology/ai/articles/deutsche-bank-picks-meta-servicenow-125916376.html"
            ],
            [
              "Quartz – Deutsche Bank names Meta, ServiceNow, and 7 other tech stocks to lead next AI trade leg",
              "https://qz.com/deutsche-bank-meta-servicenow-tech-stocks-ai-trade-100126"
            ],
            [
              "Yahoo Finance – Meta launches enterprise AI platform",
              "https://finance.yahoo.com/technology/ai/articles/meta-launches-enterprise-ai-platform-224822918.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 725.93,
            "date": "2026-10-01",
            "researchPrice": 725.93,
            "researchDate": "2026-10-01",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $16,762M (min $50M), price $725.93"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $690.05"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +25.0 pts (min +0.0)"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+39.5% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.6% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.6,
            "sma20": 690.05,
            "sma50": 622.6,
            "sma200": 627.98,
            "rs1m": 25.02,
            "rs3m": 22.09,
            "fromHigh52": -6.91,
            "fromLow52": 39.53,
            "avgValue20": 16761964318,
            "extAtr": 1.37
          }
        }
      ],
      "marketSources": [
        [
          "CNBC – The September jobs report will be released Friday. Here's what to expect (Oct 1, 2026)",
          "https://www.cnbc.com/2026/10/01/the-september-jobs-report-will-be-released-friday-heres-what-to-expect.html"
        ],
        [
          "Yahoo Finance – Stock market today, Oct 1: Dow, S&P 500, Nasdaq stage comeback as Treasury yields fall",
          "https://finance.yahoo.com/markets/live/stock-market-today-thursday-oct-1-dow-sp-500-nasdaq-080602402.html"
        ],
        [
          "ZeeBiz – NSE/BSE holidays October 2026",
          "https://www.zeebiz.com/market-news/news-stock-market-holiday-october-2026-nse-bse-to-remain-closed-for-11-days-check-full-list-402881"
        ]
      ]
    },
    {
      "id": "2026-10-01-daily-v2",
      "horizon": "daily",
      "date": "2026-10-01",
      "horizonDays": 1,
      "expires": "2026-10-01",
      "criteriaVersion": "2026-09-30",
      "revisionOf": "2026-10-01-daily",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7651.54,
          "summary": "Risk-on: the S&P 500 closed at 7,651.54 on 2026-09-30, above its 50-day (7,648) and 200-day (7,217) averages, though it slipped 0.25% on the day and 0.5% for September as the 30-year Treasury yield hit its highest since 2002. Data caveat: the market snapshot's US stock closes are from 29 Sep (the 30 Sep session hadn't loaded yet), so the buy zones are anchored to 29 Sep; the Market data job re-anchors any pick whose real 30 Sep close differs by more than 0.3%. Only two names had a fresh, dated catalyst plus a clean chart, so the list is short: Nvidia (record $150B buyback, 28 Sep) and Arista (new Bernstein Outperform, 30 Sep). Micron's beat-and-raise after the 30 Sep close supports AI hardware broadly. Nike reports after today's close, so it was left out. There aren't yet 20 finished daily picks to measure hit rates against."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22620.45,
          "summary": "Risk-off: the Nifty 50 closed at 22,620.45 on 2026-09-30, below both its 50-day (23,902) and 200-day (24,373) averages (3-month -6.4%), with FIIs selling. Only stocks beating the falling index with a dated catalyst qualify, so this list is shorter than usual. NSE is closed Fri 2 Oct (Gandhi Jayanti)."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "NVDA",
          "yahoo": "NVDA",
          "name": "Nvidia",
          "sector": "Information Technology / Semiconductors",
          "currency": "USD",
          "refPrice": 228.38,
          "refDate": "2026-09-30",
          "buyLow": 225.96,
          "buyHigh": 229.59,
          "target": 235.34,
          "stop": 223.24,
          "risk": "Low–Medium",
          "thesis": "A record $150 billion buyback (28 Sep) puts a large, steady buyer under a 3-month leader that is consolidating just above its 20-day average.",
          "reasons": [
            "On 28 Sep Nvidia's board added $150B to its repurchase authorization, the largest increase on record, leaving $235B to spend through fiscal 2028. It bought back $39B in the first half of fiscal 2027 alone.",
            "It's beating the S&P 500 by 11.3 pts over 3 months and 4.9 pts over 1 month, and at $227.21 it sits only 0.8 ATR above its 20-day average ($222.64), so it isn't overextended.",
            "Micron's results after the 30 Sep close ($54.2B revenue vs $51.1B expected, Q1 guide ~$61.5B) and its higher fiscal-2027 capex point to AI data-center demand holding up."
          ],
          "data": [
            [
              "Close (09/29)",
              "$227.21"
            ],
            [
              "3-month vs index",
              "+11.3 pts"
            ],
            [
              "Buyback added",
              "$150B (total $235B)"
            ],
            [
              "ATR",
              "2.65% of price"
            ]
          ],
          "watch": "Long-dated Treasury yields are near 24-year highs, and a further jump could hit high-valuation tech. Skip it if it opens outside $224.80–228.41. Don't chase a gap up.",
          "sources": [
            [
              "CNBC – Nvidia share buyback plan gets $150 billion boost (Sep 28, 2026)",
              "https://www.cnbc.com/2026/09/28/nvidia-share-buyback-plan-gets-150-billion-boost.html"
            ],
            [
              "Reuters via Investing.com – Nvidia boosts share buyback by record $150 billion",
              "https://www.investing.com/news/stock-market-news/nvidia-adds-150-billion-to-existing-share-repurchase-plan-4919956"
            ],
            [
              "CNBC – Micron Q4 fiscal 2026 earnings report (Sep 30, 2026)",
              "https://www.cnbc.com/2026/09/30/micron-mu-q4-earnings-report-2026.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 228.38,
            "date": "2026-09-30",
            "researchPrice": 227.21,
            "researchDate": "2026-09-29",
            "diffPct": -0.51,
            "original": {
              "refPrice": 227.21,
              "refDate": "2026-09-29",
              "buyLow": 224.8,
              "buyHigh": 228.41,
              "target": 234.13,
              "stop": 222.1
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $25,215M (min $50M), price $228.38"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $223.19"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +3.9 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+39.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.9 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.61% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.61,
            "sma20": 223.19,
            "sma50": 217.4,
            "sma200": 200.15,
            "rs1m": 3.89,
            "rs3m": 13.34,
            "fromHigh52": -3.45,
            "fromLow52": 39.03,
            "avgValue20": 25214969116
          }
        },
        {
          "market": "US",
          "symbol": "ANET",
          "yahoo": "ANET",
          "name": "Arista Networks",
          "sector": "Information Technology / Networking",
          "currency": "USD",
          "refPrice": 203.59,
          "refDate": "2026-09-30",
          "buyLow": 200.63,
          "buyHigh": 205.08,
          "target": 212.11,
          "stop": 197.29,
          "risk": "Medium",
          "thesis": "Bernstein started coverage at Outperform with a $250 target on 30 Sep, and the stock has pulled back about 6% from its high while staying above its 20-day average.",
          "reasons": [
            "On 30 Sep Bernstein initiated Arista at Outperform with a $250 target (about 23% above the $202.86 close), calling it a key beneficiary of growing AI cluster networks at customers such as Microsoft and Meta.",
            "It's a 3-month leader (+17.2 pts vs the S&P 500) now 5.6% below its 52-week high of $214.89 and only 0.7 ATR above its 20-day average ($197.41): a pullback, not a spike.",
            "Fundamentals back it up: Q2 revenue was $3.04B (+37.7% YoY, first $3B quarter) vs $2.83B expected, and the 2026 outlook was raised to about $12.6B, with at least $3.5B from AI fabrics."
          ],
          "data": [
            [
              "Close (09/29)",
              "$202.86"
            ],
            [
              "3-month vs index",
              "+17.2 pts"
            ],
            [
              "Bernstein target",
              "$250 (Outperform, 09/30)"
            ],
            [
              "ATR",
              "3.64% of price"
            ]
          ],
          "watch": "Insiders keep selling under 10b5-1 plans (the CEO's trusts sold $13.2M at about $211 on 25 Sep), which can cap rallies, and a rise in yields would hit richly valued AI names. Skip it if it opens outside $199.91–204.34.",
          "sources": [
            [
              "The Globe and Mail – U.S. Analyst Updates: September 30th, 2026",
              "https://www.theglobeandmail.com/investing/markets/stocks/NEE/pressreleases/4888455/us-analyst-updates-september-30th-2026/"
            ],
            [
              "Yahoo Finance – Arista Networks (ANET) Draws Fresh AI Attention, Is The Stock Still Cheap?",
              "https://finance.yahoo.com/markets/stocks/articles/arista-networks-anet-draws-fresh-141004505.html"
            ],
            [
              "Investing.com – Arista Networks CEO Ullal sells $13.2m in shares from trusts",
              "https://www.investing.com/news/insider-trading-news/arista-networks-ceo-ullal-sells-132m-in-shares-from-trusts-93CH-4923893"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 203.59,
            "date": "2026-09-30",
            "researchPrice": 202.86,
            "researchDate": "2026-09-29",
            "diffPct": -0.36,
            "original": {
              "refPrice": 202.86,
              "refDate": "2026-09-29",
              "buyLow": 199.91,
              "buyHigh": 204.34,
              "target": 211.35,
              "stop": 196.58
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $950M (min $50M), price $203.59"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $198.13"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +4.5 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+77.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.8 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.53% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.66 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.53,
            "sma20": 198.13,
            "sma50": 192.21,
            "sma200": 158.11,
            "rs1m": 4.49,
            "rs3m": 19.94,
            "fromHigh52": -5.26,
            "fromLow52": 77.78,
            "avgValue20": 950146774
          }
        },
        {
          "market": "IN",
          "symbol": "COALINDIA",
          "yahoo": "COALINDIA.NS",
          "name": "Coal India",
          "sector": "Energy / Coal",
          "currency": "INR",
          "refPrice": 425.0,
          "refDate": "2026-09-30",
          "buyLow": 421.95,
          "buyHigh": 426.5,
          "target": 433.75,
          "stop": 418.5,
          "risk": "Low–Medium",
          "thesis": "Monthly production and dispatch data are due on the session day, and the stock is already beating the index.",
          "reasons": [
            "Coal India files September production and offtake in the first days of October. In August, offtake (dispatches) rose 5.5% YoY to 60.6 MT even as output fell. Easing monsoon rains usually lift both.",
            "It's up 5.8% in a month against a falling Nifty (+11.9 pts relative), trading just above its 20-day average with low volatility (ATR 1.8%).",
            "It's a defensive PSU with a high dividend, the kind of stock that holds up when FIIs are selling."
          ],
          "data": [
            [
              "Close (09/30)",
              "₹425.0"
            ],
            [
              "3-month vs index",
              "1-month vs index +11.9 pts"
            ],
            [
              "Aug offtake",
              "60.6 MT (+5.5% YoY)"
            ],
            [
              "ATR",
              "1.8% of price"
            ]
          ],
          "watch": "If September production disappoints, the stock can slip. Skip it if it opens outside ₹421.95–426.50. It's the last session before a 3-day holiday, so expect some profit-taking late in the day.",
          "sources": [
            [
              "Discovery Alert – Coal India August 2026 offtake vs production",
              "https://discoveryalert.com/analysis/coal-india-august-offtake-production-risk-september-2026/"
            ],
            [
              "Ministry of Coal – Production and supplies",
              "https://coal.gov.in/major-statistics/production-and-supplies"
            ],
            [
              "Business Standard – Stock market live, Sep 30, 2026",
              "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 425.0,
            "date": "2026-09-30",
            "researchPrice": 425.0,
            "researchDate": "2026-09-30",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹332 cr (min ₹100 cr), price ₹425.0"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg ₹422.38"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +11.9 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+15.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.79% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.66 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.79,
            "sma20": 422.38,
            "sma50": 415.42,
            "sma200": 433.92,
            "rs1m": 11.89,
            "rs3m": 3.31,
            "fromHigh52": -13.49,
            "fromLow52": 14.99,
            "avgValue20": 3319540442
          }
        },
        {
          "market": "IN",
          "symbol": "ADANIPORTS",
          "yahoo": "ADANIPORTS.NS",
          "name": "Adani Ports & SEZ",
          "sector": "Infrastructure / Ports",
          "currency": "INR",
          "refPrice": 1798.3,
          "refDate": "2026-09-30",
          "buyLow": 1781.55,
          "buyHigh": 1806.65,
          "target": 1846.45,
          "stop": 1762.75,
          "risk": "Medium",
          "thesis": "September cargo numbers are due around 1–3 Oct, after a record August.",
          "reasons": [
            "August cargo was an all-time monthly record of 50 MMT (+19% YoY; dry cargo +25%, containers +15%). Year to date it's +16%.",
            "It trades above its 20-, 50- and 200-day averages, 4.9% below its 52-week high, and beat the Nifty by 15 pts over the last month.",
            "Brokers expect FY27 volumes and profit to grow faster than peers (Business Standard, 23 Sep)."
          ],
          "data": [
            [
              "Close (09/30)",
              "₹1,798.3"
            ],
            [
              "3-month vs index",
              "1-month vs index +15.2 pts"
            ],
            [
              "Aug cargo",
              "50 MMT (+19% YoY)"
            ],
            [
              "From 52-week high",
              "-4.9%"
            ]
          ],
          "watch": "Adani-group headlines can move it sharply. If the September number disappoints or the release slips past Oct 1, the trade has no trigger. Skip it if it opens outside ₹1,781.55–1,806.65.",
          "sources": [
            [
              "Business Standard – Adani Ports cargo +19% in Aug'26",
              "https://www.business-standard.com/markets/capital-market-news/adani-ports-handled-cargo-volumes-jump-19-yoy-in-aug-26-126090200186_1.html"
            ],
            [
              "Business Standard – Adani Ports may outperform on FY27 volumes",
              "https://www.business-standard.com/amp/markets/news/adani-ports-may-outperform-on-volume-profit-growth-expectations-for-fy27-126092301115_1.html"
            ],
            [
              "Baird Maritime – Adani Ports Q1 profit",
              "https://www.bairdmaritime.com/shipping/ports/adani-ports-beats-global-trade-headwinds-with-higher-q1-2026-profit"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1798.3,
            "date": "2026-09-30",
            "researchPrice": 1798.3,
            "researchDate": "2026-09-30",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹356 cr (min ₹100 cr), price ₹1,798.3"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg ₹1760.85"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +15.2 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+39.2% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.9 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.33% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.67 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.33,
            "sma20": 1760.85,
            "sma50": 1722.2,
            "sma200": 1631.75,
            "rs1m": 15.21,
            "rs3m": 2.38,
            "fromHigh52": -4.91,
            "fromLow52": 39.19,
            "avgValue20": 3557101243
          }
        }
      ],
      "marketSources": [
        [
          "Business Standard – Stock market live, Sep 30, 2026",
          "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
        ],
        [
          "ZeeBiz – NSE/BSE holidays October 2026",
          "https://www.zeebiz.com/market-news/news-stock-market-holiday-october-2026-nse-bse-to-remain-closed-for-11-days-check-full-list-402881"
        ],
        [
          "Yahoo Finance – Stock market news for Sep 29, 2026",
          "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html"
        ]
      ]
    },
    {
      "id": "2026-10-01-weekly",
      "horizon": "weekly",
      "date": "2026-10-01",
      "horizonDays": 7,
      "expires": "2026-10-08",
      "criteriaVersion": "2026-09-30",
      "revisionOf": "2026-09-30-weekly",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7670.84,
          "summary": "Risk-on: the S&P 500 closed at 7,670.84 on 2026-09-29, above its rising 50-day average (1-month -0.5%, 3-month +2.3%). Leadership is in software/AI, refiners and healthcare. Picks come only from stocks that pass every rule check and have a fresh analyst or business catalyst. Prices are exact exchange closes and will be re-anchored to the 30 Sep close automatically after the US session."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22620.45,
          "summary": "Risk-off: the Nifty 50 closed at 22,620.45 on 2026-09-30, below both its 50-day (23,902) and 200-day (24,373) averages (3-month -6.4%), with FIIs selling. Only stocks beating the falling index with a dated catalyst qualify, so this list is shorter than usual. NSE is closed Fri 2 Oct (Gandhi Jayanti)."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "META",
          "yahoo": "META",
          "name": "Meta Platforms",
          "sector": "Communication Services",
          "currency": "USD",
          "refPrice": 725.18,
          "refDate": "2026-09-30",
          "buyLow": 711.52,
          "buyHigh": 732.0,
          "target": 783.19,
          "stop": 687.65,
          "risk": "Medium",
          "thesis": "A 3-month leader that bounced right back from a pullback, with a fresh target raise.",
          "reasons": [
            "Monness Crespi raised its target to $830 from $730 on 28 Sep (Buy). Consensus is about $809.",
            "It's up 31% over 3 months (+29 pts vs the S&P 500), above a rising 50-day average and 5% below its 52-week high.",
            "It closed +3.2% on 29 Sep after a 4.8% dip, a sign buyers are defending the uptrend."
          ],
          "data": [
            [
              "Close (09/29)",
              "$738.79"
            ],
            [
              "3-month vs index",
              "+28.9 pts"
            ],
            [
              "Monness target",
              "$830 (from $730)"
            ],
            [
              "From 52-week high",
              "-5.3%"
            ]
          ],
          "watch": "Worries about AI spending can quickly pull mega-cap tech down. Q3 results come in late October, after this window.",
          "sources": [
            [
              "Tradingkey – META closed up 3.26% on Sep 29",
              "https://www.tradingkey.com/news/market-movers/262192693-market-movers-meta-20260929"
            ],
            [
              "Daily Trade Alert – Analyst upgrades Sep 28 (Monness $830)",
              "https://dailytradealert.com/2026/09/28/analyst-upgrades-and-downgrades-for-monday-9-28/"
            ],
            [
              "Yahoo Finance – Stock market news for Sep 29, 2026",
              "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 725.18,
            "date": "2026-09-30",
            "researchPrice": 738.79,
            "researchDate": "2026-09-29",
            "diffPct": 1.88,
            "original": {
              "refPrice": 738.79,
              "refDate": "2026-09-29",
              "buyLow": 724.88,
              "buyHigh": 745.74,
              "target": 797.89,
              "stop": 700.55
            },
            "status": "adjusted",
            "corrected": {
              "from": 736.54,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $16,801M (min $50M), price $725.18"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $620.62, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +16.1 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+39.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.73% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.73,
            "sma20": 683.39,
            "sma50": 620.62,
            "sma200": 627.57,
            "rs1m": 27.15,
            "rs3m": 16.07,
            "fromHigh52": -7.01,
            "fromLow52": 39.39,
            "avgValue20": 16801213729
          }
        },
        {
          "market": "US",
          "symbol": "PLTR",
          "yahoo": "PLTR",
          "name": "Palantir Technologies",
          "sector": "Information Technology",
          "currency": "USD",
          "refPrice": 187.05,
          "refDate": "2026-09-30",
          "buyLow": 183.79,
          "buyHigh": 188.68,
          "target": 200.9,
          "stop": 178.09,
          "risk": "High",
          "thesis": "The strongest large cap in the US screen, with its third target raise of the year from UBS.",
          "reasons": [
            "After AIPCon, UBS raised its target to $250 (Buy), its third increase this year ($200 → $220 → $250), citing record bookings and 157% net dollar retention.",
            "The US Army awarded a $48.1M contract on 17 Sep to replace nine ammunition-tracking systems.",
            "It's up about 58 pts vs the S&P 500 over 3 months and above a rising 50-day average."
          ],
          "data": [
            [
              "Close (09/29)",
              "$186.97"
            ],
            [
              "3-month vs index",
              "+58.0 pts"
            ],
            [
              "UBS target",
              "$250"
            ],
            [
              "Army award",
              "$48.1M (17 Sep)"
            ]
          ],
          "watch": "It's very expensive, so any risk-off day hits it hard (ATR 3.5%). Use a small position and honor the stop.",
          "sources": [
            [
              "TheStreet – UBS resets Palantir price target",
              "https://www.thestreet.com/investing/stocks/ubs-raises-palantir-stock-price-target-for-rest-of-2026"
            ],
            [
              "Yahoo Finance – UBS resets Palantir target for 2026",
              "https://finance.yahoo.com/markets/stocks/articles/ubs-resets-palantir-stock-price-160300094.html"
            ],
            [
              "Palantir – Press releases",
              "https://www.palantir.com/newsroom/press-releases/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 187.05,
            "date": "2026-09-30",
            "researchPrice": 186.97,
            "researchDate": "2026-09-29",
            "diffPct": -0.04,
            "original": {
              "refPrice": 186.97,
              "refDate": "2026-09-29",
              "buyLow": 183.71,
              "buyHigh": 188.6,
              "target": 200.81,
              "stop": 178.01
            },
            "status": "ok",
            "corrected": {
              "from": 189.68,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $4,478M (min $50M), price $187.05"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $167.16, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +46.5 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+75.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.39% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.39,
            "sma20": 178.85,
            "sma50": 167.16,
            "sma200": 152.04,
            "rs1m": 0.81,
            "rs3m": 46.52,
            "fromHigh52": -9.86,
            "fromLow52": 75.85,
            "avgValue20": 4477976528
          }
        },
        {
          "market": "US",
          "symbol": "PSX",
          "yahoo": "PSX",
          "name": "Phillips 66",
          "sector": "Energy / Refining",
          "currency": "USD",
          "refPrice": 255.31,
          "refDate": "2026-09-30",
          "buyLow": 251.11,
          "buyHigh": 257.41,
          "target": 273.14,
          "stop": 243.77,
          "risk": "Medium",
          "thesis": "The refining boom has one more beneficiary, with two target raises in September.",
          "reasons": [
            "BMO raised its target to $310 from $260 (17 Sep, Outperform), and UBS to $300 from $235 (8 Sep, Buy).",
            "Q2 net income was $3.85B, up from $877M a year ago, its strongest quarter since 2022, on refining margins inflated by the US–Iran conflict.",
            "It's up about 47 pts vs the S&P 500 over 3 months and above a rising 50-day average."
          ],
          "data": [
            [
              "Close (09/29)",
              "$252.25"
            ],
            [
              "3-month vs index",
              "+46.9 pts"
            ],
            [
              "BMO / UBS targets",
              "$310 / $300"
            ],
            [
              "Q2 net income",
              "$3.85B"
            ]
          ],
          "watch": "A Gulf ceasefire or a US diesel-export ban would compress margins fast. It moves with MPC and VLO, so don't hold several refiners in size.",
          "sources": [
            [
              "Yahoo Finance – BMO sees Phillips 66 breaking into new highs",
              "https://finance.yahoo.com/markets/stocks/articles/bmo-sees-phillips-66-psx-163523482.html"
            ],
            [
              "Yahoo Finance – UBS sees Phillips 66 blazing past its record high",
              "https://finance.yahoo.com/markets/stocks/articles/ubs-sees-phillips-66-psx-151252128.html"
            ],
            [
              "SEC – Phillips 66 Q2 2026 10-Q",
              "https://www.sec.gov/Archives/edgar/data/0001534701/000153470126000032/psx-20260630.htm"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 255.31,
            "date": "2026-09-30",
            "researchPrice": 252.25,
            "researchDate": "2026-09-29",
            "diffPct": -1.2,
            "original": {
              "refPrice": 252.25,
              "refDate": "2026-09-29",
              "buyLow": 248.1,
              "buyHigh": 254.32,
              "target": 269.87,
              "stop": 240.85
            },
            "status": "adjusted",
            "corrected": {
              "from": 258.16,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $877M (min $50M), price $255.31"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $238.44, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +44.1 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+101.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.24% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.24,
            "sma20": 259.27,
            "sma50": 238.44,
            "sma200": 182.79,
            "rs1m": 3.99,
            "rs3m": 44.06,
            "fromHigh52": -7.87,
            "fromLow52": 101.44,
            "avgValue20": 876725782
          }
        },
        {
          "market": "US",
          "symbol": "VEEV",
          "yahoo": "VEEV",
          "name": "Veeva Systems",
          "sector": "Health Care / Software",
          "currency": "USD",
          "refPrice": 285.45,
          "refDate": "2026-09-30",
          "buyLow": 281.01,
          "buyHigh": 287.66,
          "target": 304.3,
          "stop": 273.26,
          "risk": "Medium",
          "thesis": "Fresh upgrades plus a new top-20 pharma customer.",
          "reasons": [
            "CFRA upgraded it to Buy on 18 Sep. Another broker moved it to Overweight with a target raised from $290 to $330.",
            "It announced a new top-20 biopharma customer commitment on 23 Sep, and the stock rose 3.8% that day.",
            "It's up about 55 pts vs the S&P 500 over 3 months and above a rising 50-day average."
          ],
          "data": [
            [
              "Close (09/29)",
              "$278.57"
            ],
            [
              "3-month vs index",
              "+54.7 pts"
            ],
            [
              "New customer",
              "Top-20 biopharma (23 Sep)"
            ],
            [
              "Consensus target",
              "≈ $297"
            ]
          ],
          "watch": "Morgan Stanley stays at Hold (19 Sep). The stock is close to consensus targets, so upside may be limited without new news.",
          "sources": [
            [
              "GuruFocus – Veeva after 3.8% rally",
              "https://www.gurufocus.com/news/9094268/is-it-too-late-to-buy-veeva-systems-inc-veev-after-38-rally-gf-value-says-undervalued"
            ],
            [
              "StockTitan – Veeva news",
              "https://www.stocktitan.net/news/VEEV/"
            ],
            [
              "The Globe and Mail – Veeva stock and news",
              "https://www.theglobeandmail.com/investing/markets/stocks/VEEV-N/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 285.45,
            "date": "2026-09-30",
            "researchPrice": 278.57,
            "researchDate": "2026-09-29",
            "diffPct": -2.41,
            "original": {
              "refPrice": 278.57,
              "refDate": "2026-09-29",
              "buyLow": 274.24,
              "buyHigh": 280.73,
              "target": 296.96,
              "stop": 266.67
            },
            "status": "adjusted",
            "corrected": {
              "from": 286.13,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $419M (min $50M), price $285.45"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $246.91, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +52.7 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+92.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.7 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.13% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.13,
            "sma20": 270.14,
            "sma50": 246.91,
            "sma200": 200.67,
            "rs1m": 0.37,
            "rs3m": 52.7,
            "fromHigh52": -8.07,
            "fromLow52": 92.81,
            "avgValue20": 419395081
          }
        },
        {
          "market": "IN",
          "symbol": "ZYDUSLIFE",
          "yahoo": "ZYDUSLIFE.NS",
          "name": "Zydus Lifesciences",
          "sector": "Healthcare / Pharma",
          "currency": "INR",
          "refPrice": 1162.0,
          "refDate": "2026-09-30",
          "buyLow": 1146.9,
          "buyHigh": 1169.55,
          "target": 1226.1,
          "stop": 1120.55,
          "risk": "Medium",
          "thesis": "A clean US FDA inspection removes a key risk for the fifth-largest US generics supplier.",
          "reasons": [
            "The US FDA inspected its New Jersey pharmacovigilance office from 22–25 Sep with zero observations (disclosed 26 Sep).",
            "It won two injectables with 180-day exclusivity in August (Indocyanine Green, Ascorbic Acid).",
            "It's up about 8 pts vs the Nifty over 3 months and above a rising 50-day average in a falling market."
          ],
          "data": [
            [
              "Close (09/30)",
              "₹1,162.0"
            ],
            [
              "3-month vs index",
              "+8.3 pts"
            ],
            [
              "FDA inspection",
              "Nil observations (26 Sep)"
            ],
            [
              "Exclusivities",
              "2 × 180-day CGT (Aug)"
            ]
          ],
          "watch": "It fell 3.2% on 30 Sep. If it breaks below ₹1,120.55, the setup has failed. Pharma margins are under pressure sector-wide.",
          "sources": [
            [
              "Business Upturn – Zydus USFDA inspection nil observations",
              "https://businessupturn.com/business/usfda-inspection-of-zydus-lifesciences-new-jersey-office-concludes-successfully-with-nil-observations/"
            ],
            [
              "MarketScreener – Zydus USFDA approvals",
              "https://www.marketscreener.com/news/zydus-lifesciences-limited-receives-final-approval-from-usfda-for-leuprolide-acetate-injection-14-m-ce7d51dbdc89ff2c"
            ],
            [
              "Business Standard – Stock market live, Sep 30, 2026",
              "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1162.0,
            "date": "2026-09-30",
            "researchPrice": 1162.0,
            "researchDate": "2026-09-30",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹169 cr (min ₹100 cr), price ₹1,162.0"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg ₹1140.66, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +8.3 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+39.1% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.6% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.6,
            "sma20": 1150.28,
            "sma50": 1140.66,
            "sma200": 1012.55,
            "rs1m": 5.56,
            "rs3m": 8.31,
            "fromHigh52": -5.69,
            "fromLow52": 39.08,
            "avgValue20": 1688957930
          }
        },
        {
          "market": "IN",
          "symbol": "SAIL",
          "yahoo": "SAIL.NS",
          "name": "Steel Authority of India",
          "sector": "Metals / Steel",
          "currency": "INR",
          "refPrice": 181.49,
          "refDate": "2026-09-30",
          "buyLow": 178.55,
          "buyHigh": 182.95,
          "target": 194.0,
          "stop": 173.4,
          "risk": "Medium",
          "thesis": "A second steel price hike is expected soon, and metals are one of the few sectors rising.",
          "reasons": [
            "BusinessToday (21 Sep): SAIL is likely to raise prices by about ₹1,000/t on flat and long products, after an earlier ₹1,100/t hike on flats, citing post-monsoon demand.",
            "India Ratings upgraded SAIL to AA+ (Stable) on 3 Sep.",
            "It's up about 13 pts vs the Nifty over 3 months and above a rising 50-day average. Metals outperformed on 23 Sep and 29 Sep."
          ],
          "data": [
            [
              "Close (09/30)",
              "₹181.49"
            ],
            [
              "3-month vs index",
              "+13.3 pts"
            ],
            [
              "Expected hike",
              "≈ ₹1,000/t"
            ],
            [
              "Credit rating",
              "IND AA+ (upgraded 3 Sep)"
            ]
          ],
          "watch": "It's a high-beta PSU (ATR 3.2%). If the hike is delayed or China cuts export prices, it can reverse quickly.",
          "sources": [
            [
              "BusinessToday – SAIL likely to hike steel prices again",
              "https://www.businesstoday.in/markets/stocks/story/sail-likely-to-hike-steel-prices-again-say-sources-556783-2026-09-21"
            ],
            [
              "Business Standard – Nifty Metal up; SAIL soars",
              "https://www.business-standard.com/amp/markets/news/nifty-metal-index-up-over-1-sail-welpsun-corp-soar-up-to-4-here-s-why-126092300387_1.html"
            ],
            [
              "BusinessToday – SAIL share price",
              "https://www.businesstoday.in/stocks/steel-authority-of-india-ltd-sail-share-price-361308"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 181.49,
            "date": "2026-09-30",
            "researchPrice": 181.49,
            "researchDate": "2026-09-30",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹280 cr (min ₹100 cr), price ₹181.49"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg ₹178.69, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +13.3 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+46.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.2 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.24% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.24,
            "sma20": 182.41,
            "sma50": 178.69,
            "sma200": 168.98,
            "rs1m": 0.1,
            "rs3m": 13.26,
            "fromHigh52": -13.45,
            "fromLow52": 46.36,
            "avgValue20": 2801097661
          }
        }
      ],
      "marketSources": [
        [
          "Business Standard – Stock market live, Sep 30, 2026",
          "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
        ],
        [
          "ZeeBiz – NSE/BSE holidays October 2026",
          "https://www.zeebiz.com/market-news/news-stock-market-holiday-october-2026-nse-bse-to-remain-closed-for-11-days-check-full-list-402881"
        ],
        [
          "Yahoo Finance – Stock market news for Sep 29, 2026",
          "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html"
        ]
      ]
    },
    {
      "id": "2026-10-01-monthly",
      "horizon": "monthly",
      "date": "2026-10-01",
      "horizonDays": 30,
      "expires": "2026-10-31",
      "criteriaVersion": "2026-09-30",
      "revisionOf": "2026-09-30-monthly",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7670.84,
          "summary": "Risk-on: the S&P 500 closed at 7,670.84 on 2026-09-29, above its rising 50-day average (1-month -0.5%, 3-month +2.3%). Leadership is in software/AI, refiners and healthcare. Picks come only from stocks that pass every rule check and have a fresh analyst or business catalyst. Prices are exact exchange closes and will be re-anchored to the 30 Sep close automatically after the US session."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22620.45,
          "summary": "Risk-off: the Nifty 50 closed at 22,620.45 on 2026-09-30, below both its 50-day (23,902) and 200-day (24,373) averages (3-month -6.4%), with FIIs selling. Only stocks beating the falling index with a dated catalyst qualify, so this list is shorter than usual. NSE is closed Fri 2 Oct (Gandhi Jayanti)."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "MSFT",
          "yahoo": "MSFT",
          "name": "Microsoft",
          "sector": "Information Technology",
          "currency": "USD",
          "refPrice": 512.9,
          "refDate": "2026-09-30",
          "buyLow": 503.92,
          "buyHigh": 515.89,
          "target": 551.82,
          "stop": 488.95,
          "risk": "Low",
          "thesis": "One of the last holdout analysts turned bullish, and targets are rising, with steady, low-volatility gains.",
          "reasons": [
            "Stifel upgraded it to Buy from Hold on 23 Sep (target $575 from $530), citing Azure growth, Microsoft 365 Copilot adoption and OpenAI-related revenue.",
            "Piper Sandler raised its target to $610 from $550 on 29 Sep. 52 of 55 analysts rate it Buy (avg target ≈ $576).",
            "It's up about 34 pts vs the S&P 500 over 3 months and above a rising 50-day average, with low volatility (ATR 2.3%)."
          ],
          "data": [
            [
              "Close (09/29)",
              "$508.96"
            ],
            [
              "3-month vs index",
              "+34.1 pts"
            ],
            [
              "Stifel",
              "Upgrade to Buy, $575"
            ],
            [
              "Piper target",
              "$610 (29 Sep)"
            ]
          ],
          "watch": "Q1 FY27 results come in late October, inside this window: reassess before the report. AI capex headlines can swing the stock.",
          "sources": [
            [
              "CNBC – Microsoft will get a boost from Azure and Copilot, Stifel says",
              "https://www.cnbc.com/2026/09/23/microsoft-will-get-a-boost-from-azure-and-copilot-stifel-says.html"
            ],
            [
              "Bloomberg – Microsoft rises as one of last analyst holdouts gets bullish",
              "https://www.bloomberg.com/news/articles/2026-09-23/microsoft-rises-as-one-of-last-analyst-holdouts-turns-bullish"
            ],
            [
              "TheStreet – Stifel upgrades Microsoft",
              "https://www.thestreet.com/investing/stocks/stifel-upgrades-microsoft-stock-rating-price-target-msft"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 512.9,
            "date": "2026-09-30",
            "researchPrice": 508.96,
            "researchDate": "2026-09-29",
            "diffPct": -0.77,
            "original": {
              "refPrice": 508.96,
              "refDate": "2026-09-29",
              "buyLow": 500.05,
              "buyHigh": 511.93,
              "target": 547.58,
              "stop": 485.19
            },
            "status": "adjusted",
            "corrected": {
              "from": 518.19,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $10,711M (min $50M), price $512.9"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $482.56, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +31.2 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+46.9% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.1 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.3% of price (max 4.5% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.00 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.3,
            "sma20": 500.5,
            "sma50": 482.56,
            "sma200": 432.45,
            "rs1m": 1.56,
            "rs3m": 31.22,
            "fromHigh52": -7.37,
            "fromLow52": 46.88,
            "avgValue20": 10710936229
          },
          "eventRisk": "Earnings on 2026-10-28, inside the holding window"
        },
        {
          "market": "US",
          "symbol": "TMO",
          "yahoo": "TMO",
          "name": "Thermo Fisher Scientific",
          "sector": "Health Care",
          "currency": "USD",
          "refPrice": 675.05,
          "refDate": "2026-09-30",
          "buyLow": 661.72,
          "buyHigh": 677.17,
          "target": 723.5,
          "stop": 642.43,
          "risk": "Low–Medium",
          "thesis": "A low-volatility healthcare leader with an upgrade and target raises this month.",
          "reasons": [
            "UBS upgraded it to Buy from Neutral (8 Sep), raising its target to $730 from $540. Deutsche Bank raised its target to $720 from $635 (25 Sep).",
            "Management keeps FY26 EPS guidance of $24.93–25.33. The stock is up 47% in a year.",
            "It's up about 33 pts vs the S&P 500 over 3 months, above a rising 50-day average, with ATR of only 2.3%."
          ],
          "data": [
            [
              "Close (09/29)",
              "$679.61"
            ],
            [
              "3-month vs index",
              "+33.3 pts"
            ],
            [
              "UBS",
              "Upgrade to Buy, $730"
            ],
            [
              "Deutsche target",
              "$720 (25 Sep)"
            ]
          ],
          "watch": "Q3 results on 21 Oct fall inside this window: reassess before the report. Bernstein stays at Hold (26 Sep).",
          "sources": [
            [
              "Yahoo Finance – Why analysts are watching Thermo Fisher",
              "https://finance.yahoo.com/news/why-analysts-closely-watching-thermo-020838610.html"
            ],
            [
              "Thermo Fisher – Investor relations",
              "https://ir.thermofisher.com/investors/overview/default.aspx"
            ],
            [
              "Simply Wall St – Thermo Fisher forecast",
              "https://simplywall.st/stocks/us/pharmaceuticals-biotech/nyse-tmo/thermo-fisher-scientific/future"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 675.05,
            "date": "2026-09-30",
            "researchPrice": 679.61,
            "researchDate": "2026-09-29",
            "diffPct": 0.68,
            "status": "adjusted",
            "original": {
              "refPrice": 681.37,
              "refDate": "2026-09-30",
              "buyLow": 667.92,
              "buyHigh": 683.51,
              "target": 730.27,
              "stop": 648.44
            },
            "corrected": {
              "from": 681.37,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $1,472M (min $50M), price $675.05"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $613.28, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +29.2 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+55.1% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+2.1 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.27% of price (max 4.5% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.00 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.27,
            "sma20": 642.25,
            "sma50": 613.28,
            "sma200": 541.81,
            "rs1m": 9.84,
            "rs3m": 29.25,
            "fromHigh52": -1.26,
            "fromLow52": 55.09,
            "avgValue20": 1472330249
          },
          "eventRisk": "Earnings on 2026-10-21, inside the holding window"
        },
        {
          "market": "US",
          "symbol": "MPC",
          "yahoo": "MPC",
          "name": "Marathon Petroleum",
          "sector": "Energy / Refining",
          "currency": "USD",
          "refPrice": 395.42,
          "refDate": "2026-09-30",
          "buyLow": 384.48,
          "buyHigh": 399.06,
          "target": 442.79,
          "stop": 366.27,
          "risk": "Medium",
          "thesis": "The leader in the market's strongest sector, while refining margins sit near records.",
          "reasons": [
            "The US 3-2-1 crack spread was about $73/bbl on 22 Sep, near the all-time record. The August average ($65.61) was the highest monthly figure since 2006.",
            "It's up about 51 pts vs the S&P 500 over 3 months, and within 1 ATR of its 20-day average after a pullback from the Sep high.",
            "Q3 profits will reflect record margins. Results come after this window (early November)."
          ],
          "data": [
            [
              "Close (09/29)",
              "$392.03"
            ],
            [
              "3-month vs index",
              "+51.0 pts"
            ],
            [
              "3-2-1 crack (22 Sep)",
              "$73.12/bbl"
            ],
            [
              "From 52-week high",
              "-9.1%"
            ]
          ],
          "watch": "A Gulf ceasefire or a US diesel-export ban would compress margins fast. Don't also hold PSX (weekly) in size.",
          "sources": [
            [
              "thetrading.tools – 3-2-1 crack spread",
              "https://www.thetrading.tools/crack-spread"
            ],
            [
              "Seeking Alpha – biggest one-month energy gainers (Sep)",
              "https://seekingalpha.com/news/4647494-these-10-energy-stocks-posted-the-biggest-one-month-gains-as-september-ends"
            ],
            [
              "Forbes – Refining stocks soar as crack spread hits record",
              "https://www.forbes.com/sites/garthfriesen/2026/07/23/refining-stocks-soar-as-crack-spread-hits-record-high-in-2026/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 395.42,
            "date": "2026-09-30",
            "researchPrice": 392.03,
            "researchDate": "2026-09-29",
            "diffPct": -0.86,
            "original": {
              "refPrice": 392.03,
              "refDate": "2026-09-29",
              "buyLow": 381.19,
              "buyHigh": 395.64,
              "target": 439.0,
              "stop": 363.13
            },
            "status": "adjusted",
            "corrected": {
              "from": 398.83,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $1,216M (min $50M), price $395.42"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $361.16, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +47.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+144.2% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.2 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.61% of price (max 4.5% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.00 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.61,
            "sma20": 397.95,
            "sma50": 361.16,
            "sma200": 259.36,
            "rs1m": 6.37,
            "rs3m": 47.04,
            "fromHigh52": -8.27,
            "fromLow52": 144.19,
            "avgValue20": 1215955455
          }
        },
        {
          "market": "US",
          "symbol": "GILD",
          "yahoo": "GILD",
          "name": "Gilead Sciences",
          "sector": "Health Care / Biotech",
          "currency": "USD",
          "refPrice": 149.05,
          "refDate": "2026-09-30",
          "buyLow": 146.4,
          "buyHigh": 149.93,
          "target": 160.54,
          "stop": 141.98,
          "risk": "Low–Medium",
          "thesis": "A steady large-cap biotech with its HIV-prevention franchise widening and a raised target.",
          "reasons": [
            "HSBC raised its target to $175 from $155 (10 Sep).",
            "It expanded lenacapavir licensing to a once-yearly PrEP formulation (16 Sep) and agreed a PAHO access pathway for 14 countries (15 Sep).",
            "It's up about 17 pts vs the S&P 500 over 3 months and above a rising 50-day average, with ATR of 2.4%."
          ],
          "data": [
            [
              "Close (09/29)",
              "$151.28"
            ],
            [
              "3-month vs index",
              "+17.4 pts"
            ],
            [
              "HSBC target",
              "$175 (from $155)"
            ],
            [
              "Lenacapavir",
              "Once-yearly PrEP in Phase 3"
            ]
          ],
          "watch": "Q3 results come in late October, inside this window: reassess before them. Drug-pricing policy headlines are the main risk.",
          "sources": [
            [
              "Gilead – Newsroom",
              "https://www.gilead.com/news"
            ],
            [
              "Yahoo Finance – Can lenacapavir power Gilead's next growth phase?",
              "https://finance.yahoo.com/healthcare/articles/lenacapavir-power-gilead-sciences-gild-235203626.html"
            ],
            [
              "CNBC – Gilead quote and news",
              "https://www.cnbc.com/quotes/GILD"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 149.05,
            "date": "2026-09-30",
            "researchPrice": 151.28,
            "researchDate": "2026-09-29",
            "diffPct": 1.5,
            "original": {
              "refPrice": 151.28,
              "refDate": "2026-09-29",
              "buyLow": 148.59,
              "buyHigh": 152.18,
              "target": 162.94,
              "stop": 144.1
            },
            "status": "adjusted",
            "corrected": {
              "from": 150.27,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $883M (min $50M), price $149.05"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $142.57, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +16.1 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+37.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.0 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.35% of price (max 4.5% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.00 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.35,
            "sma20": 149.09,
            "sma50": 142.57,
            "sma200": 136.44,
            "rs1m": 2.3,
            "rs3m": 16.07,
            "fromHigh52": -5.24,
            "fromLow52": 37.42,
            "avgValue20": 883304932
          },
          "eventRisk": "Earnings on 2026-10-29, inside the holding window"
        },
        {
          "market": "IN",
          "symbol": "PAYTM",
          "yahoo": "PAYTM.NS",
          "name": "One 97 Communications (Paytm)",
          "sector": "Financial Services / Fintech",
          "currency": "INR",
          "refPrice": 1678.0,
          "refDate": "2026-09-30",
          "buyLow": 1633.15,
          "buyHigh": 1692.95,
          "target": 1872.4,
          "stop": 1558.35,
          "risk": "High",
          "thesis": "A new UPI merchant fee starts inside this window, and the leader has pulled back from its high.",
          "reasons": [
            "NPCI will apply a 0.4% merchant discount rate on person-to-merchant UPI payments above ₹2,000 from 15 Oct 2026. That's a direct revenue line for Paytm.",
            "Bernstein made it a top pick (target ₹2,200). Jefferies raised to ₹2,100 from ₹1,600, and Ambit rates it Buy (₹2,100).",
            "It's up about 44 pts vs the Nifty over 3 months and has pulled back about 7% from its 11 Sep post-listing high of ₹1,807.50."
          ],
          "data": [
            [
              "Close (09/30)",
              "₹1,678.0"
            ],
            [
              "3-month vs index",
              "+43.8 pts"
            ],
            [
              "UPI MDR",
              "0.4% from 15 Oct"
            ],
            [
              "Broker targets",
              "₹2,100–2,200"
            ]
          ],
          "watch": "It's volatile (ATR 3.6%) and depends on the regulator. If the MDR start is delayed, the thesis weakens. Q2 results come in late October.",
          "sources": [
            [
              "BusinessToday – Paytm hits 52-week high; brokerage expects IPO price",
              "https://www.businesstoday.in/markets/stocks/story/paytm-shares-hit-52-week-high-brokerage-expects-stock-to-cross-ipo-price-554904-2026-09-11"
            ],
            [
              "BusinessToday – Paytm shares to rally to ₹1,800?",
              "https://www.businesstoday.in/markets/story/paytm-shares-to-rally-to-rs-1800-analyst-decode-strong-momentum-should-you-buy-551502-2026-08-26"
            ],
            [
              "BusinessToday – Paytm jumps 5%, company clarifies on AI report",
              "https://www.businesstoday.in/markets/stocks/story/paytm-shares-jump-5-to-hit-52-week-high-company-clarifies-on-ai-report-554234-2026-09-09"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1678.0,
            "date": "2026-09-30",
            "researchPrice": 1678.0,
            "researchDate": "2026-09-30",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹744 cr (min ₹100 cr), price ₹1,678.0"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg ₹1605.66, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +43.8 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+80.3% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.9 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.56% of price (max 4.5% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.00 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.56,
            "sma20": 1733.73,
            "sma50": 1605.66,
            "sma200": 1273.44,
            "rs1m": 8.78,
            "rs3m": 43.81,
            "fromHigh52": -9.57,
            "fromLow52": 80.31,
            "avgValue20": 7442140171
          }
        },
        {
          "market": "IN",
          "symbol": "LAURUSLABS",
          "yahoo": "LAURUSLABS.NS",
          "name": "Laurus Labs",
          "sector": "Healthcare / Pharma CDMO",
          "currency": "INR",
          "refPrice": 1980.0,
          "refDate": "2026-09-30",
          "buyLow": 1945.25,
          "buyHigh": 1991.6,
          "target": 2130.5,
          "stop": 1887.4,
          "risk": "Medium",
          "thesis": "Record highs backed by earnings, with Q2 results due inside the window.",
          "reasons": [
            "Q1 FY27 revenue was ₹2,026 cr (+29% YoY) and net profit ₹368 cr (+126% YoY).",
            "It set successive all-time highs on 21–24 Sep (₹2,050) and closed at ₹1,980 on 30 Sep, a shallow pullback.",
            "It's up about 35 pts vs the Nifty over 3 months and above a rising 50-day average, in a falling market."
          ],
          "data": [
            [
              "Close (09/30)",
              "₹1,980.0"
            ],
            [
              "3-month vs index",
              "+34.8 pts"
            ],
            [
              "Q1 FY27 profit",
              "₹368 cr (+126%)"
            ],
            [
              "All-time high",
              "₹2,050 (24 Sep)"
            ]
          ],
          "watch": "Q2 FY27 results come in late October: reassess before them. After a 96% six-month run, any earnings miss would be punished.",
          "sources": [
            [
              "Business Standard – Laurus Labs company page",
              "https://www.business-standard.com/company/laurus-labs-45955.html"
            ],
            [
              "Screener – Laurus Labs financials",
              "https://www.screener.in/company/LAURUSLABS/consolidated/"
            ],
            [
              "Trendlyne – Laurus Labs",
              "https://trendlyne.com/equity/4984/LAURUSLABS/laurus-labs-ltd/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1980.0,
            "date": "2026-09-30",
            "researchPrice": 1980.0,
            "researchDate": "2026-09-30",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹317 cr (min ₹100 cr), price ₹1,980.0"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg ₹1873.1, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +34.8 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+139.3% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.34% of price (max 4.5% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.00 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.34,
            "sma20": 1957.37,
            "sma50": 1873.1,
            "sma200": 1358.28,
            "rs1m": 12.42,
            "rs3m": 34.81,
            "fromHigh52": -3.66,
            "fromLow52": 139.35,
            "avgValue20": 3166146382
          },
          "eventRisk": "Earnings on 2026-10-22, inside the holding window"
        }
      ],
      "marketSources": [
        [
          "Business Standard – Stock market live, Sep 30, 2026",
          "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
        ],
        [
          "ZeeBiz – NSE/BSE holidays October 2026",
          "https://www.zeebiz.com/market-news/news-stock-market-holiday-october-2026-nse-bse-to-remain-closed-for-11-days-check-full-list-402881"
        ],
        [
          "Yahoo Finance – Stock market news for Sep 29, 2026",
          "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html"
        ]
      ]
    },
    {
      "id": "2026-10-01-daily",
      "horizon": "daily",
      "date": "2026-10-01",
      "horizonDays": 1,
      "expires": "2026-10-01",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7683.69,
          "summary": "This is for Thursday's US session (Oct 1). Micron reports after the close on Sep 30 and Accenture before the open on Oct 1, and both will set the tone for tech. Oil is easing as Gulf exports recover, with Brent below $104 after a 2.6% drop on Sep 29, which helps airlines. The S&P 500 closed at 7,683.69 on Sep 29 with long-bond yields at a 24-year high, so keep day trades small."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22716.2,
          "summary": "This is for Thursday's NSE session (Oct 1). NSE is closed Fri Oct 2 for Gandhi Jayanti, so this is the last session before a 3-day break, and traders often cut positions late in the day. On Sep 30 the Nifty traded near 22,790 (+0.3%), led by IT, PSU banks and oil & gas, and India VIX fell 5%. September auto sales come out on Oct 1."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "DAL",
          "yahoo": "DAL",
          "name": "Delta Air Lines",
          "sector": "Airlines",
          "currency": "USD",
          "refPrice": 83.46,
          "refDate": "2026-09-30",
          "buyLow": 82.54,
          "buyHigh": 84.01,
          "target": 85.98,
          "stop": 81.55,
          "risk": "Medium",
          "thesis": "Oil is finally falling, and airlines are the fastest way the market plays that.",
          "reasons": [
            "Brent fell 2.6% on Sep 29 and slipped below $104 as Gulf exports recover. Fuel is Delta's biggest variable cost.",
            "Delta's latest fuel bill was about $4.4B at $3.93/gal, a record, so each dollar off crude flows almost directly into its profit.",
            "Analyst targets run up to $115, far above the price. The stock closed near the top of its $83.56–$85.80 range."
          ],
          "data": [
            [
              "Price (Sep 29)",
              "$84.94"
            ],
            [
              "Day range",
              "$83.56 – $85.80"
            ],
            [
              "Record fuel bill",
              "≈ $4.4B / quarter"
            ],
            [
              "Top target",
              "$115"
            ]
          ],
          "watch": "This depends entirely on oil. Any flare-up in the Gulf reverses it within the day. Exit at the close either way.",
          "sources": [
            [
              "Money Morning – Oil is finally falling: watch Delta (Sep 30, 2026)",
              "https://moneymorning.com/2026/09/30/oil-falling-watch-delta-air-lines-dal-not-oil-major-september-2026"
            ],
            [
              "Simply Wall St – Delta and airlines tied to lower oil",
              "https://simplywall.st/stocks/us/transportation/nyse-dal/delta-air-lines/news/delta-air-lines-stock-and-2-travel-names-tied-to-lower-oil-p"
            ],
            [
              "Schaeffer's – Delta dinged by fuel costs (context)",
              "https://www.schaeffersresearch.com/content/news/2026/09/28/delta-stock-dinged-by-bear-note-higher-fuel-costs"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 83.46,
            "date": "2026-09-30",
            "researchPrice": 84.94,
            "researchDate": "2026-09-29",
            "diffPct": 1.77,
            "original": {
              "refPrice": 84.94,
              "refDate": "2026-09-29",
              "buyLow": 84.0,
              "buyHigh": 85.5,
              "target": 87.5,
              "stop": 83.0
            },
            "status": "adjusted",
            "corrected": {
              "from": 83.23,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $575M (min $50M), price $83.46"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $80.84"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +7.5 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+51.7% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.1 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.84% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.57 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.84,
            "sma20": 80.84,
            "sma50": 84.03,
            "sma200": 75.66,
            "rs1m": 7.45,
            "rs3m": -12.57,
            "fromHigh52": -12.77,
            "fromLow52": 51.66,
            "avgValue20": 574960960
          }
        },
        {
          "market": "US",
          "symbol": "ORCL",
          "yahoo": "ORCL",
          "name": "Oracle",
          "sector": "Software / AI cloud",
          "currency": "USD",
          "refPrice": 137.3,
          "refDate": "2026-09-30",
          "buyLow": 135.37,
          "buyHigh": 138.36,
          "target": 141.84,
          "stop": 133.38,
          "risk": "Medium",
          "thesis": "A rebound with two fresh positive headlines behind it.",
          "reasons": [
            "It closed up 3.91% at $137.79 on Sep 29 as its new 'Fusion Claw' launch helped it win back recent losses.",
            "Bloom Energy confirmed the same day that Oracle's Project Jupiter AI data-center power build is on schedule, which supports Oracle's AI capacity story.",
            "When a stock bounces with news behind it, the gains often carry into the next session."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "$137.79 (+3.91%)"
            ],
            [
              "Catalyst",
              "Fusion Claw launch"
            ],
            [
              "AI build",
              "Project Jupiter on track"
            ],
            [
              "Setup",
              "Rebound after losses"
            ]
          ],
          "watch": "The rebound is only one day old. If it opens below $136, skip it.",
          "sources": [
            [
              "Motley Fool – Oracle's Fusion Claw helps it claw back losses",
              "https://www.fool.com/coverage/stock-market-today/2026/09/29/stock-market-today-sept-29-oracle-s-fusion-claw-helps-it-claws-back-losses/"
            ],
            [
              "Yahoo Finance – Stock market today Sep 29",
              "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-sept-29-213819662.html"
            ],
            [
              "StocksToTrade – Bloom confirms Oracle Project Jupiter",
              "https://stockstotrade.com/news/bloom-energy-corporation-be-news-2026_09_29/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 137.3,
            "date": "2026-09-30",
            "researchPrice": 137.79,
            "researchDate": "2026-09-29",
            "diffPct": 0.36,
            "status": "adjusted",
            "original": {
              "refPrice": 137.94,
              "refDate": "2026-09-30",
              "buyLow": 136.0,
              "buyHigh": 139.0,
              "target": 142.5,
              "stop": 134.0
            },
            "corrected": {
              "from": 137.94,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $5,230M (min $50M), price $137.3"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 20-day avg $146.95"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "1-month return vs index -7.5 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+19.9% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": false,
              "detail": "ATR 5.12% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.43 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 5.12,
            "sma20": 146.95,
            "sma50": 142.9,
            "sma200": 163.36,
            "rs1m": -7.48,
            "rs3m": -5.9,
            "fromHigh52": -57.43,
            "fromLow52": 19.91,
            "avgValue20": 5230032860
          }
        },
        {
          "market": "US",
          "symbol": "ACN",
          "yahoo": "ACN",
          "name": "Accenture",
          "sector": "IT services",
          "currency": "USD",
          "refPrice": 183.37,
          "refDate": "2026-09-30",
          "buyLow": 180.77,
          "buyHigh": 186.03,
          "target": 191.28,
          "stop": 177.62,
          "risk": "High",
          "thesis": "Reports before the open. It has beaten estimates four quarters running and has bounced 26% in 30 days.",
          "reasons": [
            "It reports Q4 before the bell on Oct 1. Consensus EPS is about $3.18–3.19 (+5% YoY), and Accenture beat EPS estimates in each of the last four quarters.",
            "The CFO promised the US federal-business drag would end this quarter. If that's confirmed, it removes the main worry.",
            "The stock is down 24% over the year but up about 26% in the last 30 days. Citi's target is $190 and Wells Fargo's is $194."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "$174.47"
            ],
            [
              "Q4 EPS est.",
              "≈ $3.19 (+5%)"
            ],
            [
              "Beat streak",
              "4 quarters"
            ],
            [
              "Targets",
              "$190 (Citi) · $194 (WF)"
            ]
          ],
          "watch": "The results will already be out when the market opens. Only buy if the stock opens and holds inside $172–177. If it gaps outside that range, skip it.",
          "sources": [
            [
              "TIKR – Accenture reports Oct 1: what it must show",
              "https://www.tikr.com/blog/accenture-reports-q4-earnings-october-1-what-the-stock-needs-to-show-to-break-its-slide"
            ],
            [
              "Yahoo Finance – Accenture Q4 2026: what to expect",
              "https://finance.yahoo.com/markets/stocks/articles/accenture-q4-2026-earnings-expect-074552883.html"
            ],
            [
              "Tickeron – ACN +26% in 30 days",
              "https://tickeron.com/blogs/accenture-acn-26-gain-over-30-days-recovery-after-the-selloff-15985/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 183.37,
            "date": "2026-09-30",
            "researchPrice": 174.47,
            "researchDate": "2026-09-29",
            "diffPct": -4.85,
            "original": {
              "refPrice": 174.47,
              "refDate": "2026-09-29",
              "buyLow": 172.0,
              "buyHigh": 177.0,
              "target": 182.0,
              "stop": 169.0
            },
            "status": "mismatch",
            "corrected": {
              "from": 182.68,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $978M (min $50M), price $183.37"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 20-day avg $183.78"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "1-month return vs index -2.9 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+55.2% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.1 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.77% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.36 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.77,
            "sma20": 183.78,
            "sma50": 177.45,
            "sma200": 196.59,
            "rs1m": -2.92,
            "rs3m": 37.59,
            "fromHigh52": -37.01,
            "fromLow52": 55.2,
            "avgValue20": 978138512
          },
          "eventRisk": "Earnings on 2026-10-01, inside the holding window"
        },
        {
          "market": "US",
          "symbol": "SNDK",
          "yahoo": "SNDK",
          "name": "SanDisk",
          "sector": "Semiconductors / AI storage",
          "currency": "USD",
          "refPrice": 1739.89,
          "refDate": "2026-09-30",
          "buyLow": 1716.64,
          "buyHigh": 1757.27,
          "target": 1818.22,
          "stop": 1676.01,
          "risk": "High",
          "thesis": "A dip-buy in an AI memory leader the morning after Micron's results.",
          "reasons": [
            "It fell 3.65% to $1,712.89 on valuation worries. That's well off its $2,354 52-week high, after a huge AI-driven run.",
            "Micron reports after the Sep 30 close, with revenue expected up about 353% to $51.2B. A strong read on memory demand usually lifts SanDisk too.",
            "Analysts rate it Strong Buy. JPMorgan sees about 40% upside and Susquehanna sees close to 100%."
          ],
          "data": [
            [
              "Price (Sep 29)",
              "$1,712.89 (-3.65%)"
            ],
            [
              "52-week range",
              "$112 – $2,354"
            ],
            [
              "Micron rev. est.",
              "$51.2B (+353%)"
            ],
            [
              "JPM upside",
              "≈ 40%"
            ]
          ],
          "watch": "This depends on how the market reacts to Micron. If Micron disappoints, SanDisk will gap down. Only buy inside the buy zone at the open.",
          "sources": [
            [
              "FX Leaders – SanDisk falls 3.65% (Sep 29, 2026)",
              "https://www.fxleaders.com/news/2026/09/29/sandisk-stock-falls-ai-storage-valuation-pressure/"
            ],
            [
              "Yahoo Finance – Micron earnings preview",
              "https://finance.yahoo.com/markets/stocks/articles/micron-earnings-preview-analysts-see-022234081.html"
            ],
            [
              "WallStreetZen – Stocks to buy in October 2026",
              "https://www.wallstreetzen.com/news/4-stocks-to-buy-in-october-2026"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1739.89,
            "date": "2026-09-30",
            "researchPrice": 1712.89,
            "researchDate": "2026-09-29",
            "diffPct": -1.55,
            "original": {
              "refPrice": 1712.89,
              "refDate": "2026-09-29",
              "buyLow": 1690,
              "buyHigh": 1730,
              "target": 1790,
              "stop": 1650
            },
            "status": "adjusted",
            "corrected": {
              "from": 1736.85,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $16,072M (min $50M), price $1,739.89"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $1693.49"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +11.5 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+1453.5% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": false,
              "detail": "ATR 5.92% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.33 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 5.92,
            "sma20": 1693.49,
            "sma50": 1533.71,
            "sma200": 1130.35,
            "rs1m": 11.5,
            "rs3m": -16.63,
            "fromHigh52": -26.1,
            "fromLow52": 1453.47,
            "avgValue20": 16072465658
          }
        },
        {
          "market": "US",
          "symbol": "VICR",
          "yahoo": "VICR",
          "name": "Vicor",
          "sector": "Power electronics / AI",
          "currency": "USD",
          "refPrice": 288.94,
          "refDate": "2026-09-30",
          "buyLow": 282.83,
          "buyHigh": 292.05,
          "target": 303.33,
          "stop": 276.69,
          "risk": "High",
          "thesis": "The month's top industrial gainer: up 45% in September after raising guidance.",
          "reasons": [
            "It raised Q3 revenue guidance to more than 20% growth over last quarter, from about 10%, after signing new licenses tied to AI hardware.",
            "Royalty income from its Vertical Power Delivery (VPD) technology is growing, so each AI server using it pays Vicor.",
            "It rose from about $176 on Sep 1 to about $283 on Sep 23 and leads September's industrial winners."
          ],
          "data": [
            [
              "Price (Sep 28)",
              "≈ $281.96"
            ],
            [
              "September gain",
              "+44.9%"
            ],
            [
              "Q3 growth guide",
              "> 20% QoQ"
            ],
            [
              "Driver",
              "AI power royalties"
            ]
          ],
          "watch": "It's extremely extended: GuruFocus values it far below the price, and insiders sold $410M of stock. Treat it strictly as a one-day momentum trade.",
          "sources": [
            [
              "GuruFocus – Vicor surges 44.88% in September",
              "https://www.gurufocus.com/news/9099950/vicor-corp-vicr-surges-4488-in-september-amid-strong-momentum"
            ],
            [
              "Yahoo Finance – Vicor jumps after raising Q3 outlook",
              "https://finance.yahoo.com/markets/stocks/articles/vicor-shares-jump-nearly-9-104938912.html"
            ],
            [
              "Seeking Alpha – Vicor, Bloom lead September industrials",
              "https://seekingalpha.com/news/4647608-industrial-stock-winners-vicor-bloom-energy-lead-septembers-top-ten"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 288.94,
            "date": "2026-09-30",
            "researchPrice": 281.96,
            "researchDate": "2026-09-28",
            "diffPct": -2.42,
            "original": {
              "refPrice": 281.96,
              "refDate": "2026-09-28",
              "buyLow": 276,
              "buyHigh": 285,
              "target": 296,
              "stop": 270
            },
            "status": "adjusted",
            "corrected": {
              "from": 283.88,
              "note": "reference had been taken while the session was still trading; corrected to the official close"
            }
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $206M (min $50M), price $288.94"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg $224.6"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +54.4 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+498.1% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": false,
              "detail": "+3.8 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": false,
              "detail": "ATR 5.88% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.48 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 5.88,
            "sma20": 224.6,
            "sma50": 216.23,
            "sma200": 214.31,
            "rs1m": 54.4,
            "rs3m": -19.75,
            "fromHigh52": -24.49,
            "fromLow52": 498.1,
            "avgValue20": 206398070
          }
        },
        {
          "market": "IN",
          "symbol": "TCS",
          "yahoo": "TCS.NS",
          "name": "Tata Consultancy Services",
          "sector": "IT services",
          "currency": "INR",
          "refPrice": 2050.6,
          "refDate": "2026-09-30",
          "buyLow": 2035.25,
          "buyHigh": 2059.85,
          "target": 2099.15,
          "stop": 2015.6,
          "risk": "Low–Medium",
          "thesis": "It just ended a 6-day losing streak on heavy buying from big investors.",
          "reasons": [
            "It opened with a 2.4% gap up on Sep 30 and traded around ₹2,085 (+2.7%), beating both the IT sector (+1.9%) and a flat Sensex.",
            "Delivery volume (shares bought to keep, not day-traded) jumped about 118% above its 5-day average. That's a sign big investors are buying after the correction.",
            "TCS was the top Sensex gainer, and IT led the sectors. Q2 results in the second week of October give buyers a reason to stay in."
          ],
          "data": [
            [
              "Price (Sep 30, intraday)",
              "≈ ₹2,085.60 (+2.7%)"
            ],
            [
              "Prev. close",
              "₹2,032.40"
            ],
            [
              "Delivery volume",
              "+118% vs 5-day avg"
            ],
            [
              "Streak",
              "Ended 6-day fall"
            ]
          ],
          "watch": "The reference price is intraday on Sep 30, before the close. Check the close. Ahead of the holiday, some traders may sell late in the day.",
          "sources": [
            [
              "MarketsMojo – TCS high-value trading amid recovery (Sep 30, 2026)",
              "https://www.marketsmojo.com/news/stocks-in-action/tata-consultancy-services-ltd-sees-high-value-trading-amid-market-recovery-4209546"
            ],
            [
              "India TV – Sep 30 market: TCS top gainer",
              "https://www.indiatvnews.com/business/markets/30-september-2026-stock-market-updates-sensex-drops-88-points-nifty-near-22-700-tcs-top-gainer-2026-09-30-1055680"
            ],
            [
              "LatestLY – TCS shares rally 2.55%",
              "https://www.latestly.com/business/tata-consultancy-services-stock-update-shares-rally-2-55-7626381.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 2050.6,
            "date": "2026-09-30",
            "researchPrice": 2085.6,
            "researchDate": "2026-09-30",
            "diffPct": 1.71,
            "original": {
              "refPrice": 2085.6,
              "refDate": "2026-09-30",
              "buyLow": 2070,
              "buyHigh": 2095,
              "target": 2135,
              "stop": 2050
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹643 cr (min ₹100 cr), price ₹2,050.6"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 20-day avg ₹2167.21"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "1-month return vs index -7.4 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": false,
              "detail": "+3.7% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-2.0 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.82% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.62 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.82,
            "sma20": 2167.21,
            "sma50": 2278.95,
            "sma200": 2504.82,
            "rs1m": -7.38,
            "rs3m": 4.38,
            "fromHigh52": -38.79,
            "fromLow52": 3.73,
            "avgValue20": 6425898271
          }
        },
        {
          "market": "IN",
          "symbol": "TVSMOTOR",
          "yahoo": "TVSMOTOR.NS",
          "name": "TVS Motor",
          "sector": "Auto (two-wheelers)",
          "currency": "INR",
          "refPrice": 4106.0,
          "refDate": "2026-09-30",
          "buyLow": 4060,
          "buyHigh": 4110,
          "target": 4200,
          "stop": 4020,
          "risk": "Medium",
          "thesis": "September sales come out on Oct 1, and TVS has the highest growth estimate among two-wheeler makers.",
          "reasons": [
            "Brokers estimate about 6.45 lakh units, up 19–21% YoY. Bajaj is estimated at +10–12% and Hero at +4%.",
            "Festive demand, easier financing and a low base (September 2025 buyers waited for the GST cut) all favor strong numbers.",
            "The sales release is scheduled inside the session, so the stock tends to move on the day itself."
          ],
          "data": [
            [
              "Price (Sep 28)",
              "₹4,095"
            ],
            [
              "Sep volume est.",
              "≈ 6.45 lakh (+19–21%)"
            ],
            [
              "Peer est.",
              "Bajaj +10–12% · Hero +4%"
            ],
            [
              "Data date",
              "Oct 1"
            ]
          ],
          "watch": "If the number only matches the estimate, the stock may not move. The reference price is from Sep 28, so check where it opens.",
          "sources": [
            [
              "ZeeBiz – September auto sales preview",
              "https://www.zeebiz.com/automobile/news-september-auto-sales-why-could-maruti-tata-motors-ashok-leyland-tvs-report-higher-volumes-403099"
            ],
            [
              "Autocar Professional – September auto sales seen strong",
              "https://www.autocarpro.in/analysis/september-auto-sales-seen-strong-as-festive-demand-low-base-lift-volumes-134977"
            ],
            [
              "Kotak Neo – TVS Motor share price",
              "https://www.kotakneo.com/stocks/tvs-motor-share-price/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 4106.0,
            "date": "2026-09-30",
            "researchPrice": 4095.0,
            "researchDate": "2026-09-28",
            "diffPct": -0.27,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹254 cr (min ₹100 cr), price ₹4,106.0"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 20-day avg ₹4122.37"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +3.8 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+27.2% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.2 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.24% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.77 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.24,
            "sma20": 4122.37,
            "sma50": 4224.09,
            "sma200": 3759.89,
            "rs1m": 3.75,
            "rs3m": 19.62,
            "fromHigh52": -8.44,
            "fromLow52": 27.2,
            "avgValue20": 2540120210
          }
        },
        {
          "market": "IN",
          "symbol": "BANKBARODA",
          "yahoo": "BANKBARODA.NS",
          "name": "Bank of Baroda",
          "sector": "Banking (PSU)",
          "currency": "INR",
          "refPrice": 230.55,
          "refDate": "2026-09-30",
          "buyLow": 228.45,
          "buyHigh": 232.25,
          "target": 237.05,
          "stop": 225.6,
          "risk": "Medium",
          "thesis": "It led the PSU bank rally on Sep 30, and Q2 business updates are due in the first days of October.",
          "reasons": [
            "Union Bank, Bank of Baroda and PNB were the top Nifty PSU Bank gainers on Sep 30, one of the day's best sectors.",
            "It closed up 1.47% at ₹241.20 in the previous session, so the move has been building.",
            "PSU banks usually release quarterly loan and deposit numbers in early October, and those have moved the stocks 4–5% in the past."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹241.20 (+1.47%)"
            ],
            [
              "Sep 30",
              "Top PSU-bank gainer"
            ],
            [
              "Next trigger",
              "Q2 business update"
            ],
            [
              "Sector",
              "PSU banks outperforming"
            ]
          ],
          "watch": "The RBI decision on Oct 7 can move rates either way, and PSU banks react sharply to it. Exit at the close.",
          "sources": [
            [
              "Business Standard – Stock market live, Sep 30, 2026",
              "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
            ],
            [
              "LatestLY – Stocks to watch Sep 30: Bank of Baroda, TCS",
              "https://www.latestly.com/business/stocks-to-buy-or-sell-today-september-30-2026-bank-of-baroda-tcs-and-biocon-among-shares-that-may-remain-in-spotlight-on-wednesday-7626085.html"
            ],
            [
              "Upstox – PSU banks surge after business updates",
              "https://upstox.com/news/market-news/stocks/bank-of-baroda-bank-of-maharashtra-and-other-psu-bank-stocks-surge-up-to-4-6-after-q4-business-updates/article-191682/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 230.55,
            "date": "2026-09-30",
            "researchPrice": 241.2,
            "researchDate": "2026-09-29",
            "diffPct": 4.62,
            "original": {
              "refPrice": 241.2,
              "refDate": "2026-09-29",
              "buyLow": 239,
              "buyHigh": 243,
              "target": 248,
              "stop": 236
            },
            "status": "mismatch"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹151 cr (min ₹100 cr), price ₹230.55"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 20-day avg ₹234.8"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +3.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": false,
              "detail": "+3.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.0 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.92% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.41 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.92,
            "sma20": 234.8,
            "sma50": 240.59,
            "sma200": 269.96,
            "rs1m": 3.05,
            "rs3m": -2.15,
            "fromHigh52": -29.17,
            "fromLow52": 3.01,
            "avgValue20": 1505022968
          }
        },
        {
          "market": "IN",
          "symbol": "INDIGO",
          "yahoo": "INDIGO.NS",
          "name": "InterGlobe Aviation (IndiGo)",
          "sector": "Airlines",
          "currency": "INR",
          "refPrice": 4984.0,
          "refDate": "2026-09-30",
          "buyLow": 4948.7,
          "buyHigh": 4999.85,
          "target": 5112.3,
          "stop": 4897.6,
          "risk": "Medium",
          "thesis": "Falling crude is good for India's dominant airline, and the stock is still lagging.",
          "reasons": [
            "Brent slipped below $104. On Sep 30, IndiGo and oil-sensitive stocks bounced 2–4% off their intraday lows as crude fell.",
            "Goldman Sachs reiterated Buy with a ₹5,900 target, far above the price, citing cost leadership and market share of about 65% (up from 50% in FY20).",
            "Fuel is the biggest cost line, so the stock reacts strongly to oil prices."
          ],
          "data": [
            [
              "Close (Sep 30)",
              "₹4,874.50"
            ],
            [
              "GS target",
              "₹5,900"
            ],
            [
              "Market share",
              "≈ 65% (Aug 2026)"
            ],
            [
              "Brent",
              "< $104 and easing"
            ]
          ],
          "watch": "It still closed down 1.3% on Sep 30. Buy only if crude keeps easing overnight. It also mirrors Delta's oil trade, so don't hold both in size.",
          "sources": [
            [
              "Groww – InterGlobe Aviation share price",
              "https://groww.in/stocks/interglobe-aviation-ltd"
            ],
            [
              "Money Morning – Oil is finally falling (Sep 30, 2026)",
              "https://moneymorning.com/2026/09/30/oil-falling-watch-delta-air-lines-dal-not-oil-major-september-2026"
            ],
            [
              "Business Standard – Stock market live, Sep 30, 2026",
              "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 4984.0,
            "date": "2026-09-30",
            "researchPrice": 4874.5,
            "researchDate": "2026-09-30",
            "diffPct": -2.2,
            "original": {
              "refPrice": 4874.5,
              "refDate": "2026-09-30",
              "buyLow": 4840,
              "buyHigh": 4890,
              "target": 5000,
              "stop": 4790
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹278 cr (min ₹100 cr), price ₹4,984.0"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 20-day avg ₹4932.93"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "1-month return vs index +4.7 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+27.9% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.11% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.80 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.11,
            "sma20": 4932.93,
            "sma50": 5109.87,
            "sma200": 4826.04,
            "rs1m": 4.71,
            "rs3m": -1.72,
            "fromHigh52": -16.52,
            "fromLow52": 27.95,
            "avgValue20": 2776544729
          }
        },
        {
          "market": "IN",
          "symbol": "ICICIBANK",
          "yahoo": "ICICIBANK.NS",
          "name": "ICICI Bank",
          "sector": "Banking (private)",
          "currency": "INR",
          "refPrice": 1321.7,
          "refDate": "2026-09-30",
          "buyLow": 1312.6,
          "buyHigh": 1326.75,
          "target": 1355.05,
          "stop": 1299.45,
          "risk": "Low–Medium",
          "thesis": "A quality private bank rising with the market, still 12% below its high.",
          "reasons": [
            "It was among the Sensex gainers on Sep 30 as the index rose about 460 points by midday.",
            "It trades at 15.5x earnings and 2.5x book, cheap for India's best-run large private lender, and 12% below its ₹1,480 52-week high.",
            "Q2 business updates and the RBI policy decision in early October keep bank stocks in the spotlight."
          ],
          "data": [
            [
              "Price (Sep 30, AM)",
              "≈ ₹1,307"
            ],
            [
              "52-week range",
              "₹1,187.60 – ₹1,480"
            ],
            [
              "P/E · P/B",
              "15.5x · 2.48x"
            ],
            [
              "Sep 30",
              "Sensex gainer"
            ]
          ],
          "watch": "The reference price is from the morning of Sep 30. Check the close. Banks may drift lower if FIIs keep selling.",
          "sources": [
            [
              "INDmoney – ICICI Bank share price (Sep 30, 2026)",
              "https://www.indmoney.com/stocks/icici-bank-ltd-share-price"
            ],
            [
              "India TV – Sep 30 market updates",
              "https://www.indiatvnews.com/business/markets/30-september-2026-stock-market-updates-sensex-drops-88-points-nifty-near-22-700-tcs-top-gainer-2026-09-30-1055680"
            ],
            [
              "Business Standard – Stock market live, Sep 30, 2026",
              "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1321.7,
            "date": "2026-09-30",
            "researchPrice": 1307.0,
            "researchDate": "2026-09-30",
            "diffPct": -1.11,
            "original": {
              "refPrice": 1307.0,
              "refDate": "2026-09-30",
              "buyLow": 1298,
              "buyHigh": 1312,
              "target": 1340,
              "stop": 1285
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹1,196 cr (min ₹100 cr), price ₹1,321.7"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 20-day avg ₹1360.49"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "1-month return vs index -2.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+11.3% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.8 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.61% of price (max 4.0% for daily)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.75 (min 1.5)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.61,
            "sma20": 1360.49,
            "sma50": 1402.69,
            "sma200": 1353.5,
            "rs1m": -2.03,
            "rs3m": 0.07,
            "fromHigh52": -10.7,
            "fromLow52": 11.29,
            "avgValue20": 11958393600
          }
        }
      ],
      "marketSources": [
        [
          "Business Standard – Stock market live, Sep 30, 2026",
          "https://www.business-standard.com/markets/news/stock-market-live-september-30-sensex-today-nifty-gift-nifty-crude-oil-price-adroit-industries-share-ipo-today-126093000100_1.html"
        ],
        [
          "ZeeBiz – NSE/BSE holidays October 2026",
          "https://www.zeebiz.com/market-news/news-stock-market-holiday-october-2026-nse-bse-to-remain-closed-for-11-days-check-full-list-402881"
        ],
        [
          "Kiplinger – Earnings this week (Sep 28–Oct 2)",
          "https://www.kiplinger.com/investing/stocks/17494/next-week-earnings-calendar-stocks"
        ]
      ],
      "superseded": {
        "by": "2026-10-01-daily-v2",
        "reason": "Replaced on 30 Sep 2026 after the stock-selection review: prices were checked against official exchange closes, and several picks failed the new rule checks (trend, relative strength, falling-knife, earnings-risk) in CRITERIA.md."
      }
    },
    {
      "id": "2026-09-30-weekly",
      "horizon": "weekly",
      "date": "2026-09-30",
      "horizonDays": 7,
      "expires": "2026-10-07",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7683.69,
          "summary": "Same backdrop as the monthly list: the S&P 500 fell 0.8% to 7,683.69 on Sep 29, with 30-year yields at a 24-year high and oil above $100. For a one-week trade, what matters most is a specific event in the next 5 sessions: Nike's earnings (Oct 1), Tesla deliveries (Oct 2), the jobs report (Oct 2), and stocks with fresh upgrades or breakouts."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22716.2,
          "summary": "Nifty closed at 22,716 with FIIs selling a net ₹5,353 crore on Sep 29. This week has three dated events: September auto sales (Oct 1–3), Q2 business updates from banks and companies (first week of October), and the RBI policy decision (Oct 5–7, repo rate at 5.25%). Weekly picks are tied to those events and to names that just broke out."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "META",
          "yahoo": "META",
          "name": "Meta Platforms",
          "sector": "Communication / AI ads",
          "currency": "USD",
          "refPrice": 738.79,
          "refDate": "2026-09-29",
          "buyLow": 728,
          "buyHigh": 742,
          "target": 772,
          "stop": 714,
          "risk": "Medium",
          "thesis": "A dip-buy that already has buyers stepping in, with a fresh price-target raise.",
          "reasons": [
            "It dropped 4.8% after a 37% rally, then closed up 3.26% at $738.68 on Sep 29. Buyers stepped in quickly.",
            "Monness Crespi raised its target to $830 from $730 on Sep 28 and kept a Buy rating. The consensus target is about $809.",
            "AI-driven ad monetization is the core story going into Q3 earnings season, and large-cap tech led the Sep 29 AI rally."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "$738.68 (+3.26%)"
            ],
            [
              "Recent pullback",
              "-4.8% after +37% run"
            ],
            [
              "Consensus target",
              "≈ $809"
            ],
            [
              "Monness target",
              "$830 (from $730)"
            ]
          ],
          "watch": "If it closes below $714, the bounce has failed. Worries about AI spending can quickly pull mega-cap tech down.",
          "sources": [
            [
              "Tradingkey – META closed up 3.26% on Sep 29",
              "https://www.tradingkey.com/news/market-movers/262192693-market-movers-meta-20260929"
            ],
            [
              "Cryptonomist – META falls 4.8% after 37% rally",
              "https://en.cryptonomist.ch/2026/09/29/meta-platforms-stock-falls-4-8-after-37-rally-testing-bulls-resolve/"
            ],
            [
              "Daily Trade Alert – Analyst upgrades Sep 28",
              "https://dailytradealert.com/2026/09/28/analyst-upgrades-and-downgrades-for-monday-9-28/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 738.79,
            "date": "2026-09-29",
            "researchPrice": 738.68,
            "researchDate": "2026-09-29",
            "diffPct": -0.01,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $16,556M (min $50M), price $738.79"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $619.0, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +28.9 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+42.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+2.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.76% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 1.76 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.76,
            "sma20": 676.06,
            "sma50": 619.0,
            "sma200": 627.21,
            "rs1m": 28.34,
            "rs3m": 28.87,
            "fromHigh52": -5.26,
            "fromLow52": 42.0,
            "avgValue20": 16555679403
          }
        },
        {
          "market": "US",
          "symbol": "VLO",
          "yahoo": "VLO",
          "name": "Valero Energy",
          "sector": "Energy / Refining",
          "currency": "USD",
          "refPrice": 387.72,
          "refDate": "2026-09-29",
          "buyLow": 380.19,
          "buyHigh": 390.14,
          "target": 402.08,
          "stop": 374.21,
          "risk": "Medium",
          "thesis": "One of the strongest names in the market's best sector: +13% in September.",
          "reasons": [
            "It is among the top five S&P energy gainers in September (+13%), with a Strong Buy quant rating.",
            "The US 3-2-1 crack spread is about $73/bbl, near the all-time record. Refiners are earning unusually high margins right now.",
            "In a one-week trade, momentum names in the leading sector tend to keep going unless the news changes."
          ],
          "data": [
            [
              "Close (Sep 28)",
              "$389.57"
            ],
            [
              "1-month change",
              "≈ +13%"
            ],
            [
              "3-2-1 crack (Sep 22)",
              "$73.12/bbl"
            ],
            [
              "Sector YTD",
              "Energy ≈ +39%"
            ]
          ],
          "watch": "Any Iran ceasefire headline could knock 5% or more off refiners in a day. The reference price is the Sep 28 close.",
          "sources": [
            [
              "Seeking Alpha – biggest one-month energy gainers",
              "https://seekingalpha.com/news/4647494-these-10-energy-stocks-posted-the-biggest-one-month-gains-as-september-ends"
            ],
            [
              "ad-hoc-news – VLO last trade Sep 28, 2026",
              "https://www.ad-hoc-news.de/boerse/news/nachboerse/valero-energy-stock-last-traded-at-usd-389-57-on-september-28-2026/70195731"
            ],
            [
              "thetrading.tools – 3-2-1 crack spread",
              "https://www.thetrading.tools/crack-spread"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 387.72,
            "date": "2026-09-29",
            "researchPrice": 389.57,
            "researchDate": "2026-09-28",
            "diffPct": 0.48,
            "original": {
              "refPrice": 389.57,
              "refDate": "2026-09-28",
              "buyLow": 382,
              "buyHigh": 392,
              "target": 404,
              "stop": 376
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $1,547M (min $50M), price $387.72"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $349.66, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +46.6 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+149.7% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.1 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.86% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.54 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.86,
            "sma20": 385.99,
            "sma50": 349.66,
            "sma200": 256.82,
            "rs1m": 10.57,
            "rs3m": 46.58,
            "fromHigh52": -7.47,
            "fromLow52": 149.67,
            "avgValue20": 1547307541
          }
        },
        {
          "market": "US",
          "symbol": "BE",
          "yahoo": "BE",
          "name": "Bloom Energy",
          "sector": "Industrials / AI power",
          "currency": "USD",
          "refPrice": 291.25,
          "refDate": "2026-09-29",
          "buyLow": 282.08,
          "buyHigh": 294.95,
          "target": 314.75,
          "stop": 271.2,
          "risk": "High",
          "thesis": "A momentum breakout: AI data-center power demand plus fresh index-fund buying.",
          "reasons": [
            "Shares jumped 13.5% on Sep 29 after Bloom confirmed Oracle is still committed to the Project Jupiter fuel-cell contract, on schedule.",
            "It was just added to the S&P 500, which brings steady buying from index funds. It is up 218% in 2026 and co-leads September's industrial winners.",
            "Fuel cells installed on-site are one of the few ways to power AI data centers quickly, and the market keeps rewarding that theme."
          ],
          "data": [
            [
              "Latest (Sep 30)",
              "$294.26"
            ],
            [
              "Sep 29 move",
              "+13.5%"
            ],
            [
              "2026 YTD",
              "+218%"
            ],
            [
              "Catalyst",
              "Oracle Project Jupiter confirmed"
            ]
          ],
          "watch": "Very volatile, with 10% daily swings. Use a small position size, and honor the $274 stop.",
          "sources": [
            [
              "Motley Fool – Bloom Energy 16-fold in 5 years (Sep 29, 2026)",
              "https://www.fool.com/investing/2026/09/29/bloom-energy-stock-rose-16-fold-in-5-years-all-of-the-gain-came-in-the-last-2/"
            ],
            [
              "StocksToTrade – BE surges on S&P 500 and AI power",
              "https://stockstotrade.com/news/bloom-energy-corporation-be-news-2026_09_29/"
            ],
            [
              "Seeking Alpha – Vicor, Bloom lead September industrials",
              "https://seekingalpha.com/news/4647608-industrial-stock-winners-vicor-bloom-energy-lead-septembers-top-ten"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 291.25,
            "date": "2026-09-29",
            "researchPrice": 294.26,
            "researchDate": "2026-09-30",
            "diffPct": 1.03,
            "original": {
              "refPrice": 294.26,
              "refDate": "2026-09-30",
              "buyLow": 285,
              "buyHigh": 298,
              "target": 318,
              "stop": 274
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $4,675M (min $50M), price $291.25"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close above 50-day avg $232.52, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -6.1 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+310.9% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": false,
              "detail": "ATR 7.32% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.52 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 7.32,
            "sma20": 263.35,
            "sma50": 232.52,
            "sma200": 204.67,
            "rs1m": 38.71,
            "rs3m": -6.07,
            "fromHigh52": -17.09,
            "fromLow52": 310.85,
            "avgValue20": 4675319187
          }
        },
        {
          "market": "US",
          "symbol": "PFE",
          "yahoo": "PFE",
          "name": "Pfizer",
          "sector": "Healthcare / Pharma",
          "currency": "USD",
          "refPrice": 28.72,
          "refDate": "2026-09-29",
          "buyLow": 28.4,
          "buyHigh": 28.8,
          "target": 29.6,
          "stop": 27.95,
          "risk": "Low",
          "thesis": "A defensive stock close to breaking out, where investors are moving money as yields rise.",
          "reasons": [
            "It closed at $28.72, just below its 52-week high of $29.21. A move above that level often attracts more buyers.",
            "Sales from new and acquired products were $3.2B in Q2 (+18% YoY) after +22% in Q1. Q2 EPS of $0.77 beat estimates by $0.09.",
            "It yields 5.9% and trades at about 10x 2026 earnings, which appeals to investors looking for safety."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "$28.72"
            ],
            [
              "52-week range",
              "$23.62 – $29.21"
            ],
            [
              "Dividend yield",
              "≈ 5.9%"
            ],
            [
              "Forward P/E",
              "≈ 10x"
            ]
          ],
          "watch": "Low volatility means a small target (+3%). If it fails at $29.21 again, just exit.",
          "sources": [
            [
              "ts2.tech – Pfizer hits 52-week peak at 10x earnings",
              "https://ts2.tech/en/pfizer-stock-touches-52-week-high-yet-trades-at-10-times-2026-earnings/"
            ],
            [
              "ad-hoc-news – Pfizer 52-week high",
              "https://www.ad-hoc-news.de/boerse/news/corporate-news/pfizer-inc-stock-reaches-52-week-high-as-investors-focus-on-fair-value/70045457"
            ],
            [
              "Investing.com – PFE quote",
              "https://www.investing.com/equities/pfizer"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 28.72,
            "date": "2026-09-29",
            "researchPrice": 28.72,
            "researchDate": "2026-09-29",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $923M (min $50M), price $28.72"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $27.13, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +17.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+21.6% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.2 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.75% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.54 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.75,
            "sma20": 28.11,
            "sma50": 27.13,
            "sma200": 26.37,
            "rs1m": 3.25,
            "rs3m": 16.98,
            "fromHigh52": -1.68,
            "fromLow52": 21.59,
            "avgValue20": 923138070
          }
        },
        {
          "market": "US",
          "symbol": "NKE",
          "yahoo": "NKE",
          "name": "Nike",
          "sector": "Consumer / Apparel",
          "currency": "USD",
          "refPrice": 35.84,
          "refDate": "2026-09-29",
          "buyLow": 35.17,
          "buyHigh": 36.15,
          "target": 38.81,
          "stop": 33.6,
          "risk": "High",
          "thesis": "A contrarian earnings bet: sentiment is so bearish that 'less bad' results could spark a sharp rally.",
          "reasons": [
            "Reports fiscal Q1 after the close on Oct 1. Consensus is $0.44 EPS (-11%) on $11.32B revenue (-3%), so expectations are low.",
            "The stock is near a 12-year low. Seeking Alpha's preview calls extreme bearishness 'the only bullish aspect'. That setup can produce short-covering rallies.",
            "Jefferies rates it Buy with a $48 target, citing cleaner inventory and fewer discounts. Telsey's target is $44."
          ],
          "data": [
            [
              "Price (Sep 29)",
              "≈ $36.48"
            ],
            [
              "Q1 EPS est.",
              "$0.44 (-11% YoY)"
            ],
            [
              "Revenue est.",
              "$11.32B (-3%)"
            ],
            [
              "Avg target",
              "≈ $48.41"
            ]
          ],
          "watch": "A binary earnings bet. A guidance cut could send it down 10%. Use a small position size, or wait for the Oct 2 reaction.",
          "sources": [
            [
              "TipRanks – Nike near 12-year low before Oct 1 earnings",
              "https://www.tipranks.com/news/nike-shares-near-12-year-low-from-tough-competition-as-sneaker-maker-prepares-for-q1-earnings-on-oct-1"
            ],
            [
              "Yahoo Finance – Nike Q1 earnings preview",
              "https://finance.yahoo.com/markets/stocks/articles/earnings-preview-nike-nke-q1-130003769.html"
            ],
            [
              "Seeking Alpha – Nike: extreme bearishness",
              "https://seekingalpha.com/article/4950133-nike-earnings-preview-only-bullish-aspect-stock-extreme-bearishness"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 35.84,
            "date": "2026-09-29",
            "researchPrice": 36.48,
            "researchDate": "2026-09-29",
            "diffPct": 1.79,
            "original": {
              "refPrice": 36.48,
              "refDate": "2026-09-29",
              "buyLow": 35.8,
              "buyHigh": 36.8,
              "target": 39.5,
              "stop": 34.2
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $1,208M (min $50M), price $35.84"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg $39.38, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -15.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": false,
              "detail": "+1.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.9 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.74% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.53 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.74,
            "sma20": 36.78,
            "sma50": 39.38,
            "sma200": 49.21,
            "rs1m": -8.96,
            "rs3m": -14.98,
            "fromHigh52": -53.44,
            "fromLow52": 1.76,
            "avgValue20": 1207676125
          },
          "eventRisk": "Earnings on 2026-10-01, inside the holding window"
        },
        {
          "market": "IN",
          "symbol": "SBIN",
          "yahoo": "SBIN.NS",
          "name": "State Bank of India",
          "sector": "Banking (PSU)",
          "currency": "INR",
          "refPrice": 964.7,
          "refDate": "2026-09-29",
          "buyLow": 956.55,
          "buyHigh": 970.65,
          "target": 1000.9,
          "stop": 940.4,
          "risk": "Low–Medium",
          "thesis": "A rare large-cap that is rising while the market falls, with the RBI policy decision inside the week.",
          "reasons": [
            "It is up about 19% in 2026 while the Sensex is down about 13%, and up 9% in the last month.",
            "It trades at about 10.8x earnings, cheap for India's largest lender, and big investors tend to buy it when FIIs sell other stocks.",
            "The RBI policy decision (Oct 5–7, repo rate at 5.25%) and Q2 business updates are both due this week."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹956.10"
            ],
            [
              "2026 YTD",
              "≈ +19%"
            ],
            [
              "P/E",
              "≈ 10.8x"
            ],
            [
              "Next event",
              "RBI policy, Oct 7"
            ]
          ],
          "watch": "A hawkish RBI surprise, possible because crude is above $100 and pushing up inflation, would hit banks first.",
          "sources": [
            [
              "Upstox – SBI rallies 9% in 1 month, 19% YTD",
              "https://upstox.com/news/market-news/earnings/sbi-shares-rally-9-in-1-month-and-19-ytd-india-s-largest-bank-to-report-q2-earnings-on-november-4-here-is-what-to-focus-on/article-183965/"
            ],
            [
              "5paisa – RBI MPC schedule FY27",
              "https://www.5paisa.com/blog/rbi-mpc-meeting-schedule"
            ],
            [
              "Bajaj Broking – SBI share price",
              "https://www.bajajbroking.in/stock/state-bank-of-india-share-price"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 964.7,
            "date": "2026-09-29",
            "researchPrice": 956.1,
            "researchDate": "2026-09-29",
            "diffPct": -0.89,
            "original": {
              "refPrice": 956.1,
              "refDate": "2026-09-29",
              "buyLow": 948,
              "buyHigh": 962,
              "target": 992,
              "stop": 932
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹826 cr (min ₹100 cr), price ₹964.7"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹1026.34, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -2.9 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+12.7% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.8 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.7% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.61 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.7,
            "sma20": 994.28,
            "sma50": 1026.34,
            "sma200": 1042.35,
            "rs1m": -2.95,
            "rs3m": -2.89,
            "fromHigh52": -21.87,
            "fromLow52": 12.7,
            "avgValue20": 8264889757
          }
        },
        {
          "market": "IN",
          "symbol": "BEL",
          "yahoo": "BEL.NS",
          "name": "Bharat Electronics",
          "sector": "Defence electronics",
          "currency": "INR",
          "refPrice": 387.75,
          "refDate": "2026-09-29",
          "buyLow": 382.7,
          "buyHigh": 392.8,
          "target": 406.9,
          "stop": 374.65,
          "risk": "Medium",
          "thesis": "Defence order visibility plus a pending order approval that could land any day.",
          "reasons": [
            "The DAC approved about ₹1.1 lakh crore of procurement in September, and analysts name BEL a top beneficiary.",
            "The FY27 order-inflow target is above ₹55,000 crore. The large QRSAM air-defence order is waiting only for Cabinet Committee on Security (CCS) approval.",
            "MOFSL rates it Buy with a ₹530 target, far above the current ₹385."
          ],
          "data": [
            [
              "Price (Sep 28)",
              "₹385"
            ],
            [
              "FY27 inflow target",
              "> ₹55,000 cr"
            ],
            [
              "MOFSL target",
              "₹530"
            ],
            [
              "Pending trigger",
              "QRSAM CCS approval"
            ]
          ],
          "watch": "If the approval slips, the stock just follows the market. The reference price is the Sep 28 close.",
          "sources": [
            [
              "BusinessToday – BEL, HAL, BDL targets after DAC approvals",
              "https://www.businesstoday.in/markets/stocks/story/bel-hal-bdl-shares-targets-for-defence-stocks-after-rs-1-1-lakh-crore-dac-approvals-553813-2026-09-08"
            ],
            [
              "Business Standard – HAL, BEL top beneficiaries",
              "https://www.business-standard.com/markets/news/1-1trn-defence-buys-buoy-stocks-by-4-hal-bel-seen-as-top-beneficiaries-126090800226_1.html"
            ],
            [
              "Tickertape – BEL share price",
              "https://www.tickertape.in/stocks/bharat-electronics-BAJE"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 387.75,
            "date": "2026-09-29",
            "researchPrice": 385.0,
            "researchDate": "2026-09-28",
            "diffPct": -0.71,
            "original": {
              "refPrice": 385.0,
              "refDate": "2026-09-28",
              "buyLow": 380,
              "buyHigh": 390,
              "target": 404,
              "stop": 372
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹384 cr (min ₹100 cr), price ₹387.75"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹401.64, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -1.2 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": false,
              "detail": "+1.9% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.5 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.8% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.46 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.8,
            "sma20": 398.13,
            "sma50": 401.64,
            "sma200": 418.4,
            "rs1m": -0.4,
            "rs3m": -1.21,
            "fromHigh52": -18.1,
            "fromLow52": 1.92,
            "avgValue20": 3844973384
          }
        },
        {
          "market": "IN",
          "symbol": "M&M",
          "yahoo": "M&M.NS",
          "name": "Mahindra & Mahindra",
          "sector": "Auto (SUV / tractors)",
          "currency": "INR",
          "refPrice": 2947.8,
          "refDate": "2026-09-29",
          "buyLow": 2913.8,
          "buyHigh": 2962.35,
          "target": 3059.5,
          "stop": 2865.25,
          "risk": "Medium",
          "thesis": "September auto sales come out Oct 1, compared with an easy base last year.",
          "reasons": [
            "The Street expects about 1.14 lakh auto units in September versus about 1 lakh last year (~+14%).",
            "Motilal Oswal expects about 18% wholesale growth across listed PV makers. September 2025 was weak because buyers waited for the GST cut and the festive season started late.",
            "The stock traded at ₹3,150–3,160 on Sep 8–9, so that gap is the first upside target."
          ],
          "data": [
            [
              "Close (Sep 25)",
              "₹3,035 (+1.75%)"
            ],
            [
              "Sep volume est.",
              "≈ 1.14 lakh (+14%)"
            ],
            [
              "Early-Sep level",
              "₹3,150–3,160"
            ],
            [
              "Data date",
              "Oct 1"
            ]
          ],
          "watch": "The reference price is the Sep 25 close; a Sep 29 close wasn't available. Check the live quote. If volumes merely match the estimate, the stock may not move.",
          "sources": [
            [
              "ZeeBiz – September auto sales preview",
              "https://www.zeebiz.com/automobile/news-september-auto-sales-why-could-maruti-tata-motors-ashok-leyland-tvs-report-higher-volumes-403099"
            ],
            [
              "5paisa – M&M closes at ₹3,035 (Sep 25)",
              "https://www.5paisa.com/blog/mahindra-and-mahindra-bank-stock-update-25-sep-26"
            ],
            [
              "5paisa – M&M closes at ₹3,150 (Sep 9)",
              "https://www.5paisa.com/blog/mahindra-and-mahindra-bank-stock-update-09-sep-26"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 2947.8,
            "date": "2026-09-29",
            "researchPrice": 3035.0,
            "researchDate": "2026-09-25",
            "diffPct": 2.96,
            "original": {
              "refPrice": 3035.0,
              "refDate": "2026-09-25",
              "buyLow": 3000,
              "buyHigh": 3050,
              "target": 3150,
              "stop": 2950
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹589 cr (min ₹100 cr), price ₹2,947.8"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹3252.15, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -1.8 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": false,
              "detail": "+1.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-2.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.0% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.67 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.0,
            "sma20": 3082.06,
            "sma50": 3252.15,
            "sma200": 3278.14,
            "rs1m": -4.14,
            "rs3m": -1.8,
            "fromHigh52": -23.23,
            "fromLow52": 1.79,
            "avgValue20": 5887976229
          }
        },
        {
          "market": "IN",
          "symbol": "ONGC",
          "yahoo": "ONGC.NS",
          "name": "Oil & Natural Gas Corp",
          "sector": "Energy (upstream)",
          "currency": "INR",
          "refPrice": 230.0,
          "refDate": "2026-09-29",
          "buyLow": 227.8,
          "buyHigh": 231.8,
          "target": 239.9,
          "stop": 223.75,
          "risk": "Medium",
          "thesis": "Crude above $100 means higher prices for every barrel it produces, and the stock hasn't caught up.",
          "reasons": [
            "Brent is about $102.6. ONGC and Oil India rose about 3% each time Brent crossed $100 in September.",
            "The stock traded at ₹237.40 on Sep 8 and has fallen back to ₹228 with the market. The ₹238 target is simply that recent level.",
            "Oil producers are the one part of the Indian market that benefits directly from the Gulf supply shock."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹228.20"
            ],
            [
              "Sep 8 level",
              "₹237.40"
            ],
            [
              "Brent (Sep 29)",
              "≈ $102.6"
            ],
            [
              "Day range",
              "₹227.90 – ₹230.69"
            ]
          ],
          "watch": "The windfall tax on crude above $75 caps how much ONGC keeps. A crude drop of 5% or more (Brent fell 2.6% on Sep 29) would hurt.",
          "sources": [
            [
              "Business Standard – Oil India, ONGC surge as Brent > $100",
              "https://www.business-standard.com/markets/news/upstream-stocks-oil-india-ongc-surge-3-as-brent-holds-above-100-mark-126091000231_1.html"
            ],
            [
              "BusinessToday – ONGC, Oil India climb as Brent nears $100",
              "https://www.businesstoday.in/markets/stocks/story/ongc-oil-india-chennai-petroleum-mrpl-shares-climb-as-brent-nears-100-553942-2026-09-08"
            ],
            [
              "Kotak Neo – ONGC share price",
              "https://www.kotakneo.com/stocks/oil-natural-gas-corpn-share-price/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 230.0,
            "date": "2026-09-29",
            "researchPrice": 228.2,
            "researchDate": "2026-09-29",
            "diffPct": -0.78,
            "original": {
              "refPrice": 228.2,
              "refDate": "2026-09-29",
              "buyLow": 226,
              "buyHigh": 230,
              "target": 238,
              "stop": 222
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹229 cr (min ₹100 cr), price ₹230.0"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹237.4, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +2.8 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": false,
              "detail": "+1.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.2 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.75% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.67 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.75,
            "sma20": 234.78,
            "sma50": 237.4,
            "sma200": 257.06,
            "rs1m": 5.26,
            "rs3m": 2.84,
            "fromHigh52": -25.2,
            "fromLow52": 1.03,
            "avgValue20": 2287165409
          }
        },
        {
          "market": "IN",
          "symbol": "ADANIENT",
          "yahoo": "ADANIENT.NS",
          "name": "Adani Enterprises",
          "sector": "Conglomerate / Infra",
          "currency": "INR",
          "refPrice": 2972.9,
          "refDate": "2026-09-29",
          "buyLow": 2920,
          "buyHigh": 2980,
          "target": 3120,
          "stop": 2850,
          "risk": "High",
          "thesis": "A regulatory case just ended. Stocks usually get a few days of follow-through after that.",
          "reasons": [
            "It was the #1 Nifty gainer on Sep 29 (+5.01%) after Adani group entities settled SEBI's minimum-public-shareholding case for ₹1.48 crore.",
            "The airport unit signed a $1B fundraising deal in September, and a ₹2,498 crore block deal was absorbed without the price falling.",
            "Group stocks tend to move together, and Adani Ports (+4.49%) confirmed the move the same day."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹2,972.90 (+5.01%)"
            ],
            [
              "Trigger",
              "SEBI MPS settlement"
            ],
            [
              "Airport fundraise",
              "$1B"
            ],
            [
              "Block deal",
              "₹2,498 cr"
            ]
          ],
          "watch": "After a 5% jump, don't chase it above ₹2,980. Adani stocks carry extra headline risk, so the stop is tight.",
          "sources": [
            [
              "Angel One – Top gainers Sep 29, 2026",
              "https://www.angelone.in/news/market-updates/top-gainers-and-losers-on-september-29-2026-adani-enterprises-and-adani-ports-gain-while-titan-drops-3"
            ],
            [
              "Upstox – Adani Enterprises surges 5%",
              "https://upstox.com/news/market-news/stocks/top-gainers-and-losers-september-29-titan-wipro-shares-fall-3-adani-enterprises-surges-5-check-list/article-201071/"
            ],
            [
              "CNBC – Airport unit $1B fundraising",
              "https://www.cnbc.com/2026/09/09/adani-enterprises-airport-fundraise-shares.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 2972.9,
            "date": "2026-09-29",
            "researchPrice": 2972.9,
            "researchDate": "2026-09-29",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹426 cr (min ₹100 cr), price ₹2,972.9"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹3001.95, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -1.1 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+69.6% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+0.1 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.78% of price (max 5.0% for weekly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.70 (min 1.8)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.78,
            "sma20": 2965.67,
            "sma50": 3001.95,
            "sma200": 2574.17,
            "rs1m": 10.02,
            "rs3m": -1.07,
            "fromHigh52": -8.39,
            "fromLow52": 69.59,
            "avgValue20": 4257859906
          }
        }
      ],
      "marketSources": [
        [
          "Business Standard – Sensex/Nifty close, Sep 29, 2026",
          "https://www.business-standard.com/markets/news/stock-market-live-updates-september-29-sensex-today-nifty50-gift-nifty-crude-oil-price-ipo-today-126092900092_1.html"
        ],
        [
          "INDmoney – Nifty falls as midcaps slide; pharma & metals rise",
          "https://www.indmoney.com/blog/stocks/nifty-recovers-from-lows-midcaps-lag-september-29-2026"
        ],
        [
          "Yahoo Finance – Stock market news for Sep 29, 2026",
          "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html"
        ],
        [
          "ChartRow – S&P 500 sector performance 2026",
          "https://chartrow.com/sp500/sector-performance"
        ]
      ],
      "superseded": {
        "by": "2026-10-01-weekly",
        "reason": "Replaced on 30 Sep 2026 after the stock-selection review: prices were checked against official exchange closes, and several picks failed the new rule checks (trend, relative strength, falling-knife, earnings-risk) in CRITERIA.md."
      }
    },
    {
      "id": "2026-09-30-monthly",
      "horizon": "monthly",
      "date": "2026-09-30",
      "horizonDays": 30,
      "expires": "2026-10-30",
      "context": {
        "US": {
          "benchmark": "^GSPC",
          "benchmarkName": "S&P 500",
          "benchmarkRef": 7683.69,
          "summary": "S&P 500 fell 0.8% to 7,683.69 on Sep 29. The 30-year Treasury yield hit its highest level since 2002 and Conference Board consumer confidence dropped to 81.9 (from 88.6). Energy is the best S&P sector in 2026 (about +39% YTD) as the US-Iran conflict keeps Brent above $100; consumer discretionary is the laggard (about -9%). In a tape like this the picks lean toward sectors with real earnings or contract momentum, not toward broad beta."
        },
        "IN": {
          "benchmark": "^NSEI",
          "benchmarkName": "Nifty 50",
          "benchmarkRef": 22716.2,
          "summary": "Nifty 50 closed at 22,716.20 (-0.28%) and Sensex at 72,529.07 on Sep 29. FIIs sold a net ₹5,353 crore that day and the Sensex is down about 13% in 2026. Crude above $100 and rising US yields are the headwinds. Pharma (Nifty Pharma about +18% YTD) and metals are the sectors still rising, and defence has fresh order visibility. India VIX is 13.3, so moves are orderly rather than panicky."
        }
      },
      "picks": [
        {
          "market": "US",
          "symbol": "MU",
          "yahoo": "MU",
          "name": "Micron Technology",
          "sector": "Semiconductors / AI memory",
          "currency": "USD",
          "refPrice": 1065.08,
          "refDate": "2026-09-29",
          "buyLow": 1040,
          "buyHigh": 1070,
          "target": 1175,
          "stop": 975,
          "risk": "High",
          "thesis": "The single strongest earnings-momentum story in the US market, with its catalyst landing today.",
          "reasons": [
            "Reports fiscal Q4 after the close on Sep 30. Consensus is about $51.2B revenue (+352% YoY) and $31.73 EPS versus $3.03 a year ago.",
            "Last quarter's guide was $50.0B ±$1.0B revenue at about 86% gross margin, so AI memory (HBM) supply is still tight.",
            "JPMorgan, Morgan Stanley and Bank of America all rate it positively going into the print."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "$1,065.08"
            ],
            [
              "Day range",
              "$1,057.70 – $1,082.66"
            ],
            [
              "YTD",
              "+279%"
            ],
            [
              "Q4 consensus EPS",
              "$31.73 (vs $3.03)"
            ]
          ],
          "watch": "Earnings are a binary event, and a stock that is up 279% has no room for a soft guide. The safer entry is after the report: buy only if it holds the buy zone the next morning.",
          "sources": [
            [
              "Trefis – MU earnings preview (Sep 29, 2026)",
              "https://www.trefis.com/stock/mu/articles/616909/how-will-micron-technology-stock-react-to-its-upcoming-earnings-5/2026-09-29"
            ],
            [
              "24/7 Wall St. – Micron guidance preview",
              "https://247wallst.com/investing/2026/09/29/microns-earnings-guidance-may-look-weak-tomorrow-buy-mu-stock-anyway/"
            ],
            [
              "GuruFocus – MU Q4 2026 preview",
              "https://www.gurufocus.com/news/9101080/micron-technology-mu-q4-2026-earnings-preview-analysts-optimistic"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1065.08,
            "date": "2026-09-29",
            "researchPrice": 1065.08,
            "researchDate": "2026-09-29",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $24,971M (min $50M), price $1,065.08"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close above 50-day avg $949.71, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -10.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+565.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 4.41% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.50 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 4.41,
            "sma20": 1005.52,
            "sma50": 949.71,
            "sma200": 669.11,
            "rs1m": 14.7,
            "rs3m": -10.02,
            "fromHigh52": -15.13,
            "fromLow52": 565.8,
            "avgValue20": 24970750143
          },
          "eventRisk": "Earnings on 2026-09-30, inside the holding window"
        },
        {
          "market": "US",
          "symbol": "BA",
          "yahoo": "BA",
          "name": "Boeing",
          "sector": "Aerospace & Defense",
          "currency": "USD",
          "refPrice": 187.68,
          "refDate": "2026-09-29",
          "buyLow": 186,
          "buyHigh": 192,
          "target": 205,
          "stop": 177,
          "risk": "Medium",
          "thesis": "A fresh, company-specific catalyst that the market had only a few after-hours minutes to price in.",
          "reasons": [
            "On Sep 29 the US Navy picked Boeing over Northrop Grumman for the F/A-XX sixth-generation carrier fighter, a development contract worth more than $20B.",
            "This is Boeing's second sixth-generation fighter win in two years. It refills the defense backlog as Super Hornet production winds down.",
            "The stock rose about 1.8% in the regular session and another ~2.3% after hours. Defense contract wins of this size often keep drawing buyers for days as analysts raise estimates."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "$187.68"
            ],
            [
              "After-hours",
              "≈ +2.3%"
            ],
            [
              "Contract value",
              "$20B+ (development)"
            ],
            [
              "Competitor",
              "Northrop Grumman (lost)"
            ]
          ],
          "watch": "Buying above $192 means chasing the gap. Commercial-jet delivery numbers (early October) can swing the stock either way.",
          "sources": [
            [
              "Boeing IR – U.S. Navy selects Boeing for F/A-XX",
              "https://investors.boeing.com/investors/news/press-release-details/2026/U-S--Navy-Selects-Boeing-for-FA-XX-Program/default.aspx"
            ],
            [
              "GuruFocus – BA wins $20B contract, shares rise",
              "https://www.gurufocus.com/news/9102539/boeing-ba-wins-20-billion-us-navy-fighter-contract-shares-rise-23"
            ],
            [
              "Seeking Alpha – 2nd major stealth jet program",
              "https://seekingalpha.com/news/4648316-boeing-wins-20b-navy-fighter-contract-its-2nd-major-stealth-jet-program"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 187.68,
            "date": "2026-09-29",
            "researchPrice": 187.68,
            "researchDate": "2026-09-29",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $1,487M (min $50M), price $187.68"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg $213.34, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -15.6 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": false,
              "detail": "+6.2% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-2.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.27% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.33 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.27,
            "sma20": 202.63,
            "sma50": 213.34,
            "sma200": 220.95,
            "rs1m": -10.02,
            "rs3m": -15.59,
            "fromHigh52": -26.21,
            "fromLow52": 6.17,
            "avgValue20": 1486513271
          },
          "eventRisk": "Earnings on 2026-10-28, inside the holding window"
        },
        {
          "market": "US",
          "symbol": "LLY",
          "yahoo": "LLY",
          "name": "Eli Lilly",
          "sector": "Healthcare / Pharma",
          "currency": "USD",
          "refPrice": 1184.63,
          "refDate": "2026-09-29",
          "buyLow": 1165,
          "buyHigh": 1190,
          "target": 1265,
          "stop": 1125,
          "risk": "Low–Medium",
          "thesis": "A defensive-growth name about 8% below its August high, with a new product ramping up.",
          "reasons": [
            "Its oral GLP-1 pill Foundayo (orforglipron) is on the market, including the Medicare GLP-1 Bridge program at $50/month. That opens a much bigger patient pool than injectables.",
            "Healthcare is one of the sectors printing 52-week highs while consumer names slide, which makes it a good place to hide in a rising-yield tape.",
            "The pullback from the $1,292.65 high (Aug 19) gives room to run into Q3 earnings season."
          ],
          "data": [
            [
              "Close (Sep 28)",
              "$1,184.78"
            ],
            [
              "52-week high",
              "$1,292.65 (Aug 19, 2026)"
            ],
            [
              "Distance from high",
              "≈ -8.3%"
            ],
            [
              "Key product",
              "Foundayo (oral GLP-1)"
            ]
          ],
          "watch": "The reference price is the Sep 28 close because a verified Sep 29 close wasn't available. Check the live quote first. Drug-pricing headlines out of Washington are the main risk.",
          "sources": [
            [
              "ad-hoc-news – LLY last trade Sep 28, 2026",
              "https://www.ad-hoc-news.de/boerse/news/nachboerse/eli-lilly-stock-last-trades-at-usd-1-186-07-on-september-28-2026/70194978"
            ],
            [
              "Yahoo Finance – Lilly up ~7% in a week",
              "https://finance.yahoo.com/healthcare/articles/lilly-around-7-week-buy-124900308.html"
            ],
            [
              "Parameter – LLY 52-week peak on regulatory wins",
              "https://parameter.io/eli-lilly-lly-stock-hits-all-time-52-week-peak-on-regulatory-wins/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1184.63,
            "date": "2026-09-29",
            "researchPrice": 1184.78,
            "researchDate": "2026-09-28",
            "diffPct": 0.01,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $2,595M (min $50M), price $1,184.63"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close above 50-day avg $1178.28, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -3.5 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+65.4% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.0 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.63% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.67 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.63,
            "sma20": 1152.71,
            "sma50": 1178.28,
            "sma200": 1072.06,
            "rs1m": 1.38,
            "rs3m": -3.52,
            "fromHigh52": -8.36,
            "fromLow52": 65.43,
            "avgValue20": 2594541319
          },
          "eventRisk": "Earnings on 2026-10-29, inside the holding window"
        },
        {
          "market": "US",
          "symbol": "MPC",
          "yahoo": "MPC",
          "name": "Marathon Petroleum",
          "sector": "Energy / Refining",
          "currency": "USD",
          "refPrice": 392.03,
          "refDate": "2026-09-29",
          "buyLow": 382,
          "buyHigh": 394,
          "target": 422,
          "stop": 366,
          "risk": "Medium",
          "thesis": "The leading stock in the leading sector, with Q3 profits already baked into refining margins.",
          "reasons": [
            "The US 3-2-1 crack spread was $73.12/bbl on Sep 22, close to the all-time record. The August average ($65.61) was the highest monthly figure since 2006. Every Q3 barrel MPC refined earned that margin.",
            "Gulf export blockades have US refiners running above 100% of nameplate capacity.",
            "MPC is up about 10% in September and nearly doubled in 2026, with a Strong Buy quant rating. It sits about 8% under its Sep 18 all-time high of $424.89."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "$391.99"
            ],
            [
              "All-time high",
              "$424.89 (Sep 18, 2026)"
            ],
            [
              "1-month change",
              "≈ +10%"
            ],
            [
              "3-2-1 crack (Sep 22)",
              "$73.12/bbl"
            ]
          ],
          "watch": "A ceasefire or a US diesel-export ban would compress margins quickly. Treat the $366 stop seriously.",
          "sources": [
            [
              "thetrading.tools – 3-2-1 crack spread",
              "https://www.thetrading.tools/crack-spread"
            ],
            [
              "Seeking Alpha – energy stocks' biggest September gains",
              "https://seekingalpha.com/news/4647494-these-10-energy-stocks-posted-the-biggest-one-month-gains-as-september-ends"
            ],
            [
              "Forbes – refining stocks soar as crack spread hits record",
              "https://www.forbes.com/sites/garthfriesen/2026/07/23/refining-stocks-soar-as-crack-spread-hits-record-high-in-2026/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 392.03,
            "date": "2026-09-29",
            "researchPrice": 391.99,
            "researchDate": "2026-09-29",
            "diffPct": -0.01,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $1,229M (min $50M), price $392.03"
            },
            {
              "name": "Trend",
              "pass": true,
              "detail": "close above 50-day avg $359.65, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +51.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+142.1% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.4 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 3.69% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.55 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 3.69,
            "sma20": 397.33,
            "sma50": 359.65,
            "sma200": 258.32,
            "rs1m": 6.82,
            "rs3m": 51.04,
            "fromHigh52": -9.06,
            "fromLow52": 142.1,
            "avgValue20": 1228876765
          }
        },
        {
          "market": "US",
          "symbol": "JPM",
          "yahoo": "JPM",
          "name": "JPMorgan Chase",
          "sector": "Financials / Banks",
          "currency": "USD",
          "refPrice": 334.98,
          "refDate": "2026-09-29",
          "buyLow": 328.14,
          "buyHigh": 337.91,
          "target": 355.49,
          "stop": 319.35,
          "risk": "Low–Medium",
          "thesis": "It kicks off Q3 earnings season inside the 1-month window, and a steep yield curve helps it.",
          "reasons": [
            "Q3 results come before the open on Oct 13. Consensus is $5.84 EPS (+15.2% YoY) on about $51.5B revenue, with FY26 EPS seen at $24.29 (+19.4%).",
            "Long yields at 24-year highs widen what banks earn on new loans, and JPM is the best-run balance sheet for capturing that.",
            "It trades about 6% below its high, against an analyst target of $406. A $1.65 dividend goes ex on Oct 6."
          ],
          "data": [
            [
              "Price (late Sep)",
              "≈ $343"
            ],
            [
              "Q3 EPS est.",
              "$5.84 (+15.2% YoY)"
            ],
            [
              "Earnings date",
              "Oct 13 (pre-market)"
            ],
            [
              "Analyst target",
              "$406"
            ]
          ],
          "watch": "Weak consumer confidence could show up as higher card-loss provisions. That is the number to watch on Oct 13.",
          "sources": [
            [
              "TIKR – JPM 6% below its high; what Q3 must prove",
              "https://www.tikr.com/blog/jpmorgan-stock-sits-6-below-its-high-after-a-record-year-heres-what-q3-earnings-must-prove"
            ],
            [
              "inkl – JPMorgan quarterly earnings preview",
              "https://www.inkl.com/news/jpmorgan-chases-quarterly-earnings-preview-what-you-need-to-know"
            ],
            [
              "X / Markets Today – HSBC resumes bank coverage (Sep 28)",
              "https://x.com/marketsday/status/2104555743601189209"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 334.98,
            "date": "2026-09-29",
            "researchPrice": 343.0,
            "researchDate": "2026-09-29",
            "diffPct": 2.39,
            "original": {
              "refPrice": 343.0,
              "refDate": "2026-09-29",
              "buyLow": 336,
              "buyHigh": 346,
              "target": 364,
              "stop": 327
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value $2,785M (min $50M), price $334.98"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg $353.18, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +0.1 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+20.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-2.2 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.96% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.64 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.96,
            "sma20": 349.16,
            "sma50": 353.18,
            "sma200": 321.56,
            "rs1m": -5.8,
            "rs3m": 0.05,
            "fromHigh52": -8.6,
            "fromLow52": 20.02,
            "avgValue20": 2784634415
          },
          "eventRisk": "Earnings on 2026-10-13, inside the holding window"
        },
        {
          "market": "IN",
          "symbol": "DRREDDY",
          "yahoo": "DRREDDY.NS",
          "name": "Dr. Reddy's Laboratories",
          "sector": "Pharma",
          "currency": "INR",
          "refPrice": 1251.9,
          "refDate": "2026-09-29",
          "buyLow": 1230,
          "buyHigh": 1255,
          "target": 1345,
          "stop": 1195,
          "risk": "Low–Medium",
          "thesis": "A fresh broker upgrade inside the best-performing sector of a falling market.",
          "reasons": [
            "Citi upgraded the stock on Sep 29, its first upgrade in three years. It raised FY27/28/29 EPS estimates by 2%/5%/19% and sees the US Abatacept biosimilar plus Semaglutide in Canada adding $350–400M in revenue.",
            "The stock rose for a third straight session (+2.53%), outperforming a Nifty that fell 0.28%.",
            "Dr. Reddy's is up about 10% YTD while the Nifty is down about 8%, so it has outperformed on every major timeframe."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹1,251.90 (+2.53%)"
            ],
            [
              "52-week range",
              "₹1,101 – ₹1,414.90"
            ],
            [
              "YTD vs Nifty",
              "+10.2% vs -8.4%"
            ],
            [
              "Trigger",
              "Citi upgrade"
            ]
          ],
          "watch": "It still has open USFDA observations, so any warning-letter news would hurt. Q2 FY27 results are due in late October.",
          "sources": [
            [
              "Business Standard – Dr Reddy's up for third straight session",
              "https://www.business-standard.com/markets/capital-market-news/dr-reddys-laboratories-ltd-up-for-third-straight-session-126092900585_1.html"
            ],
            [
              "India Infoline – Dr Reddy's hits 52-week high; pharma rally",
              "https://www.indiainfoline.com/news/companies/dr-reddys-hits-52-week-high-despite-usfda-observations-biologics-pipeline-and-pharma-rally-fuel-investor-optimism"
            ],
            [
              "HDFC Sky – Top gainers Sep 29, 2026",
              "https://hdfcsky.com/news/top-gainers-losers-september-29-2026-at-3-30-pm"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1251.9,
            "date": "2026-09-29",
            "researchPrice": 1251.9,
            "researchDate": "2026-09-29",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹195 cr (min ₹100 cr), price ₹1,251.9"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close above 50-day avg ₹1174.43, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": false,
              "detail": "3-month return vs index -1.6 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+13.7% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": false,
              "detail": "+3.3 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.82% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.16 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.82,
            "sma20": 1175.83,
            "sma50": 1174.43,
            "sma200": 1247.99,
            "rs1m": 14.49,
            "rs3m": -1.6,
            "fromHigh52": -11.52,
            "fromLow52": 13.71,
            "avgValue20": 1954684315
          },
          "eventRisk": "Earnings on 2026-10-23, inside the holding window"
        },
        {
          "market": "IN",
          "symbol": "SUNPHARMA",
          "yahoo": "SUNPHARMA.NS",
          "name": "Sun Pharmaceutical",
          "sector": "Pharma (specialty)",
          "currency": "INR",
          "refPrice": 1865.0,
          "refDate": "2026-09-29",
          "buyLow": 1841.65,
          "buyHigh": 1872.1,
          "target": 1993.85,
          "stop": 1796.0,
          "risk": "Low",
          "thesis": "India's largest pharma company, with new specialty-drug news and three brokers' targets well above the price.",
          "reasons": [
            "Its PCSK9 inhibitor received European Commission approval. Macquarie rates it Outperform with a ₹2,150 target.",
            "The Lerodarcil licensing deal expands the innovative-medicines portfolio. 360 ONE rates it Buy with a ₹2,250 target, and Geojit (Sep 21) says Buy with ₹2,070.",
            "Q1 FY27 net profit rose 27% YoY to ₹2,895 crore, so earnings momentum is real going into late-October Q2 results."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹1,838"
            ],
            [
              "52-week range",
              "₹1,580 – ₹2,046.90"
            ],
            [
              "Q1 FY27 profit",
              "₹2,895 cr (+27% YoY)"
            ],
            [
              "Broker targets",
              "₹2,070 / ₹2,150 / ₹2,250"
            ]
          ],
          "watch": "US formulation sales fell to $427M in Q1. If specialty growth doesn't offset that in Q2, the stock may stall.",
          "sources": [
            [
              "Business Standard – Expanding innovative portfolio may drive gains (Sep 29, 2026)",
              "https://www.business-standard.com/markets/news/expanding-innovative-portfolio-may-drive-gains-for-sun-pharma-stock-126092900957_1.html"
            ],
            [
              "BusinessToday – Pharma stocks in focus (Sep 29, 2026)",
              "https://www.businesstoday.in/markets/trending-stocks/story/pharma-stocks-sun-pharma-dr-reddys-cipla-biocon-others-in-focus-today-heres-why-558401-2026-09-29"
            ],
            [
              "Business Standard – Sun Pharma Q1 FY27 results",
              "https://www.business-standard.com/companies/quarterly-results/quarterly-results-sun-pharma-q1fy27-profit-revenue-ebitda-results-126073100858_1.html"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1865.0,
            "date": "2026-09-29",
            "researchPrice": 1838.0,
            "researchDate": "2026-09-29",
            "diffPct": -1.45,
            "original": {
              "refPrice": 1838.0,
              "refDate": "2026-09-29",
              "buyLow": 1815,
              "buyHigh": 1845,
              "target": 1965,
              "stop": 1770
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹264 cr (min ₹100 cr), price ₹1,865.0"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹1909.6, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +5.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+18.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-0.0 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 1.58% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.25 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 1.58,
            "sma20": 1865.6,
            "sma50": 1909.6,
            "sma200": 1808.83,
            "rs1m": -0.0,
            "rs3m": 5.05,
            "fromHigh52": -8.89,
            "fromLow52": 18.04,
            "avgValue20": 2636432771
          }
        },
        {
          "market": "IN",
          "symbol": "HAL",
          "yahoo": "HAL.NS",
          "name": "Hindustan Aeronautics",
          "sector": "Defence",
          "currency": "INR",
          "refPrice": 4549.3,
          "refDate": "2026-09-29",
          "buyLow": 4488.2,
          "buyHigh": 4565.9,
          "target": 4857.35,
          "stop": 4352.2,
          "risk": "Medium",
          "thesis": "The stock has pulled back about 7% while its order book, the reason it rallied, is still growing.",
          "reasons": [
            "The Defence Acquisition Council approved about ₹1.1 lakh crore of capital procurement on Sep 7, 2026. Analysts named HAL and BEL as the top beneficiaries.",
            "HAL traded at ₹5,009 after that announcement and has drifted back to ₹4,683 with the broad market, not because of anything company-specific.",
            "MOFSL rates it Buy with a ₹5,800 target, and the order book gives multi-year revenue visibility."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹4,682.90"
            ],
            [
              "Post-DAC high (Sep 8)",
              "≈ ₹5,009"
            ],
            [
              "DAC approvals",
              "₹1.1 lakh crore"
            ],
            [
              "MOFSL target",
              "₹5,800"
            ]
          ],
          "watch": "PSU defence stocks get hit hardest when FIIs sell. If it closes below ₹4,480, the pullback has turned into a trend change.",
          "sources": [
            [
              "Business Standard – HAL, BEL top beneficiaries of ₹1.1 trn buys",
              "https://www.business-standard.com/markets/news/1-1trn-defence-buys-buoy-stocks-by-4-hal-bel-seen-as-top-beneficiaries-126090800226_1.html"
            ],
            [
              "BusinessToday – Defence targets after DAC approvals",
              "https://www.businesstoday.in/markets/stocks/story/bel-hal-bdl-shares-targets-for-defence-stocks-after-rs-1-1-lakh-crore-dac-approvals-553813-2026-09-08"
            ],
            [
              "Tickertape – HAL share price",
              "https://www.tickertape.in/stocks/hindustan-aeronautics-HIAE"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 4549.3,
            "date": "2026-09-29",
            "researchPrice": 4682.9,
            "researchDate": "2026-09-29",
            "diffPct": 2.94,
            "original": {
              "refPrice": 4682.9,
              "refDate": "2026-09-29",
              "buyLow": 4620,
              "buyHigh": 4700,
              "target": 5000,
              "stop": 4480
            },
            "status": "adjusted"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹388 cr (min ₹100 cr), price ₹4,549.3"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹4819.02, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +8.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+30.8% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-2.6 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.28% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.89 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.28,
            "sma20": 4817.54,
            "sma50": 4819.02,
            "sma200": 4409.31,
            "rs1m": 0.79,
            "rs3m": 7.97,
            "fromHigh52": -11.66,
            "fromLow52": 30.76,
            "avgValue20": 3878688298
          }
        },
        {
          "market": "IN",
          "symbol": "ADANIPORTS",
          "yahoo": "ADANIPORTS.NS",
          "name": "Adani Ports & SEZ",
          "sector": "Infrastructure / Logistics",
          "currency": "INR",
          "refPrice": 1822.0,
          "refDate": "2026-09-29",
          "buyLow": 1785,
          "buyHigh": 1825,
          "target": 1945,
          "stop": 1735,
          "risk": "Medium",
          "thesis": "Record cargo volumes, with the next monthly data release due in the first days of October.",
          "reasons": [
            "August 2026 cargo was a record 50 MMT, up 19% YoY: dry cargo +25%, containers +15%.",
            "It was the #2 Nifty gainer on Sep 29 (+4.49%) and is up about 37% from its 52-week low. Brokers raised targets in September on FY27 volume and profit growth.",
            "September cargo numbers usually come out around Oct 1–3, a near-term catalyst that fits a 1-month horizon."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹1,822 (+4.49%)"
            ],
            [
              "Aug cargo",
              "50 MMT (+19% YoY)"
            ],
            [
              "From 52-week low",
              "≈ +37%"
            ],
            [
              "Next catalyst",
              "Sep cargo data, ~Oct 1–3"
            ]
          ],
          "watch": "After a 4.5% one-day jump, don't chase. The buy zone assumes a small dip. Adani-group headlines carry extra risk of sudden drops.",
          "sources": [
            [
              "Angel One – Top gainers & losers Sep 29, 2026",
              "https://www.angelone.in/news/market-updates/top-gainers-and-losers-on-september-29-2026-adani-enterprises-and-adani-ports-gain-while-titan-drops-3"
            ],
            [
              "Business Standard – Adani Ports may outperform on FY27 volumes",
              "https://www.business-standard.com/amp/markets/news/adani-ports-may-outperform-on-volume-profit-growth-expectations-for-fy27-126092301115_1.html"
            ],
            [
              "BusinessToday – Adani Ports target upgrade",
              "https://www.businesstoday.in/markets/stocks/story/adani-ports-share-price-target-52-week-low-adani-stock-gets-target-price-upgrade-554746-2026-09-11"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 1822.0,
            "date": "2026-09-29",
            "researchPrice": 1822.0,
            "researchDate": "2026-09-29",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹347 cr (min ₹100 cr), price ₹1,822.0"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close above 50-day avg ₹1722.62, 50-day avg falling"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +2.1 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+41.0% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "+1.6 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.28% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": true,
              "detail": "R:R 2.00 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.28,
            "sma20": 1754.57,
            "sma50": 1722.62,
            "sma200": 1630.33,
            "rs1m": 20.41,
            "rs3m": 2.12,
            "fromHigh52": -3.65,
            "fromLow52": 41.02,
            "avgValue20": 3465124199
          },
          "eventRisk": "Earnings on 2026-10-28, inside the holding window"
        },
        {
          "market": "IN",
          "symbol": "HINDALCO",
          "yahoo": "HINDALCO.NS",
          "name": "Hindalco Industries",
          "sector": "Metals / Aluminium",
          "currency": "INR",
          "refPrice": 955.2,
          "refDate": "2026-09-29",
          "buyLow": 945,
          "buyHigh": 960,
          "target": 1025,
          "stop": 915,
          "risk": "Medium",
          "thesis": "Aluminium prices are at a 4-year high, and the stock has pulled back 3% in a week.",
          "reasons": [
            "LME aluminium is about $3,184/t, up 21% YoY and at a 4-year high. That is direct pricing power for Hindalco's India smelters.",
            "Novelis (the US/EU rolling arm) is 'largely on track' per Ford's CFO, with output nearing full pace in Q4. CLSA sees group EBITDA doubling by FY32.",
            "The stock is up about 18% in 2026 while the Sensex fell more than 10%. Metals were one of only two green sectors on Sep 29."
          ],
          "data": [
            [
              "Close (Sep 29)",
              "₹955.20"
            ],
            [
              "52-week range",
              "₹732 – ₹1,176"
            ],
            [
              "LME aluminium",
              "≈ $3,184/t (+21% YoY)"
            ],
            [
              "2026 YTD",
              "≈ +18% (vs Sensex -13%)"
            ]
          ],
          "watch": "Metal stocks follow China demand news. A global risk-off move could hit it despite strong aluminium prices.",
          "sources": [
            [
              "5paisa – Hindalco closes at ₹955.20 (Sep 29, 2026)",
              "https://www.5paisa.com/blog/hindalco-industries-stock-update-29-sep-26"
            ],
            [
              "Business Standard – Hindalco up on Novelis, Oswego restart",
              "https://www.business-standard.com/markets/news/hindalco-share-price-novelis-q4-results-oswego-restart-brokerage-outlook-126052000342_1.html"
            ],
            [
              "Paterson – Pharma & metals lead September sector ranks",
              "https://patersoncapital.com/pharma-ipos-and-metals-lead-septembers-sector-rankings/"
            ]
          ],
          "verified": {
            "source": "Yahoo Finance daily close",
            "close": 955.2,
            "date": "2026-09-29",
            "researchPrice": 955.2,
            "researchDate": "2026-09-29",
            "diffPct": 0.0,
            "status": "ok"
          },
          "checks": [
            {
              "name": "Liquidity",
              "pass": true,
              "detail": "20-day avg traded value ₹326 cr (min ₹100 cr), price ₹955.2"
            },
            {
              "name": "Trend",
              "pass": false,
              "detail": "close below 50-day avg ₹1005.21, 50-day avg rising"
            },
            {
              "name": "Relative strength",
              "pass": true,
              "detail": "3-month return vs index +6.0 pts"
            },
            {
              "name": "Not a falling knife",
              "pass": true,
              "detail": "+28.2% above 52-week low"
            },
            {
              "name": "Not overextended",
              "pass": true,
              "detail": "-1.6 ATR from 20-day avg (max +3.0)"
            },
            {
              "name": "Volatility fits horizon",
              "pass": true,
              "detail": "ATR 2.24% of price (max 6.0% for monthly)"
            },
            {
              "name": "Reward vs risk",
              "pass": false,
              "detail": "R:R 1.93 (min 2.0)"
            }
          ],
          "metricsAtPick": {
            "atrPct": 2.24,
            "sma20": 988.81,
            "sma50": 1005.21,
            "sma200": 981.41,
            "rs1m": 0.11,
            "rs3m": 6.0,
            "fromHigh52": -18.78,
            "fromLow52": 28.24,
            "avgValue20": 3256321606
          }
        }
      ],
      "marketSources": [
        [
          "Business Standard – Sensex/Nifty close, Sep 29, 2026",
          "https://www.business-standard.com/markets/news/stock-market-live-updates-september-29-sensex-today-nifty50-gift-nifty-crude-oil-price-ipo-today-126092900092_1.html"
        ],
        [
          "INDmoney – Nifty falls as midcaps slide; pharma & metals rise",
          "https://www.indmoney.com/blog/stocks/nifty-recovers-from-lows-midcaps-lag-september-29-2026"
        ],
        [
          "Yahoo Finance – Stock market news for Sep 29, 2026",
          "https://finance.yahoo.com/markets/stocks/articles/stock-market-news-sep-29-083000758.html"
        ],
        [
          "ChartRow – S&P 500 sector performance 2026",
          "https://chartrow.com/sp500/sector-performance"
        ]
      ],
      "superseded": {
        "by": "2026-10-01-monthly",
        "reason": "Replaced on 30 Sep 2026 after the stock-selection review: prices were checked against official exchange closes, and several picks failed the new rule checks (trend, relative strength, falling-knife, earnings-risk) in CRITERIA.md."
      }
    }
  ]
};
