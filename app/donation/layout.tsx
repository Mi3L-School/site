import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate to MI3L School",
  description:
    "Support MI3L School's VEX Robotics and STEM programs with a secure online donation and help inspire future engineers.",
};

export default function DonationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
