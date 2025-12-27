import { Product, Collection } from "@/types/product";

export const collections: Collection[] = [
  {
    id: "eternal-noir",
    name: "Eternal Noir",
    description: "A timeless collection exploring the depths of black in contemporary silhouettes",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    productCount: 12,
  },
  {
    id: "ivory-dreams",
    name: "Ivory Dreams",
    description: "Pure elegance in shades of white and cream, redefining minimalist luxury",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    productCount: 8,
  },
  {
    id: "autumn-essence",
    name: "Autumn Essence",
    description: "Warm earth tones and rich textures for the sophisticated season",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    productCount: 15,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Silk Draped Evening Gown",
    price: 2450,
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
    ],
    category: "Women",
    collection: "Eternal Noir",
    description: "An exquisite evening gown crafted from the finest mulberry silk, featuring an asymmetric draped bodice and a flowing train.",
    details: [
      "100% Mulberry Silk",
      "Asymmetric neckline",
      "Hidden back zipper",
      "Dry clean only",
      "Made in Italy",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Midnight", hex: "#1a1a1a" },
      { name: "Burgundy", hex: "#722F37" },
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "Tailored Wool Overcoat",
    price: 1890,
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80",
    ],
    category: "Women",
    collection: "Autumn Essence",
    description: "A masterfully tailored overcoat in premium Italian wool, designed for the modern woman who values timeless elegance.",
    details: [
      "100% Italian Wool",
      "Fully lined in silk",
      "Double-breasted closure",
      "Professional dry clean",
      "Made in Italy",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Charcoal", hex: "#36454F" },
    ],
  },
  {
    id: "3",
    name: "Cashmere Blend Sweater",
    price: 780,
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80",
    ],
    category: "Women",
    collection: "Ivory Dreams",
    description: "Luxuriously soft cashmere blend sweater with a relaxed fit and subtle ribbed detailing.",
    details: [
      "70% Cashmere, 30% Silk",
      "Relaxed fit",
      "Ribbed cuffs and hem",
      "Hand wash cold",
      "Made in Scotland",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Oatmeal", hex: "#D4C4A8" },
      { name: "Blush", hex: "#DE98AB" },
    ],
  },
  {
    id: "4",
    name: "Structured Blazer",
    price: 1250,
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=80",
    ],
    category: "Men",
    collection: "Eternal Noir",
    description: "Impeccably structured blazer with peak lapels and a slim silhouette, crafted from fine Italian wool.",
    details: [
      "100% Italian Wool",
      "Half canvas construction",
      "Peak lapels",
      "Two-button closure",
      "Made in Italy",
    ],
    sizes: ["46", "48", "50", "52", "54"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#1B2838" },
    ],
    isLimited: true,
  },
  {
    id: "5",
    name: "Leather Crossbody Bag",
    price: 890,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    category: "Accessories",
    collection: "Autumn Essence",
    description: "Hand-stitched leather crossbody bag with adjustable strap and signature gold hardware.",
    details: [
      "Full-grain leather",
      "Adjustable strap",
      "Interior zip pocket",
      "Gold-tone hardware",
      "Made in Spain",
    ],
    sizes: ["One Size"],
    colors: [
      { name: "Cognac", hex: "#9A463D" },
      { name: "Black", hex: "#000000" },
    ],
  },
  {
    id: "6",
    name: "Flowing Midi Skirt",
    price: 680,
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0uj1a?w=800&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&q=80",
    ],
    category: "Women",
    collection: "Ivory Dreams",
    description: "Elegant pleated midi skirt in flowing crepe, designed to move beautifully with every step.",
    details: [
      "100% Viscose Crepe",
      "Pleated design",
      "Elasticated waist",
      "Midi length",
      "Made in France",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Sage", hex: "#9CAF88" },
    ],
    isNew: true,
  },
];

export const categories = ["All", "Women", "Men", "Accessories"];
