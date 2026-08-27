import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FLL Robotics Summer Camp",
  description:
    "Join MI3L School's FLL Robotics Summer Camp for grades 3-8, running Aug 5-8 in Oakville, with hands-on robotics building and programming.",
};

export default function FllSummerCampLayout({ children }: { children: React.ReactNode }) {
  return children;
}
