import { motion } from "framer-motion";
import { itemReveal } from "../lib/motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <motion.div variants={itemReveal} className="mb-12 max-w-3xl">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-steel">
        {eyebrow}
      </p>
      <h2 className="font-display text-[clamp(2.5rem,7vw,4.75rem)] font-semibold leading-[0.9] text-bone">
        {title}
      </h2>
      {copy ? <p className="mt-6 max-w-2xl text-lg leading-8 text-bone-soft">{copy}</p> : null}
    </motion.div>
  );
}
