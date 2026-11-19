import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, House } from "lucide-react";
import Container from "../ui/Container";
import SectionEyebrow from "../ui/SectionEyebrow";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";
import { motion, useReducedMotion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  breadcrumbLabel: string;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  breadcrumbLabel,
}: PageHeroProps) => {
  const shouldReduceMotion = useReducedMotion();
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
                className="mb-8  inline-flex items-center gap-2 rounded-full bg-aepy-caramel/30 px-4 py-2 text-xs font-medium text-aepy-chocolate sm:mb-9 sm:text-sm"
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

            {/* Eyebrow */}
            <Reveal direction="left" delay={0.1}>
              <SectionEyebrow className="mb-4">{eyebrow}</SectionEyebrow>
            </Reveal>

            {/* Heading */}
            <Reveal direction="up" delay={0.2}>
              <SectionHeading
                as="h1"
                className="max-w-xl text-4xl sm:text-5xl lg:text-6xl xl:text-6xl"
              >
                {title}
              </SectionHeading>
            </Reveal>

            {/* Description */}
            <Reveal direction="up" delay={0.35}>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-aepy-chocolate/75 sm:text-base lg:text-lg">
                {description}
              </p>
            </Reveal>
          </div>

          {/* Right: Illustration */}

          <Reveal
            direction="scale"
            delay={0.2}
            duration={0.9}
            className="flex min-w-0 items-center justify-center lg:justify-end"
          >
            <motion.div
              className="w-full max-w-140"
              animate={shouldReduceMotion ? { y: 0 } : { y: [0, -5, 0] }}
              transition={{
                duration: 5,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: "easeInOut",
                delay: shouldReduceMotion ? 0 : 1,
              }}
            >
              <img
                src={image}
                alt={imageAlt}
                fetchPriority="high"
                className="h-auto w-full max-w-140 object-contain"
              />
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default PageHero;
