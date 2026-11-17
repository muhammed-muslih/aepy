import HomeHero from "./components/hero/HomeHero";
import OurStory from "./components/ourStory/OurStory";
import ProductCategories from "./components/productCategories/ProductCategories";
import WhyChooseAepy from "./components/whyChooseAepy/WhyChooseAepy";
import BestSellers from "./components/bestSellers/BestSellers";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <OurStory />
      <ProductCategories />
      <WhyChooseAepy />
      <BestSellers />
    </main>
  );
}

export default HomePage;
