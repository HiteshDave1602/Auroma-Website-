// Investor landing page ("/"). Copy set verbatim per BUILD-SPEC v3.0
// (Two Rabbits · Auroma Holiday Villas · 26 August 2026).
// Register: rational, specific. Noindex, nofollow — paid traffic only.

export const lpB = {
  meta: {
    title: "Auroma Holiday Villas — An Architect-Designed Villa Near Auroville",
    description:
      "Own a villa near Auroville. Three bedrooms, sleeps eight, private plunge pool. Architect-designed by Ar. Trupti Doshi, ten minutes from the Matrimandir.",
    robots: "noindex, nofollow",
  },

  hero: {
    kicker: "NEAR AUROVILLE · PONDICHERRY",
    line1: "Own a villa near Auroville.",
    line2: "Host it when you're away.",
    body: "3 Bedroom, 4 Bath, Sleeps 8, Swimming Pool, Game Room.\nArchitect-designed by Ar. Trupti Doshi, 10 minutes from the Matrimandir.",
    priceLine: "~₹3.5 crore",
    cta: "Download Brochure",
  },

  theCase: {
    kicker: ["AUROMA PHASE V", "WELLNESS VILLAS"],
    headline: {
      line1: "Have you ever dreamt of owning",
      line2Lead: "a",
      line2Accent: "true Wellness Home?",
    },
    body: "Designed by one of India’s most celebrated sustainable architects —\nminutes from Auroville, India’s most sustainable wellness eco-city.",
    closing: ["For your health.", "For your holidays.", "For Airbnb returns."],
  },

  hosting: {
    kicker: "Designed for Hosting",
    headline: "Every decision made with your guests in mind.",
    points: [
      {
        title: "Sleeps eight, in three ensuite bedrooms.",
        body: "Group bookings are the difference between a listing and a business.",
      },
      {
        title: "You won't be running it yourself.",
        body: "You don't live here — we do. We'll introduce you to hosts and property managers already operating in Auroville and Pondicherry who handle listings, guests, cleaning and keys. They contract directly with you. We make the introduction and take nothing from it.",
      },
      {
        title: "A plunge pool at the door, not down the road.",
        body: "Private, and visible from the living room the moment you walk in.",
      },
      {
        title: "A game room on the top floor.",
        body: "Pool table, carrom and chess under a timber pergola, open to the evening air.",
      },
      {
        title: "Rooms that feel different from one another.",
        body: "A guest who moves from the courtyard to the terrace to the pool has had three different mornings in one house.",
      },
      {
        title: "Materials that get better with age.",
        body: "Lime, stone and timber wear in rather than wear out — so the house still looks right in ten years.",
      },
    ],
  },

  // Brochure p.3 — "The Wellness Shift". Copy and figures verbatim.
  wellnessShift: {
    kicker: "The Wellness Shift",
    headlineLine1: "Where you live is now your",
    headlineLine2: "most powerful health decision.",
    body: "Across the world — and rapidly in India — buyers are choosing homes that make them healthier, not just homes that look good. Wellness real estate is the fastest-growing sector of the global wellness economy.",
    chart: {
      title: "Global Wellness Real Estate Market",
      subtitle: "US$, Global Wellness Institute",
      bars: [
        { year: "2017", label: "$151 B", value: 151, forecast: false },
        { year: "2025", label: "$876 B", value: 876, forecast: false },
        { year: "2030 (forecast)", label: "$1.8 T", value: 1800, forecast: true },
      ],
      highlight: "5.8×",
      highlightBody: "growth since 2017 — and forecast to double again by 2030.",
      highlightNote: "In 2025 alone it grew 23%, while global construction grew 3%.",
    },
    stats: [
      {
        figure: "26.5%",
        tag: "a year",
        body: "Growth of India's wellness real estate market (2019–2025) — now a $20.5 billion market.",
      },
      {
        figure: "10–25%",
        tag: "premium",
        body: "The price premium wellness-focused homes can command over conventional homes.",
      },
      {
        figure: "80–90%",
        tag: "of health",
        body: "Of our disease risk, health outcomes and longevity are shaped by environment and lifestyle — not genes.",
      },
      {
        figure: "~90%",
        tag: "indoors",
        body: "Of our time is spent indoors. The home you choose quietly shapes your health, every day.",
      },
    ],
    closingLine1: "Auroma Wellness Villas are designed for this shift —",
    closingLine2: "a home that cares for you, and an asset in the fastest-growing sector of the wellness economy.",
    sources:
      "Sources: Global Wellness Institute — “Wellness Real Estate Market Reaches $876 Billion—Forecast to Hit $1.8 Trillion by 2030” (May 2026) and GWI wellness real estate research; US Environmental Protection Agency (time spent indoors).",
  },

  // Brochure p.4 — "Wellness Design Features". Copy verbatim.
  wellnessDesign: {
    kicker: "Wellness Design Features",
    headlineLine1: "A home designed to make you feel better.",
    headlineLine2: "Every single day.",
    specLine: ["3 Bedrooms", "4 Washrooms", "Sleeps 8", "Private Pool", "Game Room"],
    images: [
      { key: "livingRoom", caption: "Light-filled living" },
      { key: "bedroomSuite", caption: "Morning-lit bedrooms" },
      { key: "poolCourtyard", caption: "Your private plunge pool" },
    ],
    features: [
      { icon: "light", title: "Light", body: "Naturally bright rooms and morning light in every bedroom — to keep your body clock in rhythm." },
      { icon: "air", title: "Air", body: "Cross-ventilated rooms and an open courtyard draw in fresh air, on a site where AQI stays below 50." },
      { icon: "cool", title: "Cool", body: "Eco-friendly brick walls keep interiors up to 8°C cooler — comfort without leaning on the AC." },
      { icon: "sleep", title: "Sleep", body: "Three ensuite bedrooms, each with a planted balcony, garden views and the calm of a green neighbourhood." },
      { icon: "water", title: "Water", body: "Pure, dynamised drinking water, 24×7 solar hot water and a freestanding soaking tub." },
      { icon: "nature", title: "Nature", body: "An indoor landscaped garden at the heart of the home — and 360° greenery all around it." },
      { icon: "nourish", title: "Nourish", body: "A kitchen herb garden, fresh organic produce from Auroville's farms and a kitchen made for cooking fresh." },
      { icon: "move", title: "Move", body: "Morning laps in your private plunge pool, yoga on the terrace, cycling trails through the forest." },
      { icon: "calm", title: "Calm", body: "Vaastu-aligned spaces, natural stone, earth and lime finishes — and Auroville's yoga and sound healing minutes away." },
      { icon: "connect", title: "Connect", body: "Open living, kitchen and dining, and a private game room — space to reconnect with the people you love." },
    ],
    closing: "Ten ways this home looks after you — whether you live here, holiday here, or host here.",
  },

  // Brochure p.5 — "Designed by Ar. Trupti Doshi". Copy verbatim.
  designedBy: {
    siteTag: "The Site · Chosen for 360° Greenery",
    kicker: "Designed by Ar. Trupti Doshi",
    headlineLine1: "Designed by one of India's most",
    headlineLine2: "celebrated sustainable architects.",
    stats: [
      { figure: "25+", label: "years of sustainable practice" },
      { figure: "Top 10", label: "Eco-Architects of India" },
      { figure: "Advisor", label: "Govt. of India Green Building Policy" },
      { figure: "India's 1st", label: "House of Tomorrow — Gratitude Ecovilla" },
    ],
    methodTitle: "Her wellness design method",
    method: [
      { title: "Choose the site", body: "Every Auroma home begins with land wrapped in 360° greenery, clean air (AQI below 50) and the calm of Auroville." },
      { title: "Shape it with the climate", body: "Orientation, cross-ventilation, daylight and Vaastu are designed together — so the house cools, lights and breathes itself." },
      { title: "Build with nature", body: "Eco-friendly bricks, stone, earth and lime — natural, breathable materials chosen for your health as much as for beauty." },
      { title: "Close the loops", body: "Sun, rain and kitchen waste become energy, water and soil. A home that gives back more than it takes." },
    ],
    greeneryCaption: "360° Greenery around the site",
    ecovillaCaption: "Gratitude Ecovilla · Auroma Phase III",
    quote: "A home should do more than shelter you. It should help you heal — every single day.",
    quoteBy: "Ar. Trupti Doshi",
  },

  // Brochure p.6 — "Sustainability You Can Feel". Copy verbatim.
  sustainability: {
    kicker: "Sustainability You Can Feel",
    headlineLine1: "Healthy for you.",
    headlineLine2: "Gentle on the earth.",
    body: "Behind the beauty, every system in this villa is quietly working for your health — and lowering what it costs to run.",
    stats: [
      { figure: "8°C", label: "cooler indoors with eco-friendly bricks" },
      { figure: "<50", label: "AQI — air in the ‘Good’ range" },
      { figure: "24×7", label: "solar hot water in every washroom" },
      { figure: "360°", label: "greenery all around" },
    ],
    features: [
      { title: "Site & Air", body: "Surrounded by 360° greenery, with air quality consistently below AQI 50 — in the ‘Good’ range." },
      { title: "Natural Daylight", body: "Generous openings and a central courtyard light the home through the day — less artificial lighting." },
      { title: "Eco-Friendly Bricks", body: "Thermal-mass walls keep interiors up to 8°C cooler than outside — lower AC use, better sleep." },
      { title: "Cross-Ventilation", body: "Rooms are oriented to catch the sea breeze, flushing every floor with fresh air." },
      { title: "Solar Power & Hot Water", body: "Rooftop solar cuts electricity bills; 24×7 solar hot water reaches every washroom." },
      { title: "Rainwater Harvesting", body: "Roof water is collected and recharged into the ground beneath your home." },
      { title: "Kitchen Waste Composting", body: "Food waste becomes rich manure for the garden and herb beds — nothing wasted." },
      { title: "Pure Drinking Water", body: "Healthy, dynamised drinking water for the whole household. Plus an EV charging point." },
    ],
  },

  midCta: {
    headline: "Want the plans, areas and full price sheet?",
    body: "The brochure comes to you on WhatsApp, straight away.",
    cta: "Send me the brochure",
  },

  pricing: {
    kicker: "Pricing",
    headlinePrefix: "",
    exclusions: "Exclusive of registration, stamp duty, GST and statutory charges.",
    revision: "Prices are indicative and subject to revision.",
    cta: "Get the full price sheet on WhatsApp",
  },

  form: {
    headline: "Get the brochure.",
    body: "Plans, areas, specifications and the full price sheet —\nsent to you in about a minute.",
  },

  faq: [
    {
      q: "Can I actually let the villa out?",
      a: "It's a privately owned freehold home and yours to use as you choose, subject to local regulations that apply to short-stay hosting. We designed it with hosting in mind and we'll connect you with professional hosts and property managers working in the area.",
    },
    {
      q: "Who manages it when I'm not there?",
      a: "We'll introduce you to independent property managers and hosts operating in Auroville and Pondicherry. They contract directly with you — we make the introduction, we don't take a cut.",
    },
    {
      q: "What will it earn?",
      a: "We won't tell you, because nobody honestly can. What a villa earns depends on how it's run, how it's priced and how the market moves. What we can tell you is exactly what we designed and why — that's on this page, and in more detail in the brochure.",
    },
    {
      q: "Can I use it myself?",
      a: "It's your house. Block whatever dates you want.",
    },
    {
      q: "When will it be ready?",
      a: "The project is at design stage. Construction and handover dates are shared on request — ask on WhatsApp and we'll send the current schedule.",
    },
  ],
} as const;
