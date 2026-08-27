import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VEX V5 Robotics Competition Team",
  description:
    "Meet MI3L School's VEX V5RC teams and season roadmap, competing at qualifiers, regionals, and the VEX World Championship in St. Louis.",
};

export default function VexV5Layout({ children }: { children: React.ReactNode }) {
  return children;
}
