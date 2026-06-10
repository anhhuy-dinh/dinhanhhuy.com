"use client";
import Image from "next/image";
import { GradText, Tag, StatusBadge, PageWrapper } from "@/components/ui";
import { Reveal, TiltCard } from "@/components/motion";
import projects from "@/data/projects";

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-content px-8 py-[60px]">
        {/* ── Page heading ── */}
        <Reveal y={28}>
          <h1 className="mb-2 text-h1 font-extrabold text-white">
            Featured <GradText>Work.</GradText>
          </h1>
          <p className="mb-14 text-sm text-neutral-400">
            Hardware, software, and everything in between.
          </p>
        </Reveal>

        {/* ── Project list ── */}
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={0.15 + (i < 3 ? i * 0.15 : 0)}>
            <TiltCard>
            <div className="card flex min-h-[280px] max-md:flex-col">

              {/* Project image */}
              <div className="relative w-[41.67%] shrink-0 overflow-hidden border-r border-line max-md:aspect-[16/10] max-md:w-full max-md:border-r-0 max-md:border-b">
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover opacity-80 transition-[opacity,transform] duration-300"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent to-60% opacity-80" />
                {/* Tech tag overlay */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map(t => (
                    <span
                      key={t}
                      className="rounded border border-accent/30 bg-black/65 px-2 py-0.5 text-xs font-medium text-accent-light backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col justify-center p-8">
                {/* Status + tag + badge row */}
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded border px-2 py-0.5 text-xs font-semibold"
                    style={{
                      background: `${p.statusColor}18`,
                      color: p.statusColor,
                      borderColor: `${p.statusColor}40`,
                    }}
                  >
                    {p.status}
                  </span>
                  <Tag label={p.tag} />
                  <StatusBadge type={p.badge} />
                </div>

                {/* Title */}
                <h2 className="mb-2 text-xl font-extrabold leading-tight tracking-tight text-white">
                  {p.title}
                </h2>

                {/* Collaborators */}
                {p.collab && (
                  <div className="mb-3 text-xs italic text-accent">
                    {p.collab}
                  </div>
                )}

                {/* Description */}
                <p className="mb-4 text-sm leading-[1.8] text-neutral-300">
                  {p.detail}
                </p>

                {/* All tech tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="rounded border border-accent/15 bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {p.link && (
                  <a
                    href={p.link}
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white no-underline transition-colors hover:text-accent"
                  >
                    View Details →
                  </a>
                )}
              </div>

            </div>
            </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
