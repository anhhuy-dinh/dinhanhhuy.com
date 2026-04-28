"use client";
import { GradText, PageWrapper } from "@/components/ui";
import { bio, quickFacts, education, experience, skillsGrouped } from "@/data/about";

// Badge color per experience type
const EXP_COLOR: Record<string, string> = {
  Industry: "#60a5fa",
  Academic: "#a78bfa",
  Research: "#4ade80",
};

export default function AboutPage() {
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
          About <GradText>me.</GradText>
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#a3a3a3",
            marginBottom: "3rem",
          }}
        >
          {/* Researcher, developer, and lifelong learner. */}
        </p>

        {/* ── Bio + Quick Facts ── */}
        <div
          className="card"
          style={{
            padding: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
            }}
          >
            {/* Bio paragraph */}
            <div>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#d4d4d4",
                  lineHeight: 1.85,
                }}
              >
                {bio.intro}
              </p>
            </div>

            {/* Quick facts list */}
            <div>
              {quickFacts.map(f => (
                <div
                  key={f.label}
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "baseline",
                    paddingBottom: "0.75rem",
                    marginBottom: "0.5rem",
                    borderBottom: "1px solid #404040",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "#a3a3a3",
                      fontWeight: 500,
                      minWidth: 90,
                    }}
                  >
                    {f.label}
                  </span>
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    {f.value}
                  </span>
                </div>
              ))}

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "1.25rem",
                }}
              >
                {[
                  { label: "GitHub",         href: "https://github.com/anhhuy-dinh",                                          icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
                  { label: "LinkedIn",       href: "https://www.linkedin.com/in/anh-huy-dinh-534364250/",                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi",            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5h3.5v.5a8.5 8.5 0 0 0 17 0v-.5H24L12 0z"/></svg> },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      color: "#a3a3a3",
                      textDecoration: "none",
                      fontSize: "0.78rem",
                      transition: "color .15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#8e6ff7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Education timeline ── */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem,3vw,2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            <GradText>Education.</GradText>
          </h2>

          {education.map((e, i) => (
            <div
              key={e.degree}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 36px 1fr",
                gap: "0 1rem",
              }}
            >
              {/* Left: logo card + period, centered */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  paddingBottom: i < education.length - 1 ? "2rem" : 0,
                }}
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 64,
                    marginBottom: "0.5rem",
                  }}
                >
                  {e.logo ? (
                    <img
                      src={e.logo}
                      alt={e.school}
                      style={{
                        height: 36,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                        filter: "brightness(0) invert(1)",
                        opacity: 0.9,
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: "0.65rem", color: "#555" }}>—</span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "#a3a3a3",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  {e.period}
                </div>
              </div>

              {/* Timeline dot + connector */}
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
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: i === 0 ? "#8e6ff7" : "#404040",
                    border: `2px solid ${i === 0 ? "#8e6ff7" : "#555"}`,
                    flexShrink: 0,
                    boxShadow: i === 0 ? "0 0 8px #8e6ff7" : "none",
                  }}
                />
                {i < education.length - 1 && (
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

              {/* Right: degree + school + details */}
              <div
                style={{
                  paddingBottom: i < education.length - 1 ? "2rem" : 0,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#fff",
                    marginBottom: "0.2rem",
                  }}
                >
                  {e.degree}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#8e6ff7",
                    marginBottom: "0.4rem",
                    fontWeight: 500,
                  }}
                >
                  {e.school}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "#d4d4d4",
                    lineHeight: 1.7,
                  }}
                >
                  {e.detail.map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Experience timeline ── */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem,3vw,2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            Work <GradText>Experience.</GradText>
          </h2>

          {experience.map((e, i) => (
            <div
              key={e.role}
              style={{
                display: "grid",
                gridTemplateColumns: "160px 36px 1fr",
                gap: "0 1rem",
              }}
            >
              {/* Period label */}
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#a3a3a3",
                  fontWeight: 500,
                  textAlign: "right",
                  paddingTop: 2,
                  paddingBottom: i < experience.length - 1 ? "2rem" : 0,
                }}
              >
                {e.period}
              </div>

              {/* Timeline dot + connector */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: i === 0 ? "#8e6ff7" : "#404040",
                    border: `2px solid ${i === 0 ? "#8e6ff7" : "#555"}`,
                    flexShrink: 0,
                    marginTop: 2,
                    boxShadow: i === 0 ? "0 0 8px #8e6ff7" : "none",
                  }}
                />
                {i < experience.length - 1 && (
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

              {/* Experience card */}
              <div
                style={{
                  paddingBottom: i < experience.length - 1 ? "2rem" : 0,
                }}
              >
                <div
                  className="card"
                  style={{ padding: "1.25rem 1.5rem" }}
                >
                  {/* Role + company + type badge */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "0.4rem",
                      gap: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "0.95rem",
                          color: "#fff",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {e.role}
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "#8e6ff7",
                          fontWeight: 500,
                        }}
                      >
                        {e.company}
                      </div>
                    </div>
                    <span
                      style={{
                        background: `${EXP_COLOR[e.type]}18`,
                        color: EXP_COLOR[e.type],
                        border: `1px solid ${EXP_COLOR[e.type]}40`,
                        borderRadius: 5,
                        padding: "2px 8px",
                        fontSize: "0.65rem",
                        fontWeight: 600,
                      }}
                    >
                      {e.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#d4d4d4",
                      lineHeight: 1.75,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {e.detail}
                  </p>

                  {/* Tech tags */}
                  <div
                    style={{
                      display: "flex",
                      gap: "0.35rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {e.tech.map(t => (
                      <span
                        key={t}
                        style={{
                          background: "rgba(142,111,247,0.08)",
                          color: "#c4b5fd",
                          border: "1px solid rgba(142,111,247,0.15)",
                          borderRadius: 5,
                          padding: "2px 8px",
                          fontSize: "0.7rem",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Skills / Tech Stack ── */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem,3vw,2rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              marginBottom: "1.75rem",
            }}
          >
            Tech <GradText>Stack.</GradText>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {skillsGrouped.map(g => (
              <div key={g.group}>
                {/* Group label */}
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "#a3a3a3",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.75rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "1px solid #404040",
                  }}
                >
                  {g.group}
                </div>

                {/* Skill pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  {g.items.map(s => (
                    <div
                      key={s.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        background: "#2a2a2a",
                        border: "1px solid #383838",
                        borderRadius: 100,
                        padding: "5px 12px 5px 8px",
                        cursor: "default",
                        transition: "border-color .2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.borderColor = "#555")}
                      onMouseLeave={e => (e.currentTarget.style.borderColor = "#383838")}
                    >
                      {/* Icon or fallback dot */}
                      {s.icon ? (
                        <img
                          src={s.icon}
                          alt={s.name}
                          width={18}
                          height={18}
                          style={{ objectFit: "contain", flexShrink: 0 }}
                        />
                      ) : (
                        <span
                          style={{
                            width: 18,
                            height: 18,
                            borderRadius: "50%",
                            background: "#444",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            fontSize: "0.6rem",
                            color: "#888",
                          }}
                        >
                          •
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: "0.82rem",
                          color: "#e0e0e0",
                          fontWeight: 500,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
