# Daily Compass

A small web app that asks three quick questions when it opens and then shows the quote that best fits the answers. Open `index.html` in a browser. On a phone it fills the screen; on a wider screen (a desktop or a preview panel) it is shown inside a 390 × 844 phone frame. There's no build step and no server, and it works offline apart from the web fonts.

## The three questions and why they were chosen

| # | Question | Options | Research basis |
|---|---|---|---|
| 1 | **How are you feeling right now?** | Tense · Fired up · Low · At ease | The Mood Meter from the Yale Center for Emotional Intelligence (RULER), which maps feelings on two axes, energy and pleasantness, into four quadrants. Two taps' worth of information captures most of what matters about a mood. |
| 2 | **What's on your mind most today?** | Work/studies/a goal · People in my life · Myself and my direction · A setback or big change | Self-determination theory (Ryan & Deci, 2000): wellbeing and motivation rest on competence, relatedness and autonomy. The fourth option covers adversity, which needs different words from everyday striving. |
| 3 | **What would help you most right now?** | A push · Calm and perspective · Courage · Something to think about | Regulatory-fit and message-matching research (Cesario, Grant & Higgins, 2004; Hirsh, Kang & Bodenhausen, 2012) shows a message is more persuasive when it matches the reader's current goal or orientation. Asking directly is the simplest reliable way to get that match. |

Self-affirmation research (Cohen & Sherman, 2014) is the reason the "Myself" option and the reflective quotes exist: brief reflection on one's own values reliably buffers stress.

## How a quote is picked
Every quote in `quotes.js` is tagged with the moods, life areas and needs it suits. Each quote gets a score: **3** if it fits the need (Q3, because the person asked for it), **2** if it fits the mood, **2** if it fits the life area. The highest-scoring quotes come first. Ties are shuffled, and the last 25 quotes shown (stored in the browser) go to the back so repeat check-ins vary.

## Look and feel
Each option has its own line illustration and colour. The background is a slowly drifting aurora with twinkling stars, and it takes on the colour of the mood you pick. Tapping an option throws a small burst of sparkles. After the third answer a compass needle spins while the app "reads your compass", then the quote appears with a confetti burst in the mood's colours. Everything animated is switched off when the device asks for reduced motion.

If someone reports feeling low and is dealing with a setback or asks for courage, the result also shows helpline numbers (Tele-MANAS 14416 in India, 988 in the US, findahelpline.com elsewhere).

## Result screen
The result is titled "Your magical words for today". It shows the quote with one of five magic charm illustrations (crystal ball, spellbook, scroll, wand, pouch), chosen at random per quote and day. Under the quote, **Copy quote** copies it, and **Story behind it** opens a short background note from `stories.js`: who said it, where, and what was going on. A note at the bottom says to come back tomorrow, with a countdown to midnight.

The result is kept for the rest of the day: reopening the app shows the same words until local midnight, then the check-in starts again. To test a fresh check-in, open the page with `#fresh` at the end of the URL.

## Quotes
67 quotes, each with its author and source, all from secular works: books, poems, letters, speeches, interviews and films. Nothing is taken from religious scriptures or devotional texts (for example the Bhagavad Gita, Tao Te Ching, Upanishads, Bible or Quran). Popular lines that are commonly misattributed (for example "Be the change you wish to see in the world" credited to Gandhi) are excluded. To add one, append an object to `quotes.js` with `m`, `a` and `n` tags, and add its background note to `stories.js` under the same id.

## Artwork
The charm illustrations in `icons/` are cut from a licensed Shutterstock vector set (image 2589828173), with the background removed and exported as 320px WebP. The original EPS is not stored in this repo.

## Sources
- Yale Center for Emotional Intelligence, RULER: [The Mood Meter](https://www.rulerapproach.org/wp-content/uploads/2020/07/MoodMeter_FC.pdf)
- Ryan, R. M., & Deci, E. L. (2000). [Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being](https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf). *American Psychologist*, 55(1), 68–78.
- Cesario, J., Grant, H., & Higgins, E. T. (2004). [Regulatory fit and persuasion: Transfer from "feeling right"](https://www.semanticscholar.org/paper/Regulatory-fit-and-persuasion:-transfer-from-Cesario-Grant/58fdb294fdcbc359f4d1b96bc5836e1a06c924ba). *JPSP*, 86(3), 388–404.
- Hirsh, J. B., Kang, S. K., & Bodenhausen, G. V. (2012). [Personalized persuasion](https://www.semanticscholar.org/paper/Personalized-Persuasion-Hirsh-Kang/2bc1e0ec1d11b6375503547063384d6e57b17cf2). *Psychological Science*, 23(6), 578–581.
- Cohen, G. L., & Sherman, D. K. (2014). [The psychology of change: Self-affirmation and social psychological intervention](https://www.annualreviews.org/content/journals/10.1146/annurev-psych-010213-115137). *Annual Review of Psychology*, 65, 333–371.
