import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categoryData";

const ProductCategories = () => {
  const featuredCategories = categories.filter((category) => category.featured);

  const regularCategories = categories.filter((category) => !category.featured);

  return (
    <section
      id="product-categories"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        {/* Section heading */}
        <div className="max-w-full">
          <Reveal direction="up">
            <SectionEyebrow>Explore Our Collection</SectionEyebrow>
          </Reveal>

          <div className="mt-6">
            <Reveal direction="up" delay={0.1}>
              <SectionHeading>
                A Taste for
                <br className="md:hidden" />{" "}
                <span className="text-aepy-orange">Every Occasion.</span>
              </SectionHeading>
            </Reveal>
          </div>
        </div>

        {/* Category gallery*/}

        {/* Featured Categories */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
          {featuredCategories.map((category, index) => (
            <Reveal
              key={category.id}
              direction="up"
              delay={0.35 + index * 0.15}
              duration={0.7}
            >
              <CategoryCard key={category.id} {...category} />
            </Reveal>
          ))}
        </div>

        {/* Regular Categories */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {regularCategories.map((category, index) => (
            <Reveal
              key={category.id}
              direction="up"
              delay={0.45 + (index % 4) * 0.12}
              duration={0.7}
            >
              <CategoryCard key={category.id} {...category} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
