import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register for Summer Camp",
  description:
    "Sign up for MI3L School's Summer Camp, choosing from Aerial Drone, VEX V5RC, and Science Fair weeks for students in grades 1-11.",
};

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
  return children;
}
