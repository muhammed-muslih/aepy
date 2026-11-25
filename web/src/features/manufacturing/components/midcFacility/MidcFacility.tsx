import { MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

const MidcFacility = () => {
  return (
    <section
      id="midc-facility"
      className="relative isolate overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        {/* Main content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:gap-16">
          {/* Left: Content */}

          <Reveal direction="left" duration={0.8}>
            <div className="flex flex-col items-start">
              <SectionEyebrow className="mb-4">
                Our Manufacturing
              </SectionEyebrow>

              <SectionHeading>
                A Bigger Space for{" "}
                <span className="relative inline-block italic text-aepy-orange">
                  Better Baking.
                </span>
              </SectionHeading>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-8 text-aepy-chocolate/75 sm:text-lg">
                A dedicated manufacturing facility at MIDC, Miraj, supporting
                Aepy Bakery’s growing production needs.
              </p>

              <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-aepy-caramel/40 py-3 pl-3 pr-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-aepy-orange bg-aepy-orange text-white">
                  <MapPin size={22} strokeWidth={1.7} />
                </span>

                <span className="flex flex-col">
                  <span className="font-serif text-lg font-semibold text-aepy-chocolate">
                    MIDC, Miraj
                  </span>

                  <span className="text-sm text-aepy-chocolate/70">
                    Manufacturing Facility
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.15} duration={0.8}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[15%_35%_15%_30%] bg-aepy-orange/30 sm:-inset-5"
              />

              <div className="relative overflow-hidden">
                <img
                  src="/images/original/manufacturing/midc-factory-placeholder.png"
                  alt="Aepy Foods manufacturing facility at MIDC, Miraj"
                  className="h-full w-full object-contain rounded-[15%_35%_15%_30%]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section footer */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex items-center gap-4 sm:mt-20">
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.2em] text-aepy-burnt sm:text-sm">
              Crafted with Care
            </span>

            <div className="h-px flex-1 bg-aepy-orange/50" />

            <span className="shrink-0 font-serif text-sm italic text-aepy-chocolate sm:text-base">
              Aepy Foods
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
export default MidcFacility;
