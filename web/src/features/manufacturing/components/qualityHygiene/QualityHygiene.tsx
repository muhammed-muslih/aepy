import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { qualityHighlights } from "../../data/manufacturingData";

const QualityHygiene = () => {
  return (
    <section id="quality-hygiene" className="py-6 sm:py-8">
      <Container>
        {/* Background image */}

        <div className="relative isolate overflow-hidden rounded-3xl bg-aepy-chocolate">
          {/* Background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-0 bg-[url('/images/original/manufacturing/quality-hygiene-bg.png')] bg-cover bg-center"
          />

          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-linear-to-r from-aepy-chocolate/95 via-aepy-chocolate/80 to-aepy-chocolate/20"
          />

          {/* Content */}
          <div className="relative z-20 px-5 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="max-w-2xl">
              <Reveal direction="up">
                <SectionEyebrow className="" textColor="text-aepy-cream">
                  Quality & Hygiene
                </SectionEyebrow>
              </Reveal>

              <Reveal direction="up" delay={0.1}>
                <SectionHeading headingColor="text-aepy-cream" as="h2">
                  Our Commitment to{" "}
                  <span className="text-aepy-orange">Quality & Hygiene.</span>
                </SectionHeading>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p className="mt-6 max-w-xl text-sm leading-7 text-aepy-cream/85 sm:text-base sm:leading-8">
                  We believe every delicious product begins with care. From
                  handling ingredients to preparing our baked goods, quality and
                  hygiene remain an important part of our manufacturing journey.
                </p>
              </Reveal>

              {/* Quality highlights */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
                {qualityHighlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal key={item.title} direction="up" delay={index * 0.1}>
                      <div
                        className="flex h-full min-h-36 flex-col items-center justify-center rounded-2xl border border-black/50 bg-black/25 px-3
                     py-5 text-center backdrop-blur-sm sm:min-h-40 sm:px-4"
                      >
                        <Icon
                          aria-hidden="true"
                          className="mb-4 size-8 text-aepy-orange sm:size-9"
                          strokeWidth={1.7}
                        />

                        <h3 className="text-sm font-semibold text-aepy-cream sm:text-base">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-xs leading-5 text-aepy-cream/75">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default QualityHygiene;
