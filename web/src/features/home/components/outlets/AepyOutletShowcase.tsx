import { ArrowRight, MapPin } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/animations/Reveal";
import { aepyOutletData } from "../../data/outletShowcaseData";
import Button from "@/components/ui/Button";

const AepyOutletShowcase = () => {
  const product = aepyOutletData;

  return (
    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      {/* Left: Outlet Information */}
      <div className="flex flex-col items-start">
        <Reveal direction="up">
          <SectionEyebrow>Find Us Around You</SectionEyebrow>
        </Reveal>

        <Reveal direction="up" delay={0.1} className="mt-5">
          <SectionHeading>
            Aepy Is Closer
            <br className="md:hidden lg:block" />{" "}
            <span className="text-aepy-orange">Than Ever.</span>
          </SectionHeading>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-aepy-chocolate/80 sm:text-base sm:leading-7">
            {product.description}
          </p>
        </Reveal>

        {/* Outlet Count */}
        <Reveal direction="up" delay={0.3}>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-aepy-orange/10 px-5 py-3">
            <MapPin size={28} strokeWidth={2.5} className="text-aepy-orange" />

            <span className="font-heading text-xl font-bold text-aepy-chocolate sm:text-2xl">
              {product.badge}
            </span>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.4}>
          <Button
            to={product.ctaHref}
            variant="primary"
            size="lg"
            className="mt-6 hover:shadow-lg hover:shadow-aepy-orange/20"
          >
            {product.ctaLabel}

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Button>
        </Reveal>
      </div>

      {/* Right Section */}
      <Reveal direction="right" delay={0.2}>
        <div className="relative mx-auto w-full max-w-2xl lg:max-w-none group">
          {/* Decorative Caramel Shape */}
          <div className="absolute -inset-2 rotate-0 rounded-[3rem] bg-aepy-orange/65  lg:rotate-4" />

          {/* Store Image */}
          <div
            className="group relative aspect-4/3 overflow-hidden rounded-[2.5rem] 
            sm:rounded-[4.5rem_2.5rem_4.5rem_2.5rem] shadow-xl shadow-aepy-chocolate/10
            transition-transform duration-500"
          >
            <img
              src={product.image}
              alt={product.imageAlt}
              loading="lazy"
              draggable={false}
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default AepyOutletShowcase;
