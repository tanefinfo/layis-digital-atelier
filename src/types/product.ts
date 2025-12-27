export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  collection: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  isNew?: boolean;
  isLimited?: boolean;
  isSoldOut?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}
