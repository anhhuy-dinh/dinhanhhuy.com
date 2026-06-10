import type { Metadata } from "next";
import PublicationsPage from "@/views/PublicationsPage";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications, presentations, and lectures by Huy Dinh.",
};

export default function Publications() {
  return <PublicationsPage />;
}
