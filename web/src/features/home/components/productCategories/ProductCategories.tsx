import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import CategoryCard from "./CategoryCard";
import { categories } from "../../data/categoryData";
import CategoryCarousel from "./CategoryCarousel";

const ProductCategories = () => {
  const featuredCategories = categories.filter((category) => category.featured);

  const regularCategories = categories.filter((category) => !category.featured);

  return (
    <section
      id="product-categories"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          {/* Left: Heading */}
          <div>
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

          {/* Right: Description */}
          <Reveal direction="up" delay={0.2}>
            <div
              className="flex items-stretch gap-5 lg:ml-auto lg:max-w-lg rounded-2xl lg:rounded-b-none border lg:border-0
             border-aepy-chocolate/10 bg-white lg:bg-aepy-cream p-5 sm:p-6"
            >
              <div className="w-1 shrink-0 rounded-full bg-aepy-orange/70" />

              <div className="flex flex-col justify-center gap-4">
                <p className="text-base font-medium leading-relaxed text-aepy-chocolate/85 sm:text-lg">
                  From freshly baked favourites to delightful sweets and savoury
                  treats, discover a collection crafted to bring more flavour
                  and joy to every moment.
                </p>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-aepy-orange">
                  A Little Something for Every Craving
                </span>
              </div>
            </div>
          </Reveal>
        </div>

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

        {/* Regular Categories Carousel */}
        <div className="mt-8">
          <CategoryCarousel categories={regularCategories} />
        </div>
      </Container>
    </section>
  );
};

export default ProductCategories;
