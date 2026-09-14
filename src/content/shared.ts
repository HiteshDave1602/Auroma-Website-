// Verbatim copy shared between LP-A and LP-B, per the content specification
// (Two Rabbits · Auroma Holiday Villas · v1.0 · 20 August 2026).
// Copy in this file is set — do not rewrite it for tone or length.

export const brand = {
  name: "Auroma Holiday Villas",
  idea: "Where your home has a soul.",
  pillars: ["Sustainable", "Luxury", "Well-being"] as const,
  architectName: "Ar. Trupti Doshi",
  architectRole: "Principal Architect and Co-founder, The Auroma Group.",
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
    alt: "Side angled view of the villa showing layered balconies, white walls and surrounding greenery.",
    caption: undefined,
    width: 1600,
    height: 900,
  },
  exteriorFront: {
    src: "/images/villa/exterior-front.jpg",
    alt: "Front elevation of the villa with a covered car porch, planted balcony and roof pergola.",
    caption: undefined,
    width: 1600,
    height: 900,
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
    src: "/images/plans/second-floor.jpg",
    alt: "Second floor plan — terrace recreation zone with pool table, chess and carrom, washer-dryer, inverter and battery, water tanks, DG backup, solar panels and solar water heater.",
    width: 978,
    height: 1609,
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

export const architect = {
  eyebrow: "The Architect",
  name: "Ar. Trupti Doshi",
  role: "Principal Architect and Co-founder, The Auroma Group.",
  bio: [
    "She has spent twenty-five years asking a question most builders never ask: what would it take for a house to feel alive? She took that question to a TEDx stage in Greece — ",
  ],
  bioItalic: "Can a Building Be a Person?",
  bioContinued:
    " — and has spent every project since answering it in brick, lime and light.",
  credentials: [
    { stat: "200+ designer homes", detail: "delivered across Pondicherry–Auroville" },
    { stat: "Gratitude Ecovilla", detail: "— India's first internationally recognised “House of Tomorrow”" },
    { stat: "Sharanam", detail: "— recognised by the United Nations for sustainable architecture" },
    { stat: "GRIHA 5-Star", detail: "with an Exemplary Performance Award" },
    { stat: "40+", detail: "national and international awards" },
    { stat: "5,00,000+ sq. ft.", detail: "of eco-spaces designed around nature and wellness" },
  ],
  closing: "This villa was drawn by her hand.",
};

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
        "An open terrace under a timber pergola. The games room, solar array, and the best seat in the house at six in the evening.",
    },
  ],
  // Official Area Statement (Ground + 2 Floors), supersedes BUILD-SPEC v3 §5.9.
  areas: {
    builtUp: "2,300 sq. ft.",
    semiOpen: "800 sq. ft.",
    total: "3,100 sq. ft.",
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

// B11 / A10 — real quotes exist in the source brochure, but written consent
// is not yet on file (content spec, section 07). Do not render these until
// content.pendingFlags.testimonialConsent is true. Employer name intentionally
// omitted per the spec's note even once consent lands, unless separately cleared.
export const testimonials = [
  {
    quote:
      "Living in an Auroma home means experiencing natural light, greenery, birdsong and a deep connection with nature. Its solid structure, quality materials, Vastu and distinctive design inspire confidence.",
    attribution: "Captain Mohanshyam",
    role: "Aviator and Flight Instructor",
  },
  {
    quote:
      "Here, you wake up to sunlight, greenery and the music of birds. It is poetry that cannot be expressed in words. Even the finest resorts cannot give me the feeling I get here.",
    attribution: "Shreeprakash Patel",
    role: "Diamond Merchant, Dubai",
  },
];

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
  body: "Check WhatsApp — the brochure should be with you in about a minute.",
  submitCta: "Send me the brochure",
};

export const whatsappCopy = {
  immediate: (name: string) =>
    `Hi ${name} — here's the Auroma Holiday Villas brochure. A villa near Auroville, ten minutes from the Matrimandir.`,
  followUpInvestor: "Anything you'd like to know about how it's set up for hosting?",
  followUpHome: "Would you like the current price range?",
  coldNoSource: "Are you thinking of using it yourself, or letting it out too — or both?",
};
