import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const x = useSpring(mouseX, { stiffness: 180, damping: 28, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 180, damping: 28, mass: 0.6 });

  useEffect(() => {
    if (reduceMotion) return undefined;

    const onMove = (event: PointerEvent) => {
      setVisible(true);
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, [mouseX, mouseY, reduceMotion]);

  if (reduceMotion) return null;

  return <motion.div aria-hidden="true" className="cursor-glow" style={{ x, y, opacity: visible ? 0.72 : 0 }} />;
}