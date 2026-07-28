import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { itemReveal, sectionReveal } from "../lib/motion";
import { MagneticButton } from "./MagneticButton";
import { SectionHeading } from "./SectionHeading";

export function Closing() {
  return (
    <motion.section
      id="contact"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      className="section-shell bg-ink-raised/45"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="04 - Contact"
          title="Ready for the next build."
          copy="Open to internships, collaborations, and product work where data, mobile, and web systems need careful execution."
        />
        <motion.div variants={itemReveal} className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="max-w-2xl font-display text-[clamp(2.4rem,6vw,5.2rem)] font-semibold leading-[0.9] text-bone">
              Build the system. Read the signal. Ship with intent.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <MagneticButton href={`mailto:${profile.email}`}>Contact Me</MagneticButton>
              <MagneticButton href={profile.resumeHref} variant="ghost" download>
                Download Resume
              </MagneticButton>
            </div>
          </div>
          <address className="dossier-panel not-italic">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail className="size-5" aria-hidden="true" />
              <span>
                <span>Email</span>
                <strong>{profile.email}</strong>
              </span>
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-link">
              <Phone className="size-5" aria-hidden="true" />
              <span>
                <span>Phone</span>
                <strong>{profile.phone}</strong>
              </span>
            </a>
            <a href="https://github.com/AKSHATxVICTOR" target="_blank" rel="noreferrer" className="contact-link">
              <Github className="size-5" aria-hidden="true" />
              <span>
                <span>GitHub</span>
                <strong>AKSHATxVICTOR</strong>
              </span>
            </a>
            <a href="https://www.linkedin.com/in/akshat-kumar-sinha-082981286/" target="_blank" rel="noreferrer" className="contact-link">
              <Linkedin className="size-5" aria-hidden="true" />
              <span>
                <span>LinkedIn</span>
                <strong>akshat-kumar-sinha</strong>
              </span>
            </a>
          </address>
        </motion.div>
      </div>
    </motion.section>
  );
}
