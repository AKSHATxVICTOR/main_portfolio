import { motion } from "framer-motion";
import { BookOpen, Compass, Layers } from "lucide-react";
import { itemReveal, sectionReveal } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

const principles = [
  "Designing systems for reliability and scale",
  "Building automation with clear data contracts",
  "Prioritizing readability, maintainability, and performance",
];

export function About() {
  return (
    <motion.section
      id="about"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="section-shell"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="01 - About"
          title="Journal of a practical builder."
          copy="Akshat works where clean code and analytical clarity meet: data extraction, mobile interfaces, and web systems that remove friction from real workflows."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div variants={itemReveal} className="dossier-panel p-6 sm:p-8">
            <BookOpen className="mb-8 size-7 text-brass" aria-hidden="true" />
            <p className="text-xl leading-9 text-bone-soft">
              Computer Science student specializing in Data Science at SRMIST. The
              work is pragmatic: build the data path, shape the interface, check the
              edge cases, and make the result easy for the next person to maintain.
            </p>
          </motion.div>
          <motion.div variants={itemReveal} className="grid gap-4">
            {principles.map((principle, index) => (
              <div key={principle} className="mission-row">
                <span className="font-mono text-xs text-steel">0{index + 1}</span>
                <span className="text-bone">{principle}</span>
              </div>
            ))}
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="spec-card">
                <Compass className="size-5 text-steel" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone-muted">
                  Direction
                </span>
                <strong>Data Science at SRMIST</strong>
              </div>
              <div className="spec-card">
                <Layers className="size-5 text-steel" aria-hidden="true" />
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-bone-muted">
                  Stack
                </span>
                <strong>Python / Kotlin / JS</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
