import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Activity, Braces, Database, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import { resumeFacts } from "../data/resume";
import { itemReveal, motionTokens } from "../lib/motion";
import { MagneticButton } from "./MagneticButton";

const heroSequence = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 0.55], reduceMotion ? [0, 0] : [0, 120]);

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden px-4 pt-32 sm:px-6">
      <motion.div
        aria-hidden="true"
        style={{ y: drift }}
        className="absolute left-1/2 top-24 -z-10 h-[48rem] w-[48rem] -translate-x-1/2 rounded-full bg-steel/10 blur-3xl"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,rgba(8,11,13,0.98),rgba(12,20,23,0.94)_48%,rgba(8,11,13,0.98))]" />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-12 py-16 lg:grid-cols-[1.08fr_0.82fr]">
        <motion.div
          variants={heroSequence}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <motion.div variants={itemReveal} className="hud-chip mb-8 inline-flex items-center gap-3">
            <Activity className="size-4 text-steel" aria-hidden="true" />
            <span>{profile.status}</span>
          </motion.div>
          <motion.p variants={itemReveal} className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-brass">
            Data Science / Android / Full-Stack
          </motion.p>
          <motion.h1
            variants={itemReveal}
            className="max-w-4xl font-display text-[clamp(4rem,14vw,8.9rem)] font-bold leading-[0.8] tracking-normal text-bone"
          >
            Akshat
            <span className="block text-bone-soft">Kumar Sinha</span>
          </motion.h1>
          <motion.p variants={itemReveal} className="mt-8 max-w-2xl text-lg leading-8 text-bone-soft sm:text-xl">
            Computer Science student at SRMIST building disciplined, data-driven systems
            across Python automation, Android interfaces, and full-stack products.
          </motion.p>
          <motion.div variants={itemReveal} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <MagneticButton href="#work">View Work</MagneticButton>
            <MagneticButton href={profile.resumeHref} variant="ghost" download>
              Resume
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.aside
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: 34, filter: "blur(10px)" }}
          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.78, ...motionTokens.reveal }}
          className="field-sheet relative rounded-[8px] border border-hairline bg-ink-overlay p-5 shadow-hud backdrop-blur-xl"
        >
          <div className="mb-8 flex items-start justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-steel">Field Notes</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-none text-bone">
                Builder profile
              </h2>
            </div>
            <MapPin className="mt-1 size-5 text-brass" aria-hidden="true" />
          </div>
          <div className="space-y-4">
            {resumeFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.92 + index * 0.08, ...motionTokens.reveal }}
                className="grid grid-cols-[5.5rem_1fr] gap-4 border-t border-hairline pt-4"
              >
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-bone-muted">
                  {fact.label}
                </span>
                <span>
                  <strong className="block font-mono text-sm font-medium text-bone">{fact.value}</strong>
                  <span className="mt-1 block text-sm leading-6 text-bone-soft">{fact.detail}</span>
                </span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="stat-tile">
              <Database className="size-5 text-steel" aria-hidden="true" />
              <span>Data pipelines</span>
            </div>
            <div className="stat-tile">
              <Braces className="size-5 text-steel" aria-hidden="true" />
              <span>Product code</span>
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
