import type { Update } from "@/types";

// ─── EDIT HERE: Latest news / timeline entries ────────────────────────────
// Add newest entry at the TOP.
// desc is an array of segments:
//   "plain text"
//   { text: "bold text", bold: true }
//   { text: "link text", href: "https://..." }
//   { text: "bold link", bold: true, href: "https://..." }
const updates: Update[] = [
  {
    date: "Apr 2026",
    desc: [
      "Paper ",
      { text: "EchoVision", bold: true },
      " is accepted at ",
      { text: "EIFCOM 2026", href: "https://eifcom26.pages.dev/" },
      ", co-located with ",
      { text: "ACM MobiSys 2026", href: "https://www.sigmobile.org/mobisys/2026/" },
      ".",
    ],
  },
  {
    date: "Mar 2026",
    desc: [
      "Submitted ",
      { text: "MAGVIS", bold: true },
      " paper to ",
      { text: "ACM MobiCom 2026", href: "https://www.sigmobile.org/mobicom/2026/" },
      ".",
    ],
  },
  {
    date: "Aug 2025",
    desc: [
      "Completed the ",
      { text: "NSF I-Corps Award", bold: true },
      " Fall 2025 Cohort as Technical Lead for an in-ear blood pressure monitoring project.",
    ],
  },
  {
    date: "Jun 2025",
    desc: [
      "Volunteered at ",
      { text: "IEEE ICPMH 2025", bold: true },
      " held in Denver, CO, USA.",
    ],
  },
  {
    date: "Aug 2024",
    desc: [
      "Started PhD at University of Colorado Denver. Joined the ",
      { text: "InsCy Lab", href: "https://inscylab.org" },
      " under Asst. Prof. Nam Bui.",
    ],
  },
  {
    date: "Jan 2024",
    desc: [
      { text: "OOKPIK", bold: true },
      " paper published at ",
      { text: "MMM 2024", href: "https://doi.org/10.1007/978-3-031-53302-0_10" },
      ".",
    ],
  },
  {
    date: "Jul 2023",
    desc: [
      "Started remote research internship at CU Denver's ",
      { text: "InsCy Lab", href: "https://inscylab.org" },
      ".",
    ],
  },
  {
    date: "Sep 2022",
    desc: [
      "Paper ",
      { text: "Drone Detection Using Deep Neural Networks", bold: true },
      " published at ",
      { text: "SoMeT 2022", href: "https://doi.org/10.3233/FAIA220280" },
      ".",
    ],
  },
];

export default updates;
