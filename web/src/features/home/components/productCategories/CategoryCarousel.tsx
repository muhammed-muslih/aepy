import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CategoryCard from "./CategoryCard";
import type { Category } from "../../data/categoryData";
import Button from "@/components/ui/Button";
import { motion, type Variants, useReducedMotion } from "framer-motion";
import Reveal from "@/components/animations/Reveal";

interface CategoryCarouselProps {
  categories: Category[];
}

const carouselContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const categoryItem: Variants = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const CategoryCarousel = ({ categories }: CategoryCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [isDragging, setIsDragging] = useState(false);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const dragState = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  // Update navigation button states
  const updateScrollButtons = useCallback(() => {
    const element = carouselRef.current;
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;

    setCanScrollPrev(scrollLeft > 2);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 2);
  }, []);

  // Listen for scrolling and resizing
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    updateScrollButtons();

    element.addEventListener("scroll", updateScrollButtons, {
      passive: true,
    });

    const resizeObserver = new ResizeObserver(updateScrollButtons);
    resizeObserver.observe(element);

    return () => {
      element.removeEventListener("scroll", updateScrollButtons);
      resizeObserver.disconnect();
    };
  }, [updateScrollButtons, categories.length]);

  // Scroll one card at a time
  const scrollCarousel = (direction: "prev" | "next") => {
    const element = carouselRef.current;
    if (!element) return;

    const card = element.querySelector<HTMLElement>("[data-category-card]");

    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(element).columnGap) || 0;

    const distance = cardWidth + gap;

    element.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  // Start mouse dragging
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    // Only handle mouse dragging
    if (event.pointerType !== "mouse" || event.button !== 0) return;

    const element = carouselRef.current;
    if (!element) return;

    dragState.current = {
      startX: event.clientX,
      scrollLeft: element.scrollLeft,
    };

    setIsDragging(true);

    element.setPointerCapture(event.pointerId);
  };

  // Move carousel while dragging
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const element = carouselRef.current;
    if (!element) return;

    const distance = event.clientX - dragState.current.startX;

    element.scrollLeft = dragState.current.scrollLeft - distance;
  };

  // Stop dragging
  const handlePointerUp = () => {
    setIsDragging(false);
  };

  return (
    <div>
      {/* Carousel */}
      <motion.div
        ref={carouselRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDragStart={(event) => event.preventDefault()}
        variants={carouselContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className={`flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide select-none sm:gap-5 lg:gap-6
            ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        style={{
          scrollbarWidth: "none",
          touchAction: "pan-x pan-y",
        }}
      >
        {categories.map((category) => (
          <motion.div
            key={category.id}
            variants={categoryItem}
            data-category-card
            className="
              w-57.5 shrink-0 snap-start sm:w-62.5 lg:w-67.5"
          >
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Controls */}
      <Reveal direction="up" delay={0.5} duration={0.6} viewportAmount={0.2}>
        <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
          <Button
            variant="secondary"
            onClick={() => scrollCarousel("prev")}
            disabled={!canScrollPrev}
            size="sm"
            aria-label="Previous categories"
            className="h-11! w-11! p-0! border-aepy-caramel! bg-white! text-aepy-chocolate! hover:border-aepy-orange!
           hover:bg-aepy-orange! hover:text-white! hover:translate-y-0! disabled:opacity-30! transition-all duration-300"
          >
            <ArrowLeft size={18} strokeWidth={3} />
          </Button>

          <Button
            variant="secondary"
            onClick={() => scrollCarousel("next")}
            disabled={!canScrollNext}
            size="sm"
            aria-label="Next categories"
            className="h-11! w-11! p-0! border-aepy-caramel! bg-white! text-aepy-chocolate! hover:border-aepy-orange!
           hover:bg-aepy-orange! hover:text-white! hover:translate-y-0! disabled:opacity-30! transition-all duration-300"
          >
            <ArrowRight size={18} strokeWidth={3} />
          </Button>
        </div>
      </Reveal>
    </div>
  );
};

export default CategoryCarousel;
