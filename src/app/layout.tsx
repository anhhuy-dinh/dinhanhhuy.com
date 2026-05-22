import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets:["latin"], variable:"--font-inter", weight:["300","400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: "Hi! I'm Huy | Site of Huy",
  description: "Portfolio of Huy Dinh — PhD Student in Electrical Engineering",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable} style={{ minHeight: "100vh", position: "relative" }}>
        {/* Ambient glow blobs */}
        <div style={{ position:"fixed", top:"-10%", right:"-10%", width:"min(80vw,800px)", height:"min(80vw,800px)", background:"rgba(124,58,237,0.2)", borderRadius:"50%", filter:"blur(120px)", pointerEvents:"none", mixBlendMode:"screen", zIndex:0 }} />
        <div style={{ position:"fixed", bottom:"-10%", left:"-10%", width:"min(60vw,600px)", height:"min(60vw,600px)", background:"rgba(79,70,229,0.1)", borderRadius:"50%", filter:"blur(100px)", pointerEvents:"none", zIndex:0 }} />
        <div style={{ position:"fixed", top:"40%", left:"10%", width:"min(50vw,500px)", height:"min(50vw,500px)", background:"rgba(192,38,211,0.1)", borderRadius:"50%", filter:"blur(100px)", pointerEvents:"none", mixBlendMode:"screen", zIndex:0 }} />
        {/* Noise texture */}
        <div style={{ position:"fixed", inset:0, zIndex:1, opacity:0.15, mixBlendMode:"overlay", pointerEvents:"none", backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
        {children}
      </body>
    </html>
  );
}
