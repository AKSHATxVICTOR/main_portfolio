import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { motionTokens } from "../lib/motion";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: MagneticButtonProps) {
  const reduceMotion = useReducedMotion();
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={motionTokens.spring}
      className={[
        "group relative inline-flex min-h-12 items-center gap-3 overflow-hidden rounded-[6px] border px-5 py-3 font-mono text-[0.72rem] font-medium uppercase tracking-[0.18em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-steel focus-visible:ring-offset-2 focus-visible:ring-offset-ink-base",
        isPrimary
          ? "border-steel/60 bg-steel text-ink-base hover:border-steel-bright"
          : "border-hairline bg-white/[0.03] text-bone hover:border-steel/60 hover:text-steel-bright",
      ].join(" ")}
    >
      <span
        className={[
          "absolute inset-y-0 left-0 w-0 transition-all duration-300 group-hover:w-full",
          isPrimary ? "bg-bone/22" : "bg-steel/10",
        ].join(" ")}
      />
      <span className="relative">{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="relative size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
      />
    </motion.a>
  );
}
