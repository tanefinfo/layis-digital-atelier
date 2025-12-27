import { Product, Collection } from "@/types/product";

export const collections: Collection[] = [
  {
    id: "heritage-leather",
    name: "Heritage Leather",
    description: "Traditional Ethiopian leather craftsmanship meets contemporary design",
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    productCount: 12,
  },
  {
    id: "urban-essentials",
    name: "Urban Essentials",
    description: "Everyday leather pieces crafted for the modern professional",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    productCount: 8,
  },
  {
    id: "artisan-collection",
    name: "Artisan Collection",
    description: "Handcrafted limited edition pieces celebrating Ethiopian craftsmanship",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    productCount: 15,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Executive Leather Briefcase",
    price: 12500,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    category: "Bags",
    collection: "Urban Essentials",
    description: "A distinguished briefcase crafted from premium Ethiopian leather, featuring traditional hand-stitching and brass hardware.",
    details: [
      "100% Ethiopian Full-Grain Leather",
      "Hand-stitched details",
      "Brass hardware with antique finish",
      "Interior laptop compartment",
      "Made in Addis Ababa",
    ],
    sizes: ["Standard"],
    colors: [
      { name: "Cognac", hex: "#8B4513" },
      { name: "Espresso", hex: "#3C2415" },
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "Classic Leather Messenger",
    price: 8900,
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    ],
    category: "Bags",
    collection: "Heritage Leather",
    description: "A timeless messenger bag handcrafted using centuries-old Ethiopian leatherworking techniques.",
    details: [
      "100% Ethiopian Full-Grain Leather",
      "Adjustable shoulder strap",
      "Magnetic closure",
      "Multiple interior pockets",
      "Made in Addis Ababa",
    ],
    sizes: ["Standard"],
    colors: [
      { name: "Saddle Brown", hex: "#8B4513" },
      { name: "Black", hex: "#1a1a1a" },
    ],
  },
  {
    id: "3",
    name: "Artisan Leather Wallet",
    price: 3200,
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
      "https://images.unsplash.com/photo-1606503825008-909a67e63c3d?w=800&q=80",
    ],
    category: "Accessories",
    collection: "Heritage Leather",
    description: "A refined bi-fold wallet showcasing the natural beauty of Ethiopian leather with meticulous hand-stitching.",
    details: [
      "100% Ethiopian Full-Grain Leather",
      "8 card slots",
      "2 bill compartments",
      "Hand-stitched edges",
      "Made in Addis Ababa",
    ],
    sizes: ["Standard"],
    colors: [
      { name: "Tan", hex: "#D2691E" },
      { name: "Dark Brown", hex: "#3C2415" },
      { name: "Black", hex: "#1a1a1a" },
    ],
  },
  {
    id: "4",
    name: "Leather Oxford Shoes",
    price: 15800,
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80",
      "https://images.unsplash.com/photo-1613219955023-eed6aa2f0ccf?w=800&q=80",
    ],
    category: "Footwear",
    collection: "Artisan Collection",
    description: "Hand-lasted Oxford shoes crafted from premium Ethiopian leather with Goodyear welt construction.",
    details: [
      "100% Ethiopian Calfskin Leather",
      "Goodyear welted sole",
      "Leather lining",
      "Hand-burnished finish",
      "Made in Addis Ababa",
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Burgundy", hex: "#722F37" },
      { name: "Cognac", hex: "#8B4513" },
    ],
    isLimited: true,
  },
  {
    id: "5",
    name: "Crossbody Leather Bag",
    price: 6500,
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    ],
    category: "Bags",
    collection: "Urban Essentials",
    description: "A versatile crossbody bag perfect for daily essentials, featuring an adjustable strap and secure closure.",
    details: [
      "100% Ethiopian Full-Grain Leather",
      "Adjustable strap",
      "Interior zip pocket",
      "Magnetic snap closure",
      "Made in Addis Ababa",
    ],
    sizes: ["Standard"],
    colors: [
      { name: "Camel", hex: "#C19A6B" },
      { name: "Black", hex: "#1a1a1a" },
    ],
  },
  {
    id: "6",
    name: "Leather Belt",
    price: 2800,
    images: [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=800&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    ],
    category: "Accessories",
    collection: "Heritage Leather",
    description: "A classic dress belt crafted from premium Ethiopian leather with a solid brass buckle.",
    details: [
      "100% Ethiopian Full-Grain Leather",
      "Solid brass buckle",
      "Hand-finished edges",
      "Width: 3.5cm",
      "Made in Addis Ababa",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Brown", hex: "#8B4513" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    isNew: true,
  },
];

export const categories = ["All", "Bags", "Accessories", "Footwear"];

// Ethiopian Birr currency formatter
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
