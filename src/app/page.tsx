import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import BestSeller from "./components/bestseller";
import FeaturedProducts from "./components/featuredProduct";
import ProductsSection from "./components/allProducts";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <BestSeller />
      {/* <FeaturedProducts /> */}
      <ProductsSection />
      <Footer />

    </>
  );
}
