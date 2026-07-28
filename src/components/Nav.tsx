import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "../data/profile";
import { motionTokens } from "../lib/motion";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: profile.resumeHref, external: true },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05, ...motionTokens.reveal }}
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
    >
      <nav
        aria-label="Primary navigation"
        className={[
          "mx-auto flex max-w-6xl items-center justify-between rounded-[8px] border px-4 py-3 transition-all duration-300",
          scrolled
            ? "border-hairline bg-ink-overlay shadow-hud backdrop-blur-xl"
            : "border-transparent bg-transparent",
        ].join(" ")}
      >
        <a
          href="#hero"
          className="font-mono text-sm font-medium uppercase tracking-[0.32em] text-bone outline-none focus-visible:ring-2 focus-visible:ring-steel"
        >
          {profile.initials}
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="group rounded-[5px] px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-bone-soft outline-none transition-colors hover:bg-white/[0.06] hover:text-bone focus-visible:ring-2 focus-visible:ring-steel"
            >
              {item.label}
              {item.external ? (
                <span className="ml-1 text-steel transition-transform group-hover:inline-block group-hover:translate-x-0.5">
                  -&gt;
                </span>
              ) : null}
            </a>
          ))}
        </div>
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-[5px] border border-hairline p-2 text-bone outline-none transition-colors hover:border-steel focus-visible:ring-2 focus-visible:ring-steel md:hidden"
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={motionTokens.reveal}
            className="fixed inset-0 -z-10 bg-ink-base/96 px-6 pt-28 backdrop-blur-xl md:hidden"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="mx-auto flex max-w-xl flex-col gap-4"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  onClick={() => setIsOpen(false)}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="border-b border-hairline py-5 font-display text-5xl text-bone outline-none focus-visible:ring-2 focus-visible:ring-steel"
                >
                  <span className="mr-4 font-mono text-xs text-steel">0{index + 1}</span>
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
