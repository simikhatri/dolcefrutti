import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BestSeller from "./components/bestseller";
import FeaturedProducts from "./components/featuredProduct";
import ProductsSection from "./components/allProducts";
import GiftSectionComponent from "./components/giftSection";



export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BestSeller />
      <FeaturedProducts />
      <ProductsSection />
      <GiftSectionComponent />
      <Footer />

    </>
  );
}
