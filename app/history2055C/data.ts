export const imageMap: Record<string, string> = {
  prov: "/images/cxprov6.jpg",
  toronto: "/images/ctoronto.jpg",
};

export type TimelineItem = {
  title: string;
  location: string;
  date: string;
  imgKey?: string;
  description?: string;
  award1?: string;
  award2?: string;
  award3?: string;
  navigatePath?: string;
};

export const items: TimelineItem[] = [
  {
    title: "Ontario MS Provincial Championship",
    location: "Ontario",
    date: "February 2026 - Ontario",
    imgKey: "prov",
    description: "Awards:",
    award2: "   - Judge Award ",
  },
  {
    title: "iDESIGN Central Toronto VEX Robotics Competition",
    location: "Toronto ON",
    date: "November 2025 - Toronto ON",
    imgKey: "toronto",
    description: "Awards:",
    award1: "   - Innovate Award",
  },
];
