import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, House, ArrowRight, ChevronDown } from "lucide-react";
import Container from "../ui/Container";
import SectionEyebrow from "../ui/SectionEyebrow";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";
import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  breadcrumbLabel: string;

  // Standard hero
  image?: string;
  imageAlt?: string;

  // Hero variants
  variant?: "standard" | "cinematic";
  backgroundImage?: string;

  // Optional CTA
  ctaLabel?: string;
  ctaHref?: string;

  imageBlend?: boolean;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  breadcrumbLabel,
  image,
  imageAlt,
  variant = "standard",
  backgroundImage,
  ctaLabel,
  ctaHref,
  imageBlend = false,
}: PageHeroProps) => {
  const shouldReduceMotion = useReducedMotion();

  const isCinematic = variant === "cinematic";

  // Cinematic Hero
  if (isCinematic) {
    return (
      <section className="relative isolate flex  items-center overflow-hidden bg-aepy-chocolate ">
        {/* Background Image */}
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-aepy-chocolate/95 via-aepy-chocolate/75 to-aepy-chocolate/20" />

        <Container className="relative z-10 w-full py-8 sm:py-10 lg:py-12">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <Reveal direction="up" delay={0}>
              <nav
                aria-label="Breadcrumb"
                className="mb-10 inline-flex items-center gap-2 rounded-full text-aepy-cream/80 bg-aepy-caramel/20 px-4 py-2
                text-xs font-medium  sm:text-sm"
              >
                <Link
                  to="/"
                  aria-label="Home"
                  className="transition-colors hover:text-aepy-orange"
                >
                  <House size={15} />
                </Link>

                <ChevronRight size={14} />

                <span className="text-aepy-orange font-medium">
                  {breadcrumbLabel}
                </span>
              </nav>
            </Reveal>

            {/* Eyebrow */}
            <Reveal direction="left" delay={0.1}>
              <SectionEyebrow className="mb-4" textColor="text-aepy-caramel">
                {eyebrow}
              </SectionEyebrow>
            </Reveal>

            {/* Heading */}
            <Reveal direction="up" delay={0.2}>
              <SectionHeading
                headingColor="text-aepy-cream"
                as="h2"
                className="max-w-3xl text-4xl sm:text-5xl lg:text-7xl"
              >
                {title}
              </SectionHeading>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={0.35}>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-aepy-cream/85 sm:text-base lg:text-lg">
                {description}
              </p>
            </Reveal>

            {/* CTA */}
            {ctaLabel && ctaHref && (
              <Reveal direction="up" delay={0.5}>
                <Link
                  to={ctaHref}
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-aepy-orange px-7 py-3.5 text-sm font-semibold
                   text-white transition-colors hover:bg-aepy-orange/90 sm:text-base"
                >
                  {ctaLabel}
                  <ArrowRight size={18} />
                </Link>
              </Reveal>
            )}
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.a
          href="#manufacturing-story"
          aria-label="Scroll to manufacturing story"
          className="absolute bottom-6 left-1/2 md:flex -translate-x-1/2 flex-col items-center gap-2 text-aepy-cream/80 hidden"
          animate={shouldReduceMotion ? {} : { y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: shouldReduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            Scroll Down
          </span>
          <ChevronDown size={20} />
        </motion.a>
      </section>
    );
  }

  // Standard Hero
  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12 bg-aepy-hero">
      <Container>
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Left: Content */}
          <div className="relative z-10 flex flex-col items-start">
            {/* Breadcrumb */}
            <Reveal direction="up" delay={0} duration={0.5}>
              <nav
                aria-label="Breadcrumb"
                className="mb-10 inline-flex items-center gap-2 rounded-full bg-aepy-caramel/30 px-4 py-2 text-xs font-medium
                 text-aepy-chocolate sm:mb-9 sm:text-sm"
              >
                <Link
                  to="/"
                  aria-label="Home"
                  className="transition-colors hover:text-aepy-orange"
                >
                  <House size={15} />
                </Link>

                <ChevronRight size={14} className="text-aepy-orange" />

                <span aria-current="page">{breadcrumbLabel}</span>
              </nav>
            </Reveal>

            <Reveal direction="left" delay={0.1}>
              <SectionEyebrow className="mb-4">{eyebrow}</SectionEyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <SectionHeading
                as="h1"
                className="max-w-xl text-4xl sm:text-5xl lg:text-6xl xl:text-6xl"
              >
                {title}
              </SectionHeading>
            </Reveal>

            <Reveal direction="up" delay={0.35}>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:text-lg">
                {description}
              </p>
            </Reveal>
          </div>

          {/* Right: Illustration */}
          {image && (
            <Reveal
              direction="scale"
              delay={0.2}
              duration={0.9}
              className="flex min-w-0 items-center justify-center"
            >
              <div className="relative w-full max-w-160">
                <img
                  src={image}
                  alt={imageAlt ?? ""}
                  fetchPriority="high"
                  className="h-auto w-full object-contain rounded-2xl"
                />

                {/* Optional image blending */}
                {imageBlend && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0"
                  >
                    {/* Top fade */}
                    <div className="absolute inset-x-0 top-0 h-[12%] bg-linear-to-b from-aepy-hero via-aepy-hero/70 to-transparent" />

                    {/* Bottom fade */}
                    <div className="absolute inset-x-0 bottom-0 h-[12%] bg-linear-to-t from-aepy-hero via-aepy-hero/70 to-transparent" />

                    {/* Left fade */}
                    <div className="absolute inset-y-0 left-0 w-[12%] bg-linear-to-r from-aepy-hero via-aepy-hero/70 to-transparent" />

                    {/* Right fade */}
                    <div className="absolute inset-y-0 right-0 w-[12%] bg-linear-to-l from-aepy-hero via-aepy-hero/70 to-transparent" />
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
