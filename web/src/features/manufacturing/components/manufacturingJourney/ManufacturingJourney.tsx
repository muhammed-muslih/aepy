import { PiChefHat } from "react-icons/pi";

import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

import JourneyMilestone from "./JourneyMilestone";
import { manufacturingMilestones } from "../../data/manufacturingData";

const ManufacturingJourney = () => {
  const [firstMilestone, secondMilestone] = manufacturingMilestones;
  return (
    <section
      id="manufacturing-journey"
      className="relative isolate overflow-hidden bg-aepy-cream py-14 sm:py-20 "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full bg-aepy-orange/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 bottom-0 h-72 w-72 rounded-full bg-aepy-caramel/20 blur-3xl"
      />

      <Container>
        <div className="relative z-10 mx-auto mb-12 max-w-5xl text-center sm:mb-14 lg:mb-20">
          <Reveal direction="up">
            <SectionEyebrow className="mb-4 justify-center">
              Our Manufacturing Journey
            </SectionEyebrow>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <SectionHeading as="h2">
              From Our Beginnings to a{" "}
              <span className="text-aepy-orange">Bigger Tomorrow.</span>
            </SectionHeading>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:text-lg">
              Every growing bakery has a story. As more customers came to enjoy
              Aepy's products, our production needs grew too. This journey led
              us from our original production beginnings at Station Road to a
              larger manufacturing facility at MIDC, Miraj.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={0.3}>
            <div className="mx-auto mt-7 flex w-48 items-center gap-3">
              <span className="h-px flex-1 bg-aepy-orange/70" />
              <span className="h-2 w-2 rotate-45 bg-aepy-orange" />
              <span className="h-px flex-1 bg-aepy-orange/70" />
            </div>
          </Reveal>
        </div>

        {firstMilestone && secondMilestone && (
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden h-56 w-40 -translate-x-1/2 -translate-y-1/2 xl:block"
            >
              <svg
                viewBox="0 0 160 224"
                fill="none"
                className="absolute inset-0 h-full w-full"
              >
                {/* Dotted Step Path */}
                <path
                  d="M 48 40 H 80 V 184 H 112"
                  stroke="#F08C00"
                  strokeWidth="1.8"
                  strokeDasharray="3 5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.65"
                />

                {/* Starting Point */}
                <circle cx="48" cy="40" r="3" fill="#F08C00" />

                {/* Arrow at End */}
                <path d="M 102 177 L 112 184 L 102 191 Z" fill="#F08C00" />
              </svg>

              {/* Chef Hat Badge */}
              <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-aepy-orange/70 bg-aepy-cream text-aepy-orange shadow-sm">
                <PiChefHat size={25} strokeWidth={1.6} />
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24 xl:gap-32">
              <Reveal direction="left" duration={0.8}>
                <JourneyMilestone milestone={firstMilestone} />
              </Reveal>

              <Reveal direction="right" delay={0.15} duration={0.8}>
                <JourneyMilestone milestone={secondMilestone} reverse />
              </Reveal>
            </div>
          </div>
        )}

        {/* Closing Statement */}
        <Reveal direction="up" delay={0.2}>
          <div className="relative z-10 mx-auto mt-16 max-w-3xl text-center lg:mt-20">
            <div className="mx-auto mb-5 flex max-w-64 items-center gap-4">
              <span className="h-px flex-1 bg-aepy-orange/60" />
              <span className="text-xl text-aepy-orange">✦</span>
              <span className="h-px flex-1 bg-aepy-orange/60" />
            </div>

            <p className="font-serif text-lg italic leading-relaxed text-aepy-chocolate sm:text-xl lg:text-2xl">
              Growing with every step, bringing delightful products to more
              customers remains at the heart of our journey.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default ManufacturingJourney;
