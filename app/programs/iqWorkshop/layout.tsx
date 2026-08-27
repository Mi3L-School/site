import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VEX IQ Summer Workshop",
  description:
    "MI3L School's VEX IQ Summer Workshop for grades 3-8 runs August 12-16 in Oakville, introducing students to VEX IQ robotics building and programming.",
};

export default function IqWorkshopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
