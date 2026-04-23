"use client";
import { GradText, PageWrapper } from "@/components/ui";

export default function ContactPage() {
  return (
    <PageWrapper>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "60px 2rem",
          display: "flex",
          alignItems: "center",
          minHeight: "calc(100vh - 120px)",
        }}
      >
        <div style={{ width: "100%" }}>

          {/* ── Contact card ── */}
          <div
            className="card"
            style={{
              padding: "5rem 3rem",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Background radial glow */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 500,
                height: 280,
                background: "radial-gradient(ellipse,rgba(76,41,197,0.22) 0%,transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1 }}>

              {/* Heading */}
              <h1
                style={{
                  fontSize: "clamp(2rem,4vw,3.5rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  margin: "0 0 0.75rem",
                }}
              >
                Let&apos;s <GradText>work</GradText> together.
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: "1rem",
                  color: "#d4d4d4",
                  marginBottom: "2.5rem",
                  fontWeight: 300,
                }}
              >
                Research collaboration, consulting, or just a good conversation.
              </p>

              {/* CTA buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  justifyContent: "center",
                }}
              >
                <a href="mailto:anh-huy.2.dinh@ucdenver.edu" className="btn btn-grad">
                  anh-huy.2.dinh@ucdenver.edu →
                </a>
                <a
                  href="https://dinhanhhuy.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  dinhanhhuy.com
                </a>
              </div>

              {/* Social links */}
              <div
                style={{
                  marginTop: "2.5rem",
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "center",
                }}
              >
                {[
                  { label: "GitHub",         href: "https://github.com/anhhuy-dinh" },
                  { label: "LinkedIn",       href: "https://www.linkedin.com/in/anh-huy-dinh-534364250/" },
                  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi" },
                ].map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontSize: "0.82rem",
                      color: "#a3a3a3",
                      textDecoration: "none",
                      transition: "color .15s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#8e6ff7")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </PageWrapper>
  );
}
