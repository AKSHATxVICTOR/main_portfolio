export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const profile = {
  name: "Akshat Kumar Sinha",
  initials: "AKS",
  role: "Data Science / Android / Full-Stack Developer",
  location: "SRMIST, B.Tech CSE (Data Science)",
  status: "Available for opportunities",
  email: "akshatkrsinha@gmail.com",
  phone: "+91 98715 58731",
  resumeHref: "/assets/resume/AKSHAT%20KUMAR%20SINHA%20RESUME.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/AKSHATxVICTOR",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akshat-kumar-sinha-082981286/",
      external: true,
    },
    {
      label: "Email",
      href: "mailto:akshatkrsinha@gmail.com",
    },
  ] satisfies SocialLink[],
  flavorLines: [
    "Every commit marks the path forward.",
    "Precision first. Momentum second. Shipping always.",
    "Build the system. Read the signal.",
  ],
};
