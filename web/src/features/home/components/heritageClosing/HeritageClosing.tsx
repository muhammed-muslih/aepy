import Reveal from "@/components/animations/Reveal";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const HeritageClosing = () => {
  return (
    <section
      id="heritage"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        <div className="relative z-10 grid grid-cols-1 items-center gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          {/* Left: Heritage content */}
          <div className="relative isolate flex flex-col items-start">
            {/* Heritage year behind products */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-[30%] -z-10 -translate-y-1/2 whitespace-nowrap select-none
              font-heading font-bold text-[clamp(9rem,17vw,16rem)] leading-none tracking-[-0.08em] text-aepy-caramel/30"
            >
              1965
            </div>

            <Reveal direction="up">
              <SectionEyebrow>SINCE 1965</SectionEyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.1} className="mt-5">
              <SectionHeading>
                A Tradition of Taste.
                <br className="" /> A Legacy of{" "}
                <span className="text-aepy-orange">Happiness.</span>
              </SectionHeading>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-aepy-chocolate/80 sm:text-base sm:leading-7">
                For generations, Aepy has been bringing people together with
                delicious bakery favourites and sweet memories.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <Button
                to={""}
                variant="primary"
                size="lg"
                className="mt-8 hover:shadow-lg hover:shadow-aepy-orange/20"
              >
                Get in Touch
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Reveal>
          </div>

          {/* Right: Product image */}
          <div className="relative z-10 flex min-h-85 items-center justify-center sm:min-h-105 lg:min-h-135 lg:justify-end">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute right-[2%] top-[15%] h-[65%] w-[90%] rounded-[48%_52%_40%_60%] bg-aepy-caramel/20"
            />

            <Reveal direction="right">
              <img
                src="/images/original/heritage/aepy-heritage-products.png"
                alt="A selection of Aepy bakery favourites"
                loading="lazy"
                draggable={false}
                className="relative z-10 h-auto w-full max-w-140 object-contain lg:max-w-none lg:w-[115%] lg:translate-x-8 lg:translate-y-8"
              />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeritageClosing;
