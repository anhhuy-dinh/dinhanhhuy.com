import type { Update } from "@/types";

// ─── EDIT HERE: Latest news / timeline entries ────────────────────────────
// Add newest entry at the TOP. dot color: use any hex color.
const updates: Update[] = [
  {
    date: "Aug 2024",
    title: "Started PhD at University of Colorado Denver 🎓",
    desc: "Joined the InsCy Lab under Asst. Prof. Nam Bui. Research focus on EEG-based taste perception classification and novel 3D display systems.",
    tag: "Education",
    dot: "#8e6ff7",
  },
  {
    date: "Jan 2024",
    title: "OOKPIK paper published at MMM 2024",
    desc: "Paper accepted at the 30th International Conference on Multimedia Modeling (Amsterdam, Netherlands). Introducing a dataset for out-of-context image-caption cheapfake detection.",
    tag: "Publication",
    dot: "#4ade80",
  },
  {
    date: "Jul 2023",
    title: "Research Internship at InsCy Lab (Remote)",
    desc: "Started remote internship at CU Denver's InsCy Lab. Working on 3D video conferencing and low-cost volumetric 3D display using magnetic levitation.",
    tag: "Research",
    dot: "#6366f1",
  },
  {
    date: "Sep 2022",
    title: "Presented at SoMeT 2022 (KitaKyushu, Japan)",
    desc: "Presented drone detection paper at the 21st International Conference on Intelligent Software Methodologies, Tools, and Techniques — participated remotely.",
    tag: "Conference",
    dot: "#a855f7",
  },
];

export default updates;
