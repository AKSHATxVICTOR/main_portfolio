import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { motionTokens } from "../lib/motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: profile.resumeHref, external: true },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 18);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={motionTokens.reveal}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav className={`glass-nav mx-auto max-w-5xl ${scrolled ? "glass-nav-scrolled" : ""}`} aria-label="Primary navigation">
        <a href="#home" className="flex items-center gap-3 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-accent-primary">
          <span className="grid size-9 place-items-center rounded-full bg-white/[0.12] text-sm font-semibold text-text-primary shadow-inner">
            {profile.initials}
          </span>
          <span className="hidden text-sm font-medium text-text-primary sm:inline">Akshat Kumar Sinha</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="rounded-full px-4 py-2 text-sm font-medium text-text-secondary outline-none transition hover:bg-white/10 hover:text-text-primary focus-visible:ring-2 focus-visible:ring-accent-primary"
            >
              {link.label}{link.external ? " ↗" : ""}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid size-10 place-items-center rounded-full bg-white/10 text-text-primary outline-none focus-visible:ring-2 focus-visible:ring-accent-primary md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12, scale: 0.98 }}
            transition={motionTokens.spring}
            className="glass-mobile-menu mx-4 mt-3 p-4 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-4 text-lg font-medium text-text-primary outline-none transition hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent-primary"
              >
                {link.label}{link.external ? " ↗" : ""}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
