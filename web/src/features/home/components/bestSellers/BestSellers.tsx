import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import ProductShowcase from "./ProductShowcase";

const BestSellers = () => {
  return (
    <section
      id="best-sellers"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          {/* Left: Heading */}
          <div>
            <Reveal direction="up">
              <SectionEyebrow>Loved by Generations</SectionEyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.1} className="mt-6">
              <SectionHeading>
                Our Most Loved
                <br className="md:hidden lg:block" />{" "}
                <span className="text-aepy-orange">Delights.</span>
              </SectionHeading>
            </Reveal>
          </div>

          {/* Right: Description */}
          <Reveal direction="up" delay={0.2}>
            <div
              className="flex items-stretch gap-5 rounded-2xl lg:rounded-none border lg:border-0 border-aepy-chocolate/10
             bg-white lg:bg-aepy-cream p-5 sm:p-6 lg:ml-auto lg:max-w-lg"
            >
              <div className="w-1 shrink-0 rounded-full bg-aepy-orange/70" />

              <div className="flex flex-col justify-center gap-4">
                <p className="text-base font-medium leading-relaxed text-aepy-chocolate/85 sm:text-lg">
                  Discover the treats that have brought smiles to generations.
                  From timeless favourites to delightful creations, there's
                  something special waiting for you.
                </p>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-aepy-orange">
                  A Taste of Aepy · Since 1965
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Product Showcase */}
        <ProductShowcase />
      </Container>
    </section>
  );
};

export default BestSellers;
