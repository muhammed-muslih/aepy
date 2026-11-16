import { ArrowRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroProductVisual from "./HeroProductVisual";
import { useState, useEffect } from "react";
import { heroSlides } from "@/constants/heroSlides";
import { motion } from "framer-motion";
import {
  heroContainer,
  heroItem,
} from "@/features/home/animations/heroAnimations";

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevious = () => {
    setActiveIndex(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <section id="home-hero" className="relative overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 items-center gap-0 py-10 sm:py-14 lg:py-18  lg:min-h-155 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0  bg-aepy-cream">
          {/* LEFT SIDE: HERO CONTENT */}

          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="relative z-20 w-full max-w-120 px-1 lg:px-0"
          >
            {/* Since 1965 label */}

            <motion.div
              variants={heroItem}
              className="mb-5 flex items-center gap-3"
            >
              <span className="text-xs font-extrabold tracking-[0.3em] text-aepy-burnt sm:text-sm">
                SINCE 1965
              </span>
              <span className="h-0.5 w-10 lg:w-14 shrink-0 bg-aepy-orange" />
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={heroItem}
              className="font-heading text-[clamp(2.7rem,7vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.035em] text-aepy-chocolate"
            >
              Crafting
              <br />
              Taste.
              <br />
              Creating
              <br />
              <span className="text-aepy-orange">Memories.</span>
            </motion.h1>
            {/* Description */}
            <motion.p
              variants={heroItem}
              className="mt-5 max-w-90 text-sm leading-relaxed text-aepy-chocolate/80 sm:text-base sm:leading-7"
            >
              From our own manufacturing facilities to our bakery outlets, we
              bring fresh, high-quality bakes closer to you.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItem}
              className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap lg:gap-3"
            >
              <Button
                to="/"
                variant="primary"
                size="lg"
                className="w-full min-[420px]:w-auto"
              >
                Explore Our Products
                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Button>

              <Button
                to="#"
                variant="secondary"
                size="lg"
                className="w-full min-[420px]:w-auto"
              >
                <MapPin size={17} strokeWidth={2.5} />
                Find an Outlet
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: PRODUCT VISUAL */}
          <div className="relative z-10 min-w-0">
            <HeroProductVisual
              imageName={activeSlide.imageName}
              alt={activeSlide.alt}
              label={activeSlide.label}
              description={activeSlide.productDescription}
              activeIndex={activeIndex}
              onNext={handleNext}
              onPrevious={handlePrevious}
              onSelect={setActiveIndex}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
