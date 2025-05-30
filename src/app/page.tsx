import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BestSeller from "./components/bestseller";
import FeaturedProducts from "./components/featuredProduct";
import ProductsSection from "./components/allProducts";
import GiftSectionComponent from "./components/giftSection";
import BlogSection from "./components/blogSection";
import ContactSection from "./components/contactSection";
import TestimonialSection from "./components/testimonial";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BestSeller />
      <FeaturedProducts />
      <ProductsSection />
      <GiftSectionComponent />
      <BlogSection />
      <ContactSection />
      <TestimonialSection />
      <Footer />

    </>
  );
}
