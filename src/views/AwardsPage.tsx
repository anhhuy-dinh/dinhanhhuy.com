"use client";
import { GradText, PageWrapper } from "@/components/ui";
import { Reveal } from "@/components/motion";
import awards from "@/data/awards";

export default function AwardsPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-content px-8 py-[60px]">
        {/* ── Page heading ── */}
        <h1 className="mb-12 text-h1 font-extrabold text-white">
          <GradText>Recognition.</GradText>
        </h1>

        {/* ── Awards grid ── */}
        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          {awards.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 0.08} className="h-full">
            <div className="card h-full p-7">
              {/* Title + year */}
              <div className="mb-2 flex items-start justify-between">
                <span className="text-base font-bold text-white">{a.title}</span>
                <span className="ml-4 whitespace-nowrap text-xs font-semibold text-accent">
                  {a.year}
                </span>
              </div>

              {/* Description */}
              <p className="m-0 text-sm leading-[1.7] text-neutral-300">
                {a.desc}
              </p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
