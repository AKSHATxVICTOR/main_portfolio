import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Sparkles } from "lucide-react";
import { profile } from "../data/profile";
import { revealGroup, revealItem } from "../lib/motion";
import { GlassButton } from "./GlassButton";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.55], reduceMotion ? [0, 0] : [0, 260]);
  const glowY = useTransform(scrollYProgress, [0, 0.45], reduceMotion ? [0, 0] : [0, 90]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-4 pt-32 sm:px-6 lg:pt-36">
      <motion.div
        style={{ y: glowY }}
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        variants={revealGroup}
        initial="hidden"
        animate="visible"
        className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-6xl flex-col items-center justify-center pb-24 text-center"
      >
        <motion.h1 variants={revealItem} className="max-w-5xl font-display text-[clamp(4.3rem,13vw,9rem)] font-semibold leading-[0.84] tracking-normal text-text-primary">
          Akshat Kumar
          <span className="block bg-gradient-to-r from-text-primary via-accent-primary to-violet-200 bg-clip-text text-transparent">
            Sinha
          </span>
        </motion.h1>
        <motion.p variants={revealItem} className="mt-7 max-w-3xl text-xl leading-9 text-text-secondary">
          {profile.intro}
        </motion.p>
        <motion.div variants={revealItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <GlassButton href="#work">View work</GlassButton>
          <GlassButton href={`mailto:${profile.email}`} variant="secondary">Contact</GlassButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
