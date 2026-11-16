import { useRef, useEffect, useState } from "react";
import StoryImageFrame from "./StoryImageFrame";
import Badge from "@/components/ui/Badge";
import { storyImagePairs } from "../../data/storyImages";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MobileStoryCollage = () => {
  const collageRef = useRef<HTMLDivElement>(null);
  const leftFrameRef = useRef<HTMLDivElement>(null);
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const [activePair, setActivePair] = useState(0);

  useEffect(() => {
    const collage = collageRef.current;
    const leftFrame = leftFrameRef.current;
    const rightFrame = rightFrameRef.current;
    const badge = badgeRef.current;

    if (!collage || !leftFrame || !rightFrame) return;

    const leftImages = Array.from(leftFrame.querySelectorAll("img"));

    const rightImages = Array.from(rightFrame.querySelectorAll("img"));

    if (
      leftImages.length !== storyImagePairs.length ||
      rightImages.length !== storyImagePairs.length
    ) {
      return;
    }

    // Respect the visitor's reduced-motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Hide all images initially
    gsap.set([...leftImages, ...rightImages], {
      opacity: 0,
    });

    // Show the first image pair
    gsap.set([leftImages[0], rightImages[0]], {
      opacity: 1,
    });

    setActivePair(0);

    // Badge entrance animation
    if (badge) {
      gsap.fromTo(
        badge,
        {
          opacity: 0,
          scale: 0.65,
          rotation: -12,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 12,
          duration: 1.1,
          delay: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: collage,
            start: "top 80%",
            once: true,
          },
        },
      );
    }

    if (prefersReducedMotion) return;

    // Create the automatic image transition timeline
    const tl = gsap.timeline({
      paused: true,
      repeat: -1,
    });

    // Keep the first pair visible initially
    tl.to(
      {},
      {
        duration: 2.5,
      },
    );

    // Transition between image pairs
    for (let i = 0; i < storyImagePairs.length; i++) {
      const nextIndex = (i + 1) % storyImagePairs.length;

      const currentPair = [leftImages[i], rightImages[i]];

      const nextPair = [leftImages[nextIndex], rightImages[nextIndex]];

      // Fade out current pair
      tl.to(currentPair, {
        opacity: 0,
        duration: 1.2,
        ease: "power1.inOut",
      });

      // Fade in next pair simultaneously
      tl.to(
        nextPair,
        {
          opacity: 1,
          duration: 1.2,
          ease: "power1.inOut",
        },
        "<",
      );

      // Update the progress indicator
      tl.call(() => {
        setActivePair(nextIndex);
      });

      // Hold the newly visible pair
      tl.to(
        {},
        {
          duration: 2.5,
        },
      );
    }

    // Play only while the collage is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.play();
        } else {
          tl.pause();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(collage);

    return () => {
      observer.disconnect();
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={collageRef}
      className=" relative mx-auto w-full max-w-lg translate-x-5 px-2"
    >
      {/* Image composition */}
      <div className="relative mx-auto aspect-4/4 w-full">
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="
            absolute left-[5%] top-[12%]
            h-[75%] w-[85%]
            rounded-[45%_55%_35%_45%]
            bg-aepy-caramel/35
          "
        />

        {/* Main historical / production image */}
        <StoryImageFrame
          frameRef={leftFrameRef}
          images={storyImagePairs.map((pair) => pair.left)}
          className="
            absolute left-0 top-[12%] z-10
            h-[65%] w-[80%]
            -rotate-3
            border-[5px] border-white
            shadow-xl
          "
        />

        {/* Overlapping secondary image */}
        <StoryImageFrame
          frameRef={rightFrameRef}
          images={storyImagePairs.map((pair) => pair.right)}
          className="
            absolute bottom-[2%] right-0 z-20
            h-[55%] w-[67%]
            rotate-3
            border-[5px] border-white
            shadow-xl
          "
        />

        {/* Heritage badge */}
        <Badge
          badgeRef={badgeRef}
          year="1965"
          topText="Serving Happiness Since"
          className="
            absolute right-[4%] top-0 z-30
            w-30 rotate-12 select-none
          "
        />
      </div>

      {/* Minimal progress indicator */}
      <div
        className="mt-7 flex items-center justify-center gap-3"
        aria-label={`Image pair ${activePair + 1} of ${storyImagePairs.length}`}
      >
        {storyImagePairs.map((pair, index) => (
          <span
            key={pair.id}
            className={`
              h-1.5 rounded-full transition-all duration-500
              ${
                activePair === index
                  ? "w-10 bg-aepy-orange"
                  : "w-6 bg-aepy-caramel"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileStoryCollage;
