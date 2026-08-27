import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Console",
  description: "Internal registration management console for MI3L School staff.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
