import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About",
  description: "About Huy Dinh — background, education, experience, and tech stack.",
};

export default function About() {
  return <AboutPage />;
}
