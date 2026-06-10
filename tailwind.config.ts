import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand accent (violet → indigo gradient endpoints)
        accent: {
          light: "#c4b5fd",
          DEFAULT: "#8e6ff7",
          dark: "#4c29c5",
        },
        // Page background
        surface: "#09090b",
        // Single border token — all hairlines, dividers, card borders
        line: "rgba(255,255,255,0.08)",
      },
      fontSize: {
        // Fluid heading scale
        hero: ["clamp(3rem,6vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        h1: ["clamp(2rem,4vw,3rem)", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        h2: ["clamp(1.5rem,3vw,2rem)", { lineHeight: "1.2", letterSpacing: "-0.03em" }],
      },
      backgroundImage: {
        "accent-grad": "linear-gradient(135deg,#8e6ff7,#4c29c5)",
        "accent-grad-text": "linear-gradient(135deg,#c4b5fd 0%,#8e6ff7 50%,#4c29c5 100%)",
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
};

export default config;
