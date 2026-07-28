import { motion, useReducedMotion } from "framer-motion";
import type { SkillMetric } from "../data/skills";

type SkillBarProps = {
  skill: SkillMetric;
};

export function SkillBar({ skill }: SkillBarProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="border-t border-hairline py-4">
      <div className="mb-3 flex items-start justify-between gap-5">
        <div>
          <h4 className="font-medium text-bone">{skill.name}</h4>
          <p className="mt-1 text-sm text-bone-muted">{skill.note}</p>
        </div>
        <span className="font-mono text-xs text-steel">{skill.level}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          initial={{ width: reduceMotion ? `${skill.level}%` : 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-steel to-steel-bright"
        />
      </div>
    </div>
  );
}
