import type { Metadata } from "next";
import AwardsPage from "@/views/AwardsPage";

export const metadata: Metadata = {
  title: "Awards",
  description: "Awards and recognition received by Huy Dinh.",
};

export default function Awards() {
  return <AwardsPage />;
}
