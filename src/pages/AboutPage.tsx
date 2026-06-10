"use client";
import { GradText, PageWrapper } from "@/components/ui";
import { bio, quickFacts, education, experience, skillsGrouped } from "@/data/about";
import { FiGithub, FiLinkedin, FiFileText } from "react-icons/fi";
import { SiGooglescholar } from "react-icons/si";

// Badge classes per experience type
const EXP_BADGE: Record<string, string> = {
  Industry: "bg-blue-400/10 text-blue-400 border-blue-400/25",
  Academic: "bg-violet-400/10 text-violet-400 border-violet-400/25",
  Research: "bg-green-400/10 text-green-400 border-green-400/25",
};

const SOCIALS = [
  { label: "GitHub",         href: "https://github.com/anhhuy-dinh",                               icon: <FiGithub size={15} /> },
  { label: "LinkedIn",       href: "https://www.linkedin.com/in/anh-huy-dinh-534364250/",          icon: <FiLinkedin size={15} /> },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=4biuKawAAAAJ&hl=vi", icon: <SiGooglescholar size={15} /> },
  { label: "CV",             href: "/cv.pdf",                                                       icon: <FiFileText size={15} /> },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-content px-8 pt-[60px] pb-20">
        {/* ── Page heading ── */}
        <h1 className="mb-12 text-h1 font-extrabold text-white">
          About <GradText>me.</GradText>
        </h1>

        {/* ── Bio + Quick Facts ── */}
        <div className="card mb-12 p-8">
          <div className="grid grid-cols-2 gap-8">
            {/* Bio paragraph + social links */}
            <div className="flex flex-col">
              <p className="mb-5 text-base leading-[1.85] text-neutral-300">
                {bio.intro.map((seg, i) =>
                  typeof seg === "string" ? (
                    <span key={i}>{seg}</span>
                  ) : (
                    <a
                      key={i}
                      href={seg.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-accent-light no-underline hover:underline"
                    >
                      {seg.text}
                    </a>
                  )
                )}
              </p>

              {/* Social links */}
              <div className="mt-auto flex flex-wrap gap-2.5">
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-3.5 py-1.5 text-xs font-medium text-neutral-400 no-underline transition-colors hover:border-accent/40 hover:bg-accent/15 hover:text-accent-light"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick facts list */}
            <div>
              {quickFacts.map(f => (
                <div key={f.label} className="mb-2 flex items-baseline gap-4 border-b border-line pb-3">
                  <span className="min-w-[90px] text-base font-medium text-neutral-400">
                    {f.label}
                  </span>
                  <span className="text-base font-medium text-white">
                    {f.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Education timeline ── */}
        <div className="mb-12">
          <h2 className="mb-7 text-h2 font-extrabold text-white">
            <GradText>Education.</GradText>
          </h2>

          {education.map((e, i) => {
            const isLast = i === education.length - 1;
            const current = e.period.includes("Present");
            return (
              <div key={e.degree} className="grid grid-cols-[160px_36px_1fr] gap-x-4">
                {/* Left: logo card + period, centered */}
                <div className={`flex flex-col items-center ${isLast ? "" : "pb-8"}`}>
                  <div className="card mb-2 flex min-h-[80px] w-full items-center justify-center border-0 bg-white p-2">
                    {e.logo ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={e.logo}
                        alt={e.school}
                        className="h-auto max-h-[72px] w-full object-contain opacity-90"
                      />
                    ) : (
                      <span className="text-base text-neutral-500">—</span>
                    )}
                  </div>
                  <div className="text-center text-sm font-medium text-neutral-400">
                    {e.period}
                  </div>
                </div>

                {/* Timeline dot + connector */}
                <div className="flex flex-col items-center pt-1">
                  <div
                    className={`h-2.5 w-2.5 shrink-0 rounded-full border-2 ${
                      current
                        ? "border-accent bg-accent shadow-[0_0_8px_#8e6ff7]"
                        : "border-neutral-600 bg-neutral-700"
                    }`}
                  />
                  {!isLast && <div className="mt-1 w-px flex-1 bg-line" />}
                </div>

                {/* Right: degree + school + details */}
                <div className={isLast ? "" : "pb-8"}>
                  <div className="mb-0.5 text-base font-bold text-white">{e.degree}</div>
                  <div className="mb-1.5 text-sm font-medium text-accent">{e.school}</div>
                  <div className="text-sm leading-[1.7] text-neutral-300">
                    {e.detail.map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Experience timeline ── */}
        <div className="mb-12">
          <h2 className="mb-7 text-h2 font-extrabold text-white">
            Work <GradText>Experience.</GradText>
          </h2>

          {experience.map((e, i) => {
            const isLast = i === experience.length - 1;
            const current = e.period.includes("Present");
            return (
              <div key={e.role} className="grid grid-cols-[160px_36px_1fr] gap-x-4">
                {/* Period label */}
                <div className={`pt-0.5 text-right text-sm font-medium text-neutral-400 ${isLast ? "" : "pb-8"}`}>
                  {e.period}
                </div>

                {/* Timeline dot + connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 ${
                      current
                        ? "border-accent bg-accent shadow-[0_0_8px_#8e6ff7]"
                        : "border-neutral-600 bg-neutral-700"
                    }`}
                  />
                  {!isLast && <div className="mt-1 w-px flex-1 bg-line" />}
                </div>

                {/* Experience card */}
                <div className={isLast ? "" : "pb-8"}>
                  <div className="card px-6 py-5">
                    {/* Role + company + type badge */}
                    <div className="mb-1.5 flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="mb-0.5 text-base font-bold text-white">{e.role}</div>
                        <div className="text-base font-medium text-accent">{e.company}</div>
                      </div>
                      <span className={`rounded border px-2 py-0.5 text-xs font-semibold ${EXP_BADGE[e.type]}`}>
                        {e.type}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mb-3 text-sm leading-[1.75] text-neutral-300">
                      {e.detail}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {e.tech.map(t => (
                        <span
                          key={t}
                          className="rounded border border-accent/15 bg-accent/10 px-2 py-0.5 text-xs text-accent-light"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Skills / Tech Stack ── */}
        <div className="mb-12">
          <h2 className="mb-7 text-h2 font-extrabold text-white">
            Tech <GradText>Stack.</GradText>
          </h2>

          <div className="flex flex-col gap-6">
            {skillsGrouped.map(g => (
              <div key={g.group}>
                {/* Group label */}
                <div className="mb-3 border-b border-line pb-2 text-xs font-semibold uppercase tracking-[0.1em] text-neutral-400">
                  {g.group}
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {g.items.map(s => (
                    <div
                      key={s.name}
                      className="flex cursor-default items-center gap-2 rounded-full border border-accent/20 bg-accent/10 py-1 pl-2 pr-3 transition-colors hover:border-accent/40"
                    >
                      {/* Icon or fallback dot */}
                      {s.icon ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={s.icon} alt={s.name} width={18} height={18} className="shrink-0 object-contain" />
                      ) : (
                        <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-neutral-700 text-xs text-neutral-400">
                          •
                        </span>
                      )}
                      <span className="whitespace-nowrap text-sm font-medium text-neutral-200">
                        {s.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}
