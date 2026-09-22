export interface JuiceProduct {
  id: string;
  name: string;
  subtitle?: string;
  ingredients: string;
  priceMonthly: number;
  perBottlePrice: number;
  category: 'wellness-signature' | 'therapeutic-greens';
  description: string;
  liquidColor: string;
  glowColor: string;
  fillPercentage: number;
  benefits: string[];
}

export const JUICES_LIST: JuiceProduct[] = [
  {
    id: "abc-juice",
    name: "ABC Miracle Juice",
    subtitle: "Apple + Beetroot + Carrot",
    ingredients: "Himachal Apples, Farm Beetroot, Tender Carrots",
    priceMonthly: 2499,
    perBottlePrice: 99,
    category: "wellness-signature",
    description: "The revered triumvirate elixir for radiant skin, natural detoxification, and sustained cellular stamina.",
    liquidColor: "#9F1239", // Deep Ruby Beetroot
    glowColor: "rgba(159, 18, 57, 0.45)",
    fillPercentage: 92,
    benefits: ["Detoxifies liver & kidneys", "Imparts glowing complexion", "Natural stamina booster"]
  },
  {
    id: "carrot-juice",
    name: "Pure Carrot Juice",
    subtitle: "Cold-Pressed Sweet Carrots",
    ingredients: "100% Native Orange Carrots",
    priceMonthly: 1999,
    perBottlePrice: 79,
    category: "wellness-signature",
    description: "Cold-extracted golden nectar loaded with pure bioavailable beta-carotene and essential vitamins.",
    liquidColor: "#EA580C", // Bright Carrot
    glowColor: "rgba(234, 88, 12, 0.45)",
    fillPercentage: 88,
    benefits: ["Promotes vision & eye health", "Rich in protective antioxidants", "Naturally sweet & light"]
  },
  {
    id: "beetroot-juice",
    name: "Vital Beetroot Juice",
    subtitle: "100% Pure Root Cold-Extract",
    ingredients: "Fresh Earthy Beetroot Bulbs",
    priceMonthly: 1999,
    perBottlePrice: 79,
    category: "wellness-signature",
    description: "Deep burgundy elixir high in dietary nitrates that naturally support athletic endurance and arterial elasticity.",
    liquidColor: "#7F1D1D", // Burgundy Wine
    glowColor: "rgba(127, 29, 29, 0.45)",
    fillPercentage: 90,
    benefits: ["Supports healthy blood pressure", "Elevates oxygen uptake", "Rich dietary nitrates"]
  },
  {
    id: "moringa-juice",
    name: "Moringa Supergreen Juice",
    subtitle: "Nature's Multivitamin Leaf",
    ingredients: "Organic Tender Moringa Leaves & Mint",
    priceMonthly: 1999,
    perBottlePrice: 79,
    category: "wellness-signature",
    description: "Potent green super-juice containing 7x the Vitamin C of oranges and 4x the calcium of milk.",
    liquidColor: "#15803D", // Deep Forest Green
    glowColor: "rgba(21, 128, 61, 0.45)",
    fillPercentage: 85,
    benefits: ["Fights internal inflammation", "Complete plant protein profile", "Boosts metabolic vitality"]
  },
  {
    id: "ash-gourd-juice",
    name: "Ash Gourd Juice",
    subtitle: "Safed Petha / Boodidha Gummadikaya",
    ingredients: "Fresh Ash Gourd & Hint of Lime",
    priceMonthly: 1599,
    perBottlePrice: 64,
    category: "therapeutic-greens",
    description: "Traditional yogic cooling tonic revered for calming the nervous system and balancing gut acidity.",
    liquidColor: "#84CC16", // Subtle Translucent Green
    glowColor: "rgba(132, 204, 22, 0.4)",
    fillPercentage: 94,
    benefits: ["Alkalizes gut pH", "Cooling Pranic energy", "Eliminates morning lethargy"]
  },
  {
    id: "sorakaya-juice",
    name: "Sorakaya Juice",
    subtitle: "Bottle Gourd / Lauki Juice",
    ingredients: "Fresh Tender Bottle Gourd & Ginger",
    priceMonthly: 1699,
    perBottlePrice: 68,
    category: "therapeutic-greens",
    description: "Light, hydrating traditional morning cleanse that soothes digestion and supports healthy heart rhythm.",
    liquidColor: "#10B981", // Fresh Green
    glowColor: "rgba(16, 185, 129, 0.4)",
    fillPercentage: 89,
    benefits: ["Promotes gentle weight balance", "Supports liver function", "Ultra-soothing on digestion"]
  },
  {
    id: "keera-juice",
    name: "Keera Cucumber Juice",
    subtitle: "Crisp Green Hydration Elixir",
    ingredients: "Tender Keera & Fresh Basil",
    priceMonthly: 1499,
    perBottlePrice: 59,
    category: "therapeutic-greens",
    description: "Pure cellular hydration infused with silica and minerals to replenish electrolytes after waking up.",
    liquidColor: "#22C55E", // Crisp Cucumber Green
    glowColor: "rgba(34, 197, 94, 0.4)",
    fillPercentage: 91,
    benefits: ["Cellular rehydration", "Silica for healthy joints", "Zero natural sugar"]
  }
];
