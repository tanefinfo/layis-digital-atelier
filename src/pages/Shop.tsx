import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProductCard } from "@/components/product/ProductCard";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import { SlidersHorizontal, Grid, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [gridCols, setGridCols] = useState<2 | 3 | 4>(3);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Helmet>
        <title>Shop All | LAYIS Luxury Fashion</title>
        <meta
          name="description"
          content="Shop the complete LAYIS collection. Discover luxury fashion pieces including women's wear, men's wear, and accessories."
        />
      </Helmet>
      <Layout>
        {/* Hero Banner */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
          <div className="container text-center">
            <p className="text-label text-muted-foreground mb-4">Shop</p>
            <h1 className="text-headline">All Products</h1>
          </div>
        </section>

        {/* Filters & Products */}
        <section className="py-12 md:py-16">
          <div className="container">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-6 border-b border-border">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "text-caption px-4 py-2 transition-all border",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-transparent text-muted-foreground border-transparent hover:text-foreground"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* View Options */}
              <div className="flex items-center gap-4">
                <span className="text-caption text-muted-foreground">
                  {filteredProducts.length} Products
                </span>
                <div className="hidden md:flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setGridCols(2)}
                    className={cn(gridCols === 2 && "bg-muted")}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setGridCols(3)}
                    className={cn(gridCols === 3 && "bg-muted")}
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setGridCols(4)}
                    className={cn(gridCols === 4 && "bg-muted")}
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div
              className={cn(
                "grid gap-8",
                gridCols === 2 && "sm:grid-cols-2",
                gridCols === 3 && "sm:grid-cols-2 lg:grid-cols-3",
                gridCols === 4 && "sm:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-24">
                <p className="text-body text-muted-foreground">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Shop;
