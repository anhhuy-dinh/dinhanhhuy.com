// ─── Shared UI primitives ─────────────────────────────────────────────────────
import React, { ReactNode } from "react";

// Gradient text span (violet → indigo) — the single brand signature
export function GradText({ children }: { children: ReactNode }) {
  return <span className="grad-text">{children}</span>;
}

// Glassmorphism card wrapper
export function Card({ children, className = "", style = {} }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
}

// Pill tag (used for update categories, tech stacks etc.)
export function Tag({ label }: { label: string }) {
  return (
    <span className="whitespace-nowrap rounded bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-light border border-accent/20">
      {label}
    </span>
  );
}

// Badge config per project IP status
const BADGE_CONFIG = {
  patent: { className: "bg-amber-400/10 text-amber-400 border-amber-400/20", label: "Patent Pending" },
  prop:   { className: "bg-red-400/10 text-red-400 border-red-400/20",       label: "Proprietary" },
  open:   { className: "bg-green-400/10 text-green-400 border-green-400/20", label: "Open Research" },
};

export function StatusBadge({ type }: { type: "open" | "patent" | "prop" }) {
  const b = BADGE_CONFIG[type];
  return (
    <span className={`whitespace-nowrap rounded border px-2 py-0.5 text-xs font-semibold ${b.className}`}>
      {b.label}
    </span>
  );
}

// Page fade-in wrapper — applied to every page
export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="page-enter relative z-[1] min-h-screen pt-[60px]">
      {children}
    </div>
  );
}
