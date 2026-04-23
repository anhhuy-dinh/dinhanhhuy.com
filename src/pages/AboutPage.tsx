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
          maxWidth: 900,
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
                I&apos;m a PhD researcher in EE who got obsessed with one question:{" "}
                <em style={{ color: "#c4b5fd" }}>{bio.headline}</em>
                <br /><br />
                {bio.intro
                  .replace(bio.headline, "")
                  .replace("I'm a PhD researcher in EE who got obsessed with one question: ", "")}
                <br /><br />
                <span style={{ color: "#a3a3a3" }}>{bio.personal}</span>
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
                gridTemplateColumns: "110px 28px 1fr",
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
                  paddingBottom: i < education.length - 1 ? "2rem" : 0,
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

              {/* Degree details */}
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
                  {e.detail}
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
                gridTemplateColumns: "110px 28px 1fr",
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
