import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets:["latin"], variable:"--font-inter", weight:["300","400","500","600","700","800","900"] });

export const metadata: Metadata = {
  title: {
    default: "Hi! I'm Huy | Site of Huy",
    template: "%s | Huy Dinh",
  },
  description: "Portfolio of Huy Dinh — PhD Student in Electrical Engineering",
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
};

const NOISE_BG = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} relative min-h-screen`}>
        {/* Ambient glow blobs */}
        <div className="pointer-events-none fixed -top-[10%] -right-[10%] z-0 h-[min(80vw,800px)] w-[min(80vw,800px)] rounded-full bg-violet-700/20 mix-blend-screen blur-[120px]" />
        <div className="pointer-events-none fixed -bottom-[10%] -left-[10%] z-0 h-[min(60vw,600px)] w-[min(60vw,600px)] rounded-full bg-indigo-700/10 blur-[100px]" />
        <div className="pointer-events-none fixed top-[40%] left-[10%] z-0 h-[min(50vw,500px)] w-[min(50vw,500px)] rounded-full bg-fuchsia-600/10 mix-blend-screen blur-[100px]" />
        {/* Noise texture */}
        <div className="pointer-events-none fixed inset-0 z-[1] opacity-15 mix-blend-overlay" style={{ backgroundImage: NOISE_BG }} />

        <div className="relative z-[1] min-h-screen">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
