import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

const RailwayVision = () => {
  return (
    <section
      id="railway-vision"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal
            direction="right"
            className="relative mx-auto w-full max-w-xl lg:order-2 mb-12 lg:mb-0"
          >
            <div className="relative pb-24 sm:pb-28">
              {/* Decorative orange shape */}
              <div
                aria-hidden="true"
                className="absolute -left-5 top-16 size-40 rounded-full bg-aepy-orange/15 blur-2xl sm:size-52"
              />
              {/* Main railway image */}
              <div className="relative z-10 ml-auto w-[94%] rotate-1 border-[6px] border-white shadow-aepy-chocolate">
                <img
                  src="/images/original/story/miraj-railway-station.png"
                  alt="A vintage steam train at Miraj railway station"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>

              {/* Bakery image overlapping the railway image */}
              <div className="absolute -bottom-16 left-0 z-20 w-[65%] -rotate-3 border-[6px] border-white shadow-aepy-chocolate">
                <img
                  src="/images/original/story/bakery-buns.png"
                  alt="A baker preparing fresh buns in a traditional bakery"
                  className="aspect-4/3 w-full object-cover"
                />
              </div>

              {/* Heritage year */}
              <div className="absolute left-0 top-5 z-30 -rotate-6 bg-aepy-caramel px-5 py-3 shadow-md sm:px-6">
                <span className="font-serif text-xl font-bold text-aepy-chocolate sm:text-2xl">
                  1965
                </span>
              </div>

              {/* Decorative lines */}
              <div
                aria-hidden="true"
                className="absolute -left-3 top-28 z-0 flex flex-col gap-2"
              >
                <span className="h-0.5 w-12 rounded-full bg-aepy-orange" />
                <span className="h-0.5 w-16 rounded-full bg-aepy-orange/70" />
                <span className="h-0.5 w-10 rounded-full bg-aepy-orange/50" />
              </div>
            </div>
          </Reveal>

          <div className="relative lg:order-1">
            <Reveal direction="up" delay={0.1}>
              <div className="mb-5">
                <SectionEyebrow className="mb-4">
                  A Vision at the Railway Station
                </SectionEyebrow>

                <SectionHeading as="h2" headingColor="chocolate">
                  An Opportunity in Every{" "}
                  <span className="text-aepy-orange">Waiting Moment.</span>
                </SectionHeading>

                {/* Orange underline accent */}
                <div
                  aria-hidden="true"
                  className="mt-4 h-1 w-28 -rotate-2 rounded-full bg-aepy-orange sm:w-36"
                />
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="mt-6 space-y-5 text-base leading-7 text-aepy-chocolate sm:text-lg sm:leading-8">
                <p>
                  In the 1960s, Miraj railway station was a busy stop for steam
                  trains. Powered by coal, these trains would halt for a few
                  hours to replenish their fuel before continuing their journey.
                </p>

                <p>
                  For the travellers waiting at the station, those hours offered
                  a little time to pause. And for{" "}
                  <strong className="font-semibold">A.P. Mahamood</strong>, they
                  presented an opportunity.
                </p>

                <p>
                  He saw that people could enjoy something fresh and warm while
                  they waited. With the knowledge he had gained from learning
                  the art of baking, he began making and selling fresh bread and
                  buns to the travellers.
                </p>

                <p>
                  In the beginning, he baked and sold the products himself. What
                  began as a simple idea soon became known for the freshness of
                  its bakery products.
                </p>

                <p>
                  That small beginning near Miraj railway station marked the
                  first step in building{" "}
                  <strong className="font-semibold">A P Bakery</strong> — a name
                  that would become part of the town’s everyday life.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default RailwayVision;
