import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";

const FounderStory = () => {
  return (
    <section
      id="founder-story"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <Reveal
            direction="left"
            className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
          >
            <div className="relative isolate w-full">
              {/* Soft gradient glow behind the portrait */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <div
                  className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full
                 gradient(ellipse_at_center,rgba(230,201,163,0.55)_0%,rgba(248,244,233,0)_70%)]"
                />
              </div>

              <div className="relative z-10  mask-[radial-gradient(ellipse_at_center,black_55%,transparent_100%)]">
                <img
                  src="/images/original/story/founder-portrait.png"
                  alt="A P Mahamood, founder of A P Bakery"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Founder Name */}
              <div className="absolute bottom-4 left-1/2 z-10 w-full -translate-x-1/2 text-center">
                <h3 className="font-serif text-2xl font-bold tracking-wide text-aepy-chocolate sm:text-3xl">
                  A P Mahamood
                </h3>

                <div className="mt-2 flex items-center justify-center gap-2.5">
                  <span className="h-0.5 w-16 rounded-full bg-aepy-orange sm:w-20" />

                  <span className="size-2.5 rotate-45 border-2 border-aepy-orange" />

                  <span className="h-0.5 w-16 rounded-full bg-aepy-orange sm:w-20" />
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex min-w-0 flex-col justify-center">
            <Reveal direction="right">
              <div className="mb-4">
                <SectionEyebrow>The Man Behind the Legacy</SectionEyebrow>
              </div>

              <SectionHeading as="h2">
                Every Great Legacy <br className="hidden sm:block" />
                <span className="text-aepy-orange">Begins with a Journey.</span>
              </SectionHeading>
            </Reveal>

            <div className="mt-6 space-y-5 text-base leading-7 text-aepy-chocolate sm:text-lg">
              <Reveal direction="up" delay={0.1}>
                <p>
                  Every story has a beginning. For{" "}
                  <strong>A.P. Mahamood</strong>, it began in Thalassery,
                  Kannur, where he grew up before setting out to build a future
                  of his own.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.15}>
                <p>
                  His journey first took him to Erode, Tamil Nadu, where he went
                  in search of work. He spent some time there working, gaining
                  experience and making his way in a place far from home.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <p>
                  Later, in{" "}
                  <span className="inline-flex rounded-full bg-aepy-orange px-3 py-0.5 font-semibold text-white">
                    1960
                  </span>
                  , at his mother&apos;s request, he travelled to Miraj with his
                  maternal uncle, A.P. Muhammed, fondly known as Mammu. It was
                  in Miraj that Mahamood began learning the art of baking at his
                  uncle&apos;s bakery. What started as an opportunity to learn a
                  trade would soon become the beginning of something much
                  greater.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.25}>
                <p>
                  With time, experience, and a dream of starting something of
                  his own, he took a step that would shape the future of his
                  family and the generations to come.
                </p>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <p>
                  In{" "}
                  <span className="inline-flex rounded-full bg-aepy-orange px-3 py-0.5 font-semibold text-white">
                    1965
                  </span>
                  , he opened <strong>A P Bakery</strong> near Miraj railway
                  station. And with that small bakery, a legacy began — one that
                  continues to bring people together through the simple joy of
                  good food.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FounderStory;
