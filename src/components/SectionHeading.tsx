import { motion } from "framer-motion";
import { revealItem } from "../lib/motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({ label, title, copy, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      variants={revealItem}
      className={`mb-12 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}
    >
      <p className="mb-4 text-sm font-medium tracking-[0.24em] text-accent-primary/90 uppercase">
        {label}
      </p>
      <h2 className="font-display text-[clamp(2.75rem,7vw,4.9rem)] font-semibold leading-[0.92] tracking-normal text-text-primary">
        {title}
      </h2>
      {copy ? <p className="mt-6 text-lg leading-8 text-text-secondary">{copy}</p> : null}
    </motion.div>
  );
}
