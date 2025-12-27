import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { collections } from "@/data/products";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

const Collections = () => {
  return (
    <>
      <Helmet>
        <title>Collections | LAYIS Luxury Fashion</title>
        <meta
          name="description"
          content="Explore the curated collections of LAYIS. From Eternal Noir to Ivory Dreams, discover timeless pieces crafted with exceptional quality."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
          <div className="container text-center">
            <p className="text-label text-muted-foreground mb-4">Discover</p>
            <h1 className="text-headline mb-6">Our Collections</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Each collection tells a story of craftsmanship, elegance, and 
              contemporary design. Explore our curated selections.
            </p>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="space-y-24">
              {collections.map((collection, index) => (
                <div
                  key={collection.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <Link
                    to={`/collections/${collection.id}`}
                    className={`relative aspect-[4/5] overflow-hidden image-reveal ${
                      index % 2 === 1 ? "lg:order-2" : ""
                    }`}
                  >
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  <div className={`lg:py-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <p className="text-label text-bronze mb-4">
                      {collection.productCount} Pieces
                    </p>
                    <h2 className="text-display text-4xl md:text-5xl lg:text-6xl mb-6">
                      {collection.name}
                    </h2>
                    <p className="text-body-lg text-muted-foreground mb-8">
                      {collection.description}
                    </p>
                    <Link
                      to={`/collections/${collection.id}`}
                      className="inline-flex items-center gap-3 text-caption group"
                    >
                      Explore Collection
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Collections;
