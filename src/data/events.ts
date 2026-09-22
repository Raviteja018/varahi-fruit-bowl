export interface EventOccasion {
  id: string;
  title: string;
  tagline: string;
  description: string;
  minServings: string;
  badge: string;
  iconType: 'birthday' | 'wedding' | 'school' | 'trust' | 'custom';
}

export const EVENTS_LIST: EventOccasion[] = [
  {
    id: "birthdays",
    title: "Birthday Parties",
    tagline: "Colorful, guilt-free celebrations",
    description: "Replace sugary treats with vibrant, fun fruit bowls and refreshing fruit popsicles that kids and guests adore.",
    minServings: "From 15 bowls",
    badge: "Popular Celebration",
    iconType: "birthday"
  },
  {
    id: "weddings",
    title: "Weddings & Receptions",
    tagline: "Sophisticated luxury fruit counters",
    description: "Bespoke fruit carving stations, fresh cold-pressed wellness bars, and artisanal dessert bowls for your special celebrations.",
    minServings: "From 100 guests",
    badge: "Bespoke Curation",
    iconType: "wedding"
  },
  {
    id: "schools",
    title: "School & Sports Events",
    tagline: "Energetic nutrition for champions",
    description: "Hygienically packaged grab-and-go fruit cups tailored for young athletes, sports days, and campus wellness weeks.",
    minServings: "From 50 portions",
    badge: "Kid-Friendly Hygiene",
    iconType: "school"
  },
  {
    id: "trusts",
    title: "Trusts & Donations",
    tagline: "Pure wholesome seva & nourishing care",
    description: "Special non-profit pricing and direct, respectful delivery to orphanages, senior living homes, and charitable trusts.",
    minServings: "Custom quantities",
    badge: "Special Care Rates",
    iconType: "trust"
  },
  {
    id: "custom",
    title: "Customised Orders",
    tagline: "Corporate wellness & special gatherings",
    description: "Tailor your mix of exotic fruits, dry fruits, fresh sprouts, and cold-pressed juices to match dietary goals.",
    minServings: "Flexible sizing",
    badge: "Fully Customisable",
    iconType: "custom"
  }
];
