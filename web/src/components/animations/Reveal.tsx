import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { revealVariants, type RevealDirection } from "./variants";

interface RevealProps {
  children: ReactNode;
  direction?: RevealDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={revealVariants[direction]}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{
        once,
        amount: 0.2,
      }}

      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
export default Reveal;
