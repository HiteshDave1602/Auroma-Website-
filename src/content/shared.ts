// Verbatim copy shared between LP-A and LP-B, per the content specification
// (Two Rabbits · Auroma Holiday Villas · v1.0 · 20 August 2026).
// Copy in this file is set — do not rewrite it for tone or length.

export const brand = {
  name: "Auroma Holiday Villas",
  idea: "Where your home has a soul.",
  pillars: ["Sustainable", "Luxury", "Well-being"] as const,
  architectName: "Ar. Trupti Doshi",
  architectRole: "Principal Architect and Co-founder, The Auroma Architecture.",
};

export const villaImages = {
  elevation: {
    src: "/images/villa/elevation-render.webp",
    alt: "Auroma Holiday Villa elevation — a three-storey home with timber pergolas and stone cladding.",
    caption: undefined,
    width: 2000,
    height: 1414,
  },
  exteriorGate: {
    src: "/images/villa/exterior-gate.jpg",
    alt: "Auroma Holiday Villa viewed from the gated entrance with arched stonework, balconies and roof pergola.",
    caption: undefined,
    width: 1600,
    height: 900,
  },
  exteriorFrontAngle: {
    src: "/images/villa/exterior-front-angle.jpg",
    alt: "Front angled view of the three-storey villa with planted balconies and tiled roof.",
    caption: undefined,
    width: 1600,
    height: 900,
  },
  exteriorSideAngle: {
    src: "/images/villa/exterior-side-angle.jpg",
    alt: "Side elevation of the villa showing layered balconies, timber pergola, botanical mural and surrounding palms.",
    caption: undefined,
    width: 1672,
    height: 941,
  },
  exteriorFront: {
    src: "/images/villa/exterior-front.jpg",
    alt: "Front elevation of the villa with a covered car porch, planted balcony and roof pergola.",
    caption: undefined,
    width: 1600,
    height: 900,
  },
  heroFront: {
    src: "/images/villa/hero-front.jpg",
    alt: "Auroma Holiday Villa front view — a three-storey home with glass gables, planted balconies, timber pergola and stone boundary wall.",
    caption: undefined,
    width: 1672,
    height: 941,
  },
  groundFloorPlanDetail: {
    src: "/images/villa/ground-floor-plan-detail.jpg",
    alt: "Ground floor plan detail showing the living areas, courtyard, bathrooms and planted plunge pool edge.",
    caption: undefined,
    width: 973,
    height: 1600,
  },
  firstFloorPlanDetail: {
    src: "/images/villa/first-floor-plan-detail.jpg",
    alt: "First floor plan detail showing the bedroom arrangement, planted courtyard and ensuite bathrooms.",
    caption: undefined,
    width: 864,
    height: 1600,
  },
  poolCourtyard: {
    src: "/images/villa/pool-courtyard.jpg",
    alt: "Private courtyard plunge pool with bamboo landscaping at the villa entrance.",
    caption: "Private Swimming Pool & Pool Deck",
    width: 1600,
    height: 971,
  },
  diningStair: {
    src: "/images/villa/dining-stair.jpg",
    alt: "Designer dining space beside an arched window and open stairwell.",
    caption: "Central Courtyard & Staircase",
    width: 1600,
    height: 866,
  },
  solarRoofTerrace: {
    src: "/images/villa/solar-roof-terrace.jpg",
    alt: "Aerial view of the villa roof terrace with solar panels and surrounding greenery.",
    caption: undefined,
    width: 1448,
    height: 1086,
  },
  solarPoolAerial: {
    src: "/images/villa/solar-pool-aerial.jpg",
    alt: "Aerial view showing the villa roof terrace, solar panels and private plunge pool.",
    caption: undefined,
    width: 1600,
    height: 900,
  },
  livingRoom: {
    src: "/images/villa/living-room.jpg",
    alt: "Bright living room with soft seating, tall curtains and garden views.",
    caption: "Light-Filled Living Lounge",
    width: 1600,
    height: 900,
  },
  livingDiningKitchen: {
    src: "/images/villa/living-dining-kitchen.jpg",
    alt: "Open-plan living and dining room with arched openings, indoor planting and warm natural finishes.",
    caption: "Open Kitchen & Family Dining",
    width: 1536,
    height: 1024,
  },
  kitchen: {
    src: "/images/villa/kitchen.jpg",
    alt: "Designer kitchen with warm cabinetry, an island counter and garden-facing window.",
    caption: "Contemporary Modular Kitchen",
    width: 1600,
    height: 900,
  },
  diningRoom: {
    src: "/images/villa/dining-room.jpg",
    alt: "Dining room for eight with framed wall art, arched opening and indoor planting.",
    caption: "Dining Area with Garden Views",
    width: 1600,
    height: 900,
  },
  diningFoyer: {
    src: "/images/villa/dining-foyer.jpg",
    alt: "Dining and foyer area with arched openings, indoor planting and natural-toned finishes.",
    caption: "Open-Plan Living & Dining",
    width: 1600,
    height: 866,
  },
  bedroomSuite: {
    src: "/images/villa/bedroom-suite.jpg",
    alt: "Bedroom suite with soft seating, warm wall finishes and a garden-facing window.",
    caption: "Master Bedroom with Private Balcony",
    width: 1599,
    height: 968,
  },
  bedroomNiche: {
    src: "/images/villa/bedroom-niche.jpg",
    alt: "Bedroom niche with a built-in bench, fluted side tables and botanical wall art.",
    caption: "First Floor Foyer with Built-in Seating",
    width: 1402,
    height: 1122,
  },
  bedroomWindow: {
    src: "/images/villa/bedroom-window.jpg",
    alt: "Bedroom with a large window, soft curtains and calm neutral finishes.",
    caption: "Garden Facing Master Bedroom",
    width: 1600,
    height: 904,
  },
  bathroomVanity: {
    src: "/images/villa/bathroom-vanity.jpg",
    alt: "Ensuite bathroom with vanity, mirror, brass fittings and freestanding bathtub.",
    caption: undefined,
    width: 1402,
    height: 1122,
  },
  bathroomTub: {
    src: "/images/villa/bathroom-tub.jpg",
    alt: "Ensuite bathroom with bathtub below a pergola-shaded window.",
    caption: "Spa-Style Bathroom with Freestanding Bathtub",
    width: 1293,
    height: 1216,
  },
  gameRoom: {
    src: "/images/villa/game-room.jpg",
    alt: "Roof-terrace game room under a timber pergola, with a pool table, carrom board and chess table overlooking the treetops.",
    caption: "Games Room with Pool Table, Carrom & Chess",
    width: 1600,
    height: 918,
  },
} as const;

export const planImages = {
  ground: {
    src: "/images/plans/ground-floor.jpg",
    alt: "Ground floor plan showing the entrance gate, parking, plunge pool, powder room, living, dining and kitchen.",
    width: 922,
    height: 1706,
  },
  first: {
    src: "/images/plans/first-floor.jpg",
    alt: "First floor plan — three ensuite bedrooms, two balconies, a planted light well and the master with soaking tub.",
    width: 978,
    height: 1608,
  },
  second: {
    src: "/images/plans/second-floor-plan.jpg",
    alt: "Second floor plan — terrace recreation zone with pool table, chess and carrom, staircase around a planted light well, washer-dryer, inverter and battery, water tanks, DG backup, solar panels and solar water heater.",
    width: 972,
    height: 1600,
  },
  terrace: {
    src: "/images/plans/terrace.jpg",
    alt: "Terrace plan — pergola-covered deck with pool table, chess and carrom tables, a solar panel array over the tiled roof, twin water tanks, DG backup, further solar panels and a solar water heater.",
    width: 927,
    height: 1697,
  },
} as const;

export const credibilityItems = {
  investor: [
    "25+ years of practice",
    "200+ homes delivered",
    "India's first “House of Tomorrow”",
    "Recognised by the United Nations",
    "40+ awards",
  ],
  homeBuyer: [
    "25+ years of practice",
    "45 homes delivered",
    "India's first “House of Tomorrow”",
    "Recognised by the United Nations",
    "200+ homeowners",
  ],
};

// Brochure p.27 — "The Architect". Copy verbatim.
export const architect = {
  eyebrow: "The Architect",
  designedByLabel: "Designed by",
  name: "Ar. Trupti Doshi",
  role: "Founder & Principal Architect, Auroma Architecture",
  credentials: [
    "25+ years of architectural practice",
    "Recognised among India’s Top 10 Eco-Architects",
    "Technical Advisor to Government of India Green Building Policy",
    "Represented India at the World Youth Congress, Washington D.C.",
    "Represented India at TEDx Europe",
    "2× TEDx Speaker — received a standing ovation for her TEDx talks",
    "Work showcased at the Red Fort, New Delhi, as part of the India@75 national celebrations, inaugurated by Hon. Prime Minister Narendra Modi",
    "Work featured in 40+ national & international publications",
  ],
  closingLine1: "Your villa isn’t just built.",
  closingLine2: "It is architect-designed.",
};

// Auroma Group's completed track record (brochure p.20) — the developer's
// delivery history across the same land, distinct from the villa being sold.
// Referenced by PENDING.reraOpinionConfirmed's note on "Phases 1–4".
export const trackRecordEyebrow = "Our Legacy";
export const trackRecordHeadline = "Proven Across Four Phases";
export const trackRecordSupport =
  "Before this villa, there was a track record — four phases of homes delivered on the same land, near Auroville.";
export const trackRecord = [
  {
    name: "Auroma Phase I",
    homes: "24 Homes",
    images: [
      {
        src: "/images/track-record/phase-1.jpg",
        alt: "Auroma Phase I — a three-storey building with warm yellow and white balconies and hanging planters.",
        width: 1200,
        height: 297,
      },
    ],
  },
  {
    name: "Auroma Phase II",
    homes: "11 Homes",
    images: [
      {
        src: "/images/track-record/phase-2.jpg",
        alt: "Auroma Phase II — a row of homes with yellow, green and blue balcony trims.",
        width: 1200,
        height: 353,
      },
    ],
  },
  {
    name: "Auroma Phase III",
    homes: "Gratitude Ecovilla",
    award: "Internationally Awarded as India's First House of Tomorrow",
    images: [
      {
        src: "/images/track-record/phase-3.jpg",
        alt: "Gratitude Ecovilla, Auroma Phase III — a terraced building with timber pergolas and coloured drapes.",
        width: 1200,
        height: 358,
      },
    ],
  },
  {
    name: "Auroma Phase IV",
    homes: "9 Homes",
    images: [
      {
        src: "/images/track-record/phase-4-left.jpg",
        alt: "Auroma Phase IV — a terrace with a blue timber pergola and blue-and-white drapes.",
        width: 1200,
        height: 630,
      },
      {
        src: "/images/track-record/phase-4-right.jpg",
        alt: "Auroma Phase IV — a terrace with a wooden pergola and yellow-and-white drapes.",
        width: 1200,
        height: 628,
      },
    ],
  },
] as const;

export const galleryKicker = "THE VILLA";
export const gallerySupportInvestor =
  "Three storeys. A private plunge pool at the door. A roof terrace under timber.\nThree bedrooms, four washrooms, sleeps eight.";
export const gallerySupportHome =
  "Three bedrooms, each ensuite. A private plunge pool at the door. An open terrace under timber, and a games room at the top of the house.";
export const galleryAmenities = [
  "Private plunge pool",
  "Game room with pool table, chess and carrom",
  "Indoor landscaped garden",
  "Designer living, kitchen and dining",
  "Covered parking",
];
export const galleryCaption =
  "Images and renders are artistic representations for illustrative purposes. Design, specification and dimensions are indicative and subject to change and statutory approvals.";

export const specifications = {
  eyebrow: "What's Included",
  headline: "Specifications",
  categories: [
    {
      label: "Key Design Elements",
      groups: [
        {
          label: undefined,
          items: [
            "Designer Villa with bespoke Architecture",
            "Natural Eco-friendly Materials",
            "Vaastu Compliant",
            "Luxury Features",
          ],
        },
      ],
    },
    {
      label: "Sustainability Features",
      groups: [
        {
          label: undefined,
          items: [
            "Solar Panels",
            "Solar Water Heater in Terrace",
            "Bioseptic Tank",
            "Automated Sensor based Water Pumping",
            "Rainwater Harvesting",
            "Automated Irrigation line in Garden",
            "Kitchen Garden",
            "Kitchen Waste Composter",
            "Eco-friendly Materials to reduce AC load",
          ],
        },
      ],
    },
    {
      label: "Value Added Features",
      groups: [
        {
          label: undefined,
          items: [
            "Private Swimming Pool & Pool Deck",
            "Mosquito Mesh on Windows",
            "High Speed Internet",
            "EV Charging Point",
            "Smart Lock & Self-check-in",
          ],
        },
      ],
    },
    {
      label: "Amenities – Water",
      groups: [
        {
          label: undefined,
          items: [
            "Water Purifier in Kitchen",
            "24x7 Hot water to all Washrooms",
            "Private Borewell",
            "Overhead Water Tank",
          ],
        },
      ],
    },
    {
      label: "Amenities – Energy",
      groups: [
        {
          label: undefined,
          items: [
            "Concealed Copper wiring",
            "Inverter & Battery Backup",
            "Genset Power Backup",
            "CCTV Surveillance",
          ],
        },
      ],
    },
  ],
  note: "Specifications listed are indicative and subject to change, availability and statutory approvals.",
} as const;

// Brochure p.3 — Amenities, verbatim.
export const amenities = {
  eyebrow: "Amenities",
  headline: "Room for everyone you love.",
  headlineItalic: "Space for the moments that matter.",
  stats: [
    { value: "3", label: "Bedrooms" },
    { value: "4", label: "Washrooms" },
    { value: "8", label: "Guests" },
    { value: "1", label: "Private Pool", accent: true },
  ],
  features: [
    {
      label: "Designer Living · Kitchen · Dining",
      body: "One flowing, light-filled space where long breakfasts roll into lazy lunches and lingering dinners.",
    },
    {
      label: "Indoor Landscaped Garden",
      body: "A living courtyard at the heart of the home — green you can see, touch and breathe from every floor.",
    },
    {
      label: "3 Bedrooms · 4 Washrooms · Sleeps 8",
      body: "Room for the whole family, or two couples and the kids — every bedroom a quiet retreat of its own.",
    },
    {
      label: "Private Swimming Pool",
      body: "Your own plunge pool beneath a cascading stone water wall. Morning laps, sunset dips — never shared.",
    },
    {
      label: "Private Game Room",
      body: "Pool table, carrom and chess under a timber pergola, looking out over the treetops.",
    },
  ],
  images: [
    { image: villaImages.livingRoom, caption: "Light-filled living" },
    { image: villaImages.gameRoom, caption: "Game room with a view" },
  ],
  closing: "Made for long weekends, family holidays — and five-star guest reviews.",
} as const;

// Brochure p.4 — Key Design Elements, verbatim.
export const keyDesignElements = {
  eyebrow: "Key Design Elements",
  headline: "Not just built.",
  headlineItalic: "Architect-designed.",
  intro:
    "Every line of this villa is drawn by Ar. Trupti Doshi — 25+ years of sustainable, wellness-centred architecture, now shaped into a holiday home of your own.",
  image: villaImages.exteriorFront,
  elements: [
    {
      label: "Designer Architectural Villa",
      body: "A one-of-a-kind silhouette of timber gables, deep balconies and hand-painted murals — a home that turns heads from the lane.",
    },
    {
      label: "Sustainable Eco-Friendly Materials",
      body: "Chosen for how they breathe, age gracefully and sit lightly on the earth.",
    },
    {
      label: "Vaastu Compliant",
      body: "Orientation, entrances and rooms aligned with time-honoured principles of balance and harmony.",
    },
    {
      label: "Naturally Bright & Airy Rooms",
      body: "Generous openings and cross-ventilation invite daylight and the sea breeze in, all day long.",
    },
    {
      label: "Natural Finishes — Stone, Earth, Lime",
      body: "Surfaces that are cool underfoot, warm to the touch and honest to the eye.",
    },
  ],
  palette: [
    { label: "Stone", color: "#a39e95" },
    { label: "Earth", color: "#b0653d" },
    { label: "Lime", color: "#ede6d6" },
  ],
  quote: "“Architecture that feels as good as it looks.”",
} as const;

// Brochure p.5 — Eco-Friendly Features, verbatim. Listed in the brochure's
// row-by-row reading order so the two-column grid matches its layout.
export const ecoFeatures = {
  eyebrow: "Eco-Friendly Features",
  headline: "Luxury that gives back",
  headlineItalic: "to the earth.",
  intro:
    "Lower running costs for you. A lighter footprint for the planet. And a story your guests will love to tell.",
  images: [
    { image: villaImages.solarRoofTerrace, caption: "Solar-powered rooftop" },
    { image: villaImages.exteriorSideAngle, caption: "Green by design" },
  ],
  features: [
    { key: "solar", label: "Solar Panels", body: "Rooftop solar that trims your electricity bills, month after month." },
    {
      key: "cooling",
      label: "Natural Cooling",
      body: "Eco-friendly bricks keep interiors naturally cooler — more comfort, less air-conditioning.",
    },
    { key: "hotWater", label: "24×7 Solar Hot Water", body: "Hot water on tap in every washroom, powered by the sun." },
    {
      key: "rainwater",
      label: "Rainwater Harvesting",
      body: "Every monsoon shower is captured to recharge the ground beneath your home.",
    },
    { key: "ev", label: "EV Charging Point", body: "Plug in when you arrive. Fully charged for the drive home." },
    {
      key: "compost",
      label: "Kitchen Waste to Garden Manure",
      body: "Today’s peels feed tomorrow’s herbs — a garden that sustains itself.",
    },
    {
      key: "drinkingWater",
      label: "Pure, Healthy Dynamised Drinking Water",
      body: "Clean, energised drinking water for the whole household.",
    },
  ],
  closing: ["Lower bills.", "Lighter footprint."],
  closingItalic: "Happier guests.",
} as const;

// Brochure p.10 — the seven design-feature points, verbatim.
export const designFeaturesEyebrow = "Sustainability";
export const designFeaturesHeadline = "Design Features";
export const designFeatures = [
  "Eco-Friendly Materials",
  "Solar reduces electricity bill",
  "Rain water harvesting",
  "Natural Cooling",
  "Green gardens",
  "Naturally bright & airy rooms",
  "Birds, shade and fresh herbs",
];
export const designFeaturesClosing =
  "These are the same principles that made Gratitude Ecovilla India's first House of Tomorrow.";

// Brochure p.6 — Location Advantages, verbatim.
export const locationAdvantages = {
  eyebrow: "Location Advantages",
  headline: "Where the forest",
  headlineItalic: "meets the sea.",
  intro:
    "A green pocket between Auroville and Pondicherry — close to everything that matters, far from everything that doesn’t.",
  images: [
    {
      src: "/images/signature-places/matrimandir.jpg",
      alt: "Matrimandir, Auroville's golden geodesic meditation dome set in landscaped gardens.",
    },
    {
      src: "/images/signature-places/chunnambar-boat-house.jpg",
      alt: "Aerial view of the sandbar where the Chunnambar backwaters meet the sea near Pondicherry.",
    },
    {
      src: "/images/signature-places/promenade.jpg",
      alt: "Pondicherry's seaside Promenade, with the coastline curving into the distance.",
    },
  ],
  distances: [
    { time: "5 min", place: "Pondicherry University" },
    { time: "10 min", place: "Matrimandir, Auroville" },
    { time: "10 min", place: "PIMS Hospital" },
    { time: "15 min", place: "Pondicherry" },
  ],
  advantages: [
    { label: "360° Greenery", body: "Wake to birdsong and a canopy of green on every side." },
    { label: "Near Auroville", body: "Just 10 minutes from the Matrimandir and the heart of Auroville." },
    {
      label: "State-of-the-Art hospitals",
      body: "PIMS is 10 minutes away, with JIPMER and more within easy reach.",
    },
    {
      label: "Close to the beaches",
      body: "Sunrise walks at Auroville, Serenity, Repos and Paradise beaches.",
    },
    { label: "Close to pondicherry", body: "15 minutes to the French Quarter, the Promenade and its cafés." },
    {
      label: "Birds, Shade & Fresh Herbs",
      body: "Shady trees, a kitchen herb garden and a daily chorus of birds.",
    },
  ],
  aqi: {
    label: "AQI",
    value: "<50",
    rating: "Good",
    headline: "Air you can breathe deeply",
    body: "Air quality consistently below 50 firmly in the ‘Good’ range. Fresh air, every single day.",
  },
  cycling: {
    src: "/images/signature-experiences/auroville-cycling-trail.jpg",
    alt: "A group cycling along a red-earth forest trail in Auroville.",
    caption: "Auroville Cycling Trails",
    width: 1251,
    height: 870,
  },
} as const;

// Brochure p.8 — site location aerials, verbatim. The section renders only
// once all three photographs exist under public/ (see SiteLocationSection).
export const siteLocation = {
  eyebrow: "360° Greenery",
  body: "A thoughtfully designed home in the heart of Auroville’s green surroundings.",
  cta: "View site location",
  aerial: {
    src: "/images/site/site-aerial.jpg",
    alt: "Top-down aerial view of the villa plot, outlined with a dotted line, among tree-lined plots beside Auroma Homes Phase III.",
  },
  details: [
    {
      src: "/images/site/site-plot.jpg",
      alt: "Low aerial view of the outlined villa plot beside a completed Auroma building, with dense greenery beyond.",
    },
    {
      src: "/images/site/site-approach.jpg",
      alt: "High aerial view of the approach road leading to the site, surrounded by forest canopy on every side.",
    },
  ],
} as const;

export const locationMapImage = {
  src: "/images/location/location-map.png",
  alt: "Illustrated map showing Auroma Holiday Villa at the centre, with pins and radius circles pointing to Auroville, University & Hospital, and Pondicherry.",
  width: 1523,
  height: 1033,
} as const;

export const location = {
  headline: "Ten minutes from the Matrimandir.\nFifteen from Pondicherry.",
  groups: [
    { label: "Auroville", items: "Matrimandir, the Gardens, the Banyan, Solar Kitchen, Visitor Centre" },
    { label: "Cafés & food", items: "Marc's, Dreamer's, Tanto, Bread & Chocolate, Solar Kitchen" },
    { label: "Experiences", items: "pottery, yoga, sound healing, permaculture, Sadhana Forest" },
    { label: "Beaches", items: "Auroville/Repos, Serenity, Paradise" },
    { label: "Pondicherry", items: "White Town, the Promenade, Sri Aurobindo Ashram, the Basilica" },
    { label: "Essentials", items: "JIPMER and PIMS hospitals, pharmacy, supermarket, ATM" },
    { label: "Connectivity", items: "Puducherry airport, ECR Road, Chennai airport" },
  ],
  comeFor: [
    "Matrimandir",
    "Auroville Visitors' Centre",
    "Sri Aurobindo Ashram",
    "French Heritage Town",
    "Promenade & Beach",
    "Sadhana Forest",
    "French Heritage Walk",
    "Watsu Hydrotherapy",
    "Sound Healing",
    "SVARAM Sound Bath",
    "Scuba Diving",
    "Horse Riding",
  ],
};

export const signaturePlacesEyebrow = "The Perfect Airbnb";
export const signaturePlacesHeadline = "Signature Places";
export const signaturePlaces = [
  {
    src: "/images/signature-places/matrimandir.jpg",
    alt: "Matrimandir, Auroville's golden geodesic meditation dome set in landscaped gardens.",
    caption: "Matrimandir",
    width: 1300,
    height: 878,
  },
  {
    src: "/images/signature-places/auroville-visitors-centre.jpg",
    alt: "Auroville Visitor's Centre, with its earth-toned courtyard and stepped stone terraces.",
    caption: "Auroville Visitor's Centre",
    width: 1262,
    height: 878,
  },
  {
    src: "/images/signature-places/sri-aurobindo-ashram.jpg",
    alt: "The entrance to Sri Aurobindo Ashram in Pondicherry, framed by white walls and a wooden door.",
    caption: "Sri Aurobindo Ashram",
    width: 1251,
    height: 878,
  },
  {
    src: "/images/signature-places/french-heritage-town.jpg",
    alt: "A mustard-yellow French colonial heritage building with wooden shutters in Pondicherry's White Town.",
    caption: "French Heritage Town",
    width: 1300,
    height: 870,
  },
  {
    src: "/images/signature-places/promenade.jpg",
    alt: "Aerial view of Pondicherry's seaside Promenade at golden hour, with the coastline curving into the distance.",
    caption: "Promenade",
    width: 1262,
    height: 870,
  },
  {
    src: "/images/signature-places/sadhana-forest.jpg",
    alt: "The timber entrance sign to Sadhana Forest, an Auroville reforestation community.",
    caption: "Sadhana Forest",
    width: 1251,
    height: 870,
  },
  {
    src: "/images/signature-places/auroville-botanical-gardens.jpg",
    alt: "A shaded pergola walkway lined with potted plants at the Auroville Botanical Gardens.",
    caption: "Auroville Botanical Gardens",
    width: 1300,
    height: 878,
  },
  {
    src: "/images/signature-places/savitri-bavan.jpg",
    alt: "Savitri Bavan's sculptural white architecture and gardens in Auroville.",
    caption: "Savitri Bavan",
    width: 1262,
    height: 878,
  },
  {
    src: "/images/signature-places/paradise-beach.jpg",
    alt: "The welcome sign at Paradise Beach, framed by palm trees near Auroville.",
    caption: "Paradise Beach",
    width: 1251,
    height: 878,
  },
  {
    src: "/images/signature-places/chunnambar-boat-house.jpg",
    alt: "Aerial view of the Chunnambar Boat House backwaters and sandbar near Pondicherry.",
    caption: "Chunnambar Boat House",
    width: 1300,
    height: 862,
  },
  {
    src: "/images/signature-places/bharathi-park-aayi-mandapam.jpg",
    alt: "The white colonnaded Aayi Mandapam monument at Bharathi Park in Pondicherry.",
    caption: "Bharathi Park & Aayi Mandapam",
    width: 1262,
    height: 862,
  },
  {
    src: "/images/signature-places/sacred-heart-basilica.jpg",
    alt: "The twin red-and-white Gothic towers of Sacred Heart Basilica in Pondicherry at sunset.",
    caption: "Sacred Heart Basilica",
    width: 1251,
    height: 862,
  },
] as const;

export const signatureExperiencesEyebrow = "The Perfect Airbnb";
export const signatureExperiencesHeadline = "Signature Experiences";
export const signatureExperiences = [
  {
    src: "/images/signature-experiences/french-heritage-walk.jpg",
    alt: "A heritage building corner in Pondicherry's French Quarter, a stop on the French Heritage Walk.",
    caption: "French Heritage Walk",
    width: 1300,
    height: 878,
  },
  {
    src: "/images/signature-experiences/watsu-hydrotherapy.jpg",
    alt: "A Watsu hydrotherapy session, with a practitioner supporting a guest floating in warm water.",
    caption: "Watsu Hydrotherapy",
    width: 1262,
    height: 878,
  },
  {
    src: "/images/signature-experiences/svaram-sound-bath.jpg",
    alt: "A sound healer playing a gong during a SVARAM sound bath session.",
    caption: "SVARAM Sound Bath",
    width: 1251,
    height: 878,
  },
  {
    src: "/images/signature-experiences/scuba-diving.jpg",
    alt: "Two scuba divers giving a thumbs-up underwater off the Pondicherry coast.",
    caption: "Scuba Diving",
    width: 1300,
    height: 870,
  },
  {
    src: "/images/signature-experiences/horse-riding.jpg",
    alt: "A horse being led by its handler during a horse riding session near Auroville.",
    caption: "Horse Riding",
    width: 1262,
    height: 870,
  },
  {
    src: "/images/signature-experiences/auroville-cycling-trail.jpg",
    alt: "A group cycling along a red-earth forest trail in Auroville.",
    caption: "Auroville Cycling Trail",
    width: 1251,
    height: 870,
  },
  {
    src: "/images/signature-experiences/pottery-workshop.jpg",
    alt: "A potter shaping clay on a wheel during a pottery workshop.",
    caption: "Pottery Workshop",
    width: 1300,
    height: 878,
  },
  {
    src: "/images/signature-experiences/solitude-permaculture-workshop.jpg",
    alt: "A group working the earth together at a Solitude Farm permaculture workshop.",
    caption: "Solitude Permaculture Workshop",
    width: 1262,
    height: 878,
  },
  {
    src: "/images/signature-experiences/earth-building-workshop.jpg",
    alt: "Participants shaping compressed earth blocks together at an earth building workshop.",
    caption: "Earth Building Workshop",
    width: 1251,
    height: 878,
  },
  {
    src: "/images/signature-experiences/surfing.jpg",
    alt: "A surfer riding a wave on the Pondicherry coastline.",
    caption: "Surfing",
    width: 1300,
    height: 862,
  },
  {
    src: "/images/signature-experiences/kayaking.jpg",
    alt: "Kayaks on a quiet mangrove-lined backwater at golden hour.",
    caption: "Kayaking",
    width: 1262,
    height: 862,
  },
  {
    src: "/images/signature-experiences/sailing.jpg",
    alt: "A small sailboat with its sail raised, out on the backwaters at sunset.",
    caption: "Sailing",
    width: 1251,
    height: 862,
  },
] as const;

export const plans = {
  headline: "See the whole villa, floor by floor.",
  floors: [
    {
      label: "Ground floor",
      detail:
        "Living, dining and kitchen opening to a private plunge pool and courtyard. Covered parking, guest washroom.",
    },
    {
      label: "First floor",
      detail: "Three bedrooms, each ensuite. Master with soaking tub and planted balcony.",
    },
    {
      label: "Second floor",
      detail:
        "Private game room. Pool table, carrom and chess under a timber pergola, looking out over the treetops.",
    },
    {
      label: "Terrace plan",
      detail:
        "An open terrace under a timber pergola. The games room, solar array, and the best seat in the house at six in the evening.",
    },
  ],
  // Official Area Statement (Ground + 2 Floors), supersedes BUILD-SPEC v3 §5.9.
  areas: {
    plot: "1,775 sq. ft.",
    builtUp: "2,290 sq. ft.",
    semiOpen: "815 sq. ft.",
    total: "3,105 sq. ft.",
  },
  areaTable: [
    { floor: "Ground floor", builtUp: 900, semiOpen: 340, total: 1240, semiOpenNote: "plunge pool 195 · parking 145" },
    { floor: "First floor", builtUp: 1075, semiOpen: 175, total: 1250 },
    { floor: "Second floor", builtUp: 315, semiOpen: 300, total: 615 },
  ],
};

export const paymentPlan = {
  tag: "Flexible",
  headline: "Construction Linked Payment Plan",
  milestones: [
    { label: "Booking Amount", percent: "5%" },
    { label: "Registration of MoU & Sale Deed", percent: "15%" },
    { label: "Foundation", percent: "15%" },
    { label: "Ground Floor", percent: "21%" },
    { label: "First Floor", percent: "21%" },
    { label: "Second Floor", percent: "21%" },
    { label: "Handover", percent: "2%" },
  ],
} as const;

// B11 / A10 — written consent now on file for all eight owners below
// (brochure pp.21–24, confirmed 15 Sept 2026). Photos and employer/affiliation
// lines are published as printed in the brochure itself.
export const testimonialsEyebrow = "Testimonials";
export const testimonialsHeadline = "What Our Homeowners Say";
export const testimonials = [
  {
    quote:
      "Living in an Auroma home means experiencing natural light, greenery, birdsong and a deep connection with nature. Its solid structure, quality materials, Vastu and distinctive design inspire confidence. Both our investments, from selection to execution, have been smooth and special.",
    attribution: "Captain Mohanshyam",
    role: "Aviator Flight Instructor, Adani Group",
    phase: "Phase 1",
    photo: {
      src: "/images/testimonials/mohanshyam.jpg",
      alt: "Captain Mohanshyam, Auroma Phase 1 homeowner.",
      width: 488,
      height: 651,
    },
  },
  {
    quote:
      "Here, you wake up to sunlight, greenery and the music of birds. It is poetry that cannot be expressed in words. Even the finest resorts cannot give me the feeling I get here.",
    attribution: "Shreeprakash Patel",
    role: "Diamond Merchant, Dubai",
    phase: "Phase 1",
    photo: {
      src: "/images/testimonials/shreeprakash.jpg",
      alt: "Shreeprakash Patel, Auroma Phase 1 homeowner.",
      width: 489,
      height: 652,
    },
  },
  {
    quote:
      "I have never seen architecture like this in America, Bombay, or elsewhere in India. The balcony is my favourite place, with beautiful views and peaceful surroundings. The home is designed and well built. I love inviting friends and family to experience it, and I would happily stay here for years.",
    attribution: "Kalindi Bhuta",
    role: "Homemaker",
    phase: "Phase 2",
    photo: {
      src: "/images/testimonials/kalindi.jpg",
      alt: "Kalindi Bhuta, Auroma Phase 2 homeowner.",
      width: 500,
      height: 446,
    },
  },
  {
    quote:
      "What drew me to Auroma was Trupti's philosophy of how buildings communicate with people. At Auroma French Villaments, we saw architecture thoughtfully integrated with nature, creating meaningful, comfortable homes while preserving their environment.",
    attribution: "Shivani Shroff",
    role: "Lead Coach, Association Montessori Internationale",
    phase: "Phase 2",
    photo: {
      src: "/images/testimonials/shivani.jpg",
      alt: "Shivani Shroff, Auroma Phase 2 homeowner.",
      width: 500,
      height: 498,
    },
  },
  {
    quote:
      "The folded balconies give our home such a distinctive character, while the kitchen garden makes everyday living feel fresh and personal. Being surrounded by greenery brings us closer to nature and makes the experience uplifting.",
    attribution: "Kadhambari",
    role: "Graphic Designer",
    phase: "Phase 3",
    photo: {
      src: "/images/testimonials/kadhambari.jpg",
      alt: "Kadhambari, Auroma Phase 3 homeowner.",
      width: 500,
      height: 555,
    },
  },
  {
    quote:
      "What I enjoy most is how cool the interiors remain throughout the day. The breezy stilt floor feels refreshing, and the sustainable features work quietly in the background, making daily life comfortable, efficient and effortless.",
    attribution: "Roshini Baskaran",
    role: "Architect",
    phase: "Phase 3",
    photo: {
      src: "/images/testimonials/roshini.jpg",
      alt: "Roshini Baskaran, Auroma Phase 3 homeowner.",
      width: 500,
      height: 562,
    },
  },
  {
    quote:
      "Ecology and value creation have always been central to my vision. What I value about Trupti Doshi is her ability to beautifully intertwine ecology and architecture creating homes that coexist with the land, water and migratory birdlife rather than disrupting them. Her ability to bring coherence between land, building and construction is extraordinary.",
    attribution: "Sumedh Reddy",
    role: "Fintech Entrepreneur",
    phase: "Phase 4",
    photo: {
      src: "/images/testimonials/sumedh.jpg",
      alt: "Sumedh Reddy, Auroma Phase 4 homeowner.",
      width: 500,
      height: 489,
    },
  },
  {
    quote:
      "Location was one of the first things I loved about the home. What impressed me most was the attention to detail, especially the stone flooring. The team also helped me choose furniture and appliances that perfectly matched the theme and character of my home.",
    attribution: "Founder, Harmony Montessori",
    role: "Chain of Schools, Mumbai",
    phase: "Phase 4",
    photo: {
      src: "/images/testimonials/harmony.jpg",
      alt: "Harmony Montessori's founder, Auroma Phase 4 homeowner.",
      width: 500,
      height: 522,
    },
  },
] as const;

export const faqShared = {
  isPartOfAuroville: {
    q: "Is this part of Auroville?",
    aInvestor:
      "No. The villa is a privately owned freehold home near Auroville — about ten minutes from the Matrimandir. There is no affiliation with the Auroville Foundation, and ownership carries no membership or rights within Auroville.",
    aHome:
      "No. This is a privately owned freehold home near Auroville. There is no affiliation with the Auroville Foundation, and ownership carries no membership or rights within Auroville.",
  },
  howManyAvailable: {
    q: "How many are available?",
    a: "This villa is one of a small number in the project. Ask us on WhatsApp for current availability.",
  },
};

export const confirmationCopy = {
  headline: "On its way.",
  body: "Thank you. Your copy of the brochure is ready — download it below.",
  submitCta: "Send me the brochure",
};

export const whatsappCopy = {
  immediate: (name: string) =>
    `Hi ${name} — here's the Auroma Holiday Villas brochure. A villa near Auroville, ten minutes from the Matrimandir.`,
  followUpInvestor: "Anything you'd like to know about how it's set up for hosting?",
  followUpHome: "Would you like the current price range?",
  coldNoSource: "Are you thinking of using it yourself, or letting it out too — or both?",
};
