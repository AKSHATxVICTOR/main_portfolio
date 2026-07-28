import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";
import { itemReveal, sectionReveal } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";
import { SkillBar } from "./SkillBar";

export function Skills() {
  return (
    <motion.section
      id="skills"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      className="section-shell"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="03 - Skills"
          title="A stat sheet for the craft."
          copy="Skill groups use mastery bars and compact notes instead of a flat tag cloud, so each capability has context."
        />
        <motion.div variants={itemReveal} className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="dossier-panel p-5 sm:p-6">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-3xl font-semibold text-bone">{group.title}</h3>
                <span className="rounded-full border border-steel/30 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-steel">
                  {group.callsign}
                </span>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
