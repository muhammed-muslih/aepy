import Container from "@/components/ui/Container";
import Reveal from "@/components/animations/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ArrowUpRight, ArrowRight, Store, MapPin } from "lucide-react";

const VisitOurLocations = () => {
  return (
    <section className="relative overflow-hidden bg-aepy-cream py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: Store Image */}
          <Reveal direction="left">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Orange decorative background */}
              <div className="absolute -inset-2 rounded-[2.5rem] -rotate-2 bg-aepy-orange/65" />

              {/* Store image */}
              <div className="relative aspect-4/4 overflow-hidden rounded-[2.2rem] border-4 border-white shadow-aepy-chocolate">
                <img
                  src="/images/original/outlets/aepy-store-placeholder.png"
                  alt="Aepy Bakery storefront"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: Content */}
          <div className="flex flex-col items-start">
            <Reveal direction="up">
              <SectionEyebrow className="mb-5">
                <MapPin size={18} />
                Visit Our Locations
              </SectionEyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.1}>
              <SectionHeading as="h2">
                Find Your Nearest{" "}
                <span className="text-aepy-orange">Aepy.</span>
              </SectionHeading>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:text-lg">
                With multiple locations to serve you, your favourite Aepy treats
                are never too far away. Visit one of our outlets and experience
                the goodness we&apos;ve been sharing since 1965.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-6">
                <Button to="/outlets" variant="primary" size="lg">
                  Explore Our Outlets
                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>

                <Button to="/bliss-bakes" variant="ghost" size="md">
                  <Store size={22} className="text-aepy-orange" />
                  Discover Bliss Bakes
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="mt-14 flex items-center justify-center gap-4 sm:mt-20">
                <span className="h-px w-10 bg-aepy-orange/70 sm:w-16" />

                <p className="text-center text-[10px] font-bold uppercase tracking-[0.2em] text-aepy-chocolate sm:text-xs sm:tracking-[0.25em]">
                  Five Outlets <span className="mx-2 text-aepy-orange">•</span>
                  One Tradition <span className="mx-2 text-aepy-orange">•</span>
                  Since 1965
                </p>

                <span className="h-px w-10 bg-aepy-orange/70 sm:w-16" />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default VisitOurLocations;
