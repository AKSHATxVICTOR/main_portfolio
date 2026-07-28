import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { itemReveal, sectionReveal } from "../lib/motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <motion.section
      id="work"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="section-shell bg-ink-raised/40"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="02 - Work"
          title="Selected missions, real outcomes."
          copy="Project cards are treated like compact operation briefs: what was built, why it mattered, and the technical stack behind it."
        />
        <motion.div variants={itemReveal} className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
