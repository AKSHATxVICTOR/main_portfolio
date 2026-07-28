import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { motionTokens } from "../lib/motion";

type GlassButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  download?: boolean;
};

export function GlassButton({
  href,
  children,
  variant = "primary",
  external = false,
  download = false,
}: GlassButtonProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={motionTokens.spring}
      className={`glass-button ${variant === "primary" ? "glass-button-primary" : "glass-button-secondary"}`}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="size-4" />
    </motion.a>
  );
}
