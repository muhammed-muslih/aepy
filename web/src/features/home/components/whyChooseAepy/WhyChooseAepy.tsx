import Reveal from "@/components/animations/Reveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import Container from "@/components/ui/Container";
import WhyChooseAepyCard from "./WhyChooseAepyCard";
import { whyChooseAepyData } from "../../data/whyChooseAepyData";
import { motion, type Variants } from "framer-motion";

const cardsContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const WhyChooseAepy = () => {
  return (
    <section
      id="why-choose-aepy"
      className="relative overflow-hidden bg-aepy-cream py-10 sm:py-14 lg:py-18"
    >
      <Container>
        {/* Left:  Heading Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12">
          <div>
            {/* Eyebrow and Heading */}
            <Reveal direction="up">
              <SectionEyebrow>Why Choose Aepy</SectionEyebrow>
            </Reveal>

            <Reveal direction="up" delay={0.1} className="mt-6">
              <SectionHeading>
                A Legacy of
                <br className="md:hidden lg:block" />{" "}
                <span className="text-aepy-orange">Freshness & Trust.</span>
              </SectionHeading>
            </Reveal>
          </div>

          {/* Right: Description */}
          <Reveal direction="up" delay={0.2}>
            <div
              className="flex items-stretch gap-5 lg:ml-auto lg:max-w-lg bg-white lg:bg-aepy-cream  lg:border-0 border 
             border-aepy-chocolate/10  p-5 sm:p-6 rounded-2xl lg:rounded-none"
            >
              {/* Vertical Divider */}
              <div className="w-1 shrink-0 rounded-full bg-aepy-orange/70" />

              <div className="flex flex-col justify-center gap-4">
                <p className="text-base font-medium leading-relaxed text-aepy-chocolate/85 sm:text-lg">
                  Since 1965, Aepy Bakery has been crafting delightful treats
                  with care and passion, bringing generations together through
                  the joy of good food.
                </p>

                <span className="text-xs font-bold uppercase tracking-[0.18em] text-aepy-orange">
                  Crafted with Care · Since 1965
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Feature Cards */}
        <motion.div
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-12 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6"
        >
          {whyChooseAepyData.map((item) => (
            <motion.div key={item.id} variants={cardItem} className="h-full">
              <WhyChooseAepyCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseAepy;
