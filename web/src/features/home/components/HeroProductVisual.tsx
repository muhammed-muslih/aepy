import { ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/constants/heroSlides";
import { type HeroProductVisualProps } from "../types/hero.types";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

const HeroProductVisual = ({
  imageName,
  alt,
  label,
  description,
  activeIndex,
  onNext,
  onPrevious,
  onSelect,
}: HeroProductVisualProps) => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={constraintsRef}
      className="relative isolate flex min-h-75 w-full items-center justify-center sm:min-h-95 lg:min-h-140"
    >
      {/* Orange organic background */}
      <div
        aria-hidden="true"
        className="
        bottom-[8%] right-[-3%]
        h-[55%] w-[85%]
        rounded-[55%_0_0_35%/55%_0_0_45%]
        bg-aepy-orange
        
        sm:bottom-[5%] sm:right-[-4%]
        sm:h-[65%] sm:w-[90%]
        
        lg:right-[-20%]
        lg:top-[2%]
        lg:bottom-auto
        lg:h-[85%]
        lg:w-[120%]
        lg:rounded-[48%_0_0_38%/55%_0_0_45%]
        absolute -z-10"
      />

      {/* Decorative strokes */}
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-[10%] z-20 flex items-center gap-4 rotate-[-30deg] lg:left-[10%] lg:top-[8%]"
      >
        <span className="h-8 w-1.5 rotate-[-30deg] rounded-full bg-aepy-orange sm:h-10" />
        <span className="h-6 w-1.5  rounded-full bg-aepy-orange sm:h-8" />
        <span className="h-8 w-1.5 rotate-30 rounded-full bg-aepy-orange sm:h-10" />
      </div>

      <AnimatePresence initial={false}>
        <motion.picture
          key={imageName}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: {
              duration: 1.2,
              ease: "easeInOut",
            },
          }}
          className="
      absolute inset-0 z-10
      m-auto block w-full
    "
        >
          <source
            srcSet={`/images/optimized/hero/${imageName}.avif`}
            type="image/avif"
          />

          <source
            srcSet={`/images/optimized/hero/${imageName}.webp`}
            type="image/webp"
          />

          <img
            src={`/images/original/hero/${imageName}.png`}
            alt={alt}
            fetchPriority={activeIndex === 0 ? "high" : "auto"}
            decoding="async"
            draggable={false}
            className="
        m-auto
        w-full max-w-107.5
        object-contain
        drop-shadow-xl
        sm:max-w-130
        lg:max-w-none
        lg:scale-110
        lg:translate-x-6
        select-none
      "
          />
        </motion.picture>
      </AnimatePresence>

      {/* Draggable Product Label */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragMomentum={false}
        dragElastic={0.05}
        whileDrag={{ scale: 1.02, cursor: "grabbing" }}
        className="absolute bottom-[55%] left-2 z-40 rounded-2xl border border-white/50 bg-white/50 
        px-4 py-3 shadow-lg backdrop-blur-sm sm:bottom-12 sm:left-0 cursor-grab touch-none active:cursor-grabbing"
      >
        <p className="text-xs font-bold tracking-wider text-aepy-burnt select-none">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-aepy-chocolate select-none">
          {description}
        </p>
      </motion.div>

      {/* Carousel Navigation */}
      <div className="absolute bottom-3 right-2 z-30 flex items-center gap-3">
        <button
          type="button"
          onClick={onPrevious}
          aria-label="Previous product"
        >
          <ChevronLeft />
        </button>

        {heroSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show ${slide.id}`}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index
                ? "w-7 bg-aepy-chocolate"
                : "w-2 bg-aepy-chocolate/40"
            }`}
          />
        ))}

        <button type="button" onClick={onNext} aria-label="Next product">
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroProductVisual;
