import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";

export function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.035] px-5 py-5 text-sm text-text-muted backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
        <div className="flex flex-wrap gap-4">
          {profile.socials.map((link) => (
            <a key={link.label} href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="transition hover:text-text-primary">
              <span className="inline-flex items-center gap-1.5">
                {link.label}
                {link.external ? <ArrowUpRight aria-hidden="true" className="size-4" /> : null}
              </span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
