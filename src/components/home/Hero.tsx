import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-fashion.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="LAYIS Fashion - Elegant Evening Gown"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/20 to-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-label tracking-[0.4em] opacity-0 animate-fade-up">
            Autumn/Winter 2024
          </p>
          
          <h1 className="text-display opacity-0 animate-fade-up fade-up-delay-1">
            Timeless
            <br />
            Elegance
          </h1>
          
          <p className="text-body-lg max-w-xl mx-auto opacity-0 animate-fade-up fade-up-delay-2">
            Discover our latest collection, where contemporary design meets 
            uncompromising craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up fade-up-delay-3">
            <Button
              variant="hero"
              size="xl"
              asChild
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Link to="/shop">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              asChild
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link to="/collections">Explore Collections</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up fade-up-delay-4">
        <div className="w-px h-16 bg-primary-foreground/30 relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-primary-foreground animate-[slideDown_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};
