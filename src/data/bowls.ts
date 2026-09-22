export interface FruitBowlPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  priceMonthly: number;
  perDayPrice: number;
  period: string;
  description: string;
  subDescription?: string;
  varietiesCount: number;
  breakdown: {
    fruits: number;
    veggies: number;
    sproutsAndMore: number;
  };
  highlights: string[];
  ctaText: string;
  featured: boolean;
  accentColor: string;
  bgGradient: string;
  imagePromptDescription: string;
}

export const FRUIT_BOWLS: FruitBowlPlan[] = [
  {
    id: "medium-bowl",
    name: "Medium Fruit Bowl",
    tagline: "Everyday Wholesome Balance",
    priceMonthly: 2399,
    perDayPrice: 96,
    period: "month",
    description: "A balanced daily selection of fresh fruits, vegetables and nutritious add-ons.",
    subDescription: "Perfect for everyday wellness and maintaining energy throughout the day.",
    varietiesCount: 7,
    breakdown: {
      fruits: 5,
      veggies: 1,
      sproutsAndMore: 1
    },
    highlights: [
      "7 varieties in every bowl",
      "5 handpicked seasonal fruits",
      "1 crisp nutritious veggie",
      "1 wholesome sprouts & superfoods portion",
      "Zero added sugar or preservatives",
      "Fresh morning delivery"
    ],
    ctaText: "Choose Medium",
    featured: false,
    accentColor: "#10B981",
    bgGradient: "from-white to-[#F7FAF8]",
    imagePromptDescription: "Vibrant medium glass bowl packed with fresh cut watermelon, kiwi, orange slices, crisp cucumber, and green gram sprouts."
  },
  {
    id: "large-bowl",
    name: "Large Fruit Bowl",
    badge: "POPULAR",
    tagline: "Generous Freshness & Extra Energy",
    priceMonthly: 2799,
    perDayPrice: 112,
    period: "month",
    description: "A generous daily fruit bowl for people who want more freshness and variety.",
    subDescription: "Our most loved bowl, offering generous portions of revitalizing nature.",
    varietiesCount: 7,
    breakdown: {
      fruits: 5,
      veggies: 1,
      sproutsAndMore: 1
    },
    highlights: [
      "Generous portion size for active lifestyle",
      "7 hand-selected fresh varieties daily",
      "5 premium exotic & seasonal fruits",
      "1 crisp organic veggie slice",
      "1 booster sprouts & nut mix",
      "Hygienically sealed airtight bowl"
    ],
    ctaText: "Choose Large",
    featured: true,
    accentColor: "#E11D48",
    bgGradient: "from-white via-[#FFF8F8] to-[#FFF1F2]",
    imagePromptDescription: "Overflowing large artisanal bowl filled with dragon fruit cubes, ripe strawberries, blueberries, pineapple chunks, pomegranate arils, and dates."
  },
  {
    id: "diabetic-bowl",
    name: "Diabetic Bowl",
    badge: "MINDFUL CHOICE",
    tagline: "Carefully Selected Natural Goodness",
    priceMonthly: 3799,
    perDayPrice: 152,
    period: "month",
    description: "A thoughtfully curated bowl focused on healthier fruit and nutritious choices.",
    subDescription: "Designed with mindful food choices in mind, prioritizing low-glycemic natural produce.",
    varietiesCount: 7,
    breakdown: {
      fruits: 5,
      veggies: 1,
      sproutsAndMore: 1
    },
    highlights: [
      "Designed with mindful food choices in mind",
      "Focus on low-glycemic, fiber-rich fruits",
      "Guava, green apples, berries & papaya",
      "Fresh crisp keera / cucumber & greens",
      "Protein-rich sprouts & organic chia/flax seeds",
      "Strictly 100% natural — zero sweeteners"
    ],
    ctaText: "Choose Diabetic Bowl",
    featured: false,
    accentColor: "#059669",
    bgGradient: "from-white to-[#F0FDF4]",
    imagePromptDescription: "Elegantly arranged bowl of sliced crisp green apple, guava slices, fresh blueberries, cucumber rounds, and sprouted pulses."
  }
];
