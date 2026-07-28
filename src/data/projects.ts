export type Project = {
  id: string;
  code: string;
  title: string;
  category: string;
  href: string;
  summary: string;
  result: string;
  tech: string[];
  accent: "steel" | "brass" | "ember";
};

export const projects: Project[] = [
  {
    id: "banking-market-intel",
    code: "MISSION 01",
    title: "Banking Market Intelligence",
    category: "Python / Finance",
    href: "https://github.com/AKSHATxVICTOR/Banking-market-automation",
    summary:
      "Financial API automation computing banking-stock returns with Excel-ready analytical reports.",
    result:
      "Handled timezone-aware timestamps, API inconsistencies, and multi-index structures for repeatable market research output.",
    tech: ["Python", "Pandas", "APIs", "Excel"],
    accent: "steel",
  },
  {
    id: "fi-calculations",
    code: "MISSION 02",
    title: "Financial Calculations Utility",
    category: "Web / Utility",
    href: "https://ficalculations.netlify.app/",
    summary:
      "A browser utility for return calculations, compounding, and reusable financial metrics.",
    result:
      "PapaParse-powered CSV processing keeps calculations client-side, modular, and easy to extend.",
    tech: ["JavaScript", "PapaParse", "CSS"],
    accent: "brass",
  },
  {
    id: "srm-access-portal",
    code: "MISSION 03",
    title: "SRM Access Portal",
    category: "Full-Stack / EdTech",
    href: "https://srm-access-portal.netlify.app/",
    summary:
      "Student-mentor connection portal designed to reduce physical paperwork and improve communication.",
    result:
      "Role-based flows for students, mentors, and administrators with a MongoDB-backed interface.",
    tech: ["MongoDB", "Node.js", "HTML/CSS"],
    accent: "ember",
  },
];
