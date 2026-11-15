import type { Variants } from "framer-motion";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale";

export const revealVariants: Record<RevealDirection, Variants> = {
  up: {
    hidden: {
      opacity: 0,
      y: 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  down: {
    hidden: {
      opacity: 0,
      y: -24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  },
  left: {
    hidden: {
      opacity: 0,
      x: -24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  right: {
    hidden: {
      opacity: 0,
      x: 24,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  },
  scale: {
    hidden: {
      opacity: 0,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
  },
};
