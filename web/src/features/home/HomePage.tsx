import HomeHero from "./components/hero/HomeHero";
import OurStory from "./components/ourStory/OurStory";
import { ProductCategories } from "./components/productCategories";

function HomePage() {
  return (
    <main>
      <HomeHero />
      <OurStory />
      <ProductCategories />
    </main>
  );
}

export default HomePage;
