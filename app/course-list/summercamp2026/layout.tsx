import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone, BJJ & Robotics Summer Camp 2026",
  description:
    "A five-week summer camp for grades 1-11 in Oakville featuring Aerial Drone & Python, Brazilian Jiu-Jitsu, VEX V5RC Robotics, and Science Fair prep.",
};

export default function SummerCamp2026Layout({ children }: { children: React.ReactNode }) {
  return children;
}
