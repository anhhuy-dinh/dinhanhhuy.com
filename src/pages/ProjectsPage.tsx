"use client";
import { GradText, Tag, StatusBadge, PageWrapper } from "@/components/ui";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "60px 2rem",
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
          Featured <GradText>Work.</GradText>
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#a3a3a3",
            marginBottom: "3.5rem",
          }}
        >
          Hardware, software, and everything in between.
        </p>

        {/* ── Project list ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((p) => (
            <div key={p.title} className="card project-card-inner">

              {/* Project image */}
              <div className="project-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    opacity: 0.8,
                    transition: "opacity 0.3s, transform 0.5s",
                  }}
                />
                {/* Bottom gradient overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, #09090b 0%, transparent 60%)",
                    opacity: 0.8,
                  }}
                />
                {/* Tech tag overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    left: "0.75rem",
                    display: "flex",
                    gap: "0.35rem",
                    flexWrap: "wrap",
                  }}
                >
                  {p.tech.slice(0, 3).map(t => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(8px)",
                        color: "#e0d7ff",
                        border: "1px solid rgba(142,111,247,0.3)",
                        borderRadius: 5,
                        padding: "2px 8px",
                        fontSize: "0.65rem",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project details */}
              <div
                style={{
                  flex: 1,
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {/* Status + tag + badge row */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    marginBottom: "0.85rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      background: `${p.statusColor}18`,
                      color: p.statusColor,
                      border: `1px solid ${p.statusColor}40`,
                      borderRadius: 5,
                      padding: "3px 9px",
                      fontSize: "0.68rem",
                      fontWeight: 600,
                    }}
                  >
                    {p.status}
                  </span>
                  <Tag label={p.tag} />
                  <StatusBadge type={p.badge} />
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.5rem",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </h2>

                {/* Collaborators */}
                {p.collab && (
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#8e6ff7",
                      fontStyle: "italic",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {p.collab}
                  </div>
                )}

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#d4d4d4",
                    lineHeight: 1.8,
                    marginBottom: "1rem",
                  }}
                >
                  {p.detail}
                </p>

                {/* All tech tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.35rem",
                    flexWrap: "wrap",
                    marginBottom: "1.25rem",
                  }}
                >
                  {p.tech.map(t => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(142,111,247,0.08)",
                        color: "#c4b5fd",
                        border: "1px solid rgba(142,111,247,0.15)",
                        borderRadius: 5,
                        padding: "3px 9px",
                        fontSize: "0.72rem",
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {p.link && (
                  <a
                    href={p.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: "#fff",
                      textDecoration: "none",
                      transition: "color 0.15s",
                      width: "fit-content",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#8e6ff7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
                  >
                    View Details →
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
