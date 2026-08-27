import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Robotics & STEM Workshops",
  description:
    "Join MI3L School's free Robotics & STEM Workshops in Oakville and Mississauga, hosted by teams 2055A/X and the Aerial Drone team, building and flying hands-on.",
};

export default function RoboticsWorkshopsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
