// Source of truth for every batch of picks, newest first.
// scripts/update_prices.py parses the object assigned to window.PICKS as JSON,
// so keep it valid JSON: double quotes, no trailing commas, no comments inside.
window.PICKS = {
  "batches": [
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
          "refPrice": 738.68,
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
          ]
        },
        {
          "market": "US",
          "symbol": "VLO",
          "yahoo": "VLO",
          "name": "Valero Energy",
          "sector": "Energy / Refining",
          "currency": "USD",
          "refPrice": 389.57,
          "refDate": "2026-09-28",
          "buyLow": 382,
          "buyHigh": 392,
          "target": 404,
          "stop": 376,
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
          ]
        },
        {
          "market": "US",
          "symbol": "BE",
          "yahoo": "BE",
          "name": "Bloom Energy",
          "sector": "Industrials / AI power",
          "currency": "USD",
          "refPrice": 294.26,
          "refDate": "2026-09-30",
          "buyLow": 285,
          "buyHigh": 298,
          "target": 318,
          "stop": 274,
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
          ]
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
          ]
        },
        {
          "market": "US",
          "symbol": "NKE",
          "yahoo": "NKE",
          "name": "Nike",
          "sector": "Consumer / Apparel",
          "currency": "USD",
          "refPrice": 36.48,
          "refDate": "2026-09-29",
          "buyLow": 35.8,
          "buyHigh": 36.8,
          "target": 39.5,
          "stop": 34.2,
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
          ]
        },
        {
          "market": "IN",
          "symbol": "SBIN",
          "yahoo": "SBIN.NS",
          "name": "State Bank of India",
          "sector": "Banking (PSU)",
          "currency": "INR",
          "refPrice": 956.1,
          "refDate": "2026-09-29",
          "buyLow": 948,
          "buyHigh": 962,
          "target": 992,
          "stop": 932,
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
          ]
        },
        {
          "market": "IN",
          "symbol": "BEL",
          "yahoo": "BEL.NS",
          "name": "Bharat Electronics",
          "sector": "Defence electronics",
          "currency": "INR",
          "refPrice": 385.0,
          "refDate": "2026-09-28",
          "buyLow": 380,
          "buyHigh": 390,
          "target": 404,
          "stop": 372,
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
          ]
        },
        {
          "market": "IN",
          "symbol": "M&M",
          "yahoo": "M&M.NS",
          "name": "Mahindra & Mahindra",
          "sector": "Auto (SUV / tractors)",
          "currency": "INR",
          "refPrice": 3035.0,
          "refDate": "2026-09-25",
          "buyLow": 3000,
          "buyHigh": 3050,
          "target": 3150,
          "stop": 2950,
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
          ]
        },
        {
          "market": "IN",
          "symbol": "ONGC",
          "yahoo": "ONGC.NS",
          "name": "Oil & Natural Gas Corp",
          "sector": "Energy (upstream)",
          "currency": "INR",
          "refPrice": 228.2,
          "refDate": "2026-09-29",
          "buyLow": 226,
          "buyHigh": 230,
          "target": 238,
          "stop": 222,
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
          ]
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
          ]
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
      ]
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
          ]
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
          ]
        },
        {
          "market": "US",
          "symbol": "LLY",
          "yahoo": "LLY",
          "name": "Eli Lilly",
          "sector": "Healthcare / Pharma",
          "currency": "USD",
          "refPrice": 1184.78,
          "refDate": "2026-09-28",
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
          ]
        },
        {
          "market": "US",
          "symbol": "MPC",
          "yahoo": "MPC",
          "name": "Marathon Petroleum",
          "sector": "Energy / Refining",
          "currency": "USD",
          "refPrice": 391.99,
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
          ]
        },
        {
          "market": "US",
          "symbol": "JPM",
          "yahoo": "JPM",
          "name": "JPMorgan Chase",
          "sector": "Financials / Banks",
          "currency": "USD",
          "refPrice": 343.0,
          "refDate": "2026-09-29",
          "buyLow": 336,
          "buyHigh": 346,
          "target": 364,
          "stop": 327,
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
          ]
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
          ]
        },
        {
          "market": "IN",
          "symbol": "SUNPHARMA",
          "yahoo": "SUNPHARMA.NS",
          "name": "Sun Pharmaceutical",
          "sector": "Pharma (specialty)",
          "currency": "INR",
          "refPrice": 1838.0,
          "refDate": "2026-09-29",
          "buyLow": 1815,
          "buyHigh": 1845,
          "target": 1965,
          "stop": 1770,
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
          ]
        },
        {
          "market": "IN",
          "symbol": "HAL",
          "yahoo": "HAL.NS",
          "name": "Hindustan Aeronautics",
          "sector": "Defence",
          "currency": "INR",
          "refPrice": 4682.9,
          "refDate": "2026-09-29",
          "buyLow": 4620,
          "buyHigh": 4700,
          "target": 5000,
          "stop": 4480,
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
          ]
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
          ]
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
          ]
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
      ]
    }
  ]
};
