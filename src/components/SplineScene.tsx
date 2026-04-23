"use client";
import { useEffect, useRef } from "react";

// ─── CHANGE THIS: your Spline scene URL ──────────────────────────────────────
const SCENE_URL = "https://prod.spline.design/zLignV-NPTzfXC7q/scene.splinecode";
// ─────────────────────────────────────────────────────────────────────────────

export default function SplineScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.getElementById("spline-script")) {
      const script = document.createElement("script");
      script.id = "spline-script";
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.9.82/build/spline-viewer.js";
      document.head.appendChild(script);
    }

    function mount() {
      if (!containerRef.current) return;
      containerRef.current.innerHTML = "";
      const viewer = document.createElement("spline-viewer") as HTMLElement;
      viewer.setAttribute("url", SCENE_URL);
      viewer.setAttribute("background", "transparent");
      // events-target="global" lets mouse events work across the full window
      viewer.setAttribute("events-target", "global");
      viewer.style.cssText = "width:100%;height:100%;display:block;";
      containerRef.current.appendChild(viewer);
    }

    customElements.get("spline-viewer")
      ? mount()
      : customElements.whenDefined("spline-viewer").then(mount);
  }, []);

  // No wrapper glow box, no border, no card — just the viewer filling its container
  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
    />
  );
}
