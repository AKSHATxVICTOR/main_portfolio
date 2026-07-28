export type SkillGroup = {
  title: string;
  summary: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    summary: "Core programming languages used across data, web, and mobile development.",
    skills: ["C", "C++", "Python", "JavaScript", "Kotlin"],
  },
  {
    title: "Frontend & Product UI",
    summary: "Responsive interfaces, reusable components, and production-facing web modules.",
    skills: ["React.js", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Responsive Web Design"],
  },
  {
    title: "Data & APIs",
    summary: "Data analysis, API integration, financial time-series workflows, and reporting utilities.",
    skills: ["Pandas", "Data Analysis", "API Integration", "Financial Time-Series Analysis", "Excel Reporting"],
  },
  {
    title: "Tools & Platforms",
    summary: "Development tools and environments used for coding, collaboration, and mobile work.",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "IntelliJ IDEA"],
  },
  {
    title: "Systems",
    summary: "Hands-on infrastructure experience from self-hosting and remote-access setup.",
    skills: ["Ubuntu Server", "CasaOS", "Tailscale", "Linux Administration", "Self-Hosting"],
  },
  {
    title: "Professional Skills",
    summary: "Collaboration and problem-solving strengths highlighted in the resume.",
    skills: ["Problem Solving", "Team Collaboration", "Communication", "Analytical Thinking"],
  },
];