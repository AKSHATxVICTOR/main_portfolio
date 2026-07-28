import type { Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const motionTokens = {
  reveal: { duration: 0.65, ease: easeOut },
  quick: { duration: 0.22, ease: easeOut },
  spring: { type: "spring", stiffness: 360, damping: 28 },
} as const;

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...motionTokens.reveal, staggerChildren: 0.09 },
  },
};

export const itemReveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: motionTokens.reveal,
  },
};
