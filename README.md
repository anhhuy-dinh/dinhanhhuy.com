# dinhanhhuy.com
> Next.js 15 · TypeScript · Framer Motion · Spline 3D

---

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

---

## 📁 File Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, Google Font
│   ├── page.tsx            # Router only — maps page state → component
│   └── globals.css         # Global reset, CSS classes, design tokens
│
├── components/
│   ├── Nav.tsx             # Navigation bar
│   ├── SplineScene.tsx     # Spline 3D embed ← change SCENE_URL here
│   └── ui.tsx              # Shared UI: GradText, Tag, StatusBadge, PageWrapper, BgBloom
│
├── data/                   # ← EDIT YOUR CONTENT HERE (each page has its own file)
│   ├── home.ts             # Stats strip, preview counts
│   ├── updates.ts          # Latest news / timeline
│   ├── projects.ts         # Project cards
│   ├── publications.ts     # Papers & talks
│   ├── awards.ts           # Awards & recognition
│   └── about.ts            # Bio, quick facts, education, experience, skills
│
├── pages/                  # One file per page — edit layout/UI here
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ProjectsPage.tsx
│   ├── PublicationsPage.tsx
│   ├── AwardsPage.tsx
│   └── ContactPage.tsx
│
└── types/
    └── index.ts            # Shared TypeScript interfaces

public/
└── images/                 # Put your project/avatar images here
```

**Rule:** content lives in `data/`, UI layout lives in `pages/`. They never mix.

---

## ✏️ Editing Content

### Update your latest news
```ts
// src/data/updates.ts  ← newest entry at TOP
{ date: "May 2025", title: "Paper accepted at IROS!", desc: "Details...", tag: "Research", dot: "#8e6ff7" }
```

### Add a new project
```ts
// src/data/projects.ts
{
  title: "My Project",
  badge: "open",           // "open" | "patent" | "prop"
  tag: "Research",
  collab: null,
  status: "Active",
  statusColor: "#4ade80",  // green
  img: "/images/my-project.jpg",
  desc: "Short desc (Home preview)",
  detail: "Full paragraph (Projects page)",
  tech: ["Python", "Arduino"],
  link: "https://github.com/...",  // null to hide button
}
```

### Add a publication
```ts
// src/data/publications.ts
{
  title: "My Paper Title",
  authors: "D.A. Thi, J. Doe",
  venue: "IEEE Conference on X",
  year: "2025",
  status: "Published",      // "Published" | "Under Review" | "In Preparation"
  statusColor: "#4ade80",   // green=published, yellow=review, gray=prep
  abstract: "Your abstract...",
  links: [{ label: "View Paper", href: "https://arxiv.org/..." }],
}
```

### Add a skill icon
```ts
// src/data/about.ts → skillsGrouped → find the right group → add item:
{ name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" }

// Browse all icons: https://devicon.dev
// Pattern: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{name}-original.svg
// icon: null  →  shows a dot placeholder
```

### Change contact links
```tsx
// src/pages/ContactPage.tsx → find the links array:
{ label: "GitHub",         href: "https://github.com/YOUR_USERNAME" },
{ label: "LinkedIn",       href: "https://linkedin.com/in/YOUR_PROFILE" },
{ label: "Google Scholar", href: "https://scholar.google.com/..." },
```

---

## 🌐 Changing the Spline 3D Scene

1. Go to [spline.design](https://spline.design) → open your scene
2. **Export** → **Viewer** → copy the URL
3. Open `src/components/SplineScene.tsx` line 5:
```ts
const SCENE_URL = "https://prod.spline.design/YOUR_URL/scene.splinecode";
```

---

## 🖼️ Using Real Photos

### Project images
```bash
# 1. Put image in:
public/images/tastesensing.jpg

# 2. In src/data/projects.ts:
img: "/images/tastesensing.jpg"
```

### Avatar photo
```tsx
// src/pages/HomePage.tsx — find avatar-inner div, replace emoji:
import Image from "next/image";

<div className="avatar-inner" style={{ overflow:"hidden" }}>
  <Image src="/images/avatar.jpg" alt="Huy Dinh" width={72} height={72}
    style={{ objectFit:"cover", borderRadius:"50%", width:"100%", height:"100%" }} />
</div>
```

---

## 🎬 Adding Animations (Framer Motion)

`framer-motion` is already installed.

### 1. Scroll-triggered reveal (most useful)
```tsx
// Add this component to any page file:
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut", delay }}>
      {children}
    </motion.div>
  );
}

// Wrap any element:
<Reveal delay={0.1}>
  <div className="card">...</div>
</Reveal>
```

### 2. Staggered list animation
```tsx
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

<motion.div variants={container} initial="hidden" animate="show">
  {projects.map(p => (
    <motion.div key={p.title} variants={item}>
      {/* project card */}
    </motion.div>
  ))}
</motion.div>
```

### 3. Hover lift on cards
```tsx
import { motion } from "framer-motion";

// Replace <div className="card"> with:
<motion.div className="card" whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
  ...
</motion.div>
```

### 4. Animated stat counter
```tsx
import { useMotionValue, useTransform, animate, motion } from "framer-motion";
import { useEffect } from "react";

function Counter({ to }: { to: number }) {
  const count = useMotionValue(0);
  const display = useTransform(count, v => `${Math.round(v)}+`);
  useEffect(() => { animate(count, to, { duration: 1.5, ease: "easeOut" }); }, [count, to]);
  return <motion.span>{display}</motion.span>;
}

// Usage:  <Counter to={26} />  →  animates "0+" → "26+"
```

### 5. Page transition (already working via CSS)
The `.page-enter` keyframe in `globals.css` handles the fade-up on every page switch.
To add exit animations, install `framer-motion` AnimatePresence in `src/app/page.tsx`:
```tsx
import { AnimatePresence, motion } from "framer-motion";

// In Portfolio component, wrap renderPage():
<AnimatePresence mode="wait">
  <motion.div key={page}
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -8 }}
    transition={{ duration: 0.3 }}>
    {renderPage()}
  </motion.div>
</AnimatePresence>
```

---

## 🎨 Changing Colors

Edit `src/app/globals.css` — find `.btn-grad` and any `#8e6ff7` / `#4c29c5`:
```css
/* Primary purple light → dark */
#8e6ff7   →   your new color (light)
#4c29c5   →   your new color (dark)
```

---

## 🚢 Deploy to Vercel

```bash
npm i -g vercel
vercel
# → follow prompts, done in ~60 seconds
```

Or: push to GitHub → connect repo at [vercel.com](https://vercel.com) → auto-deploys on every push.
