"use client";
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import { GradText } from "@/components/ui";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";
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
    <div style={{ background: "transparent", minHeight: "100vh", position: "relative", zIndex: 1 }}>
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
              <FiGithub size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/anh-huy-dinh-534364250/"
              aria-label="LinkedIn"
              style={{ color: "#a3a3a3", display: "flex", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
            >
              <FiLinkedin size={18} />
            </a>

            {/* Google Scholar */}
            <a
              href="https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi"
              aria-label="Google Scholar"
              style={{ color: "#a3a3a3", display: "flex", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a3a3a3")}
            >
              <SiGooglescholar size={18} />
            </a>

          </div>
        </div>
      </footer>
    </div>
  );
}
