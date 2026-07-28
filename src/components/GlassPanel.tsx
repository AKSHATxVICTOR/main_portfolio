import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { motionTokens } from "../lib/motion";

type GlassPanelProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  interactive?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function GlassPanel<T extends ElementType = "div">({
  as,
  children,
  className = "",
  interactive = false,
  ...props
}: GlassPanelProps<T>) {
  const reduceMotion = useReducedMotion();
  const Component = motion(as ?? "div");

  return (
    <Component
      whileHover={interactive && !reduceMotion ? { y: -6, scale: 1.01 } : undefined}
      whileTap={interactive && !reduceMotion ? { scale: 0.99 } : undefined}
      transition={motionTokens.spring}
      className={`glass-surface ${className}`}
      {...props}
    >
      <span aria-hidden="true" className="glass-sheen" />
      {children}
    </Component>
  );
}
