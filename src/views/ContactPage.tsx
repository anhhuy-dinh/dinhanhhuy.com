"use client";
import { GradText, PageWrapper } from "@/components/ui";

const SOCIALS = [
  { label: "GitHub",         href: "https://github.com/anhhuy-dinh" },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/anh-huy-dinh-534364250/" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi" },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="mx-auto flex min-h-[calc(100vh-120px)] max-w-content items-center px-8 py-[60px]">
        <div className="w-full">

          {/* ── Contact card ── */}
          <div className="card relative px-12 py-20 text-center">
            {/* Background radial glow */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[500px] -translate-x-1/2 -translate-y-1/2"
              style={{ background: "radial-gradient(ellipse,rgba(76,41,197,0.22) 0%,transparent 70%)" }}
            />

            {/* Content */}
            <div className="relative z-[1]">

              {/* Heading */}
              <h1 className="mb-3 text-h1 font-extrabold">
                Let&apos;s <GradText>work</GradText> together.
              </h1>

              {/* Subheading */}
              <p className="mb-10 text-base font-light text-neutral-300">
                Research collaboration, consulting, or just a good conversation.
              </p>

              {/* CTA buttons */}
              <div className="flex justify-center gap-3">
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
              <div className="mt-10 flex justify-center gap-8">
                {SOCIALS.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-neutral-400 no-underline transition-colors hover:text-accent"
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
