import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { Play, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import fashion1 from "@/assets/fashion-1.png";
import fashion2 from "@/assets/fashion-2.png";
import fashion3 from "@/assets/fashion-3.png";
import fashion4 from "@/assets/fashion-4.png";

interface MediaItem {
  id: number;
  type: "image" | "video";
  src: string;
  title: string;
  description: string;
  likes: number;
  category: "fashion" | "festival" | "lookbook";
}

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "image",
    src: fashion1,
    title: "Spring Collection",
    description: "Floral vibes with the LAYIS signature shirt",
    likes: 2341,
    category: "fashion",
  },
  {
    id: 2,
    type: "image",
    src: fashion2,
    title: "Tropical Paradise",
    description: "Effortless style meets natural beauty",
    likes: 1892,
    category: "lookbook",
  },
  {
    id: 3,
    type: "image",
    src: fashion3,
    title: "LAYIS Footwear",
    description: "Crocodile leather sneakers with crystal details",
    likes: 3156,
    category: "fashion",
  },
  {
    id: 4,
    type: "image",
    src: fashion4,
    title: "Avant-Garde Editorial",
    description: "Bold silhouettes defining the future of fashion",
    likes: 4521,
    category: "festival",
  },
];

const categories = ["All", "Fashion", "Festival", "Lookbook"];

export default function Fashion() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [likedItems, setLikedItems] = useState<number[]>([]);

  const filteredItems =
    activeCategory === "All"
      ? mediaItems
      : mediaItems.filter(
          (item) =>
            item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  const toggleLike = (id: number) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Helmet>
        <title>Fashion & Festivals | LAYIS</title>
        <meta
          name="description"
          content="Explore the LAYIS fashion world - from runway looks to festival styles. Discover our latest collections and editorial content."
        />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-foreground">
          <div className="absolute inset-0">
            <img
              src={fashion4}
              alt="Fashion Hero"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/30 to-foreground" />
          </div>

          <div className="relative z-10 container text-center text-primary-foreground">
            <p className="text-label tracking-[0.4em] opacity-0 animate-fade-up">
              FASHION & FESTIVALS
            </p>
            <h1 className="text-display mt-4 opacity-0 animate-fade-up fade-up-delay-1">
              Style in Motion
            </h1>
            <p className="text-body-lg max-w-xl mx-auto mt-6 opacity-0 animate-fade-up fade-up-delay-2">
              Explore our curated collection of fashion moments, festival looks,
              and editorial content.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className="px-6"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Media Grid */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredItems.map((item, index) => (
                <article
                  key={item.id}
                  className={cn(
                    "group relative overflow-hidden rounded-lg",
                    index === 0 && "md:col-span-2 aspect-[21/9]",
                    index !== 0 && "aspect-[4/5]"
                  )}
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Video Play Button */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground" />
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-label text-primary-foreground/80 tracking-widest uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-headline text-primary-foreground mt-2">
                      {item.title}
                    </h3>
                    <p className="text-body text-primary-foreground/80 mt-1">
                      {item.description}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => toggleLike(item.id)}
                        className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                      >
                        <Heart
                          className={cn(
                            "h-5 w-5 transition-colors",
                            likedItems.includes(item.id) &&
                              "fill-red-500 text-red-500"
                          )}
                        />
                        <span className="text-sm">
                          {item.likes + (likedItems.includes(item.id) ? 1 : 0)}
                        </span>
                      </button>
                      <button className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                        <Share2 className="h-5 w-5" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs uppercase tracking-wider rounded-full">
                      {item.category}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Video Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-title">Behind the Scenes</h2>
              <p className="text-body text-muted-foreground mt-4">
                Get an exclusive look at our creative process, from concept to
                final product.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[fashion1, fashion2, fashion3].map((src, index) => (
                <div
                  key={index}
                  className="group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`Behind the scenes ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/50 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-6 w-6 text-primary-foreground fill-primary-foreground" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-foreground text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-title">Join the LAYIS Community</h2>
            <p className="text-body-lg text-primary-foreground/80 mt-4 max-w-xl mx-auto">
              Follow us on social media for daily fashion inspiration, exclusive
              drops, and behind-the-scenes content.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                @LAYIS on Instagram
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                @LAYIS on TikTok
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
