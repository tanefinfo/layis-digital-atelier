import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About LAYIS | Our Story & Vision</title>
        <meta
          name="description"
          content="Discover the story behind LAYIS. Learn about our vision, mission, and commitment to timeless luxury fashion and sustainable craftsmanship."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=1920&q=80"
              alt="LAYIS Atelier"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/40" />
          </div>
          <div className="relative z-10 container text-center text-primary-foreground">
            <p className="text-label tracking-[0.4em] mb-6 opacity-0 animate-fade-up">
              Est. 2024
            </p>
            <h1 className="text-display opacity-0 animate-fade-up fade-up-delay-1">
              The Art of
              <br />
              Timeless Fashion
            </h1>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div>
                <p className="text-label text-bronze mb-6">Our Vision</p>
                <h2 className="text-headline mb-8">
                  Redefining Luxury for the Modern Era
                </h2>
                <div className="space-y-6 text-body text-muted-foreground">
                  <p>
                    LAYIS was born from a simple yet powerful idea: that luxury 
                    fashion should transcend fleeting trends and speak to something 
                    deeper—a celebration of craftsmanship, quality, and enduring style.
                  </p>
                  <p>
                    We believe that the clothes we wear are more than mere garments. 
                    They are expressions of identity, carriers of confidence, and 
                    silent storytellers of our personal journeys.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                  alt="LAYIS Vision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 md:py-32 bg-secondary/30">
          <div className="container">
            <div className="text-center mb-16">
              <p className="text-label text-muted-foreground mb-4">What We Stand For</p>
              <h2 className="text-headline">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: "Exceptional Craftsmanship",
                  description:
                    "Every piece is meticulously crafted by skilled artisans using techniques passed down through generations.",
                },
                {
                  title: "Sustainable Luxury",
                  description:
                    "We source the finest materials responsibly, ensuring our environmental footprint remains minimal.",
                },
                {
                  title: "Timeless Design",
                  description:
                    "Our designs transcend seasons, creating pieces that remain relevant and cherished for years to come.",
                },
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="text-center opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="w-16 h-px bg-bronze mx-auto mb-8" />
                  <h3 className="text-subhead mb-4">{value.title}</h3>
                  <p className="text-body text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 md:py-32">
          <div className="container">
            <blockquote className="max-w-4xl mx-auto text-center">
              <p className="text-headline italic mb-8">
                "Fashion is not about the clothes themselves, but about the 
                confidence and stories they help us tell."
              </p>
              <footer className="text-caption text-muted-foreground">
                — Creative Director, LAYIS
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="lg:order-2">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
                    alt="LAYIS Mission"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:order-1">
                <p className="text-label text-bronze mb-6">Our Mission</p>
                <h2 className="text-headline mb-8">
                  Creating Tomorrow's Heirlooms
                </h2>
                <div className="space-y-6 text-body opacity-80">
                  <p>
                    At LAYIS, our mission extends beyond creating beautiful garments. 
                    We are dedicated to fostering a new paradigm in fashion—one where 
                    quality supersedes quantity, and where each piece is designed to 
                    be treasured and passed down.
                  </p>
                  <p>
                    We partner with heritage mills across Europe, supporting traditional 
                    craftsmanship while pushing the boundaries of contemporary design. 
                    Our commitment to sustainability is woven into every decision we make.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
