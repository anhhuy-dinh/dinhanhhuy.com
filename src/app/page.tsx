"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import { BgBloom, GradText } from "@/components/ui";
import HomePage         from "@/pages/HomePage";
import AboutPage        from "@/pages/AboutPage";
import ProjectsPage     from "@/pages/ProjectsPage";
import PublicationsPage from "@/pages/PublicationsPage";
import AwardsPage       from "@/pages/AwardsPage";
import ContactPage      from "@/pages/ContactPage";

export default function Portfolio() {
  const [page, setPage] = useState("Home");

  // Scroll to top on every page change
  useEffect(() => { window.scrollTo(0, 0); }, [page]);

  const renderPage = () => {
    switch (page) {
      case "Home":         return <HomePage setPage={setPage} />;
      case "About":        return <AboutPage />;
      case "Projects":     return <ProjectsPage />;
      case "Publications": return <PublicationsPage />;
      case "Awards":       return <AwardsPage />;
      // case "Contact":      return <ContactPage />;
      default:             return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div style={{ background: "#1a1a1a", minHeight: "100vh" }}>
      <BgBloom />
      <Nav page={page} setPage={setPage} />

      {/* ── Page content ── */}
      {renderPage()}

      {/* ── Footer ── */}
      <footer
        style={{
          position: "relative",
          zIndex: 1,
          borderTop: "1px solid #404040",
          padding: "1.25rem 2rem",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Name */}
          <span style={{ fontWeight: 800, fontSize: "0.88rem" }}>
            Huy Dinh<GradText>.</GradText>
          </span>

          {/* Copyright */}
          <span style={{ fontSize: "0.75rem", color: "#a3a3a3" }}>
            © 2026 Huy Dinh · PhD Student in Electrical Engineering
          </span>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "1.25rem", alignItems: "center" }}>

            {/* GitHub */}
            <a
              href="https://github.com/anhhuy-dinh"
              aria-label="GitHub"
              style={{ color: "#a3a3a3", display: "flex", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anh-huy-dinh-534364250/"
              aria-label="LinkedIn"
              style={{ color: "#a3a3a3", display: "flex", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi"
              aria-label="Google Scholar"
              style={{ color: "#a3a3a3", display: "flex", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5h3.5v.5a8.5 8.5 0 0 0 17 0v-.5H24L12 0z" />
              </svg>
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
}
