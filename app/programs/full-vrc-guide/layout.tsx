import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full VRC Programming Guide",
  description:
    "A self-paced VEX Robotics programming course covering fundamentals, motor control, sensors, PID tuning, and debugging, from MI3L School's coaching team.",
  robots: { index: false, follow: false },
};

export default function FullVrcGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
