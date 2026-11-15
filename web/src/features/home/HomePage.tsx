import HomeHero from "./components/HomeHero";
import OurStory from "./components/OurStory";
import { ProductCategories } from "./components/ProductCategories";

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
