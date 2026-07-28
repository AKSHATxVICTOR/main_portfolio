import type { Transition, Variants } from "framer-motion";

export const smoothEase = [0.22, 1, 0.36, 1] as const;

export const motionTokens = {
  reveal: { duration: 0.7, ease: smoothEase },
  quick: { duration: 0.24, ease: smoothEase },
  spring: { type: "spring", stiffness: 260, damping: 24, mass: 0.8 } satisfies Transition,
} as const;

export const revealGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const revealItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: motionTokens.reveal,
  },
};
