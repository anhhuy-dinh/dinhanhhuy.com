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

const SOCIALS = [
  { label: "GitHub",         href: "https://github.com/anhhuy-dinh",                               Icon: FiGithub },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/anh-huy-dinh-534364250/",          Icon: FiLinkedin },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi", Icon: SiGooglescholar },
];

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
    <div className="relative z-[1] min-h-screen bg-transparent">
      <Nav page={page} setPage={setPage} />

      {/* ── Page content ── */}
      {renderPage()}

      {/* ── Footer ── */}
      <footer className="relative z-[1] border-t border-line px-8 py-5">
        <div className="mx-auto flex max-w-content items-center justify-between">
          {/* Name */}
          <span className="text-sm font-extrabold">
            Huy Dinh<GradText>.</GradText>
          </span>

          {/* Copyright */}
          <span className="text-xs text-neutral-400">
            © 2026 Huy Dinh · PhD Student in Electrical Engineering
          </span>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex text-neutral-400 transition-colors duration-200 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
