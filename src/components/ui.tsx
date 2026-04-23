// ─── Shared UI primitives ─────────────────────────────────────────────────────
import { ReactNode } from "react";

// Gradient text span (purple → indigo)
export function GradText({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(135deg,#8e6ff7,#4c29c5)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

// Small uppercase section label
export function SectionLabel({ text }: { text: string }) {
  return (
    <div
      style={{
        fontSize: "0.75rem",
        fontWeight: 600,
        color: "#8e6ff7",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        marginBottom: "0.5rem",
      }}
    >
      {text}
    </div>
  );
}

// Pill tag (used for update categories etc.)
export function Tag({ label }: { label: string }) {
  return (
    <span
      style={{
        background: "rgba(142,111,247,0.1)",
        color: "#c4b5fd",
        border: "1px solid rgba(142,111,247,0.2)",
        borderRadius: 5,
        padding: "3px 9px",
        fontSize: "0.72rem",
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
  );
}

// Badge config per project IP status
const BADGE_CONFIG = {
  patent: { bg: "rgba(234,179,8,0.08)",  color: "#fbbf24", border: "rgba(234,179,8,0.22)",  label: "⚖ Patent Pending" },
  prop:   { bg: "rgba(239,68,68,0.08)",  color: "#f87171", border: "rgba(239,68,68,0.2)",   label: "🔒 Proprietary"    },
  open:   { bg: "rgba(34,197,94,0.08)",  color: "#4ade80", border: "rgba(34,197,94,0.2)",   label: "⬡ Open Research"  },
};

export function StatusBadge({ type }: { type: "open" | "patent" | "prop" }) {
  const b = BADGE_CONFIG[type];
  return (
    <span
      style={{
        background: b.bg,
        color: b.color,
        border: `1px solid ${b.border}`,
        borderRadius: 5,
        padding: "3px 9px",
        fontSize: "0.7rem",
        fontWeight: 600,
        whiteSpace: "nowrap",
      }}
    >
      {b.label}
    </span>
  );
}

// Page fade-in wrapper — applied to every page
export function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div
      className="page-enter"
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "100vh",
        paddingTop: 60,
      }}
    >
      {children}
    </div>
  );
}

// Fixed radial background bloom — always visible behind content
export function BgBloom() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 500,
          background: "radial-gradient(ellipse,rgba(76,41,197,0.25) 0%,rgba(142,111,247,0.08) 40%,transparent 70%)",
        }}
      />
    </div>
  );
}
