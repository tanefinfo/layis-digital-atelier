import { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-muted mb-4">
        {/* Primary Image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury",
            isHovered && product.images[1] ? "opacity-0 scale-105" : "opacity-100 scale-100"
          )}
        />
        {/* Hover Image */}
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-luxury",
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-primary text-primary-foreground text-label px-3 py-1">
              New
            </span>
          )}
          {product.isLimited && (
            <span className="bg-bronze text-primary-foreground text-label px-3 py-1">
              Limited
            </span>
          )}
          {product.isSoldOut && (
            <span className="bg-muted text-muted-foreground text-label px-3 py-1">
              Sold Out
            </span>
          )}
        </div>

        {/* Quick View Overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-foreground/5 flex items-end justify-center pb-6 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <span className="bg-background text-foreground text-caption px-6 py-3 shadow-elevated">
            Quick View
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-caption text-muted-foreground">{product.collection}</p>
        <h3 className="font-serif text-lg font-light group-hover:text-bronze transition-colors">
          {product.name}
        </h3>
        <p className="text-body font-light">{formatPrice(product.price)}</p>

        {/* Color Options */}
        {product.colors.length > 1 && (
          <div className="flex gap-2 pt-2">
            {product.colors.map((color) => (
              <span
                key={color.name}
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>
    </Link>
  );
};
