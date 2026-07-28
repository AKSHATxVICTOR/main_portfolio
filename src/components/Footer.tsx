import { profile } from "../data/profile";

export function Footer() {
  const line = profile.flavorLines[new Date().getFullYear() % profile.flavorLines.length];

  return (
    <footer className="border-t border-hairline px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-bone-muted">
          {profile.name} / Portfolio
        </p>
        <p className="text-sm text-bone-muted">{line}</p>
      </div>
    </footer>
  );
}
