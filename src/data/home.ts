import type { Stat } from "@/types";

// ─── EDIT HERE: Hero stats strip ─────────────────────────────────────────────
export const stats: Stat[] = [
  { num: "4+", label: "Publications" },
  { num: "6+", label: "Projects" },
  { num: "3",  label: "Grants" },
  { num: "26", label: "Students" },
];

// ─── EDIT HERE: How many items to preview on Home page ───────────────────────
export const HOME_UPDATES_COUNT   = 4;  // updates shown in home timeline
export const HOME_PUBS_COUNT      = 2;  // publications shown in home
export const HOME_PROJECTS_COUNT  = 3;  // projects shown in home
