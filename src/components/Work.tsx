import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { revealGroup, revealItem } from "../lib/motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHeading } from "./SectionHeading";

export function Work() {
  return (
    <motion.section
      id="work"
      variants={revealGroup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      className="section-space"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Selected work"
          title="Projects with practical outcomes."
          copy="A small set of real builds across data automation, financial tools, and full-stack campus workflows."
        />
        <motion.div variants={revealItem} className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.id} project={project} />)}
        </motion.div>
      </div>
    </motion.section>
  );
}
