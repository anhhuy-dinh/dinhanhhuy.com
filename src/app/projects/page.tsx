import type { Metadata } from "next";
import ProjectsPage from "@/views/ProjectsPage";

export const metadata: Metadata = {
  title: "Projects",
  description: "Featured work of Huy Dinh — hardware, software, and everything in between.",
};

export default function Projects() {
  return <ProjectsPage />;
}
