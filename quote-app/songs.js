// Song suggestions for the result screen. Tagged like quotes.js:
//   m: mood quadrant (y, r, b, g), n: need (push, calm, courage, wisdom),
//   a: life area (work, people, self, setback).
// Well-known English-language songs only, with original artist and year.
// Songs with explicit lyrics or religious themes are left out.
// The page links to a YouTube or Spotify search, so links never go stale.
window.SONGS = [
  // Tense: steady, reassuring, or turn the energy into fight
  { t: "Three Little Birds", by: "Bob Marley & The Wailers", y: 1977, m: ["r", "b"], n: ["calm"], a: ["work", "setback", "self"], why: "A sunny reggae reminder that every little thing is going to be all right." },
  { t: "Don't Worry, Be Happy", by: "Bobby McFerrin", y: 1988, m: ["r"], n: ["calm"], a: ["work", "self", "setback"], why: "Recorded almost entirely with McFerrin's own voice. Hard to stay wound up through it." },
  { t: "Float On", by: "Modest Mouse", y: 2004, m: ["r", "b"], n: ["calm", "courage"], a: ["setback", "work"], why: "Bad things happen, and the chorus insists we'll all float on okay anyway." },
  { t: "The Middle", by: "Jimmy Eat World", y: 2001, m: ["r", "b"], n: ["calm", "courage"], a: ["self", "people", "setback"], why: "Written as a pep talk for a fan who felt she didn't fit in: everything will be just fine." },
  { t: "Vienna", by: "Billy Joel", y: 1977, m: ["r", "g"], n: ["calm", "wisdom"], a: ["work", "self"], why: "A gentle warning to slow down. Billy Joel has called it one of his favourites of his own songs." },
  { t: "Shake It Off", by: "Taylor Swift", y: 2014, m: ["r", "y"], n: ["push", "courage"], a: ["people", "self"], why: "For when other people's opinions are getting loud. Dance it off instead." },
  { t: "Under Pressure", by: "Queen & David Bowie", y: 1981, m: ["r"], n: ["wisdom", "courage"], a: ["people", "work"], why: "Written in one jam session. It starts tense and ends on a plea for love and understanding." },
  { t: "Changes", by: "David Bowie", y: 1971, m: ["r", "g"], n: ["wisdom", "courage"], a: ["setback", "self"], why: "Bowie's anthem for facing change head-on instead of fearing it." },

  // Fired up: momentum
  { t: "Don't Stop Me Now", by: "Queen", y: 1979, m: ["y"], n: ["push"], a: ["work", "self"], why: "Pure, joyful momentum. Freddie Mercury at full speed." },
  { t: "Walking on Sunshine", by: "Katrina and the Waves", y: 1985, m: ["y", "g"], n: ["push"], a: ["self", "people"], why: "Three minutes of bright brass and good news. Matches the energy you already have." },
  { t: "Eye of the Tiger", by: "Survivor", y: 1982, m: ["y", "b"], n: ["push", "courage"], a: ["work", "setback"], why: "Written for Rocky III. Still the soundtrack for getting up and going after it." },
  { t: "Happy", by: "Pharrell Williams", y: 2013, m: ["y", "g"], n: ["push"], a: ["self", "people"], why: "A worldwide number one that inspired thousands of fan-made dance videos." },
  { t: "Unwritten", by: "Natasha Bedingfield", y: 2004, m: ["y", "g"], n: ["push", "wisdom"], a: ["self", "work"], why: "Today is where your book begins. The rest is still unwritten." },
  { t: "Hall of Fame", by: "The Script feat. will.i.am", y: 2012, m: ["y", "b"], n: ["push"], a: ["work", "self"], why: "A stadium-sized reminder that you can be the one who goes the distance." },
  { t: "Mr. Blue Sky", by: "Electric Light Orchestra", y: 1977, m: ["y", "g"], n: ["push", "calm"], a: ["self", "people"], why: "Jeff Lynne wrote it after a grey fortnight when the sun finally came out." },
  { t: "Good Life", by: "OneRepublic", y: 2010, m: ["y", "g"], n: ["push", "wisdom"], a: ["people", "self"], why: "A road-trip song about noticing how good life is right now." },
  { t: "Man in the Mirror", by: "Michael Jackson", y: 1988, m: ["y", "r"], n: ["push", "wisdom"], a: ["self", "people"], why: "Change starts with the person in the mirror. A push to begin with yourself." },

  // Low: gentle company, then strength
  { t: "Fix You", by: "Coldplay", y: 2005, m: ["b"], n: ["calm", "courage"], a: ["setback", "people"], why: "Chris Martin wrote it for Gwyneth Paltrow after her father died. It starts quiet and lifts you up." },
  { t: "Lean on Me", by: "Bill Withers", y: 1972, m: ["b", "g"], n: ["calm", "courage"], a: ["people", "setback"], why: "Withers drew on the small mining town where neighbours looked after each other." },
  { t: "You've Got a Friend", by: "Carole King", y: 1971, m: ["b"], n: ["calm"], a: ["people", "setback"], why: "A warm promise that someone will come running. Also a hit for James Taylor the same year." },
  { t: "Everybody Hurts", by: "R.E.M.", y: 1992, m: ["b"], n: ["calm", "courage"], a: ["setback", "self"], why: "Written in plain words so that anyone feeling alone would understand: hold on." },
  { t: "Rise Up", by: "Andra Day", y: 2015, m: ["b"], n: ["courage"], a: ["setback", "self"], why: "A slow, powerful song about rising again and again, as many times as it takes." },
  { t: "Fight Song", by: "Rachel Platten", y: 2015, m: ["b", "r"], n: ["courage", "push"], a: ["setback", "work", "self"], why: "Platten wrote it when her career was stalling. It became her breakthrough hit." },
  { t: "Stronger (What Doesn't Kill You)", by: "Kelly Clarkson", y: 2011, m: ["b", "r"], n: ["courage"], a: ["setback", "people"], why: "An upbeat comeback anthem about walking out of a hard time taller." },
  { t: "The Climb", by: "Miley Cyrus", y: 2009, m: ["b", "g"], n: ["wisdom", "courage"], a: ["work", "setback"], why: "It's not about how fast you get there. It's the climb." },
  { t: "Keep Your Head Up", by: "Andy Grammer", y: 2011, m: ["b"], n: ["push", "courage"], a: ["setback", "work"], why: "A bouncy nudge to keep going while things sort themselves out." },
  { t: "Brave", by: "Sara Bareilles", y: 2013, m: ["b", "r"], n: ["courage"], a: ["people", "self"], why: "Written for a friend afraid to come out. Say what you want to say." },
  { t: "Roar", by: "Katy Perry", y: 2013, m: ["b", "y"], n: ["courage", "push"], a: ["self", "people"], why: "From staying quiet to finding your voice." },

  // At ease: savour it, reflect
  { t: "What a Wonderful World", by: "Louis Armstrong", y: 1967, m: ["g"], n: ["calm", "wisdom"], a: ["self", "people"], why: "Written in a troubled year to remind people of the simple good things all around them." },
  { t: "Here Comes the Sun", by: "The Beatles", y: 1969, m: ["g", "b"], n: ["calm"], a: ["setback", "self"], why: "George Harrison wrote it in a friend's garden on a spring morning after a long winter." },
  { t: "Somewhere Over the Rainbow / What a Wonderful World", by: "Israel Kamakawiwo'ole", y: 1993, m: ["g", "b"], n: ["calm"], a: ["self", "setback"], why: "A gentle ukulele medley recorded in one take, late at night in Honolulu." },
  { t: "Banana Pancakes", by: "Jack Johnson", y: 2005, m: ["g"], n: ["calm"], a: ["people", "work"], why: "A song about pretending it's a weekend and staying in. Permission to slow down." },
  { t: "Count on Me", by: "Bruno Mars", y: 2010, m: ["g", "y"], n: ["calm", "wisdom"], a: ["people"], why: "A simple ukulele promise between friends: you can count on me." },
  { t: "Stand by Me", by: "Ben E. King", y: 1961, m: ["g", "b"], n: ["calm", "courage"], a: ["people"], why: "One of the most recorded songs ever. About the people who stay." },
  { t: "Landslide", by: "Fleetwood Mac", y: 1975, m: ["g", "b"], n: ["wisdom"], a: ["self", "setback"], why: "Stevie Nicks wrote it in Colorado while deciding whether to keep going with music." }
];
