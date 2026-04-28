"use client";
import { GradText, PageWrapper } from "@/components/ui";
import publications from "@/data/publications";

// Accent color per publication status
const STATUS_ACCENT: Record<string, string> = {
  "Published":      "#4ade80",
  "Under Review":   "#fbbf24",
  "In Preparation": "#a3a3a3",
  "Guest Lecture":  "#60a5fa",
  "Presentation":   "#a78bfa",
};

export default function PublicationsPage() {
  return (
    <PageWrapper>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "60px 2rem 80px",
        }}
      >
        {/* ── Page heading ── */}
        <h1
          style={{
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          Publications <GradText>&amp; Talks.</GradText>
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#a3a3a3",
            marginBottom: "3.5rem",
          }}
        >
          Academic papers, peer reviews, and technical presentations.
        </p>

        {/* ── Publication list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {publications.map((p) => {
            const accent = STATUS_ACCENT[p.status] ?? "#8e6ff7";
            return (
              <div
                key={p.title}
                style={{
                  background: "#262626",
                  border: `1px solid ${accent}40`,
                  borderLeft: `4px solid ${accent}`,
                  borderRadius: 16,
                  padding: "1.75rem 2rem",
                  transition: "border-color .2s, background .2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = `${accent}80`;
                  e.currentTarget.style.background = "#2c2c2c";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `${accent}40`;
                  e.currentTarget.style.background = "#262626";
                }}
              >

                {/* Status pill + year */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.85rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      background: `${accent}18`,
                      color: accent,
                      border: `1px solid ${accent}40`,
                      borderRadius: 100,
                      padding: "3px 12px",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                    }}
                  >
                    {p.status}
                  </span>
                  <span
                    style={{
                      fontSize: "0.78rem",
                      color: "#a3a3a3",
                      fontWeight: 500,
                    }}
                  >
                    {p.year}
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1.4,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h2>

                {/* Authors */}
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#8e6ff7",
                    marginBottom: "0.4rem",
                    fontStyle: "italic",
                  }}
                >
                  {p.authors}
                </div>

                {/* Venue */}
                <div
                  style={{
                    fontSize: "0.78rem",
                    color: "#c4b5fd",
                    fontWeight: 500,
                    marginBottom: "1.1rem",
                  }}
                >
                  {p.venue}
                </div>

                {/* Abstract */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#b0b0b0",
                    lineHeight: 1.8,
                    marginBottom: p.links.length > 0 ? "1.25rem" : 0,
                    padding: "0.85rem 1rem",
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 8,
                    borderLeft: `2px solid ${accent}60`,
                  }}
                >
                  {p.abstract}
                </p>

                {/* Links */}
                {p.links.length > 0 && (
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    {p.links.map((l, li) => (
                      <a
                        key={li}
                        href={l.href}
                        className={li === 0 ? "btn btn-grad" : "btn btn-ghost"}
                        style={{ padding: "0.45rem 1rem", fontSize: "0.78rem" }}
                      >
                        {l.label}{li === 0 ? " ↗" : ""}
                      </a>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
