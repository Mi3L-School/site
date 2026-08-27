import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VEX V5 Robotics Training Intensive",
  description:
    "A comprehensive 8-course V5RC training series at MI3L School's Oakville campus, taking students from robotics basics to competition-ready engineering.",
};

export default function RoboticsCourseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
