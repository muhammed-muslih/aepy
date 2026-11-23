import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import { ArrowRight } from "lucide-react";
import { SlPhone } from "react-icons/sl";

const OutletsCTA = () => {
  return (
    <section className="relative isolate overflow-hidden bg-aepy-cream py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-6">
          <div className="relative z-10 text-center lg:text-left">
            <Reveal direction="up">
              <SectionEyebrow className="mb-4">
                A Tradition Since 1965
              </SectionEyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <SectionHeading as="h2">
                Some Memories{" "}
                <span className="text-aepy-orange">Begin with a Taste.</span>
              </SectionHeading>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:mx-0 lg:text-lg">
                Since 1965, we've been bringing people together through the joy
                of freshly baked goodness. Come experience the tradition at your
                nearest Aepy Bakery.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Button to="/products" variant="primary" size="lg">
                  Explore Our Products
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>

                <Button
                  to="/contact"
                  variant="ghost"
                  size="lg"
                  className="text-aepy-orange border border-aepy-orange/10"
                >
                  <SlPhone size={20} className="text-aepy-orange" />
                  Contact Us
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Product Image */}
          <Reveal direction="right" delay={0.2}>
            <div
              className="relative mx-auto w-full max-w-3xl lg:max-w-none rounded-[2.2rem] border-aepy-caramel/50
             bg-white hover:border-aepy-orange/60 border-4 transition-all duration-300"
            >
              {/* Bakery products */}
              <img
                src="/images/original/outlets/outlets-cta-products.png"
                alt="A variety of freshly baked Aepy Bakery products"
                loading="lazy"
                className="relative z-10 mx-auto h-auto w-full scale-105 hover:scale-105 object-contain sm:scale-105 sm:hover:scale-110 lg:scale-110 lg:hover:scale-115 transition-all duration-300 "
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default OutletsCTA;
