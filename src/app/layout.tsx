import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} relative min-h-screen`}>
        {/* Ambient glow blobs (scroll parallax) + noise */}
        <AmbientBackground />

        <div className="relative z-[1] min-h-screen">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
