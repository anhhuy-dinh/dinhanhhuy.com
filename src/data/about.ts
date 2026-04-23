import type { Education, Experience, SkillGroup } from "@/types";

// ─── EDIT HERE: Bio paragraph ─────────────────────────────────────────────────
export const bio = {
  headline: "what if a chip could understand your body in real time?",
  intro:
    "I'm a PhD researcher in EE who got obsessed with one question: what if a chip could understand your body in real time? That led me down a rabbit hole of BioZ sensing, embedded inference, and building clinical wearable hardware that actually works outside a lab.",
  personal:
    "When I'm not debugging serial packets or reviewing IRB protocols, I'm probably sketching, cooking, or finding new music to yt-dlp. ☕ ✏️",
};

// ─── EDIT HERE: Quick facts sidebar ──────────────────────────────────────────
export const quickFacts = [
  { label: "Based in",  value: "Denver, Colorado" },
  { label: "Role",      value: "PhD Student" },
  { label: "Languages", value: "Vietnamese, English" },
  { label: "Interests", value: "Photography, Sketching, Cooking" },
  { label: "Email",     value: "anh-huy.2.dinh@ucdenver.edu" },
  { label: "Website",   value: "dinhanhhuy.com" },
];

// ─── EDIT HERE: Education ─────────────────────────────────────────────────────
export const education: Education[] = [
  {
    degree: "PhD, Applied Mathematics",
    school: "University of Colorado Denver",
    period: "2020 — Present",
    detail:
      "Research focus: Optimal control theory, sweeping process, moving set problems, and numerical analysis. Advisor: Dr. Nam Bui. NSF ECCS-2322879.",
  },
  {
    degree: "MSc, Applied Mathematics",
    school: "University of Colorado Denver",
    period: "2018 — 2020",
    detail: "Graduated with distinction. Coursework in functional analysis, PDEs, and numerical methods.",
  },
  {
    degree: "BSc, Mathematics",
    school: "University of Science, Vietnam National University",
    period: "2013 — 2017",
    detail: "Graduated top of class. Focus on mathematical analysis and algebra.",
  },
];

// ─── EDIT HERE: Work experience ──────────────────────────────────────────────
export const experience: Experience[] = [
  {
    role: "Data Scientist & Full Stack Developer",
    company: "Ideta (Septeo)",
    period: "2022 — Present",
    type: "Industry",
    detail:
      "Maintain docana RAG application on Azure. Build and maintain ideta-platoon-back Node.js backend alongside Angular frontend. Design custom document ingestion pipelines and LLM integrations.",
    tech: ["Python", "Node.js", "Angular", "Azure", "RAG", "PostgreSQL"],
  },
  {
    role: "Graduate Teaching Assistant & Lecturer",
    company: "University of Colorado Denver · Math & Stats Dept.",
    period: "2020 — Present",
    type: "Academic",
    detail:
      "Teach Applied Mathematics and Machine Learning courses. Coordinate GTA assignments and seminar scheduling. Developed ML/DL lab environment for 26 students (ELEC3520).",
    tech: ["Teaching", "ML", "Python", "Docker", "JupyterLab"],
  },
  {
    role: "Research Assistant — Embedded AI & BCI",
    company: "InsCy Lab · CU Denver",
    period: "2021 — Present",
    type: "Research",
    detail:
      "Lead development of TasteSensing BioZ platform and IonSpiro spirometer. Co-investigator on NIH R21 exoskeleton rehabilitation grant. Contribute to EEG-based taste perception research (TS-SEFFNet).",
    tech: ["Embedded C", "BioZ", "EEG", "PyTorch", "MAX30001", "COMIRB"],
  },
];

// ─── EDIT HERE: Tech stack ────────────────────────────────────────────────────
// icon: devicons URL pattern → https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{name}-original.svg
// icon: null → shows a dot placeholder
export const skillsGrouped: SkillGroup[] = [
  {
    group: "Embedded & Hardware",
    items: [
      { name: "Embedded C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "CUDA",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg" },
      { name: "MAX30001",       icon: null },
      { name: "BioZ Sensing",   icon: null },
      { name: "EEG",            icon: null },
    ],
  },
  {
    group: "AI & Machine Learning",
    items: [
      { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "PyTorch",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
      { name: "RAG / LLM",    icon: null },
      { name: "Signal Proc.", icon: null },
    ],
  },
  {
    group: "Web & Full Stack",
    items: [
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "FastAPI",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
      { name: "Angular",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    ],
  },
  {
    group: "DevOps & Cloud",
    items: [
      { name: "Azure",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
      { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Git",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Linux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "JupyterLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
    ],
  },
  {
    group: "Research & Math",
    items: [
      { name: "LaTeX",           icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" },
      { name: "MATLAB",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
      { name: "Optimal Control", icon: null },
      { name: "Num. Analysis",   icon: null },
      { name: "Academic Writing",icon: null },
    ],
  },
];
