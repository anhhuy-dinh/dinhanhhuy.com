# Design System — dinhanhhuy.com

> Extracted by /cf-design scan — 2026-06-10

## Detected Design System

**Style**: Aurora / Gradient-first + Glassmorphism on a Dark-Mode-First base — high confidence.
Dark zinc background (#09090b), fixed blurred violet/indigo/fuchsia blobs + SVG noise overlay in `layout.tsx`, glass cards (`.card` in `globals.css`), gradient text accents.

**Colors**
- Primary accent: `#8e6ff7` (violet) — CTA, links, timeline dots, labels
- Primary dark: `#4c29c5` (indigo) — gradient end stop
- Accent light: `#c4b5fd` — tag text, gradient start stop
- Background: `#09090b` (zinc-950); card surface: `rgba(39,39,42,0.4)` + `blur(12px)`
- Borders: `#404040` (hard) and `rgba(255,255,255,0.05)` (glass) — **inconsistent, two systems coexist**
- Text: `#fff` headings · `#d4d4d4` body · `#a3a3a3` muted
- Semantic: green `#4ade80` (open/published), amber `#fbbf24` (patent/review), red `#f87171` (proprietary), blue `#60a5fa` (industry/lecture), purple `#a78bfa` (academic)

**Typography**
- Single family: Inter (300–900) via `next/font`, CSS var `--font-inter`
- Headings: 800, tight letter-spacing (-0.03em), `clamp()` sizing (hero: 3rem→5.5rem)
- Body: 300–400, line-height 1.7–1.85
- Labels: 600, uppercase, letter-spacing 0.08–0.14em
- No display/mono pairing — Inter everywhere

**Spacing base**: no formal scale — ad-hoc rem/px values (0.35rem … 5rem). Container: max-width 1100px (content) / 1280px (hero), padding 2rem.

**Shape**
- Cards: radius 16px; tags/badges: 5px; buttons: 8–12px; pills/nav: 9999px
- Shadows: violet glow on hover (`0 8px 40px -12px rgba(142,111,247,.2)`), `0 0 28px` on gradient buttons

**Motion**
- CSS only: `.page-enter` fadeUp 0.4s, `.dot-ping` pulse, button shine sweep 0.42s, card hover lift -2px
- **framer-motion installed but unused**

**Components**
- Buttons: `.btn-grad` (violet gradient + shine sweep) / `.btn-ghost` (border, hover violet)
- Cards: glass with gradient-glow hover (::before bottom glow, ::after top hairline)
- Tags: violet-tinted pill (rgba 0.08 bg / 0.15–0.22 border), `StatusBadge` with emoji prefix
- Nav: floating pill nav, fixed top-24px, blur backdrop on scroll, active = white/10 bg
- Timelines: dot + 1px connector (HomePage updates, AboutPage education/experience)
- Hero: text left (max 48%) + absolute Spline 3D scene right (55%, offset right:150)

## Target Direction (revised 2026-06-10)

**Keep the rich Aurora/Glassmorphism identity — improve execution, don't strip it.**

A "Refined Minimalism" pass (remove blobs, flat buttons, gradient only on the "." mark, reduced effects) was implemented on branch `ui/phase-3-minimalism` and REJECTED by the owner after visual review ("quá xấu, không có đột phá"). Do not revisit that direction.

What the owner actually wants:
- The gradient/glow/glass look IS the brand — keep blobs, gradient text, glass cards, shine effects
- "Minimalism/thống nhất" means tidiness: consistent tokens, unified badge/timeline styles, no clutter — not visual restraint
- They want "đột phá" (visual impact / wow factor) — polish and elevate within the rich aesthetic
- Any visual direction change must be shown live (branch + dev server) before being adopted

## Implementation notes (current state)
- ~95% inline `style={{}}` objects; Tailwind installed but nearly unused (config extends only `violet: #8e6ff7`)
- Hover states via `onMouseEnter/onMouseLeave` JS handlers instead of CSS
- SPA-style page switching with `useState` in `src/app/page.tsx` — no per-page routes/URLs
- No responsive handling on Nav (no mobile menu), hero, About 2-col grid, Awards `1fr 1fr` grid
- Raw `<img>` (no `next/image`); Spline viewer loaded from unpkg at runtime
- Known bugs: AboutPage experience type-badge & tech-tag font-size `1rem`/`0.92rem` (oversized vs 0.68–0.72rem elsewhere); skill-pill `onMouseLeave` resets border to `#383838` which is not the initial color
