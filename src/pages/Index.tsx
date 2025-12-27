import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { EditorialSection } from "@/components/home/EditorialSection";
import { Newsletter } from "@/components/home/Newsletter";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>LAYIS | Luxury Fashion & Contemporary Design</title>
        <meta
          name="description"
          content="Discover LAYIS - where timeless elegance meets modern craftsmanship. Explore our curated collections of luxury fashion, meticulously crafted with the finest materials."
        />
      </Helmet>
      <Layout>
        <Hero />
        <FeaturedCollections />
        <FeaturedProducts />
        <EditorialSection />
        <Newsletter />
      </Layout>
    </>
  );
};

export default Index;
