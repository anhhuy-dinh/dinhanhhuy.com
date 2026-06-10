"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cpu, Stethoscope, Brain } from "lucide-react";
import SplineScene from "@/components/SplineScene";
import { GradText, PageWrapper } from "@/components/ui";
import { Reveal, staggerContainer, staggerItem } from "@/components/motion";
import updates from "@/data/updates";

const UPDATES_PREVIEW = 5;

const RESEARCH_INTERESTS = [
  { label: "Embedded Systems", Icon: Cpu },
  { label: "Mobile Health",    Icon: Stethoscope },
  { label: "On-device AI",     Icon: Brain },
];

export default function HomePage() {
  const [expanded, setExpanded] = useState(false);
  const visibleUpdates = expanded ? updates : updates.slice(0, UPDATES_PREVIEW);

  return (
    <PageWrapper>

      {/* ── HERO ── */}
      <div className="relative flex min-h-[calc(100vh-60px)] items-center overflow-hidden">
        {/* Spline scene — absolute right, full bleed (desktop only) */}
        <div className="pointer-events-none absolute top-0 right-[150px] z-[1] hidden h-full w-[55%] md:block">
          <SplineScene />
        </div>

        {/* Left text block — staggered entrance */}
        <div className="relative z-[3] mx-auto w-full max-w-screen-xl px-6 md:px-16">
          <motion.div
            className="md:max-w-[48%]"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >

            {/* Headline */}
            <motion.h1 variants={staggerItem} className="mb-3 text-hero font-extrabold">
              Hi, I&apos;m <GradText>Huy!</GradText>
            </motion.h1>

            {/* Affiliation */}
            <motion.div variants={staggerItem} className="mb-7 text-base font-semibold text-accent">
              PhD Student at University of Colorado Denver
            </motion.div>

            {/* Short bio */}
            <motion.p variants={staggerItem} className="mb-8 max-w-[480px] text-base font-light leading-[1.8] text-neutral-300">
              My research focuses on embedded AI for healthcare applications,
              developing novel wearable devices that bring real-time clinical
              intelligence to the edge — where sensing, inference, and the
              human body meet.
            </motion.p>

            {/* Research interest pills */}
            <motion.div variants={staggerItem} className="mb-8 flex flex-wrap gap-3">
              {RESEARCH_INTERESTS.map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-light"
                >
                  <Icon size={14} aria-hidden />
                  {label}
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-4">
              <Link href="/projects" className="btn btn-grad">
                View My Work →
              </Link>
              <Link href="/about" className="btn btn-ghost">
                About Me
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Latest Updates ── */}
      <div className="border-t border-line bg-black/20">
        <div className="mx-auto max-w-content px-6 pt-16 pb-20 md:px-8">
          {/* Section heading */}
          <Reveal>
            <h2 className="mb-1.5 text-h2 font-extrabold text-white">
              Latest <GradText>Updates.</GradText>
            </h2>
            <div className="mb-10 h-0.5 w-10 rounded bg-accent-grad" />
          </Reveal>

          {/* Timeline items */}
          {visibleUpdates.map((u, i) => (
            <Reveal key={i} delay={Math.min(i * 0.06, 0.3)}>
            <div className="grid grid-cols-[24px_1fr] gap-x-5">
              {/* Dot + connector */}
              <div className="flex flex-col items-center pt-1.5">
                <div className="relative h-3 w-3 shrink-0">
                  <div
                    className={`h-3 w-3 rounded-full border-2 border-accent/25 bg-accent ${
                      i === 0 ? "shadow-[0_0_10px_#8e6ff7]" : ""
                    }`}
                  />
                  {i === 0 && <div className="dot-ping" />}
                </div>
                {i < visibleUpdates.length - 1 && (
                  <div className="mt-1.5 w-px flex-1 bg-zinc-800" />
                )}
              </div>

              {/* Update content */}
              <div className={i < visibleUpdates.length - 1 ? "pb-8" : ""}>
                <div className="mb-1 text-sm font-bold uppercase tracking-[0.08em] text-accent">
                  {u.date}
                </div>
                <div className="text-sm leading-[1.75] text-neutral-300">
                  {u.desc.map((seg, j) =>
                    typeof seg === "string" ? (
                      <span key={j}>{seg}</span>
                    ) : seg.href ? (
                      <a
                        key={j}
                        href={seg.href}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-accent no-underline hover:underline ${seg.bold ? "font-bold" : "font-normal"}`}
                      >
                        {seg.text}
                      </a>
                    ) : (
                      <strong key={j} className="font-bold text-white">{seg.text}</strong>
                    )
                  )}
                </div>
              </div>
            </div>
            </Reveal>
          ))}

          {/* Expand / collapse button */}
          {updates.length > UPDATES_PREVIEW && (
            <button
              onClick={() => setExpanded(prev => !prev)}
              className="mt-8 block cursor-pointer rounded-md border border-line bg-transparent px-5 py-2 text-xs text-accent transition-colors hover:border-accent"
            >
              {expanded ? "Show less ↑" : `Show all ${updates.length} updates ↓`}
            </button>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
