import { motion } from "framer-motion";
import { GraduationCap, Layers3 } from "lucide-react";
import { revealGroup, revealItem } from "../lib/motion";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <motion.section
      id="about"
      variants={revealGroup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className="section-space"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="About"
          title="A developer focused on useful, reliable software."
          copy="I am a Computer Science student specializing in Data Science at SRMIST. I work across data automation, Android development, and full-stack web tools, with a preference for clear architecture and measurable outcomes."
        />
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <motion.div variants={revealItem}>
            <GlassPanel className="h-full p-7 sm:p-9">
              <GraduationCap className="mb-8 size-8 text-accent-primary" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-text-primary">Current path</h3>
              <p className="mt-5 text-lg leading-8 text-text-secondary">
                I am pursuing B.Tech CSE in Data Science at SRMIST, balancing academic foundations with hands-on product work: automation scripts, finance utilities, and campus workflow tools.
              </p>
            </GlassPanel>
          </motion.div>
          <motion.div variants={revealItem}>
            <GlassPanel className="h-full p-7 sm:p-9">
              <Layers3 className="mb-8 size-8 text-accent-primary" aria-hidden="true" />
              <h3 className="text-2xl font-semibold text-text-primary">Working style</h3>
              <p className="mt-5 text-lg leading-8 text-text-secondary">
                The through-line is practical engineering: understand the workflow, build the smallest durable system, handle edge cases, and keep the interface readable for the person using it next.
              </p>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
