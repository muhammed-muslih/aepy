import { ArrowUpRight, Gem } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import Button from "@/components/ui/Button";
import { blissShowcaseData } from "../../data/outletShowcaseData";

const BlissShowcase = () => {
  const product = blissShowcaseData;

  return (
    <section className="mt-12 sm:mt-16 lg:mt-20">
      <div className="relative isolate overflow-hidden rounded-4xl sm:rounded-[2.5rem] bg-bliss-burgundy">
        <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.4fr_1.8fr] lg:items-stretch">
          {/* Bliss Logo + Divider */}
          <div className="flex flex-col items-center justify-center px-6 pt-8 lg:flex-row lg:gap-8 lg:px-8 lg:py-10">
            <Reveal direction="up">
              <img
                src={product.logo}
                alt="Bliss Bakes logo"
                loading="lazy"
                draggable={false}
                className="h-28 w-28 object-contain sm:h-32 sm:w-32 lg:h-40 lg:w-40"
              />
            </Reveal>

            {/* Divider */}
            <div className="mx-auto mt-6 h-px w-3/4 bg-aepy-cream/40 lg:mx-0 lg:mt-0 lg:h-48 lg:w-px" />
          </div>

          {/* Brand Information */}
          <div className="flex flex-col items-center px-6 py-7 text-center sm:px-10 lg:items-start lg:px-8 lg:py-10 lg:text-left">
            <Reveal direction="up" delay={0.1}>
              <h3 className="font-heading text-3xl font-bold text-aepy-cream sm:text-4xl lg:text-5xl">
                {product.name}
              </h3>
            </Reveal>

            {/* Premium Badge */}
            <Reveal direction="up" delay={0.2}>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-aepy-cream px-5 py-2.5 text-sm font-bold text-bliss-burgundy">
                <Gem size={18} />
                {product.badge}
              </div>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={0.3}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-aepy-cream/90 sm:text-base sm:leading-7">
                {product.description}
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal direction="up" delay={0.4}>
              <Button
                to={product.ctaHref}
                variant="secondary"
                size="lg"
                className="mt-5 border-transparent bg-aepy-cream text-bliss-burgundy hover:bg-aepy-caramel! hover:text-bliss-burgundy!"
              >
                {product.ctaLabel}

                <ArrowUpRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Button>
            </Reveal>
          </div>

          {/* Premium Product Image */}
          <Reveal direction="right" delay={0.2} className="h-full">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full lg:min-h-85 lg:[clip-path:ellipse(100%_100%_at_100%_50%)]">
              <img
                src={product.image}
                alt={product.imageAlt}
                loading="lazy"
                draggable={false}
                className="
                  h-full w-full object-cover
                  transition-transform duration-1000 ease-out
                  hover:scale-105
                "
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default BlissShowcase;
