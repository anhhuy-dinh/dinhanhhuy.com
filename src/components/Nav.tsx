"use client";
import { useState, useEffect } from "react";

const NAV_ITEMS = ["Home", "About", "Projects", "Publications", "Awards" /*, "Contact" */];

interface NavProps { page: string; setPage: (p: string) => void; }

export default function Nav({ page, setPage }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 24,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        width: "95%",
        maxWidth: 768,
        transition: "all 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.6rem 1.5rem",
          borderRadius: 9999,
          transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
          background: scrolled ? "rgba(9,9,11,0.85)" : "transparent",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderTop: scrolled ? "1px solid rgba(255,255,255,0.2)" : "1px solid transparent",
          borderRight: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
          borderLeft: scrolled ? "1px solid rgba(255,255,255,0.1)" : "1px solid transparent",
          boxShadow: scrolled ? "0 8px 30px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Logo + name */}
        <button
          onClick={() => setPage("Home")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            color: "#fff",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            fontSize: "1rem",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <img src="/logo.svg" alt="logo" style={{ height: 22, width: "auto" }} />
          <span>
            Huy Dinh
            <span
              style={{
                background: "linear-gradient(135deg,#8e6ff7,#4c29c5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >.</span>
          </span>
        </button>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}>
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => setPage(item)}
              style={{
                position: "relative",
                padding: "0.375rem 0.75rem",
                borderRadius: 9999,
                fontSize: "0.875rem",
                fontWeight: 500,
                color: page === item ? "#fff" : "#e4e4e7",
                background: page === item ? "rgba(255,255,255,0.1)" : "transparent",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                boxShadow: page === item ? "inset 0 1px 0 rgba(255,255,255,0.1)" : "none",
              }}
              onMouseEnter={e => {
                if (page !== item) e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                if (page !== item) e.currentTarget.style.color = "#e4e4e7";
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
