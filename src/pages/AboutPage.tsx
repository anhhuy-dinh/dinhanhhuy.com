"use client";
import { GradText, PageWrapper } from "@/components/ui";
import { bio, quickFacts, education, experience, skillsGrouped } from "@/data/about";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

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
            fontSize: "1rem",
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
            {/* Bio paragraph + social links */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#d4d4d4",
                  lineHeight: 1.85,
                  marginBottom: "1.25rem",
                }}
              >
                {bio.intro.map((seg, i) =>
                  typeof seg === "string" ? (
                    <span key={i}>{seg}</span>
                  ) : (
                    <a
                      key={i}
                      href={seg.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "#c4b5fd",
                        textDecoration: "none",
                        fontWeight: 500,
                      }}
                      onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                      onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}
                    >
                      {seg.text}
                    </a>
                  )
                )}
              </p>

              {/* Social links */}
              <div
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  flexWrap: "wrap",
                  marginTop: "auto",
                }}
              >
                {[
                  { label: "GitHub",         href: "https://github.com/anhhuy-dinh",                               icon: <FiGithub size={15} /> },
                  { label: "LinkedIn",       href: "https://www.linkedin.com/in/anh-huy-dinh-534364250/",          icon: <FiLinkedin size={15} /> },
                  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi", icon: <SiGooglescholar size={15} /> },
                  { label: "CV",             href: "/cv.pdf",                                                       icon: <FiFileText width={15} height={15} /> },
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
                      gap: "0.45rem",
                      color: "#a3a3a3",
                      textDecoration: "none",
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      background: "rgba(142,111,247,0.06)",
                      border: "1px solid rgba(142,111,247,0.15)",
                      borderRadius: 100,
                      padding: "6px 14px",
                      transition: "color .15s, background .15s, border-color .15s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#c4b5fd";
                      e.currentTarget.style.background = "rgba(142,111,247,0.15)";
                      e.currentTarget.style.borderColor = "rgba(142,111,247,0.4)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#a3a3a3";
                      e.currentTarget.style.background = "rgba(142,111,247,0.06)";
                      e.currentTarget.style.borderColor = "rgba(142,111,247,0.15)";
                    }}
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
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
                      fontSize: "1rem",
                      color: "#a3a3a3",
                      fontWeight: 500,
                      minWidth: 90,
                    }}
                  >
                    {f.label}
                  </span>
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "#fff",
                      fontWeight: 500,
                    }}
                  >
                    {f.value}
                  </span>
                </div>
              ))}

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
                    padding: "0.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 80,
                    marginBottom: "0.5rem",
                    background: "#ffffff",
                    border: "none",
                  }}
                >
                  {e.logo ? (
                    <img
                      src={e.logo}
                      alt={e.school}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: 72,
                        objectFit: "contain",
                        opacity: 0.9,
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: "1rem", color: "#555" }}>—</span>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "0.92rem",
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
                    background: e.period.includes("Present") ? "#8e6ff7" : "#404040",
                    border: `2px solid ${e.period.includes("Present") ? "#8e6ff7" : "#555"}`,
                    flexShrink: 0,
                    boxShadow: e.period.includes("Present") ? "0 0 8px #8e6ff7" : "none",
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
                    fontSize: "0.9rem",
                    color: "#8e6ff7",
                    marginBottom: "0.4rem",
                    fontWeight: 500,
                  }}
                >
                  {e.school}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
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
                  fontSize: "0.92rem",
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
                    background: e.period.includes("Present") ? "#8e6ff7" : "#404040",
                    border: `2px solid ${e.period.includes("Present") ? "#8e6ff7" : "#555"}`,
                    flexShrink: 0,
                    marginTop: 2,
                    boxShadow: e.period.includes("Present") ? "0 0 8px #8e6ff7" : "none",
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
                          fontSize: "1rem",
                          color: "#fff",
                          marginBottom: "0.15rem",
                        }}
                      >
                        {e.role}
                      </div>
                      <div
                        style={{
                          fontSize: "1rem",
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
                        fontSize: "1rem",
                        fontWeight: 600,
                      }}
                    >
                      {e.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.92rem",
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
                          fontSize: "0.92rem",
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
                    fontSize: "0.75rem",
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
                        background: "rgba(142,111,247,0.08)",
                        border: "1px solid rgba(142,111,247,0.18)",
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
                            fontSize: "0.75rem",
                            color: "#888",
                          }}
                        >
                          •
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: "0.9rem",
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
