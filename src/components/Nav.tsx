"use client";
import { useState, useEffect } from "react";
import { GradText } from "@/components/ui";

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
    <nav className="fixed top-6 left-1/2 z-[9999] w-[95%] max-w-3xl -translate-x-1/2 transition-all duration-300">
      <div
        className={`flex items-center justify-between rounded-full px-6 py-2.5 backdrop-blur-xl transition-[background,border-color,box-shadow] duration-300 border ${
          scrolled
            ? "bg-surface/85 border-line shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo + name */}
        <button
          onClick={() => setPage("Home")}
          className="flex cursor-pointer items-center gap-2 border-0 bg-transparent p-0 text-base font-extrabold tracking-tight text-white"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="logo" className="h-[22px] w-auto" />
          <span>
            Huy Dinh<GradText>.</GradText>
          </span>
        </button>

        {/* Nav links */}
        <div className="flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`relative cursor-pointer rounded-full border-0 px-3 py-1.5 text-sm font-medium transition-colors duration-200 ${
                page === item
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  : "bg-transparent text-zinc-200 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
