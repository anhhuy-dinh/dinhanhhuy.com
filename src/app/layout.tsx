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
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
