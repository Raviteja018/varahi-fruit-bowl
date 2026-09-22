export interface BranchInfo {
  id: string;
  name: string;
  tagline: string;
  addressPlaceholder: string;
  deliveryCoverage: string;
  googleMapsUrl?: string;
  phone: string;
}

export const BRAND = {
  name: "VARAHI FRUIT BOWL",
  shortName: "Varahi",
  tagline: "Good health starts with good food",
  phone: "7207288868",
  whatsapp: "917207288868",
  formattedPhone: "+91 7207288868",
  instagram: "@VARAHI_FRUIT_BOWL",
  instagramUrl: "https://instagram.com/varahi_fruit_bowl",
  slogans: [
    "Experience the goodness of nature with our fresh fruit collection.",
    "Fresh • Healthy • Nutritious • Tasty",
    "Fresh Fruits • Healthy Choice • Happy You",
    "Healthy • Tasty • Fresh • Natural",
    "No Added Sugar",
    "A Bowl Full of Goodness"
  ],
  branches: [
    {
      id: "kukatpally",
      name: "Kukatpally Branch",
      area: "Kukatpally, Hyderabad",
      tagline: "Daily Fresh Delivery Hub",
      addressPlaceholder: "Address coming soon",
      deliveryCoverage: "Serving Kukatpally, KPHB, JNTU & surrounding areas",
      googleMapsUrl: "https://maps.google.com/?q=Kukatpally+Hyderabad",
      phone: "7207288868"
    },
    {
      id: "kondapur",
      name: "Kondapur Branch",
      area: "Kondapur, Hyderabad",
      tagline: "IT Corridor & Hitec City Hub",
      addressPlaceholder: "Address coming soon",
      deliveryCoverage: "Serving Kondapur, Gachibowli, Hitec City & surrounding areas",
      googleMapsUrl: "https://maps.google.com/?q=Kondapur+Hyderabad",
      phone: "7207288868"
    }
  ]
};

export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${BRAND.whatsapp}?text=${encoded}`;
}

export function createOrderWhatsAppMessage(item: {
  title: string;
  price?: string | number;
  type?: 'subscription' | 'single' | 'bulk';
  branch?: string;
  notes?: string;
}): string {
  let msg = `Hello Varahi Fruit Bowl! 🌿\n\n`;
  msg += `I would like to order / subscribe to:\n`;
  msg += `*${item.title}*`;
  if (item.price) {
    msg += ` (${typeof item.price === 'number' ? '₹' + item.price.toLocaleString('en-IN') : item.price})`;
  }
  msg += `\n`;

  if (item.branch) {
    msg += `Preferred Branch: *${item.branch}*\n`;
  }
  
  if (item.type === 'subscription') {
    msg += `Plan: *Monthly Subscription*\n`;
  }

  if (item.notes) {
    msg += `Special note: ${item.notes}\n`;
  }

  msg += `\nPlease let me know the payment details and delivery start date. Thank you!`;
  return createWhatsAppUrl(msg);
}
