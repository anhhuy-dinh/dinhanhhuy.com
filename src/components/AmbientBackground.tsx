"use client";
// Ambient glow blobs with gentle scroll parallax + noise texture overlay
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function AmbientBackground() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1500], [0, 300]);
  const y2 = useTransform(scrollY, [0, 1500], [0, -240]);
  const y3 = useTransform(scrollY, [0, 1500], [0, 180]);

  return (
    <>
      <motion.div
        style={reduce ? undefined : { y: y1 }}
        className="pointer-events-none fixed -top-[10%] -right-[10%] z-0 h-[min(80vw,800px)] w-[min(80vw,800px)] rounded-full bg-violet-700/20 mix-blend-screen blur-[120px]"
      />
      <motion.div
        style={reduce ? undefined : { y: y2 }}
        className="pointer-events-none fixed -bottom-[10%] -left-[10%] z-0 h-[min(60vw,600px)] w-[min(60vw,600px)] rounded-full bg-indigo-700/10 blur-[100px]"
      />
      <motion.div
        style={reduce ? undefined : { y: y3 }}
        className="pointer-events-none fixed top-[40%] left-[10%] z-0 h-[min(50vw,500px)] w-[min(50vw,500px)] rounded-full bg-fuchsia-600/10 mix-blend-screen blur-[100px]"
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-15 mix-blend-overlay"
        style={{ backgroundImage: NOISE_BG }}
      />
    </>
  );
}
