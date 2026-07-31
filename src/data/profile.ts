export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Akshat Kumar Sinha",
  initials: "AKS",
  role: "Data Science, Android, and Full-Stack Developer",
  location: "SRMIST, B.Tech CSE in Data Science",
  availability: "Open to internships, product work, and developer roles",
  email: "akshatkrsinha@gmail.com",
  phone: "+91 98715 58731",
  resumeHref: "/public/assets/resume/RESUME%20AKSHAT%20KUMAR%20SINHA.pdf",
  intro:
    "I am a Computer Science student specializing in Data Science at SRMIST, and I build practical projects across data automation, Android, web, and self-hosted infrastructure.",
  socials: [
    { label: "GitHub", href: "https://github.com/AKSHATxVICTOR", external: true },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akshat-kumar-sinha-082981286/",
      external: true,
    },
    { label: "Email", href: "mailto:akshatkrsinha@gmail.com" },
  ] satisfies SocialLink[],
};

export const highlights = [
  { label: "Current role", value: "Web Developer Intern", detail: "Routa Digital India, Jun 2026-present" },
  { label: "Program", value: "B.Tech CSE", detail: "Data Science at SRMIST, 2023-2027" },
  { label: "Current GPA", value: "8.19/10", detail: "Academic performance" },
];
