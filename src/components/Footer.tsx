import { GradText } from "@/components/ui";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

const SOCIALS = [
  { label: "GitHub",         href: "https://github.com/anhhuy-dinh",                               Icon: FiGithub },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/anh-huy-dinh-534364250/",          Icon: FiLinkedin },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi", Icon: SiGooglescholar },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-line px-8 py-5">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-3 md:flex-row">
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
  );
}
