import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BestSeller from "./components/bestseller";
import ProductsSection from "./components/allProducts";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BestSeller />
      <ProductsSection />
      <Footer />

    </>
  );
}
