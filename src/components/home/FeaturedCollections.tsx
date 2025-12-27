import { Link } from "react-router-dom";
import { collections } from "@/data/products";
import { ArrowRight } from "lucide-react";

export const FeaturedCollections = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-label text-muted-foreground mb-4">Collections</p>
          <h2 className="text-headline">Curated For You</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              to={`/collections/${collection.id}`}
              className="group relative aspect-[3/4] overflow-hidden block opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-primary-foreground">
                <p className="text-label opacity-80 mb-2">{collection.productCount} Pieces</p>
                <h3 className="text-subhead mb-2">{collection.name}</h3>
                <p className="text-body opacity-80 mb-4 line-clamp-2">
                  {collection.description}
                </p>
                <span className="inline-flex items-center text-caption group-hover:gap-3 gap-2 transition-all">
                  Explore
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
