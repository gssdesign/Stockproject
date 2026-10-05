# Investor-style lists: Buffett style and Munger style

The site's "Claude recommendations" are short-term trading ideas (CRITERIA.md). The two
style lists are something different: **long-term ideas chosen the way Warren Buffett and
Charlie Munger said they choose investments**, built from their published letters and
speeches. They are *in the style of* these investors. They are **not** their picks, not
Berkshire Hathaway holdings, and not endorsed by or affiliated with either man or Berkshire.

Numbers in §3 are implemented in `scripts/fundamentals.py`; change both together.

## 1. What they said (primary sources)

**Warren Buffett**
- Berkshire's acquisition criteria (Owner's Manual, annual reports): *"demonstrated consistent
  earning power"*, *"businesses earning good returns on equity while employing little or no
  debt"*, *"management in place"*, *"simple businesses (if there's lots of technology, we won't
  understand it)"*, and a known, sensible price. No turnarounds, no forecasts.
- 1989 letter: *"It's far better to buy a wonderful company at a fair price than a fair company
  at a wonderful price."*
- 1996 letter: invest within your *circle of competence*; *"the size of that circle is not very
  important; knowing its boundaries, however, is vital."*
- 2007 letter: *"A truly great business must have an enduring 'moat' that protects excellent
  returns on invested capital"*, e.g. being the low-cost producer or owning a powerful brand,
  and industries prone to rapid change are ruled out because the moat keeps being rebuilt.
- Margin of safety and *"Rule No. 1: never lose money"*: pay well below what a business is worth.

**Charlie Munger**
- USC Business School, 1994 (*A Lesson on Elementary, Worldly Wisdom*): over the long run a
  stock earns about what the business earns on its capital, so a business earning ~18% on
  capital for decades is a fine investment *"even if you pay an expensive-looking price"*, while
  a 6% business stays a 6% investment however cheap it was. Hence: few, great businesses,
  held a long time; concentrate rather than diversify widely.
- Moved Buffett from "cigar butts" to quality (See's Candies): pay a fair price for a great
  business rather than a low price for a mediocre one.
- *"Invert, always invert"* and *"it is remarkable how much long-term advantage people like us
  have gotten by trying to be consistently not stupid"*: first rule out what can kill an
  investment: leverage, complexity, poor incentives, shrinking markets.

## 2. How the two lists differ
| | Buffett style | Munger style |
|---|---|---|
| Core idea | Wonderful, understandable business at a sensible price, with a margin of safety | Only exceptional, compounding businesses; pay a fair price, hold for very long |
| Quality bar | 4-year avg ROE ≥ 15%, net margin ≥ 10% | 4-year avg ROE ≥ 20%, return on assets ≥ 8%, still growing |
| Debt | Debt/equity ≤ 1.0 | Debt/equity ≤ 0.8 |
| Price | P/E ≤ 25 (US) / 35 (India), or FCF yield ≥ 3% / 2% | P/E ≤ 40 (US) / 60 (India): quality matters more than cheapness |
| Buy-below price | Fair value − 20% | Fair value − 10% |
| List size | Up to 5 per market | Up to 3 per market (concentration) |

## 3. Hard filters (all must pass; `data/fundamentals.js` lists who passes)
Both styles: large, established companies (Buffett ≥ $10B / ₹20,000 cr market cap; Munger ≥
$20B / ₹40,000 cr), profitable in every reported year (up to 4 fiscal years), positive free cash
flow every year, and the debt, return, margin and price limits in §2.

**Fair value** (shown on every pick): a 10-year two-stage discounted cash flow on owner earnings (last
reported annual free cash flow; net income for banks, insurers and asset managers, converted to the
trading currency)
per share. Growth = the company's revenue growth over the reported years, capped at 10% (US) /
12% (India); then 3% (US) / 5% (India) forever; discounted at 10% (US) / 12% (India). It is an
estimate, deliberately conservative, and the margin of safety exists because it can be wrong.

## 4. Choosing the list (judgment on top of the screen)
From the stocks that pass, the research routine picks those that also meet the parts no screen
can measure, and says how in each pick:
1. **Understandable**: a business you can explain in two sentences; no lots of technology
   for Buffett style unless the moat is a brand or network, not the technology itself.
2. **Enduring moat**: brand, low cost, network, switching costs or regulated position, named
   in the thesis.
3. **Able, trustworthy management** and sensible capital allocation (buybacks below value,
   dividends, disciplined acquisitions), with no recent governance red flags.
4. **Inversion** (Munger style especially): list what could break the thesis in "what could go
   wrong", and skip the stock if any of it is likely.
At most 2 per sector per list. A stock may appear in both style lists only if it passes both.

## 5. Cadence and sources
- Lists are reviewed **once a month** (with the monthly routine) and stay **fixed** between
  reviews, like the weekly and monthly lists. Fundamentals refresh weekly in the background.
- Prices shown are official closes from `data/market.js` with their date.
- Sources per pick: 3, reputable (company filings or investor relations, Reuters, Bloomberg,
  CNBC, WSJ, FT, Business Standard, Economic Times, Mint, Moneycontrol, Morningstar, Yahoo
  Finance news), at most 6 months old except for background facts.
- These are long-term ideas: no stop-loss or short-term target. The plan is "buy below the
  buy-below price, hold while the moat and returns hold, reassess at each review."

## References
- Berkshire Hathaway, Owner's Manual and acquisition criteria: https://www.berkshirehathaway.com/ownman.pdf
- Buffett, letters to shareholders 1989, 1996, 2007: https://www.berkshirehathaway.com/letters/letters.html
- Munger, *A Lesson on Elementary, Worldly Wisdom* (USC, 1994): https://worldlypartners.com/wp-content/uploads/2024/01/1994-lecture-by-charlie-munger-at-usc-a-lesson-on-elementary-worldly-wisdom-as-it-relates-to-investment.pdf
- *Poor Charlie's Almanack* (Munger's speeches, ed. P. Kaufman).
