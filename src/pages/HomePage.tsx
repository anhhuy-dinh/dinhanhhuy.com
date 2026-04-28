"use client";
import SplineScene from "@/components/SplineScene";
import { GradText, Tag, StatusBadge, PageWrapper } from "@/components/ui";
import { HOME_UPDATES_COUNT, HOME_PUBS_COUNT, HOME_PROJECTS_COUNT } from "@/data/home";
import updates      from "@/data/updates";
import publications from "@/data/publications";
import projects     from "@/data/projects";

interface Props { setPage: (p: string) => void; }

const RESEARCH_INTERESTS = [
  { label: "Embedded Systems", icon: "⚙️" },
  { label: "Mobile Health",    icon: "🩺" },
  { label: "On-device AI",     icon: "🧠" },
];

export default function HomePage({ setPage }: Props) {
  const previewUpdates  = updates.slice(0, HOME_UPDATES_COUNT);
  const previewPubs     = publications.slice(0, HOME_PUBS_COUNT);
  const previewProjects = projects.slice(0, HOME_PROJECTS_COUNT);

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

      {/* ── 3-col bottom panels ── */}
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
            padding: "3rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 0,
          }}
        >

          {/* ── Updates column ── */}
          <div
            style={{
              padding: "0 2rem 0 0",
              borderRight: "1px solid #404040",
            }}
          >
            {/* Column header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Latest Updates
              </span>
              <button
                onClick={() => setPage("About")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.72rem",
                  color: "#8e6ff7",
                  padding: 0,
                }}
              >
                All →
              </button>
            </div>

            {/* Update timeline items */}
            {previewUpdates.map((u, i) => (
              <div
                key={u.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "16px 1fr",
                  gap: "0 0.75rem",
                  marginBottom: i < previewUpdates.length - 1 ? "1.25rem" : 0,
                }}
              >
                {/* Dot + connector */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: 4,
                  }}
                >
                  <div
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: u.dot,
                      boxShadow: i === 0 ? `0 0 6px ${u.dot}` : "none",
                    }}
                  />
                  {i < previewUpdates.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 1,
                        background: "#404040",
                        marginTop: 4,
                      }}
                    />
                  )}
                </div>

                {/* Update text */}
                <div
                  style={{
                    paddingBottom: i < previewUpdates.length - 1 ? "1.25rem" : 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "#fff",
                      lineHeight: 1.4,
                      marginBottom: "0.2rem",
                    }}
                  >
                    {u.title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "#a3a3a3",
                      marginBottom: "0.35rem",
                    }}
                  >
                    {u.date}
                  </div>
                  <Tag label={u.tag} />
                </div>
              </div>
            ))}
          </div>

          {/* ── Publications column ── */}
          <div
            style={{
              padding: "0 2rem",
              borderRight: "1px solid #404040",
            }}
          >
            {/* Column header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Selected Publications
              </span>
              <button
                onClick={() => setPage("Publications")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.72rem",
                  color: "#8e6ff7",
                  padding: 0,
                }}
              >
                All →
              </button>
            </div>

            {/* Publication items */}
            {previewPubs.map((p, i) => (
              <div
                key={p.title}
                style={{
                  paddingBottom: "1.25rem",
                  borderBottom: i < previewPubs.length - 1 ? "1px solid #404040" : "none",
                  marginBottom: "1.25rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.83rem",
                    fontWeight: 600,
                    color: "#fff",
                    lineHeight: 1.45,
                    marginBottom: "0.3rem",
                  }}
                >
                  {p.title}
                </div>
                <div style={{ fontSize: "0.7rem", color: "#a3a3a3" }}>{p.venueShort}</div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.3rem" }}>
                  <span style={{ fontSize: "0.65rem", color: p.statusColor, fontWeight: 600 }}>{p.status}</span>
                  <span style={{ fontSize: "0.65rem", color: "#555" }}>·</span>
                  <span style={{ fontSize: "0.65rem", color: "#666" }}>{p.year}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Projects column ── */}
          <div style={{ padding: "0 0 0 2rem" }}>
            {/* Column header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Selected Projects
              </span>
              <button
                onClick={() => setPage("Projects")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.72rem",
                  color: "#8e6ff7",
                  padding: 0,
                }}
              >
                All →
              </button>
            </div>

            {/* Project cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {previewProjects.map(p => (
                <div
                  key={p.title}
                  className="card"
                  style={{ padding: "1rem 1.25rem" }}
                >
                  {/* Title + status badge */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "0.88rem", color: "#fff" }}>{p.title}</span>
                    <StatusBadge type={p.badge} />
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.76rem",
                      color: "#d4d4d4",
                      lineHeight: 1.6,
                      marginBottom: "0.6rem",
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Tech tags (max 3) */}
                  <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap" }}>
                    {p.tech.slice(0, 3).map(t => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(142,111,247,0.08)",
                          color: "#c4b5fd",
                          border: "1px solid rgba(142,111,247,0.15)",
                          borderRadius: 4,
                          padding: "2px 7px",
                          fontSize: "0.65rem",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
