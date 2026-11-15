import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import MobileStoryCollage from "./MobileStoryCollage";
import StoryImageFrame from "./StoryImageFrame";
import { storyImagePairs } from "../data/storyImages";
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const OurStory = () => {
  const leftFrameRef = useRef<HTMLDivElement>(null);
  const rightFrameRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const [activePair, setActivePair] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const activePairRef = useRef(0);

  const changePair = (index: number) => {
    if (index === activePairRef.current) {
      setTimerKey((prev) => prev + 1);
      return;
    }

    const leftFrame = leftFrameRef.current;
    const rightFrame = rightFrameRef.current;

    if (!leftFrame || !rightFrame) return;

    const leftImages = leftFrame.querySelectorAll("img");
    const rightImages = rightFrame.querySelectorAll("img");

    const currentIndex = activePairRef.current;

    gsap.killTweensOf([
      leftImages[currentIndex],
      rightImages[currentIndex],
      leftImages[index],
      rightImages[index],
    ]);

    gsap.set([leftImages[index], rightImages[index]], {
      opacity: 0,
    });

    gsap.to([leftImages[currentIndex], rightImages[currentIndex]], {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut",
    });

    gsap.to([leftImages[index], rightImages[index]], {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
    });

    activePairRef.current = index;
    setActivePair(index);

    // Restart automatic timer
    setTimerKey((prev) => prev + 1);
  };

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const leftFrame = leftFrameRef.current;
    const rightFrame = rightFrameRef.current;

    if (!section || !leftFrame || !rightFrame) return;

    const leftImages = leftFrame.querySelectorAll("img");
    const rightImages = rightFrame.querySelectorAll("img");

    const allImages = [...leftImages, ...rightImages];

    const ctx = gsap.context(() => {
      gsap.set(allImages, { opacity: 0 });

      gsap.set([leftImages[0], rightImages[0]], {
        opacity: 1,
      });

      // Heritage badge entrance
      gsap.fromTo(
        badgeRef.current,
        {
          opacity: 0,
          scale: 0.85,
          rotation: 4,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 12,
          duration: 1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, section);

    activePairRef.current = 0;
    setActivePair(0);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (!isSectionVisible) return;
    const timeout = window.setTimeout(() => {
      const nextIndex = (activePairRef.current + 1) % storyImagePairs.length;

      changePair(nextIndex);
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [timerKey, isSectionVisible]);

  const goToPreviousPair = () => {
    const previousIndex =
      (activePairRef.current - 1 + storyImagePairs.length) %
      storyImagePairs.length;

    changePair(previousIndex);
  };

  const goToNextPair = () => {
    const nextIndex = (activePairRef.current + 1) % storyImagePairs.length;

    changePair(nextIndex);
  };

  return (
    <section
      ref={sectionRef}
      className="story-section bg-aepy-cream py-8 relative"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-18 lg:py-16 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Story content */}
          <div className="relative z-10">
            <Reveal direction="up">
              <SectionEyebrow>Our Story</SectionEyebrow>
            </Reveal>

            <div className="mt-6">
              <Reveal direction="up" delay={0.1}>
                <SectionHeading className="max-w-full md:max-w-xl">
                  A Legacy of Taste <br className="md:hidden lg:block" />
                  Since <span className="italic text-aepy-orange">1965</span>
                </SectionHeading>
              </Reveal>
            </div>

            <Reveal direction="up" delay={0.25}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-aepy-chocolate sm:text-lg sm:leading-8">
                From a humble beginning in 1965 to a beloved bakery with
                multiple outlets, Aepy Bakery has been part of generations of
                sweet memories. For over five decades, we&apos;ve stayed true to
                our passion — crafting fresh, quality bakes that bring people
                together.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.4}>
              <Button
                to="/about"
                variant="primary"
                size="lg"
                className="w-full min-[420px]:w-auto mt-9"
              >
                Discover Our Story
                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Button>
            </Reveal>
          </div>

          {/* Mobile and tablet cinematic collage */}
          <div className="lg:hidden">
            <MobileStoryCollage />
          </div>

          {/* Desktop Image collage */}
          <div className="relative mx-auto hidden lg:block w-full max-w-2xl min-h-130 sm:min-h-150 lg:min-h-135">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="
                absolute right-[5%] top-[12%]
                h-[70%] w-[85%]
                rounded-[45%_55%_35%_45%]
                bg-aepy-caramel/35
              "
            />
            {/* Left image frame */}
            <StoryImageFrame
              frameRef={leftFrameRef}
              images={storyImagePairs.map((pair) => pair.left)}
              className="relative z-10 h-64 w-[88%] border-[6px] border-white shadow-xl sm:h-80 
              lg:absolute lg:left-0 lg:top-8 lg:h-82.5 lg:w-[75%] lg:-rotate-2"
            />
            {/* Right image frame */}
            <StoryImageFrame
              frameRef={rightFrameRef}
              images={storyImagePairs.map((pair) => pair.right)}
              className="relative z-20 -mt-12 ml-auto h-64 w-[82%] border-[6px] border-white shadow-xl
               sm:h-80 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-80 lg:w-[68%] lg:rotate-2"
            />

            <Badge
              badgeRef={badgeRef}
              year="1965"
              topText="Serving Happiness Since"
              className="
              w-32 rotate-12 select-none
              absolute right-0 top-0 z-30
              sm:-right-2 sm:-top-3 sm:w-36
              lg:right-6 lg:top-14 lg:w-44"
            />

            {/* Story Image Navigation */}
            <div className="absolute -bottom-14 right-2 z-30 hidden items-center gap-3 lg:flex">
              <button
                type="button"
                onClick={goToPreviousPair}
                aria-label="Previous image pair"
                className="text-aepy-orange rounded-full hover:bg-aepy-ivory p-1"
              >
                <ChevronLeft />
              </button>

              {storyImagePairs.map((pair, index) => (
                <button
                  key={pair.id}
                  type="button"
                  onClick={() => changePair(index)}
                  aria-label={`Show image pair ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    activePair === index
                      ? "w-7 bg-aepy-orange"
                      : "w-2 bg-aepy-caramel hover:bg-aepy-orange"
                  }`}
                />
              ))}

              <button
                type="button"
                onClick={goToNextPair}
                aria-label="Next image pair"
                className="text-aepy-orange rounded-full hover:bg-aepy-ivory p-1"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurStory;
