import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science Fair Preparation Course",
  description:
    "MI3L School's two-week evening Science Fair Preparation Course for grades 7-12 guides students from choosing a project to presenting their conclusions.",
};

export default function ScienceFairLayout({ children }: { children: React.ReactNode }) {
  return children;
}
