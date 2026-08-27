import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VEXCode Virtual Skills Summer Camp",
  description:
    "MI3L School's VEXCode Virtual Skills Summer Camp for grades 5-12 runs August 18-22 in Oakville, focused on virtual VEX programming challenges.",
};

export default function VirtualSkillsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
