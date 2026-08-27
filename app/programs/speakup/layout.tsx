import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speak Up! Youth Public Speaking Workshop",
  description:
    "MI3L School's Speak Up! workshop for ages 9-14 builds confidence in public speaking, presentation skills, and charisma — no experience needed.",
};

export default function SpeakUpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
