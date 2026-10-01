// Quote library for Daily Compass.
//
// Every quote is tagged on the three check-in dimensions:
//   m (mood, Yale Mood Meter quadrant): y = high energy + pleasant,
//       r = high energy + unpleasant, b = low energy + unpleasant,
//       g = low energy + pleasant
//   a (life area on your mind): work, people, self, setback
//   n (what would help right now): push, calm, courage, wisdom
//
// Only quotes with a traceable source are included. Popular lines that are
// misattributed (e.g. "Be the change you wish to see" to Gandhi, "It always
// seems impossible until it's done" to Mandela) are deliberately left out.
// No quotes from religious scriptures or devotional works (e.g. the
// Bhagavad Gita, Tao Te Ching, Upanishads, Bible, Quran, sermon collections).
// Translated texts name the work; wording follows common English editions.
window.QUOTES = [
  // ---- push: a nudge to act --------------------------------------------
  { id: "seneca-postpone", t: "While we are postponing, life speeds by.", by: "Seneca", src: "Letters to Lucilius, 1", m: ["y", "g", "b"], a: ["work", "self"], n: ["push"] },
  { id: "eroosevelt-cannot", t: "You must do the thing you think you cannot do.", by: "Eleanor Roosevelt", src: "You Learn by Living (1960)", m: ["r", "b", "y"], a: ["work", "self", "setback"], n: ["push", "courage"] },
  { id: "troosevelt-whatyouhave", t: "Do what you can, with what you have, where you are.", by: "Theodore Roosevelt, quoting Squire Bill Widener", src: "Theodore Roosevelt: An Autobiography (1913)", m: ["b", "r"], a: ["work", "setback", "self"], n: ["push"] },
  { id: "jobs-hungry", t: "Stay hungry. Stay foolish.", by: "Steve Jobs, quoting the Whole Earth Catalog", src: "Stanford commencement address (2005)", m: ["y", "g"], a: ["work", "self"], n: ["push"] },
  { id: "jobs-time", t: "Your time is limited, so don't waste it living someone else's life.", by: "Steve Jobs", src: "Stanford commencement address (2005)", m: ["y", "g", "r"], a: ["self", "work"], n: ["push", "wisdom"] },
  { id: "gretzky-shots", t: "You miss 100% of the shots you don't take.", by: "Wayne Gretzky", src: "Hockey News interview (1983)", m: ["y", "r"], a: ["work", "people"], n: ["push", "courage"] },
  { id: "thoreau-dreams", t: "If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.", by: "Henry David Thoreau", src: "Walden (1854)", m: ["y", "g"], a: ["self", "work"], n: ["push"] },
  { id: "oliver-wild", t: "Tell me, what is it you plan to do with your one wild and precious life?", by: "Mary Oliver", src: "\"The Summer Day\" (1990)", m: ["y", "g"], a: ["self"], n: ["push", "wisdom"] },
  { id: "clear-systems", t: "You do not rise to the level of your goals. You fall to the level of your systems.", by: "James Clear", src: "Atomic Habits (2018)", m: ["y", "g", "r"], a: ["work", "self"], n: ["push", "wisdom"] },
  { id: "durant-habit", t: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", by: "Will Durant, summarizing Aristotle", src: "The Story of Philosophy (1926)", m: ["y", "g"], a: ["work", "self"], n: ["push", "wisdom"] },
  { id: "aurelius-beone", t: "Waste no more time arguing about what a good man should be. Be one.", by: "Marcus Aurelius", src: "Meditations, 10.16", m: ["y", "r", "g"], a: ["self", "people"], n: ["push"] },
  { id: "mlk-moving", t: "If you can't fly, then run. If you can't run, then walk. If you can't walk, then crawl. But whatever you do, you have to keep moving forward.", by: "Martin Luther King Jr.", src: "Speech at Spelman College (1967)", m: ["b", "r"], a: ["setback", "work", "self"], n: ["push", "courage"] },
  { id: "tolkien-time", t: "All we have to decide is what to do with the time that is given us.", by: "J.R.R. Tolkien", src: "The Fellowship of the Ring (1954)", m: ["b", "r", "g"], a: ["setback", "self"], n: ["push", "wisdom"] },

  // ---- calm: perspective and steadiness --------------------------------
  { id: "seneca-imagination", t: "We suffer more often in imagination than in reality.", by: "Seneca", src: "Letters to Lucilius, 13", m: ["r"], a: ["work", "setback", "people", "self"], n: ["calm"] },
  { id: "epictetus-opinions", t: "Men are disturbed not by things, but by the opinions about things.", by: "Epictetus", src: "Enchiridion, 5", m: ["r"], a: ["people", "work", "setback"], n: ["calm", "wisdom"] },
  { id: "aurelius-little", t: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", by: "Marcus Aurelius", src: "Meditations, 7.67", m: ["g", "b", "r"], a: ["self"], n: ["calm", "wisdom"] },
  { id: "lamott-unplug", t: "Almost everything will work again if you unplug it for a few minutes, including you.", by: "Anne Lamott", src: "TED talk, \"12 truths I learned from life and writing\" (2017)", m: ["r", "b"], a: ["work", "self"], n: ["calm"] },
  { id: "tnh-clouds", t: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", by: "Thich Nhat Hanh", src: "Stepping into Freedom (1997)", m: ["r", "b"], a: ["self", "people", "setback"], n: ["calm"] },
  { id: "chodron-sky", t: "You are the sky. Everything else is just the weather.", by: "Pema Chödrön", src: "attributed; widely quoted from her teachings", m: ["r", "b"], a: ["self", "setback"], n: ["calm"] },
  { id: "tolstoy-patience", t: "The two most powerful warriors are patience and time.", by: "Leo Tolstoy", src: "War and Peace (1869)", m: ["r", "g", "b"], a: ["work", "setback"], n: ["calm", "wisdom"] },
  { id: "dillard-days", t: "How we spend our days is, of course, how we spend our lives.", by: "Annie Dillard", src: "The Writing Life (1989)", m: ["g", "y"], a: ["self", "work"], n: ["calm", "wisdom"] },
  { id: "watts-dance", t: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", by: "Alan Watts", src: "The Wisdom of Insecurity (1951)", m: ["r", "g", "y"], a: ["setback", "self"], n: ["calm", "courage"] },
  { id: "lee-water", t: "Empty your mind, be formless, shapeless, like water. Be water, my friend.", by: "Bruce Lee", src: "Longstreet, \"The Way of the Intercepting Fist\" (1971)", m: ["r", "g"], a: ["setback", "work", "self"], n: ["calm"] },
  { id: "saunders-plans", t: "Life is what happens to us while we are making other plans.", by: "Allen Saunders", src: "Reader's Digest (1957)", m: ["g", "r"], a: ["setback", "self"], n: ["calm", "wisdom"] },
  { id: "lorde-care", t: "Caring for myself is not self-indulgence, it is self-preservation, and that is an act of political warfare.", by: "Audre Lorde", src: "A Burst of Light (1988)", m: ["b", "r"], a: ["self", "work"], n: ["calm", "courage"] },
  { id: "rogers-like", t: "There's no person in the whole world like you, and I like you just the way you are.", by: "Fred Rogers", src: "Mister Rogers' Neighborhood", m: ["b", "g"], a: ["self", "people"], n: ["calm"] },

  // ---- courage: strength to keep going ---------------------------------
  { id: "frost-through", t: "The best way out is always through.", by: "Robert Frost", src: "\"A Servant to Servants\" (1914)", m: ["b", "r"], a: ["setback", "work"], n: ["courage", "push"] },
  { id: "alcott-storms", t: "I'm not afraid of storms, for I'm learning how to sail my ship.", by: "Louisa May Alcott", src: "Little Women (1868)", m: ["r", "b", "y"], a: ["setback", "self"], n: ["courage"] },
  { id: "beckett-fail", t: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.", by: "Samuel Beckett", src: "Worstward Ho (1983)", m: ["b", "r"], a: ["work", "setback"], n: ["courage", "push"] },
  { id: "jordan-shots", t: "I've failed over and over and over again in my life. And that is why I succeed.", by: "Michael Jordan", src: "Nike advertisement (1997)", m: ["b", "r"], a: ["work", "setback"], n: ["courage"] },
  { id: "troosevelt-arena", t: "It is not the critic who counts... The credit belongs to the man who is actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly.", by: "Theodore Roosevelt", src: "\"Citizenship in a Republic\" (1910)", m: ["r", "b"], a: ["work", "people", "setback"], n: ["courage"] },
  { id: "gandhi-will", t: "Strength does not come from physical capacity. It comes from an indomitable will.", by: "Mahatma Gandhi", src: "Young India, \"The Doctrine of the Sword\" (1920)", m: ["b", "r"], a: ["setback", "self"], n: ["courage"] },
  { id: "seneca-live", t: "Sometimes even to live is an act of courage.", by: "Seneca", src: "Letters to Lucilius, 78", m: ["b"], a: ["setback", "self"], n: ["courage", "calm"] },
  { id: "camus-summer", t: "In the midst of winter, I found there was, within me, an invincible summer.", by: "Albert Camus", src: "\"Return to Tipasa\" (1952)", m: ["b"], a: ["setback", "self"], n: ["courage"] },
  { id: "dickinson-hope", t: "\"Hope\" is the thing with feathers that perches in the soul, and sings the tune without the words, and never stops at all.", by: "Emily Dickinson", src: "Poem 254 (c. 1861)", m: ["b", "g"], a: ["setback", "self"], n: ["courage", "calm"] },
  { id: "tagore-dawn", t: "Faith is the bird that feels the light and sings when the dawn is still dark.", by: "Rabindranath Tagore", src: "Fireflies (1928)", m: ["b"], a: ["setback", "self"], n: ["courage"] },
  { id: "tagore-fearless", t: "Let me not pray to be sheltered from dangers, but to be fearless in facing them.", by: "Rabindranath Tagore", src: "Fruit-Gathering (1916)", m: ["r", "b"], a: ["setback", "work"], n: ["courage"] },
  { id: "keller-overcoming", t: "Although the world is full of suffering, it is full also of the overcoming of it.", by: "Helen Keller", src: "Optimism (1903)", m: ["b", "g"], a: ["setback"], n: ["courage", "calm"] },
  { id: "nietzsche-why", t: "If we have our own why of life, we shall get along with almost any how.", by: "Friedrich Nietzsche", src: "Twilight of the Idols (1889)", m: ["b", "r"], a: ["setback", "work", "self"], n: ["courage", "wisdom"] },
  { id: "murakami-storm", t: "When you come out of the storm, you won't be the same person who walked in. That's what this storm's all about.", by: "Haruki Murakami", src: "Kafka on the Shore (2002)", m: ["b", "r"], a: ["setback"], n: ["courage", "wisdom"] },
  { id: "brown-story", t: "Owning our story and loving ourselves through that process is the bravest thing we'll ever do.", by: "Brené Brown", src: "The Gifts of Imperfection (2010)", m: ["b", "g"], a: ["self", "setback"], n: ["courage"] },
  { id: "curie-understand", t: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", by: "Marie Curie", src: "attributed; quoted in Our Precarious Habitat (1973)", m: ["r"], a: ["work", "setback"], n: ["courage", "wisdom"] },
  { id: "baldwin-faced", t: "Not everything that is faced can be changed, but nothing can be changed until it is faced.", by: "James Baldwin", src: "\"As Much Truth As One Can Bear\", New York Times (1962)", m: ["r", "b"], a: ["people", "setback", "self"], n: ["courage", "wisdom"] },

  // ---- wisdom: something to think about --------------------------------
  { id: "frankl-attitude", t: "Everything can be taken from a man but one thing: the last of the human freedoms, to choose one's attitude in any given set of circumstances.", by: "Viktor Frankl", src: "Man's Search for Meaning (1946)", m: ["b", "r"], a: ["setback", "self"], n: ["wisdom", "courage"] },
  { id: "frankl-change", t: "When we are no longer able to change a situation, we are challenged to change ourselves.", by: "Viktor Frankl", src: "Man's Search for Meaning (1946)", m: ["b", "r"], a: ["setback", "people"], n: ["wisdom"] },
  { id: "aurelius-obstacle", t: "The impediment to action advances action. What stands in the way becomes the way.", by: "Marcus Aurelius", src: "Meditations, 5.20", m: ["r", "b", "y"], a: ["setback", "work"], n: ["wisdom", "courage"] },
  { id: "socrates-examined", t: "The unexamined life is not worth living.", by: "Socrates", src: "Plato, Apology 38a", m: ["g"], a: ["self"], n: ["wisdom"] },
  { id: "rilke-questions", t: "Be patient toward all that is unsolved in your heart and try to love the questions themselves.", by: "Rainer Maria Rilke", src: "Letters to a Young Poet (1903)", m: ["g", "b"], a: ["self", "people"], n: ["wisdom", "calm"] },
  { id: "gibran-shell", t: "Your pain is the breaking of the shell that encloses your understanding.", by: "Kahlil Gibran", src: "The Prophet (1923)", m: ["b"], a: ["setback", "people"], n: ["wisdom"] },
  { id: "emerson-trust", t: "Trust thyself: every heart vibrates to that iron string.", by: "Ralph Waldo Emerson", src: "\"Self-Reliance\" (1841)", m: ["g", "y", "r"], a: ["self", "work"], n: ["wisdom", "courage"] },
  { id: "tagore-errors", t: "If you shut your door to all errors, truth will be shut out.", by: "Rabindranath Tagore", src: "Stray Birds, 130 (1916)", m: ["g", "b"], a: ["work", "self", "setback"], n: ["wisdom"] },
  { id: "dumbledore-choices", t: "It is our choices that show what we truly are, far more than our abilities.", by: "J.K. Rowling (Albus Dumbledore)", src: "Harry Potter and the Chamber of Secrets (1998)", m: ["g", "y"], a: ["self"], n: ["wisdom"] },
  { id: "seneca-company", t: "Associate with those who will make a better man of you.", by: "Seneca", src: "Letters to Lucilius, 7", m: ["g", "y"], a: ["people"], n: ["wisdom"] },
  { id: "aurelius-right", t: "If it is not right, do not do it; if it is not true, do not say it.", by: "Marcus Aurelius", src: "Meditations, 12.17", m: ["r", "g"], a: ["people", "work"], n: ["wisdom"] },
  { id: "epictetus-master", t: "No man is free who is not master of himself.", by: "Epictetus", src: "Fragments", m: ["r", "g"], a: ["self"], n: ["wisdom"] },

  // ---- people: connection ----------------------------------------------
  { id: "keller-together", t: "Alone we can do so little; together we can do so much.", by: "Helen Keller", src: "quoted in Joseph Lash, Helen and Teacher (1980)", m: ["y", "g", "b"], a: ["people", "work"], n: ["push", "wisdom"] },
  { id: "brown-connection", t: "Connection is why we're here; it is what gives purpose and meaning to our lives.", by: "Brené Brown", src: "TED talk, \"The power of vulnerability\" (2010)", m: ["g", "b"], a: ["people"], n: ["wisdom", "calm"] },
  { id: "angelou-rainbow", t: "Try to be a rainbow in someone's cloud.", by: "Maya Angelou", src: "Letter to My Daughter (2008)", m: ["y", "g"], a: ["people"], n: ["push"] },
  { id: "aesop-kindness", t: "No act of kindness, no matter how small, is ever wasted.", by: "Aesop", src: "\"The Lion and the Mouse\"", m: ["y", "g", "b"], a: ["people"], n: ["push", "calm"] },
  { id: "dalai-compassion", t: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.", by: "The Dalai Lama", src: "The Art of Happiness (1998)", m: ["g", "r", "y"], a: ["people"], n: ["wisdom", "calm"] },
  { id: "brown-vulnerability", t: "Vulnerability is the birthplace of innovation, creativity and change.", by: "Brené Brown", src: "TED talk, \"Listening to shame\" (2012)", m: ["r", "y", "g"], a: ["people", "work"], n: ["courage"] },
  // ---- added replacements (secular sources) ----------------------------
  { id: "mandela-courage", t: "I learned that courage was not the absence of fear, but the triumph over it.", by: "Nelson Mandela", src: "Long Walk to Freedom (1994)", m: ["r", "b"], a: ["setback", "work", "self"], n: ["courage"] },
  { id: "leguin-journey", t: "It is good to have an end to journey toward; but it is the journey that matters, in the end.", by: "Ursula K. Le Guin", src: "The Left Hand of Darkness (1969)", m: ["g", "y", "b"], a: ["work", "self"], n: ["wisdom", "calm"] },
  { id: "plath-iam", t: "I took a deep breath and listened to the old brag of my heart. I am, I am, I am.", by: "Sylvia Plath", src: "The Bell Jar (1963)", m: ["b", "r"], a: ["self", "setback"], n: ["courage"] },
  { id: "morrison-write", t: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.", by: "Toni Morrison", src: "speech to the Ohio Arts Council (1981)", m: ["y", "g"], a: ["work", "self"], n: ["push"] },
  { id: "nemo-swim", t: "Just keep swimming.", by: "Dory", src: "Finding Nemo (Pixar, 2003)", m: ["b", "r", "y"], a: ["setback", "work"], n: ["push", "courage"] },
  { id: "tolkien-door", t: "It's a dangerous business, Frodo, going out your door. You step onto the road, and if you don't keep your feet, there's no knowing where you might be swept off to.", by: "J.R.R. Tolkien", src: "The Fellowship of the Ring (1954)", m: ["y", "g"], a: ["self", "work"], n: ["push", "courage"] }
];
