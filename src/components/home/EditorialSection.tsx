import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const EditorialSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden image-reveal">
            <img
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80"
              alt="LAYIS Editorial"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:py-12">
            <p className="text-label text-bronze mb-6">The LAYIS Story</p>
            <h2 className="text-headline mb-8">
              Where Tradition Meets
              <br />
              Modern Craftsmanship
            </h2>
            <div className="space-y-6 text-body text-muted-foreground mb-10">
              <p>
                Founded on the principles of timeless design and exceptional quality, 
                LAYIS represents a new paradigm in luxury fashion. Each piece is crafted 
                with meticulous attention to detail, using only the finest materials 
                sourced from heritage mills across Europe.
              </p>
              <p>
                Our commitment to sustainability extends beyond materials—it's woven 
                into every aspect of our process, from ethical production to minimal 
                environmental impact.
              </p>
            </div>
            <Button variant="luxury" size="lg" asChild>
              <Link to="/about">Discover Our Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
