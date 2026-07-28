import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";
import { motionTokens } from "../lib/motion";
import { GlassPanel } from "./GlassPanel";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();
  const linkProps = project.href
    ? { as: "a" as const, href: project.href, target: "_blank", rel: "noreferrer" }
    : { as: "article" as const };

  return (
    <GlassPanel
      {...linkProps}
      interactive={Boolean(project.href)}
      className="group block min-h-[29rem] p-6 outline-none focus-visible:ring-2 focus-visible:ring-accent-primary"
    >
      <div className="mb-8 h-40 overflow-hidden rounded-[24px] border border-white/[0.12] bg-white/[0.055]">
        <motion.div
          animate={reduceMotion ? undefined : { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="h-full bg-[linear-gradient(120deg,rgba(84,214,255,.18),rgba(167,139,250,.2),rgba(255,255,255,.08))] bg-[length:220%_220%]"
        />
      </div>
      <div className="flex items-center justify-between gap-5">
        <p className="text-sm font-medium text-accent-primary">{project.eyebrow}</p>
        {project.href ? (
          <ArrowUpRight className="size-5 text-text-secondary transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-primary" aria-hidden="true" />
        ) : null}
      </div>
      <h3 className="mt-4 text-3xl font-semibold leading-tight text-text-primary">{project.title}</h3>
      <p className="mt-5 leading-7 text-text-secondary">{project.description}</p>
      <p className="mt-5 leading-7 text-text-muted transition-colors group-hover:text-text-secondary">{project.outcome}</p>
      <div className="mt-7 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-chip">{tech}</span>
        ))}
      </div>
    </GlassPanel>
  );
}