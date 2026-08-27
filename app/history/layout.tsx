import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2055 Award History — Full Competition Timeline",
  description:
    "A complete timeline of competition results and awards across all MI3L School VEX teams, from 2023 qualifiers to the 2026 World Championship.",
};

export default function HistoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
