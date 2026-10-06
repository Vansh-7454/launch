export interface MenuItem {
  id: string;
  name: string;
  category: "Filter & Traditional" | "Manual Brews" | "Espresso & Milk" | "Fresh Whole Beans" | "Bakes";
  description: string;
  priceInInr?: number; // Only confirmed prices
  note?: string;
}

export const menuCategories: Array<MenuItem["category"]> = [
  "Filter & Traditional",
  "Manual Brews",
  "Espresso & Milk",
  "Fresh Whole Beans",
  "Bakes"
];

export const menuItems: MenuItem[] = [
  {
    id: "filter-kaapi",
    name: "Malabar Classic Filter Kaapi",
    category: "Filter & Traditional",
    description: "Estate Arabica-Robusta blend brewed in traditional stainless decoction drip, chicory-kissed and frothed in brass davarah.",
    priceInInr: 140,
    note: "Served hot in traditional brass davarah"
  },
  {
    id: "chikmagalur-pourover",
    name: "Chikmagalur Single Origin Pour-Over",
    category: "Manual Brews",
    description: "Light roast washed Arabica from 1,200m elevation. Crisp cup with delicate floral aroma, citrus notes and sweet cane finish.",
    priceInInr: 220,
    note: "V60 manual extraction"
  },
  {
    id: "wayanad-cold-brew",
    name: "Wayanad 18-Hour Cold Brew",
    category: "Manual Brews",
    description: "Slow steeped for 18 hours using coarse-ground estate beans. Velvety body, ultra-low acidity, with dark cacao and hazelnut finish.",
    priceInInr: 210,
    note: "Steeped cold daily in-house"
  },
  {
    id: "aeropress-reserve",
    name: "Aeropress Reserve",
    category: "Manual Brews",
    description: "Medium roast single-estate lot extracted under gentle pressure. Balanced sweetness with subtle spiced cardamom undertones.",
    priceInInr: 230,
    note: "Hand-pressed to order"
  },
  {
    id: "flat-white",
    name: "Flat White / Cortado",
    category: "Espresso & Milk",
    description: "Double ristretto shot extracted on our commercial lever group, folded with dense, velvety steamed whole milk microfoam.",
    priceInInr: 190,
    note: "Oat milk option available"
  },
  {
    id: "jaggery-iced-coffee",
    name: "Iced Jaggery Spiced Espresso",
    category: "Espresso & Milk",
    description: "Freshly pulled espresso shaken over ice with pure organic Karnataka sugarcane jaggery syrup and fresh milk.",
    priceInInr: 200,
    note: "Naturally sweetened"
  },
  {
    id: "whole-bean-estate-pouch",
    name: "Estate Roast Whole Beans (250g Pouch)",
    category: "Fresh Whole Beans",
    description: "Small-batch drum roasted weekly in our Indiranagar roastery. Sold as whole bean or ground specifically for your home brewer.",
    priceInInr: 480,
    note: "Roasted weekly · valve freshness pack"
  },
  {
    id: "banana-walnut-bread",
    name: "Sourdough Banana Walnut Bread",
    category: "Bakes",
    description: "Baked fresh every morning in-house using slow-fermented starter, caramelized bananas and roasted Giri estate walnuts.",
    priceInInr: 160,
    note: "Served warm with salted farm butter"
  }
];

export function formatInrPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);
}
