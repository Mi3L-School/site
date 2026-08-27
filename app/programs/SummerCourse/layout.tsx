import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Science Fair & Robotics Summer Course",
  description:
    "MI3L School's August Summer Course combines Science Fair prep and VEX V5RC robotics engineering in one afternoon program for students in Oakville.",
};

export default function SummerCourseLayout({ children }: { children: React.ReactNode }) {
  return children;
}
