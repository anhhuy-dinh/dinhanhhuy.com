"use client";
import { useState } from "react";
import SplineScene from "@/components/SplineScene";
import { GradText, PageWrapper } from "@/components/ui";
import updates from "@/data/updates";

const UPDATES_PREVIEW = 5;

interface Props { setPage: (p: string) => void; }

const RESEARCH_INTERESTS = [
  { label: "Embedded Systems", icon: "⚙️" },
  { label: "Mobile Health",    icon: "🩺" },
  { label: "On-device AI",     icon: "🧠" },
];

export default function HomePage({ setPage: _setPage }: Props) {
  const [expanded, setExpanded] = useState(false);
  const visibleUpdates = expanded ? updates : updates.slice(0, UPDATES_PREVIEW);

  return (
    <PageWrapper>

      {/* ── HERO ── */}
      <div
        style={{
          position: "relative",
          minHeight: "calc(100vh - 60px)",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Spline scene — absolute right, full bleed */}
        <div
          style={{
            position: "absolute",
            top: 0, right: 150,
            width: "55%",
            height: "100%",
            zIndex: 1,
            pointerEvents: "none",
            transformOrigin: "center center",
          }}
        >
          <SplineScene />
        </div>

        {/* Left text block */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            width: "100%",
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 4rem",
          }}
        >
          <div style={{ maxWidth: "48%" }}>

            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(3rem,6vw,5.5rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                margin: "0 0 0.75rem",
              }}
            >
              Hi, I&apos;m <GradText>Huy!</GradText>
            </h1>

            {/* Affiliation */}
            <div
              style={{
                fontSize: "1rem",
                color: "#8e6ff7",
                fontWeight: 600,
                marginBottom: "1.75rem",
              }}
            >
              PhD Student at University of Colorado Denver
            </div>

            {/* Short bio */}
            <p
              style={{
                fontSize: "1rem",
                color: "#d4d4d4",
                lineHeight: 1.8,
                marginBottom: "2rem",
                fontWeight: 300,
                maxWidth: 480,
              }}
            >
              My research focuses on embedded AI for healthcare applications,
              developing novel wearable devices that bring real-time clinical
              intelligence to the edge — where sensing, inference, and the
              human body meet.
            </p>

            {/* Research interest pills */}
            <div
              style={{
                display: "flex",
                gap: "0.75rem",
                flexWrap: "wrap",
                marginBottom: "2.5rem",
              }}
            >
              {RESEARCH_INTERESTS.map(r => (
                <div
                  key={r.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    background: "rgba(142,111,247,0.08)",
                    border: "1px solid rgba(142,111,247,0.22)",
                    borderRadius: 100,
                    padding: "7px 16px",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#c4b5fd",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  <span>{r.icon}</span>
                  {r.label}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ── Latest Updates ── */}
      <div
        style={{
          borderTop: "1px solid #404040",
          background: "rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "4rem 2rem 5rem",
          }}
        >
          {/* Section heading */}
          <h2
            style={{
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "0.4rem",
            }}
          >
            Latest <GradText>Updates.</GradText>
          </h2>
          <div
            style={{
              width: 40,
              height: 2,
              background: "linear-gradient(90deg,#8e6ff7,#4c29c5)",
              borderRadius: 2,
              marginBottom: "2.5rem",
            }}
          />

          {/* Timeline items */}
          {visibleUpdates.map((u, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "24px 1fr",
                gap: "0 1.25rem",
              }}
            >
              {/* Dot + connector */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingTop: 6,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "#8e6ff7",
                    flexShrink: 0,
                    border: "2px solid rgba(142,111,247,0.25)",
                    boxShadow: i === 0 ? "0 0 10px #8e6ff7" : "none",
                  }}
                />
                {i < visibleUpdates.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: 1,
                      background: "#2a2a2a",
                      marginTop: 6,
                    }}
                  />
                )}
              </div>

              {/* Update content */}
              <div
                style={{
                  paddingBottom: i < visibleUpdates.length - 1 ? "2rem" : 0,
                }}
              >
                <div
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#8e6ff7",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "0.35rem",
                  }}
                >
                  {u.date}
                </div>
                <div
                  style={{
                    fontSize: "0.95rem",
                    color: "#d4d4d4",
                    lineHeight: 1.75,
                  }}
                >
                  {u.desc.map((seg, j) =>
                    typeof seg === "string" ? (
                      <span key={j}>{seg}</span>
                    ) : seg.href ? (
                      <a
                        key={j}
                        href={seg.href}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "#8e6ff7",
                          fontWeight: seg.bold ? 700 : 400,
                          textDecoration: "none",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                        onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                      >
                        {seg.text}
                      </a>
                    ) : (
                      <strong key={j} style={{ color: "#fff", fontWeight: 700 }}>{seg.text}</strong>
                    )
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Expand / collapse button */}
          {updates.length > UPDATES_PREVIEW && (
            <button
              onClick={() => setExpanded(prev => !prev)}
              style={{
                marginTop: "2rem",
                background: "none",
                border: "1px solid #404040",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: "0.78rem",
                color: "#8e6ff7",
                padding: "8px 20px",
                display: "block",
                transition: "border-color .15s",
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#8e6ff7")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#404040")}
            >
              {expanded ? "Show less ↑" : `Show all ${updates.length} updates ↓`}
            </button>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
