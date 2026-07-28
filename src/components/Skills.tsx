import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { revealGroup, revealItem } from "../lib/motion";
import { GlassPanel } from "./GlassPanel";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <motion.section
      id="skills"
      variants={revealGroup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="section-space"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Skills"
          title="A stack shaped around data and product delivery."
          copy="Grouped by how the tools are used in real projects: data workflows, application development, and engineering practice."
        />
        <motion.div variants={revealItem} className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <GlassPanel key={group.title} className="p-6 sm:p-7">
              <h3 className="text-2xl font-semibold text-text-primary">{group.title}</h3>
              <p className="mt-3 min-h-16 leading-7 text-text-secondary">{group.summary}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tech-chip">{skill}</span>
                ))}
              </div>
            </GlassPanel>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
