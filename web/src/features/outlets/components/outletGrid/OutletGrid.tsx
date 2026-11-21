import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

import { outlets } from "../../data/outlets";
import OutletCard from "../outletCard/OutletCard";

const OutletGrid = () => {
  return (
    <section className="bg-aepy-cream py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="mx-auto mb-10 text-center sm:mb-14">
          <Reveal direction="up">
            <SectionEyebrow className="mb-4 justify-center">
              Find Your Nearest Outlet
            </SectionEyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <SectionHeading as="h2">
              Visit Our <span className="text-aepy-orange">Aepy Bakery</span>{" "}
              Outlets.
            </SectionHeading>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:text-lg">
              From your favourite everyday treats to freshly baked delights,
              there's an Aepy Bakery waiting to welcome you.
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

        <div className="grid grid-cols-1 auto-rows-fr items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {outlets.map((outlet, index) => (
            <Reveal
              key={outlet.id}
              direction="up"
              delay={index * 0.1}
              duration={0.7}
            >
              <OutletCard key={outlet.id} outlet={outlet} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OutletGrid;
