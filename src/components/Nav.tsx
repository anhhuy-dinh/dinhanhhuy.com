"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GradText } from "@/components/ui";

const NAV_ITEMS = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  // { label: "Projects",     href: "/projects" },
  { label: "Publications", href: "/publications" },
  { label: "Awards",       href: "/awards" },
  // { label: "Contact",   href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => { setOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <motion.nav
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed top-6 left-1/2 z-[9999] w-[95%] max-w-3xl -translate-x-1/2 transition-all duration-300"
      style={{ x: "-50%" }}
    >
      <div
        className={`flex items-center justify-between rounded-full border px-6 py-2.5 backdrop-blur-xl transition-[background,border-color,box-shadow] duration-300 ${
          scrolled || open
            ? "bg-surface/85 border-line shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* Logo + name */}
        <Link href="/" className="flex items-center gap-2 text-base font-extrabold tracking-tight text-white no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="logo" className="h-[22px] w-auto" />
          <span>
            Huy Dinh<GradText>.</GradText>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="flex items-center gap-1 max-md:hidden">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-3 py-1.5 text-sm font-medium no-underline transition-colors duration-200 ${
                isActive(item.href)
                  ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  : "text-zinc-200 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(prev => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="hidden cursor-pointer border-0 bg-transparent p-1 text-white max-md:flex"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-line bg-surface/95 p-2 backdrop-blur-xl md:hidden">
          {NAV_ITEMS.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium no-underline transition-colors ${
                isActive(item.href)
                  ? "bg-white/10 text-white"
                  : "text-zinc-200 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
}
