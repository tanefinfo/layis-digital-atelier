import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    title: "The Art of Slow Fashion",
    excerpt:
      "Exploring the philosophy behind mindful consumption and timeless style.",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80",
    category: "Philosophy",
    date: "December 15, 2024",
  },
  {
    id: "2",
    title: "Behind the Seams: Italian Wool",
    excerpt:
      "A journey through the heritage mills that supply our finest materials.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80",
    category: "Craftsmanship",
    date: "December 10, 2024",
  },
  {
    id: "3",
    title: "Autumn/Winter 2024 Lookbook",
    excerpt:
      "Discover the inspiration and stories behind our latest collection.",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
    category: "Collections",
    date: "December 5, 2024",
  },
  {
    id: "4",
    title: "Sustainable Luxury: Our Commitment",
    excerpt:
      "How we're reimagining fashion production for a better tomorrow.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Sustainability",
    date: "November 28, 2024",
  },
];

const Journal = () => {
  return (
    <>
      <Helmet>
        <title>Journal | LAYIS Fashion Stories</title>
        <meta
          name="description"
          content="Explore the LAYIS Journal for stories on craftsmanship, sustainability, and the art of timeless fashion."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
          <div className="container text-center">
            <p className="text-label text-muted-foreground mb-4">Stories</p>
            <h1 className="text-headline mb-6">The Journal</h1>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Insights into fashion, craftsmanship, and the stories behind our collections.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Link
              to={`/journal/${blogPosts[0].id}`}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center group"
            >
              <div className="aspect-[4/3] overflow-hidden image-reveal">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-label text-bronze mb-4">Featured</p>
                <p className="text-caption text-muted-foreground mb-2">
                  {blogPosts[0].category} • {blogPosts[0].date}
                </p>
                <h2 className="text-headline mb-6 group-hover:text-bronze transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-body-lg text-muted-foreground mb-8">
                  {blogPosts[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-3 text-caption group-hover:gap-4 transition-all">
                  Read Article
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container">
            <h2 className="text-subhead mb-12">Latest Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.slice(1).map((post, index) => (
                <Link
                  key={post.id}
                  to={`/journal/${post.id}`}
                  className="group opacity-0 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  <div className="aspect-[4/3] overflow-hidden mb-6 image-reveal">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-caption text-muted-foreground mb-2">
                    {post.category} • {post.date}
                  </p>
                  <h3 className="text-subhead mb-3 group-hover:text-bronze transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-body text-muted-foreground">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Journal;
