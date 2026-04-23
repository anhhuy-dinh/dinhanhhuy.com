export interface Update {
  date: string;
  title: string;
  desc: string;
  tag: string;
  dot: string;
}

export interface Project {
  title: string;
  badge: "open" | "patent" | "prop";
  tag: string;
  collab: string | null;
  status: string;
  statusColor: string;
  img: string;
  desc: string;
  detail: string;
  tech: string[];
  link: string | null;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  status: string;
  statusColor: string;
  abstract: string;
  links: { label: string; href: string }[];
}

export interface Award {
  title: string;
  year: string;
  desc: string;
}

export interface Stat {
  num: string;
  label: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  detail: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  type: "Industry" | "Academic" | "Research";
  detail: string;
  tech: string[];
}

export interface SkillItem {
  name: string;
  icon: string | null;
}

export interface SkillGroup {
  group: string;
  items: SkillItem[];
}
