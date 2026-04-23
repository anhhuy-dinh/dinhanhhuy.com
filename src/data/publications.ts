import type { Publication } from "@/types";

// ─── EDIT HERE: Publications & Talks ─────────────────────────────────────────
// status options: "Published" | "Under Review" | "In Preparation" | "Guest Lecture" | "Presentation"
// statusColor:   "#4ade80" green | "#fbbf24" yellow | "#a3a3a3" gray | "#60a5fa" blue
const publications: Publication[] = [
  {
    title: "Optimal Control of the Sweeping Process with Moving Controlled Polyhedral Sets",
    authors: "D.A. Thi, N. Bui",
    venue: "Nonlinear Analysis: Hybrid Systems",
    year: "2024",
    status: "Under Review",
    statusColor: "#fbbf24",
    abstract:
      "This paper investigates optimal control problems governed by the sweeping process with moving controlled polyhedral sets. We derive necessary optimality conditions and develop numerical schemes based on Moreau's catching-up algorithm for practical computation.",
    links: [{ label: "View Paper", href: "#" }],
  },
  {
    title: "Numerical Analysis of Moreau's Catching-Up Algorithm for Sweeping Processes",
    authors: "D.A. Thi, N. Bui",
    venue: "Journal of Mathematical Analysis and Applications",
    year: "2023",
    status: "Published",
    statusColor: "#4ade80",
    abstract:
      "We analyze convergence properties of Moreau's catching-up algorithm applied to a class of sweeping processes with prox-regular sets. Error estimates are established and validated through numerical experiments in finite-dimensional spaces.",
    links: [
      { label: "View Paper", href: "#" },
      { label: "Journal", href: "#" },
    ],
  },
  {
    title: "EEG-Based Taste Perception Classification via TS-SEFFNet Dual-Modality Architecture",
    authors: "D.A. Thi, H. Dinh, N. Bui",
    venue: "IEEE BCI Workshop",
    year: "2024",
    status: "Published",
    statusColor: "#4ade80",
    abstract:
      "We present TS-SEFFNet, a dual-modality deep learning architecture combining EEG and infrared signals for real-time taste perception classification. Our model achieves state-of-the-art accuracy on our collected dataset across 5 taste categories.",
    links: [
      { label: "View Paper", href: "#" },
      { label: "Workshop", href: "#" },
    ],
  },
  {
    title: "Exoskeleton-Assisted Rehabilitation: A Systematic Literature Review",
    authors: "D.A. Thi et al.",
    venue: "NIH R21 Grant Report",
    year: "2025",
    status: "In Preparation",
    statusColor: "#a3a3a3",
    abstract:
      "A comprehensive systematic review of 100+ papers on exoskeleton-assisted rehabilitation, structured using a 14-field schema covering research problems, sensor modalities, outcomes, and limitations. Targets NIH R21 grant submission.",
    links: [],
  },
];

export default publications;
