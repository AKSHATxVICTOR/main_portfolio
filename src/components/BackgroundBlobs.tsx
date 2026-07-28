import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export function BackgroundBlobs() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yOne = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 140]);
  const yTwo = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -120]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-liquid-base">
      <motion.div
        style={{ y: yOne }}
        animate={reduceMotion ? undefined : { x: [0, 30, -20, 0], scale: [1, 1.08, 0.98, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob left-[-12rem] top-[-8rem] h-[32rem] w-[32rem] bg-cyan-400/26"
      />
      <motion.div
        style={{ y: yTwo }}
        animate={reduceMotion ? undefined : { x: [0, -34, 26, 0], scale: [1, 0.96, 1.08, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob right-[-10rem] top-[18rem] h-[34rem] w-[34rem] bg-violet-400/22"
      />
      <motion.div
        animate={reduceMotion ? undefined : { x: [0, 40, 0], y: [0, -28, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob bottom-[-14rem] left-[28%] h-[30rem] w-[30rem] bg-blue-500/18"
      />
    </div>
  );
}
