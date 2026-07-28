export type SkillMetric = {
  name: string;
  level: number;
  note: string;
};

export type SkillGroup = {
  title: string;
  callsign: string;
  skills: SkillMetric[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    callsign: "CORE",
    skills: [
      { name: "Python", level: 88, note: "Automation, data pipelines" },
      { name: "Kotlin", level: 76, note: "Android development" },
      { name: "JavaScript", level: 78, note: "Web utilities, UI logic" },
      { name: "C / C++", level: 68, note: "Foundational systems work" },
    ],
  },
  {
    title: "Data & Analytics",
    callsign: "SIGNAL",
    skills: [
      { name: "Pandas", level: 84, note: "Cleaning, transforms, reporting" },
      { name: "Time-Series Analysis", level: 72, note: "Market movement studies" },
      { name: "API Extraction", level: 82, note: "Resilient data collection" },
      { name: "SQL", level: 70, note: "Structured querying" },
    ],
  },
  {
    title: "Build Systems",
    callsign: "FIELD",
    skills: [
      { name: "Android Studio", level: 75, note: "Mobile workflows" },
      { name: "Git", level: 82, note: "Versioned delivery" },
      { name: "Node.js", level: 70, note: "Portal backends" },
      { name: "Clean Code", level: 86, note: "Readable, maintainable systems" },
    ],
  },
];
