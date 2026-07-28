export type Project = {
  id: string;
  title: string;
  eyebrow: string;
  href?: string;
  description: string;
  outcome: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "banking-market-intelligence",
    title: "Banking Market Intelligence Automation",
    eyebrow: "Data automation",
    href: "https://github.com/AKSHATxVICTOR/Banking-market-automation",
    description:
      "A Python automation pipeline that collects and processes live banking market data through financial APIs.",
    outcome:
      "Generated Excel-ready analytical reports, improved data quality through preprocessing and normalization, and handled timezone/API edge cases.",
    tech: ["Python", "Pandas", "Financial APIs", "Excel"],
  },
  {
    id: "financial-calculations",
    title: "FI Calculations",
    eyebrow: "Web utility",
    href: "https://ficalculations.netlify.app/",
    description:
      "A web application for financial calculations including returns, compounding, and investment metrics.",
    outcome:
      "Built reusable calculation modules and CSV-based financial data processing utilities for browser-based workflows.",
    tech: ["JavaScript", "PapaParse", "HTML", "CSS"],
  },
  {
    id: "srm-access-portal",
    title: "Student Access Portal",
    eyebrow: "Role-based portal",
    href: "https://srm-access-portal.netlify.app/",
    description:
      "A role-based portal for students, mentors, and administrators to manage campus-related workflows.",
    outcome:
      "Implemented secure access control and centralized information management to improve transparency and communication.",
    tech: ["Node.js", "MongoDB", "HTML", "CSS"],
  },
  {
    id: "self-hosted-home-server",
    title: "Self-Hosted Home Server Infrastructure",
    eyebrow: "Systems project",
    description:
      "A repurposed laptop running Ubuntu Server and CasaOS for personal cloud and application hosting.",
    outcome:
      "Configured Tailscale VPN for secure remote access and gained hands-on experience with Linux administration, networking, and self-hosting.",
    tech: ["Ubuntu Server", "CasaOS", "Tailscale", "Linux"],
  },
];