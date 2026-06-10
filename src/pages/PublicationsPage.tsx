"use client";
import { GradText, PageWrapper } from "@/components/ui";
import publications from "@/data/publications";

// Badge classes per publication status
const STATUS_BADGE: Record<string, string> = {
  "Published":      "bg-green-400/10 text-green-400 border-green-400/25",
  "Under Review":   "bg-amber-400/10 text-amber-400 border-amber-400/25",
  "In Preparation": "bg-neutral-400/10 text-neutral-400 border-neutral-400/25",
  "Guest Lecture":  "bg-blue-400/10 text-blue-400 border-blue-400/25",
  "Presentation":   "bg-violet-400/10 text-violet-400 border-violet-400/25",
};

export default function PublicationsPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-content px-8 pt-[60px] pb-20">
        {/* ── Page heading ── */}
        <h1 className="mb-12 text-h1 font-extrabold text-white">
          <GradText>Publications.</GradText>
        </h1>

        {/* ── Publication list ── */}
        <div className="flex flex-col gap-5">
          {publications.map((p) => {
            const badge = STATUS_BADGE[p.status] ?? "bg-accent/10 text-accent border-accent/25";
            return (
              <div key={p.title} className="card px-8 py-7">

                {/* Status pill + year */}
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <span className={`rounded-full border px-3 py-0.5 text-xs font-semibold ${badge}`}>
                    {p.status}
                  </span>
                  <span className="text-xs font-medium text-neutral-400">
                    {p.year}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mb-2 text-base font-bold leading-[1.4] tracking-tight text-white">
                  {p.title}
                </h2>

                {/* Authors */}
                <div className="mb-1.5 text-sm italic text-accent">
                  {p.authors}
                </div>

                {/* Venue */}
                <div className="mb-4 text-xs font-medium text-accent-light">
                  {p.venue}
                </div>

                {/* Abstract */}
                <p className={`rounded-lg border-l-2 border-accent/30 bg-white/[0.03] px-4 py-3.5 text-sm leading-[1.8] text-neutral-400 ${p.links.length > 0 ? "mb-5" : "mb-0"}`}>
                  {p.abstract}
                </p>

                {/* Links */}
                {p.links.length > 0 && (
                  <div className="flex flex-wrap gap-2.5">
                    {p.links.map((l, li) => (
                      <a
                        key={li}
                        href={l.href}
                        className={`${li === 0 ? "btn btn-grad" : "btn btn-ghost"} !px-4 !py-2 !text-xs`}
                      >
                        {l.label}{li === 0 ? " ↗" : ""}
                      </a>
                    ))}
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </PageWrapper>
  );
}
