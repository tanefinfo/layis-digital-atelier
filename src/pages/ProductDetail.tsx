import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products, formatPrice } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { ChevronLeft, Minus, Plus, Heart, Share2, Box, Image } from "lucide-react";
import { toast } from "sonner";
import { ProductCard } from "@/components/product/ProductCard";
import { Product3DViewer } from "@/components/product/Product3DViewer";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  const product = products.find((p) => p.id === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [viewMode, setViewMode] = useState<"image" | "3d">("image");

  // Determine 3D model type based on product category
  const productType = useMemo(() => {
    if (!product) return "accessories";
    const category = product.category.toLowerCase();
    if (category.includes("bag") || category.includes("tote") || category.includes("briefcase") || category.includes("satchel")) return "bag";
    if (category.includes("jacket") || category.includes("coat") || category.includes("blazer")) return "jacket";
    if (category.includes("shoe") || category.includes("boot") || category.includes("loafer") || category.includes("oxford")) return "shoes";
    if (category.includes("belt")) return "belt";
    if (category.includes("wallet") || category.includes("card")) return "wallet";
    return "accessories";
  }, [product]) as "bag" | "jacket" | "shoes" | "belt" | "wallet" | "accessories";

  // Get color hex for 3D model
  const selectedColorHex = useMemo(() => {
    if (!product || !selectedColor) return undefined;
    const color = product.colors.find(c => c.name === selectedColor);
    return color?.hex;
  }, [product, selectedColor]);

  if (!product) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-headline mb-4">Product Not Found</h1>
            <Button variant="outline" asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    if (!selectedColor && product.colors.length > 0) {
      toast.error("Please select a color");
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor || product.colors[0]?.name || "Default");
    }
    toast.success(`${product.name} added to your bag`);
  };

  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{product.name} | LAYIS</title>
        <meta name="description" content={product.description} />
      </Helmet>
      <Layout>
        <section className="pt-28 pb-16 md:pt-36">
          <div className="container">
            {/* Breadcrumb */}
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 text-caption text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Shop
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Images / 3D Toggle */}
              <div className="space-y-4">
                {/* View Mode Toggle */}
                <div className="flex gap-2 mb-4">
                  <Button
                    variant={viewMode === "image" ? "hero" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("image")}
                    className="flex items-center gap-2"
                  >
                    <Image className="h-4 w-4" />
                    Images
                  </Button>
                  <Button
                    variant={viewMode === "3d" ? "hero" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("3d")}
                    className="flex items-center gap-2"
                  >
                    <Box className="h-4 w-4" />
                    3D View
                  </Button>
                </div>

                {viewMode === "image" ? (
                  <>
                    <div className="aspect-[3/4] bg-muted overflow-hidden">
                      <img
                        src={product.images[selectedImage]}
                        alt={product.name}
                        className="w-full h-full object-cover animate-fade-in"
                      />
                    </div>
                    {product.images.length > 1 && (
                      <div className="flex gap-4">
                        {product.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => setSelectedImage(index)}
                            className={cn(
                              "w-20 h-24 bg-muted overflow-hidden border-2 transition-all",
                              selectedImage === index
                                ? "border-foreground"
                                : "border-transparent opacity-60 hover:opacity-100"
                            )}
                          >
                            <img
                              src={image}
                              alt={`${product.name} view ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="aspect-[3/4] relative overflow-hidden rounded-lg">
                    <Product3DViewer 
                      productType={productType} 
                      color={selectedColorHex}
                    />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="lg:py-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-caption text-muted-foreground mb-2">
                      {product.collection}
                    </p>
                    <h1 className="text-headline">{product.name}</h1>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" aria-label="Add to wishlist">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" aria-label="Share">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-subhead mb-8">{formatPrice(product.price)}</p>

                <p className="text-body text-muted-foreground mb-8">
                  {product.description}
                </p>

                {/* Color Selection */}
                {product.colors.length > 0 && (
                  <div className="mb-8">
                    <p className="text-label mb-4">
                      Color:{" "}
                      <span className="font-normal normal-case">
                        {selectedColor || "Select a color"}
                      </span>
                    </p>
                    <div className="flex gap-3">
                      {product.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={cn(
                            "w-10 h-10 rounded-full border-2 transition-all",
                            selectedColor === color.name
                              ? "border-foreground scale-110"
                              : "border-border hover:border-muted-foreground"
                          )}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                          aria-label={`Select ${color.name}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-label">
                      Size:{" "}
                      <span className="font-normal normal-case">
                        {selectedSize || "Select a size"}
                      </span>
                    </p>
                    <button className="text-caption text-muted-foreground hover:text-foreground underline">
                      Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "min-w-[3rem] h-12 px-4 border text-caption transition-all",
                          selectedSize === size
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-transparent text-foreground border-border hover:border-foreground"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <p className="text-label mb-4">Quantity</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center text-body">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 flex items-center justify-center border border-border hover:border-foreground transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full mb-6"
                  onClick={handleAddToCart}
                  disabled={product.isSoldOut}
                >
                  {product.isSoldOut ? "Sold Out" : "Add to Bag"}
                </Button>

                {/* Product Details */}
                <div className="border-t border-border pt-8">
                  <h3 className="text-label mb-4">Product Details</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li
                        key={index}
                        className="text-body text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 md:py-24 bg-secondary/30">
            <div className="container">
              <h2 className="text-headline text-center mb-12">You May Also Like</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </Layout>
    </>
  );
};

export default ProductDetail;
