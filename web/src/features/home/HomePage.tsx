import HomeHero from "./components/hero/HomeHero";
import OurStory from "./components/ourStory/OurStory";
import ProductCategories from "./components/productCategories/ProductCategories";
import WhyChooseAepy from "./components/whyChooseAepy/WhyChooseAepy";
import BestSellers from "./components/bestSellers/BestSellers";
import OurOutlets from "./components/outlets/OurOutlets";
import HeritageClosing from "./components/heritageClosing/HeritageClosing";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <OurStory />
      <ProductCategories />
      <WhyChooseAepy />
      <BestSellers />
      <OurOutlets />
      <HeritageClosing />
    </main>
  );
}

export default HomePage;
