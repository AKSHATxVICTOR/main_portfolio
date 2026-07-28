import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { revealGroup, revealItem } from "../lib/motion";
import { GlassButton } from "./GlassButton";
import { GlassPanel } from "./GlassPanel";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", value: "AKSHATxVICTOR", href: "https://github.com/AKSHATxVICTOR", icon: Github, external: true },
  { label: "LinkedIn", value: "akshat-kumar-sinha", href: "https://www.linkedin.com/in/akshat-kumar-sinha-082981286/", icon: Linkedin, external: true },
];

export function Closing() {
  return (
    <motion.section
      id="contact"
      variants={revealGroup}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="section-space pb-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div variants={revealItem}>
          <GlassPanel className="overflow-hidden p-7 sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-accent-primary/90">Resume & contact</p>
                <h2 className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.9] text-text-primary">
                  Let’s build something useful.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary">
                  Reach out for internships, collaborations, or product work that needs data-aware engineering and clean execution.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <GlassButton href={profile.resumeHref} download>Download resume</GlassButton>
                  <GlassButton href={`mailto:${profile.email}`} variant="secondary">Email Akshat</GlassButton>
                </div>
              </div>
              <div className="grid gap-3">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="contact-card"
                    >
                      <Icon className="size-5 text-accent-primary" aria-hidden="true" />
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-[0.18em] text-text-muted">{link.label}</span>
                        <strong className="mt-1 block break-all text-text-primary">{link.value}</strong>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </motion.section>
  );
}
