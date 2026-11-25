import { MapPin } from "lucide-react";

import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

const StationRoadProduction = () => {
  return (
    <section
      id="station-road-production"
      className="relative isolate overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 xl:gap-16">
          <Reveal direction="right" delay={0.15} duration={0.8}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 -z-10 rounded-[35%_15%_30%_15%] bg-aepy-orange/30 sm:-inset-3"
              />

              {/* Image container */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/original/manufacturing/stationroad-placeholder.png"
                  alt="Aepy Foods cake production featuring ghee cakes, plum cakes, Swiss rolls, and cream cakes"
                  className="h-full w-full object-contain  rounded-[35%_15%_30%_15%]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" duration={0.8}>
            <div className="flex flex-col items-start">
              <SectionEyebrow className="mb-4">
                Station Road · Our Roots
              </SectionEyebrow>

              <SectionHeading>
                Where Our Cake Making{" "}
                <span className="relative inline-block italic text-aepy-orange">
                  Continues.
                </span>
              </SectionHeading>
              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-8 text-aepy-chocolate/75 sm:text-lg">
                At our Station Road, Miraj location, cake production continues
                across a range of favourites—from ghee cakes and rich plum cakes
                to soft Swiss rolls, cream cakes, and more.
              </p>

              <div className="mt-8 inline-flex items-center gap-4 rounded-full bg-aepy-caramel/40 py-3 pl-3 pr-6">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-aepy-orange bg-aepy-orange text-white">
                  <MapPin size={22} strokeWidth={1.7} />
                </span>

                <span className="flex flex-col">
                  <span className="font-serif text-lg font-semibold text-aepy-chocolate">
                    Station Road, Miraj
                  </span>

                  <span className="text-sm text-aepy-chocolate/70">
                    Cake Production
                  </span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section footer */}
        <Reveal delay={0.2}>
          <div className="mt-14 flex items-center gap-4 sm:mt-20">
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.15em] text-aepy-burnt sm:text-sm">
              Made with Care
            </span>

            <div className="h-px flex-1 bg-aepy-orange/50" />

            <span className="shrink-0 text-right font-serif text-xs italic text-aepy-chocolate sm:text-sm">
              A Continuing Part of Aepy Foods’ Story
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default StationRoadProduction;
