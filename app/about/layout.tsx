import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Robotics Coaches & Instructors",
  description:
    "Meet the award-winning VEX Robotics coaches behind MI3L School, including founder Charmaine Li and V5RC lead instructor Connor Zhou.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
