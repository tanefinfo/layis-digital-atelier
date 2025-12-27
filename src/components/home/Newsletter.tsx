import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thank you for subscribing to our newsletter.");
      setEmail("");
    }
  };

  return (
    <section className="py-24 md:py-32 luxury-gradient">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-label text-muted-foreground mb-4">Newsletter</p>
          <h2 className="text-headline mb-6">Stay Connected</h2>
          <p className="text-body text-muted-foreground mb-10">
            Be the first to discover new collections, exclusive offers, 
            and stories from the world of LAYIS.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors font-light"
              required
            />
            <Button variant="luxury" size="lg" type="submit">
              Subscribe
            </Button>
          </form>

          <p className="text-caption text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
};
