import type { Update } from "@/types";

// ─── EDIT HERE: Latest news / timeline entries ────────────────────────────
// Add newest entry at the TOP. dot color: use any hex color.
const updates: Update[] = [
  {
    date: "Apr 2025",
    title: "COMIRB IRB Approved — IonSpiro 🎉",
    desc: "Protocol 26-0702 approved. Novel NAI-based spirometer study with Dr. Nam Bui (PI) can now proceed to data collection.",
    tag: "Clinical",
    dot: "#8e6ff7",
  },
  {
    date: "Mar 2025",
    title: "Paper submitted to NAHS",
    desc: 'Submitted revision of "Optimal Control of the Sweeping Process with Moving Controlled Polyhedral Sets" to Nonlinear Analysis: Hybrid Systems.',
    tag: "Research",
    dot: "#6366f1",
  },
  {
    date: "Feb 2025",
    title: "NIH R21 exoskeleton review completed",
    desc: "Delivered systematic literature review across 100+ papers. Structured 14-field schema for grant submission.",
    tag: "Grant",
    dot: "#a855f7",
  },
  {
    date: "Jan 2025",
    title: "TasteSensing — BioZ pipeline live",
    desc: "MAX30001 real-time reader functional with packet parsing, init command sequencing, and CSV logging.",
    tag: "Project",
    dot: "#525252",
  },
];

export default updates;
