import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { motionTokens } from "../lib/motion";

type ProjectCardProps = {
  project: Project;
};

const accentClass: Record<Project["accent"], string> = {
  steel: "from-steel/24",
  brass: "from-brass/24",
  ember: "from-ember/24",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.a
      layoutId={`project-${project.id}`}
      href={project.href}
      target="_blank"
      rel="noreferrer"
      whileHover={reduceMotion ? undefined : { y: -8 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={motionTokens.spring}
      className="group relative min-h-[26rem] overflow-hidden rounded-[8px] border border-hairline bg-ink-panel p-5 shadow-line outline-none focus-visible:ring-2 focus-visible:ring-steel"
    >
      <div className={`absolute inset-x-0 top-0 h-36 bg-gradient-to-b ${accentClass[project.accent]} to-transparent`} />
      <div className="project-thumb mb-8 h-36 overflow-hidden rounded-[6px] border border-hairline bg-ink-base">
        <div className="grid h-full grid-cols-5 gap-px opacity-80">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index} className="bg-white/[0.03]" />
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-steel">
            {project.code}
          </span>
          <ArrowUpRight
            className="size-5 text-bone-soft transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-steel"
            aria-hidden="true"
          />
        </div>
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-bone-muted">
          {project.category}
        </p>
        <h3 className="font-display text-4xl font-semibold leading-none text-bone">
          {project.title}
        </h3>
        <p className="mt-5 text-sm leading-7 text-bone-soft">{project.summary}</p>
        <p className="mt-5 translate-y-3 text-sm leading-7 text-steel opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          {project.result}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="mono-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
