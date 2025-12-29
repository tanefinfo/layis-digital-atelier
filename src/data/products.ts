import { Product, Collection } from "@/types/product";
import fashion1 from "@/assets/fashion-1.png";
import fashion2 from "@/assets/fashion-2.png";
import fashion3 from "@/assets/fashion-3.png";
import fashion4 from "@/assets/fashion-4.png";

export const collections: Collection[] = [
  {
    id: "heritage-leather",
    name: "Heritage Leather",
    description: "Traditional Ethiopian leather craftsmanship meets contemporary design",
    image: fashion4,
    productCount: 12,
  },
  {
    id: "urban-essentials",
    name: "Urban Essentials",
    description: "Everyday leather pieces crafted for the modern professional",
    image: fashion2,
    productCount: 8,
  },
  {
    id: "artisan-collection",
    name: "Artisan Collection",
    description: "Handcrafted limited edition pieces celebrating Ethiopian craftsmanship",
    image: fashion1,
    productCount: 15,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "LAYIS Signature Shirt",
    price: 12500,
    images: [fashion1, fashion2],
    category: "Apparel",
    collection: "Urban Essentials",
    description: "A distinguished signature shirt crafted from premium cotton, featuring the iconic LAYIS embroidery.",
    details: [
      "100% Premium Cotton",
      "Hand-embroidered logo",
      "Relaxed fit",
      "Button-front closure",
      "Made in Ethiopia",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#F5F5DC" },
      { name: "Black", hex: "#1a1a1a" },
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "LAYIS Tropical Overshirt",
    price: 8900,
    images: [fashion2, fashion1],
    category: "Apparel",
    collection: "Heritage Leather",
    description: "A timeless overshirt handcrafted using premium materials with the LAYIS signature style.",
    details: [
      "100% Premium Cotton",
      "Chest pocket with logo",
      "Relaxed silhouette",
      "Pearl buttons",
      "Made in Ethiopia",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#F5F5DC" },
      { name: "Olive", hex: "#556B2F" },
    ],
  },
  {
    id: "3",
    name: "LAYIS Crocodile Sneakers",
    price: 25000,
    images: [fashion3, fashion3],
    category: "Footwear",
    collection: "Artisan Collection",
    description: "Luxurious crocodile leather sneakers with crystal embellishments, a statement piece for the bold.",
    details: [
      "Genuine Crocodile Leather",
      "Crystal details",
      "Padded insole",
      "Rubber outsole",
      "Made in Ethiopia",
    ],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Brown", hex: "#3C2415" },
    ],
    isLimited: true,
  },
  {
    id: "4",
    name: "LAYIS Leather Jacket",
    price: 35800,
    images: [fashion4, fashion4],
    category: "Outerwear",
    collection: "Artisan Collection",
    description: "Avant-garde leather jacket with dramatic silhouette and floral embroidery details.",
    details: [
      "100% Premium Leather",
      "Floral embroidery",
      "Oversized collar",
      "Silk lining",
      "Made in Ethiopia",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
    ],
    isNew: true,
  },
  {
    id: "5",
    name: "LAYIS Wide Leg Trousers",
    price: 9500,
    images: [fashion4, fashion2],
    category: "Apparel",
    collection: "Urban Essentials",
    description: "Elegant wide leg trousers in premium leather, perfect for making a statement.",
    details: [
      "100% Premium Leather",
      "Wide leg silhouette",
      "High waist",
      "Side pockets",
      "Made in Ethiopia",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#1a1a1a" },
      { name: "Brown", hex: "#8B4513" },
    ],
  },
  {
    id: "6",
    name: "LAYIS Matching Set",
    price: 18500,
    images: [fashion1, fashion2],
    category: "Apparel",
    collection: "Heritage Leather",
    description: "Complete matching set featuring the signature shirt and relaxed trousers.",
    details: [
      "100% Premium Cotton",
      "Matching shirt and pants",
      "Relaxed fit",
      "Embroidered details",
      "Made in Ethiopia",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Cream", hex: "#F5F5DC" },
      { name: "Sand", hex: "#C2B280" },
    ],
    isNew: true,
  },
];

export const categories = ["All", "Apparel", "Footwear", "Outerwear"];

// Ethiopian Birr currency formatter
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency: "ETB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
