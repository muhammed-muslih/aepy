import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { useState } from "react";
import { outlets } from "../../data/outlets";
import OutletMap from "./OutletMap";
import OutletLocationList from "./OutletLocationList";

const FindUsOnMap = () => {
  const [selectedOutletId, setSelectedOutletId] = useState<string | null>(null);

  return (
    <section className="bg-aepy-cream py-14 sm:py-18 lg:py-24 overflow-hidden relative">
      <Container>
        <div className="mx-auto mb-10 text-center sm:mb-14">
          <Reveal direction="up">
            <SectionEyebrow className="mb-4 justify-center">
              Come Visit Us
            </SectionEyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <SectionHeading as="h2">
              Find Your Nearest{" "}
              <span className="text-aepy-orange">Aepy Bakery.</span>
            </SectionHeading>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:text-lg">
              We're closer than you think. Explore our locations and visit your
              nearest Aepy Bakery.
            </p>
          </Reveal>

          {/* Small decorative divider */}
          <Reveal direction="scale" delay={0.3}>
            <div className="mx-auto mt-7 flex w-48 items-center gap-3">
              <span className="h-px flex-1 bg-aepy-orange/70" />
              <span className="h-2 w-2 rotate-45 bg-aepy-orange" />
              <span className="h-px flex-1 bg-aepy-orange/70" />
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <Reveal direction="left" className="h-full">
            <OutletMap
              outlets={outlets}
              selectedOutletId={selectedOutletId}
              onSelectOutlet={setSelectedOutletId}
            />
          </Reveal>

          <Reveal direction="right" className="h-full">
            <div className="flex h-full flex-col gap-4">
              <div>
                <h3 className="font-serif text-xl font-semibold text-aepy-chocolate sm:text-2xl">
                  Our Locations
                </h3>
                <p className="mt-1 text-sm text-aepy-chocolate/65">
                  Choose an outlet to explore its location.
                </p>
              </div>

              <OutletLocationList
                outlets={outlets}
                selectedOutletId={selectedOutletId}
                onSelectOutlet={setSelectedOutletId}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default FindUsOnMap;
