// Investor-style lists (STYLES.md): long-term ideas in the style of Warren Buffett and Charlie Munger.
// Not their picks; not affiliated with them or Berkshire Hathaway. Numbers come from data/fundamentals.js.
window.STYLES = {
  "reviewed": "2026-10-05",
  "nextReview": "2026-11-01",
  "fundamentalsAsOf": "2026-10-05T09:23+00:00",
  "styles": {
    "buffett": {
      "person": "Warren Buffett",
      "tagline": "Wonderful, understandable businesses with durable moats, little debt and consistent earnings, bought at a sensible price with a margin of safety.",
      "screen": "4-year average return on equity ≥ 15%, net margin ≥ 10%, profitable and free-cash-flow positive every year, debt/equity ≤ 1, P/E ≤ 25 (US) / 35 (India) or a high free-cash-flow yield; buy-below = estimated fair value − 20%.",
      "principles": [
        [
          "Look for demonstrated consistent earning power and good returns on equity while employing little or no debt.",
          "Berkshire acquisition criteria",
          "https://www.berkshirehathaway.com/1999ar/acq.html"
        ],
        [
          "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
          "1989 letter",
          "https://www.berkshirehathaway.com/letters/1989.html"
        ],
        [
          "Stay inside your circle of competence: simple businesses you understand.",
          "1996 letter",
          "https://www.berkshirehathaway.com/letters/1996.html"
        ],
        [
          "A truly great business must have an enduring moat that protects excellent returns on invested capital.",
          "2007 letter",
          "https://www.berkshirehathaway.com/letters/2007ltr.pdf"
        ],
        [
          "Demand a margin of safety: pay well below what the business is worth.",
          "Owner's Manual",
          "https://www.berkshirehathaway.com/ownman.pdf"
        ]
      ]
    },
    "munger": {
      "person": "Charlie Munger",
      "tagline": "Only exceptional businesses that compound high returns on capital for decades; pay a fair price, buy few, hold long, and avoid what can kill you.",
      "screen": "4-year average return on equity ≥ 20%, return on assets ≥ 8%, revenue still growing ≥ 5%/yr, profitable and free-cash-flow positive every year, debt/equity ≤ 0.8, P/E ≤ 40 (US) / 60 (India); buy-below = estimated fair value − 10%; at most 3 ideas.",
      "principles": [
        [
          "Over the long run a stock earns about what the business earns on capital: an 18% business bought at an expensive-looking price still ends up a fine result.",
          "USC 1994 lecture",
          "https://worldlypartners.com/wp-content/uploads/2024/01/1994-lecture-by-charlie-munger-at-usc-a-lesson-on-elementary-worldly-wisdom-as-it-relates-to-investment.pdf"
        ],
        [
          "Few great investments, held a long time: concentration beats wide diversification for the patient.",
          "USC 1994 lecture",
          "https://worldlypartners.com/wp-content/uploads/2024/01/1994-lecture-by-charlie-munger-at-usc-a-lesson-on-elementary-worldly-wisdom-as-it-relates-to-investment.pdf"
        ],
        [
          "Invert, always invert: first rule out what could break the business (leverage, complexity, bad incentives).",
          "Munger on inversion",
          "https://25iq.com/2015/09/12/a-dozen-things-ive-learned-from-charlie-munger-about-inversion-including-the-importance-of-being-consistently-not-stupid-2/"
        ],
        [
          "Pay a fair price for a great business rather than a low price for a mediocre one (the See's Candies lesson).",
          "Berkshire 2007 letter",
          "https://www.berkshirehathaway.com/letters/2007ltr.pdf"
        ]
      ]
    }
  },
  "lists": {
    "buffett": {
      "US": [
        {
          "market": "US",
          "symbol": "TRV",
          "yahoo": "TRV",
          "name": "The Travelers Companies, Inc.",
          "sector": "Financials / Insurance",
          "currency": "USD",
          "price": 360.38,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 360.38,
          "fairValue": 733.53,
          "buyBelow": 586.82,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.1556010112383756,
            "netMargin": 0.16951999,
            "debtEquity": 0.2817231105976774,
            "pe": 9.679829,
            "fcfYield": 0.08365454407737068,
            "revCagr": 0.09790109129310776
          },
          "moat": "Underwriting discipline and scale in US commercial and personal insurance: decades of data, agent relationships and a strong balance sheet let it price risk better than most rivals, and premiums are invested as float, the model Buffett built Berkshire on.",
          "thesis": "A disciplined insurer earning high returns with little debt, trading at a large discount to the estimated value of its earnings.",
          "reasons": [
            "Q2 2026 core return on equity was 24.9% (24.2% over four quarters), with a combined ratio of 83.6% and record net written premiums of $11.5B; it bought back $1.3B of shares in the quarter.",
            "Insurance float is Buffett's favourite business model: customers pay premiums up front, and a disciplined underwriter invests that money while still making an underwriting profit.",
            "Debt is low and the shares trade well below the fair-value estimate based on net income."
          ],
          "watch": "Catastrophe losses (hurricanes, wildfires) swing results year to year, and soft pricing in commercial insurance would squeeze margins. The fair value uses net income, which is lumpier for insurers than free cash flow.",
          "sources": [
            [
              "Travelers – Second quarter 2026 results (SEC 8-K)",
              "https://www.sec.gov/Archives/edgar/data/0000086312/000008631226000143/a991pressrelease63026.htm"
            ],
            [
              "Investing.com – Travelers Q2 2026: core ROE hits 24.9%, beats targets",
              "https://www.investing.com/news/company-news/travelers-q2-2026-slides-core-roe-hits-249-beats-targets-93CH-4798646"
            ],
            [
              "Insurance Business – Travelers reports Q2 net income of $2.21B",
              "https://www.insurancebusinessmag.com/ca/news/breaking-news/travelers-reports-q2-net-income-of-us2-21-billion-as-underwriting-and-investment-results-improve-582878.aspx"
            ]
          ]
        },
        {
          "market": "US",
          "symbol": "AMP",
          "yahoo": "AMP",
          "name": "Ameriprise Financial, Inc.",
          "sector": "Financials / Wealth Management",
          "currency": "USD",
          "price": 490.91,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 490.91,
          "fairValue": 927.54,
          "buyBelow": 742.03,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.6407783565494722,
            "netMargin": 0.199,
            "debtEquity": 0.8950984883188273,
            "pe": 11.852004,
            "fcfYield": 0.08216557408680653,
            "revCagr": 0.09030445218644934
          },
          "moat": "A national network of financial advisers with sticky client relationships: clients rarely move their savings, and fee income grows with the $1.2 trillion of client assets.",
          "thesis": "A capital-light wealth manager with very high returns on equity and steady fee growth, priced like an ordinary financial.",
          "reasons": [
            "Q2 2026 adjusted EPS grew 22% to $11.07, revenue rose 13% to nearly $5B, and return on equity reached 55%.",
            "Wealth-management client assets grew 15% to $1.2 trillion, with steady inflows: recurring, fee-based revenue Buffett would recognise as consistent earning power.",
            "It returned 91% of operating earnings to shareholders in the quarter through buybacks and dividends."
          ],
          "watch": "Earnings rise and fall with markets, since fees are a share of client assets. Adviser recruitment costs and fee pressure from low-cost platforms are the long-term threats.",
          "sources": [
            [
              "Ameriprise Financial – Second quarter 2026 results",
              "https://s205.q4cdn.com/618704162/files/doc_financials/2026/q2/AMP-Q2-2026-Earnings-Release.pdf"
            ],
            [
              "Investing.com – Ameriprise Q2 2026: 22% EPS growth, 55% ROE",
              "https://www.investing.com/news/company-news/ameriprise-q2-2026-slides-22-eps-growth-55-roe-leads-sector-93CH-4809243"
            ],
            [
              "Yahoo Finance – Ameriprise Financial Q2 earnings call highlights",
              "https://finance.yahoo.com/markets/stocks/articles/ameriprise-financial-q2-earnings-call-180640260.html"
            ]
          ]
        },
        {
          "market": "US",
          "symbol": "BF-B",
          "yahoo": "BF-B",
          "name": "Brown Forman Inc",
          "sector": "Consumer Staples / Spirits",
          "currency": "USD",
          "price": 26.16,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 26.16,
          "fairValue": 36.34,
          "buyBelow": 29.07,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.2315612175060397,
            "netMargin": 0.18416001,
            "debtEquity": 0.6223880597014926,
            "pe": 16.87742,
            "fcfYield": 0.07439255633672816,
            "revCagr": -0.024234406984345203
          },
          "moat": "Jack Daniel's is one of the world's best-known whiskey brands, built over 150 years; aged-spirits inventory and brand loyalty can't be copied quickly, the same kind of brand moat as Coca-Cola.",
          "thesis": "A family-controlled premium-spirits brand owner, out of favour after slow sales, now priced below the estimated value of its cash flows.",
          "reasons": [
            "In fiscal Q1 2027 (to July 2026) free cash flow rose $32M to $161M and gross margin expanded 40 bp, while the company reaffirmed its full-year outlook.",
            "Pricing power from brands: Jack Daniel's Tennessee Blackberry and the New Mix ready-to-drink line are growing in emerging markets while the core brand holds steady.",
            "Low debt and a long record of profits and dividends: the kind of simple, durable business Buffett favours, now at a discount to fair value."
          ],
          "watch": "Sales are flat (−1% in the latest quarter) as younger drinkers cut back on alcohol, and tariffs on US whiskey hurt exports. A long period of no growth would make the fair value too high.",
          "sources": [
            [
              "Brown-Forman – First quarter fiscal 2027 results (Sep 2, 2026)",
              "https://investors.brown-forman.com/investors/news-releases/press-release/2026/Brown-Forman-Reports-First-Quarter-Fiscal-2027-Results-Reaffirms-Full-Year-Outlook/default.aspx"
            ],
            [
              "SEC EDGAR – Brown-Forman Form 8-K, fiscal 2027 Q1",
              "https://www.sec.gov/Archives/edgar/data/0000014693/000001469326000048/fy27_q1xerevergreen.htm"
            ],
            [
              "Yahoo Finance – Brown-Forman Q1 earnings call highlights",
              "https://finance.yahoo.com/markets/stocks/articles/brown-forman-q1-earnings-call-160242129.html"
            ]
          ]
        },
        {
          "market": "US",
          "symbol": "ACN",
          "yahoo": "ACN",
          "name": "Accenture plc",
          "sector": "Technology / IT Services",
          "currency": "USD",
          "price": 198.9,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 198.9,
          "fairValue": 285.51,
          "buyBelow": 228.41,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.2703743517719678,
            "netMargin": 0.11279,
            "debtEquity": 0.2623096332714717,
            "pe": 15.88658,
            "fcfYield": 0.08934260508959523,
            "revCagr": 0.04193654176414818
          },
          "moat": "The largest IT-services and consulting brand, embedded in the systems of most big companies: switching consultants mid-project is costly, and its scale wins the largest contracts.",
          "thesis": "A debt-light, cash-generating services leader whose shares trade well below the estimated value of its free cash flow after a two-year slump.",
          "reasons": [
            "Fiscal Q4 2026 (reported 1 Oct) beat forecasts: EPS $3.29 vs $3.18 expected, revenue $18.68B vs $18.03B, and bookings of $22.17B (book-to-bill 1.2).",
            "Fiscal 2026 free cash flow was $11.62B and a record $11.5B was returned to shareholders: consistent earning power with very little debt.",
            "It's a 'people business' Buffett could understand: clients pay for expertise and delivery, not for a technology Accenture must keep reinventing."
          ],
          "watch": "AI could shrink the amount of paid consulting work over time, which is why the shares are cheap. Revenue growth guidance is only 3–6% in local currency for fiscal 2027.",
          "sources": [
            [
              "Accenture – Fourth-quarter and full-year fiscal 2026 results",
              "https://investor.accenture.com/~/media/Files/A/accenture-v4/investors/earnings-reports/2026/accentures-fourth-quarter-fiscal-2026-earnings-release.pdf"
            ],
            [
              "CNBC – Accenture rallies after earnings beat (Oct 1, 2026)",
              "https://www.cnbc.com/2026/10/01/accenture-rallies-more-than-20percent-after-earnings-beat-heads-for-best-day-ever.html"
            ],
            [
              "SEC EDGAR – Accenture Form 8-K, Q4 fiscal 2026",
              "https://www.sec.gov/Archives/edgar/data/0001467373/000146737326000037/q4fy26earnings8-kexhibit.htm"
            ]
          ]
        },
        {
          "market": "US",
          "symbol": "CPRT",
          "yahoo": "CPRT",
          "name": "Copart, Inc.",
          "sector": "Industrials / Vehicle Auctions",
          "currency": "USD",
          "price": 27.22,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 27.22,
          "fairValue": 32.59,
          "buyBelow": 26.07,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.19813370817850126,
            "netMargin": 0.31809,
            "debtEquity": 0.01129189369407947,
            "pe": 17.56129,
            "fcfYield": 0.0488111825114816,
            "revCagr": 0.0989943984010011
          },
          "moat": "The largest online salvage-vehicle auction network: insurers send damaged cars to Copart because it has the land, yards and global buyers, and buyers come because the cars are there, a network that's very hard to replicate.",
          "thesis": "A debt-free, high-margin network business with a durable moat, trading near the estimated value of its free cash flow.",
          "reasons": [
            "Fiscal 2026 (to July 2026): revenue $4.7B, net income $1.5B (about 32% net margin) with virtually no debt.",
            "The moat is physical and networked: hundreds of yards near cities plus buyers in over 170 countries, built over decades.",
            "Consistent earning power: profitable and cash-generating every year, the kind of simple business Berkshire's criteria describe."
          ],
          "watch": "Earnings dipped in fiscal 2026 (Q4 EPS −14.6%) as fewer cars were declared total losses, and the price is above the buy-below level, so be patient. Wait for a better price.",
          "sources": [
            [
              "Yahoo Finance – Copart reports fourth quarter fiscal 2026 results",
              "https://finance.yahoo.com/markets/stocks/articles/copart-reports-fourth-quarter-fiscal-201500922.html"
            ],
            [
              "SEC EDGAR – Copart Form 8-K, Q4 fiscal 2026 (Sep 10, 2026)",
              "https://www.sec.gov/Archives/edgar/data/0000900075/000119312526387902/cprt-ex99_1.htm"
            ],
            [
              "Berkshire Hathaway – 2007 letter on enduring moats",
              "https://www.berkshirehathaway.com/letters/2007ltr.pdf"
            ]
          ]
        }
      ],
      "IN": [
        {
          "market": "IN",
          "symbol": "HEROMOTOCO",
          "yahoo": "HEROMOTOCO.NS",
          "name": "Hero Motocorp Limited",
          "sector": "Consumer Discretionary / Two-wheelers",
          "currency": "INR",
          "price": 5168.0,
          "priceDate": "2026-10-01",
          "addedOn": "2026-10-05",
          "addedPrice": 5168.0,
          "fairValue": 8830.94,
          "buyBelow": 7064.75,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.2182929333094143,
            "netMargin": 0.10724,
            "debtEquity": 0.03602809470464144,
            "pe": 18.722435,
            "fcfYield": 0.070763937219814,
            "revCagr": 0.11723108913184443
          },
          "moat": "The world's largest two-wheeler maker by volume, with India's deepest rural dealer network: in commuter motorcycles its brand, low costs and service reach are very hard to match.",
          "thesis": "A debt-free market leader with consistent profits, trading well below the estimated value of its free cash flow.",
          "reasons": [
            "September 2026 sales rose 12% to 7.66 lakh units, with domestic sales up 31% and scooters up 65%; its Vida EV brand dispatched 28,798 units.",
            "Profitable and free-cash-flow positive every year with almost no debt: consistent earning power.",
            "A simple, understandable business (affordable motorcycles for India's commuters) with a low-cost, high-volume moat."
          ],
          "watch": "Electric two-wheelers could erode the petrol-motorcycle moat, and exports fell 31% in September. Rural demand depends on the monsoon and on interest rates.",
          "sources": [
            [
              "Autocar Professional – Hero MotoCorp wholesales rise 12% to 7.66 lakh units in September",
              "https://www.autocarpro.in/news/hero-motocorp-wholesales-rise-12-percent-yoy-to-766-lakh-units-in-september-135014"
            ],
            [
              "Rushlane – Hero MotoCorp sales Sep 2026",
              "https://www.rushlane.com/amp/hero-motocorp-sales-sep-2026-7-66-lakh-total-scooters-grow-12557348.html"
            ],
            [
              "Berkshire Hathaway – Acquisition criteria",
              "https://www.berkshirehathaway.com/1999ar/acq.html"
            ]
          ]
        },
        {
          "market": "IN",
          "symbol": "ITC",
          "yahoo": "ITC.NS",
          "name": "Itc Ltd",
          "sector": "Consumer Staples / Tobacco & FMCG",
          "currency": "INR",
          "price": 255.9,
          "priceDate": "2026-10-01",
          "addedOn": "2026-10-05",
          "addedPrice": 255.9,
          "fairValue": 176.73,
          "buyBelow": 141.38,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.3334037365058712,
            "netMargin": 0.25937998,
            "debtEquity": 0.033091288739202813,
            "pe": 16.906565,
            "fcfYield": 0.04851909983216161,
            "revCagr": 0.03646483983178639
          },
          "moat": "About 80% of India's cigarette market plus a distribution network reaching 7+ million shops, matched only by Hindustan Unilever: a brand-and-distribution moat that funds its growing FMCG brands.",
          "thesis": "A cash-rich, debt-free consumer franchise with Buffett-style brand power, priced at a moderate earnings multiple. Wait for the buy-below price.",
          "reasons": [
            "In FY26 cigarette segment revenue grew 7.5% and segment profit 7.2%, while non-cigarette FMCG revenue grew 7.4% and has passed ₹24,200 crore.",
            "Debt-free with high returns on equity and steady dividends: consistent earning power from a simple, understandable business.",
            "Its cigarette cash flows fund packaged foods and personal-care brands, like See's or Coca-Cola's cash funding Berkshire's growth."
          ],
          "watch": "Tobacco taxes can rise sharply in any budget, and cigarette volumes are falling. The price is above the buy-below level, so it's a watch-list name for now.",
          "sources": [
            [
              "ITC – Q2 FY2026 results press release",
              "https://itcportal.com/content/dam/itc-corporate/pdfs/financial-result/quarterly-results-2025-2026/september-2025/ITC-Press-Release-Q2-FY2026.pdf"
            ],
            [
              "ICICI Direct – ITC latest quarterly results analysis",
              "https://www.icicidirect.com/research/equity/rapid-results/itc-ltd"
            ],
            [
              "Value Research – ITC results preview: core businesses after the hotels demerger",
              "https://www.valueresearchonline.com/stories/225510/itc-q1-fy26-results-preview-core-business-growth-in-focus/"
            ]
          ]
        },
        {
          "market": "IN",
          "symbol": "INFY",
          "yahoo": "INFY.NS",
          "name": "Infosys Limited",
          "sector": "Technology / IT Services",
          "currency": "INR",
          "price": 1035.0,
          "priceDate": "2026-10-01",
          "addedOn": "2026-10-05",
          "addedPrice": 1035.0,
          "fairValue": 1189.18,
          "buyBelow": 951.34,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.3113319833914828,
            "netMargin": 0.16370001,
            "debtEquity": 0.0988146331493971,
            "pe": 13.895096,
            "fcfYield": 0.08699603665576972,
            "revCagr": 0.03441926382216631
          },
          "moat": "One of India's two largest IT-services brands, with long client relationships at global companies: large multi-year contracts and switching costs make revenue sticky.",
          "thesis": "A debt-free, cash-rich services leader trading near the estimated value of its free cash flow after a long derating.",
          "reasons": [
            "Q1 FY27 (reported 23 Jul 2026): revenue $5,082M (+2.4% YoY in constant currency), operating margin 21.1%, and $3.6B of large-deal wins, 61% of them net new.",
            "Debt-free with high returns on equity and steady dividends and buybacks.",
            "A people-and-process business: clients pay for delivery at scale, which Buffett's criteria can judge without forecasting technology."
          ],
          "watch": "Growth guidance is only 1.5–3% for FY27, and AI may shrink traditional outsourcing work. The price is above the buy-below level. Wait for a better price.",
          "sources": [
            [
              "Infosys – Q1 FY27 results (SEC Form 6-K)",
              "https://www.sec.gov/Archives/edgar/data/0001067491/000106749126000034/exv99w02.htm"
            ],
            [
              "Infosys – Q1 FY27 press release (SEC Form 6-K)",
              "https://www.sec.gov/Archives/edgar/data/0001067491/000106749126000038/exv99w01.htm"
            ],
            [
              "Berkshire Hathaway – 1996 letter (circle of competence)",
              "https://www.berkshirehathaway.com/letters/1996.html"
            ]
          ]
        },
        {
          "market": "IN",
          "symbol": "COALINDIA",
          "yahoo": "COALINDIA.NS",
          "name": "Coal India Ltd",
          "sector": "Energy / Coal",
          "currency": "INR",
          "price": 420.4,
          "priceDate": "2026-10-01",
          "addedOn": "2026-10-05",
          "addedPrice": 420.4,
          "fairValue": 1023.03,
          "buyBelow": 818.42,
          "marginOfSafety": 0.2,
          "metrics": {
            "avgRoe": 0.39279655824088466,
            "netMargin": 0.18138,
            "debtEquity": 0.11815277650435477,
            "pe": 8.424847,
            "fcfYield": 0.11684414825851214,
            "revCagr": 0.09305839675105099
          },
          "moat": "Produces most of India's coal with the country's largest reserves and lowest costs: the low-cost-producer moat Buffett names in his 2007 letter, in a country that still gets most of its power from coal.",
          "thesis": "A debt-free, very cash-generative low-cost producer trading far below the estimated value of its cash flows, with a high dividend.",
          "reasons": [
            "Q1 FY27 revenue grew 8% to ₹46,255 crore and net profit was ₹8,852 crore; it declared an interim dividend of ₹5.50 a share.",
            "Debt-free, profitable every year, with a free-cash-flow yield above 10%.",
            "Its cost position and reserves can't be replicated, and India's power demand keeps growing."
          ],
          "watch": "Government-controlled (dividends and prices are policy decisions) and coal is in long-term decline as renewables grow, so the moat may not be enduring. Higher risk than the other ideas.",
          "sources": [
            [
              "Upstox – Coal India Q1 FY27 results: net profit ₹8,852 crore, dividend ₹5.5",
              "https://upstox.com/news/market-news/earnings/coal-india-q1-fy-27-results-net-profit-rises-marginally-to-8-852-crore-yo-y-board-declares-dividend-of-5-5-per-equity-share-for-fy-27/article-197634/"
            ],
            [
              "Kotak Neo – Coal India Q1 FY27 results",
              "https://www.kotakneo.com/news/stocks/coal-india-q1-fy27-results-revenue-at-rs46255-crore/"
            ],
            [
              "Berkshire Hathaway – 2007 letter (low-cost producer moat)",
              "https://www.berkshirehathaway.com/letters/2007ltr.pdf"
            ]
          ]
        }
      ]
    },
    "munger": {
      "US": [
        {
          "market": "US",
          "symbol": "RMD",
          "yahoo": "RMD",
          "name": "ResMed Inc.",
          "sector": "Health Care / Medical Devices",
          "currency": "USD",
          "price": 218.89,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 218.89,
          "fairValue": 286.2,
          "buyBelow": 257.58,
          "marginOfSafety": 0.1,
          "metrics": {
            "avgRoe": 0.22331341837023094,
            "netMargin": 0.26945,
            "debtEquity": 0.12541681263365756,
            "pe": 20.986576,
            "fcfYield": 0.052905024120670274,
            "revCagr": 0.10212508025534905
          },
          "moat": "The global leader in sleep-apnea devices: patients use a ResMed machine every night and replace masks and supplies regularly, so most revenue repeats, and its installed base and connected-device data are hard for rivals to match.",
          "thesis": "A high-return, debt-light compounder with recurring consumables revenue, trading below the buy-below price because of fears that weight-loss drugs will shrink its market.",
          "reasons": [
            "Fiscal 2026 (to June 2026) revenue grew 10% to $5.65B, and Q4 revenue was a record $1.5B (+9%) with non-GAAP gross margin up 90 bp to 62.3%.",
            "Masks and accessories are replaced regularly, giving the razor-and-blades economics Munger liked; returns on equity are above 20% with little debt.",
            "Long runway: most people with sleep apnea are still undiagnosed worldwide."
          ],
          "watch": "Inversion: GLP-1 weight-loss drugs could reduce sleep-apnea cases over time, and the Astral ventilator safety notice hit Q4 margins. Watch new-patient growth closely.",
          "sources": [
            [
              "SEC EDGAR – ResMed Form 8-K, Q4 fiscal 2026 results (Aug 6, 2026)",
              "https://www.sec.gov/Archives/edgar/data/0000943819/000119312526337962/d158732dex991.htm"
            ],
            [
              "Investing.com – ResMed Q4 FY26: EPS beats, revenue growth amid Astral headwind",
              "https://www.investing.com/news/company-news/resmed-q4-fy26-slides-eps-beats-revenue-growth-amid-astral-headwind-93CH-4844818"
            ],
            [
              "HME News – ResMed reports double-digit revenue increase for full year 2026",
              "https://www.hmenews.com/article/resmed-reports-double-digit-increase-in-revenue-for-full-year-2026"
            ]
          ]
        },
        {
          "market": "US",
          "symbol": "GOOG",
          "yahoo": "GOOG",
          "name": "Alphabet Inc.",
          "sector": "Communication Services / Internet",
          "currency": "USD",
          "price": 340.35,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 340.35,
          "fairValue": 327.61,
          "buyBelow": 294.85,
          "marginOfSafety": 0.1,
          "metrics": {
            "avgRoe": 0.28019984198868103,
            "netMargin": 0.54771,
            "debtEquity": 0.14277870757227312,
            "pe": 17.07727,
            "fcfYield": 0.017601616993579896,
            "revCagr": 0.12511745609215974
          },
          "moat": "Google Search, YouTube, Android and Google Cloud: global scale, data and distribution few can match, now extended with its own AI models.",
          "thesis": "A high-return, debt-light compounder growing over 20% a year, trading close to the estimated value of its free cash flow despite heavy AI spending.",
          "reasons": [
            "Q2 2026 revenue grew 24% to $119.8B; Search grew 17% to $63.3B and Google Cloud 82% to $24.8B, with a $514B cloud backlog.",
            "Very high returns on equity with almost no debt: exceptional economics.",
            "Long runway in cloud and AI, while search still funds the investment."
          ],
          "watch": "Capital spending on AI data centres is huge and cuts free cash flow; antitrust cases could force changes to search deals. It trades a little above the buy-below price.",
          "sources": [
            [
              "Alphabet – Second quarter 2026 results",
              "https://s206.q4cdn.com/479360582/files/doc_financials/2026/q2/2026q2-alphabet-earnings-release.pdf"
            ],
            [
              "CNBC – Alphabet Q2 earnings takeaways (Jul 22, 2026)",
              "https://www.cnbc.com/2026/07/22/google-earnings-q2-goog-live-updates.html"
            ],
            [
              "SEC EDGAR – Alphabet Form 8-K, Q2 2026",
              "https://www.sec.gov/Archives/edgar/data/0001652044/000165204426000066/googexhibit991q22026.htm"
            ]
          ]
        },
        {
          "market": "US",
          "symbol": "ADBE",
          "yahoo": "ADBE",
          "name": "Adobe Inc.",
          "sector": "Technology / Software",
          "currency": "USD",
          "price": 237.69,
          "priceDate": "2026-10-02",
          "addedOn": "2026-10-05",
          "addedPrice": 237.69,
          "fairValue": 625.6,
          "buyBelow": 563.04,
          "marginOfSafety": 0.1,
          "metrics": {
            "avgRoe": 0.4186794472009294,
            "netMargin": 0.28048,
            "debtEquity": 0.5719693710745934,
            "pe": 13.271357,
            "fcfYield": 0.10649780783355749,
            "revCagr": 0.10522339932516123
          },
          "moat": "Photoshop, Illustrator, Acrobat and PDF are industry standards: creative professionals train on them for years, files and workflows depend on them, and switching is painful.",
          "thesis": "A high-return franchise priced as if it were in decline (P/E around 13) while revenue still grows double digits; a fair price for a great business.",
          "reasons": [
            "Fiscal Q3 2026 (reported 10 Sep) revenue rose 13% to a record $6.76B, total ARR reached $27.5B (+11.2%), and the non-GAAP operating margin was 44%.",
            "AI-first ARR passed $650M (+150% YoY) and monthly active users passed 1 billion, so AI is adding users rather than replacing Adobe so far.",
            "Very high returns on equity and assets with modest debt; the shares trade far below the estimated value of their free cash flow."
          ],
          "watch": "Inversion: AI image and video tools could commoditise creative work and weaken pricing power. A CEO transition is set for December. This is the market's worry, and why the price is low.",
          "sources": [
            [
              "Investing.com – Adobe Q3 FY2026: AI revenue soars, stock falls on caution",
              "https://www.investing.com/news/company-news/adobe-q3-fy2026-slides-ai-revenue-soars-stock-falls-on-caution-93CH-4897029"
            ],
            [
              "Yahoo Finance – Adobe Q3 2026 earnings call highlights",
              "https://finance.yahoo.com/markets/stocks/articles/adobe-inc-adbe-q3-2026-090037567.html"
            ],
            [
              "SEC EDGAR – Adobe Form 10-Q, fiscal 2026",
              "https://www.sec.gov/Archives/edgar/data/0000796343/000079634326000112/adbe-20260529.htm"
            ]
          ]
        }
      ],
      "IN": [
        {
          "market": "IN",
          "symbol": "EICHERMOT",
          "yahoo": "EICHERMOT.NS",
          "name": "Eicher Motors Ltd",
          "sector": "Consumer Discretionary / Motorcycles",
          "currency": "INR",
          "price": 6920.0,
          "priceDate": "2026-10-01",
          "addedOn": "2026-10-05",
          "addedPrice": 6920.0,
          "fairValue": 3214.3,
          "buyBelow": 2892.87,
          "marginOfSafety": 0.1,
          "metrics": {
            "avgRoe": 0.21453648004738524,
            "netMargin": 0.23211999,
            "debtEquity": 0.02047597325115587,
            "pe": 33.44516,
            "fcfYield": 0.018292947897977748,
            "revCagr": 0.174675251484967
          },
          "moat": "Royal Enfield owns the mid-size motorcycle segment in India with a cult brand and a growing export business: a pricing-power moat few bike makers have.",
          "thesis": "A debt-free brand compounder with high returns and 17% revenue growth, worth owning for decades. Wait for a fairer price.",
          "reasons": [
            "Royal Enfield sold a record 1,33,958 motorcycles in September 2026 (+8%); exports rose 17%, and April–September sales were up 20% to 7.09 lakh.",
            "Debt-free, with high returns on equity and revenue growing about 17% a year.",
            "Long runway: rising incomes move riders up from commuter bikes, and exports are still small."
          ],
          "watch": "It's expensive (P/E around 34) and trades far above the buy-below price; competition from Honda, Triumph-Bajaj and Harley-Hero is rising. Wait for a much better price.",
          "sources": [
            [
              "Autocar Professional – Royal Enfield records highest-ever September sales at 1.34 lakh units",
              "https://www.autocarpro.in/news/royal-enfield-records-highest-ever-september-sales-at-134-lakh-units-135002"
            ],
            [
              "Team-BHP – Royal Enfield posts record sales month, Sep 2026",
              "https://www.team-bhp.com/news/royal-enfield-posts-record-sales-month-133-lakh-units-sep-2026"
            ],
            [
              "Screener – Eicher Motors consolidated financials",
              "https://www.screener.in/company/EICHERMOT/consolidated/"
            ]
          ]
        },
        {
          "market": "IN",
          "symbol": "BRITANNIA",
          "yahoo": "BRITANNIA.NS",
          "name": "Britannia Industries Ltd",
          "sector": "Consumer Staples / Packaged Foods",
          "currency": "INR",
          "price": 4778.0,
          "priceDate": "2026-10-01",
          "addedOn": "2026-10-05",
          "addedPrice": 4778.0,
          "fairValue": 1572.37,
          "buyBelow": 1415.13,
          "marginOfSafety": 0.1,
          "metrics": {
            "avgRoe": 0.5490361108984148,
            "netMargin": 0.13376,
            "debtEquity": 0.27368913710991355,
            "pe": 44.020905,
            "fcfYield": 0.020989233821131322,
            "revCagr": 0.056647625193595674
          },
          "moat": "One of India's most trusted food brands (Good Day, Marie Gold, NutriChoice) with distribution in millions of shops: brand and reach that compound slowly but surely.",
          "thesis": "A very high-return consumer brand Munger would admire, but priced well above fair value. A patient watch-list idea.",
          "reasons": [
            "Q1 FY27 revenue grew 9.5% to ₹4,964 crore on 9% volume growth, and net profit grew 14.1% to ₹593 crore.",
            "Return on equity above 50% with little debt, and EBITDA margin expanded to 16.8%.",
            "Long runway as India's packaged-food consumption grows."
          ],
          "watch": "Valuation is the main risk (P/E around 44, far above the buy-below price); input costs (wheat, sugar, fuel) squeeze margins. Wait for a much better price.",
          "sources": [
            [
              "Kotak Neo – Britannia Q1 FY27 results: net profit rises 14%",
              "https://www.kotakneo.com/news/stocks/britannia-industries-q1-fy-2026-27-results-net-profit-rises/"
            ],
            [
              "Indian Retailer – Britannia profit rises 14% in Q1 FY27",
              "https://www.indianretailer.com/news/retail-india-news-britannia-profit-rises-14-pc-q1-fy27"
            ],
            [
              "Investywise – Britannia Q1 FY27 earnings call",
              "https://www.investywise.com/britannia-industries-q1-fy27-earnings-conference-call-transcript/"
            ]
          ]
        },
        {
          "market": "IN",
          "symbol": "HEROMOTOCO",
          "yahoo": "HEROMOTOCO.NS",
          "name": "Hero Motocorp Limited",
          "sector": "Consumer Discretionary / Two-wheelers",
          "currency": "INR",
          "price": 5168.0,
          "priceDate": "2026-10-01",
          "addedOn": "2026-10-05",
          "addedPrice": 5168.0,
          "fairValue": 8830.94,
          "buyBelow": 7947.85,
          "marginOfSafety": 0.1,
          "metrics": {
            "avgRoe": 0.2182929333094143,
            "netMargin": 0.10724,
            "debtEquity": 0.03602809470464144,
            "pe": 18.722435,
            "fcfYield": 0.070763937219814,
            "revCagr": 0.11723108913184443
          },
          "moat": "The world's largest two-wheeler maker by volume, with India's deepest rural dealer network.",
          "thesis": "The only Indian name passing every Munger-style test that also trades below its buy-below price: high returns, no debt, still growing.",
          "reasons": [
            "September 2026 sales rose 12% to 7.66 lakh units, domestic sales up 31%.",
            "Debt-free, with return on equity above 20% and revenue growing about 12% a year.",
            "Trades below the buy-below price: a fair price for a strong business."
          ],
          "watch": "Inversion: electric two-wheelers from new rivals could break its petrol-bike moat; watch Vida's EV share. Exports are falling.",
          "sources": [
            [
              "Autocar Professional – Hero MotoCorp wholesales rise 12% in September",
              "https://www.autocarpro.in/news/hero-motocorp-wholesales-rise-12-percent-yoy-to-766-lakh-units-in-september-135014"
            ],
            [
              "Bike Advice – Hero September 2026 sales",
              "https://bikeadvice.in/hero-september-2026-sales-12-yoy-growth-7-66-lakh-units/"
            ],
            [
              "Munger – A Lesson on Elementary, Worldly Wisdom (USC 1994)",
              "https://worldlypartners.com/wp-content/uploads/2024/01/1994-lecture-by-charlie-munger-at-usc-a-lesson-on-elementary-worldly-wisdom-as-it-relates-to-investment.pdf"
            ]
          ]
        }
      ]
    }
  },
  "notes": {
    "buffett": {},
    "munger": {}
  }
};
