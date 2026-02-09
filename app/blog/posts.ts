export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover: string;
  content: string;
  tags: string[];
};

export const posts: Post[] = [
  {
    slug: "News",
    title: "All Girls Team: Win Innovate Award in iDesign Robotics Event",
    date: "2026-01-31",
    excerpt:
      "A new all-girls team of just two members clinched the prestigious Innovate Award at iDesign. With a standout engineering solution, they beat larger teams, challenging STEM stereotypes and showcasing the power of skill and determination",
    cover: "/images/blog/iDesign/IDesign.jpg",
    tags: ["Robotics", "Competitions", "Coaching"],
    content: `
      <p>Robotics is more than building machines — it's systems thinking, teamwork, and iterative design. In this article we explore a development roadmap for students aged 9–18.</p>
      <h3>Start with fundamentals</h3>
      <p>We recommend beginning with logic, sensors, and basic control. Short, focused exercises teach debugging and measurement.</p>
      <h3>Progress to mechanisms</h3>
      <p>Once fundamentals are stable, students can learn to design drivetrains, manipulators, and optimize for weight and reliability.</p>
    `,
  },
  {
    slug: "ai-in-education",
    title: "AI in Education: Teaching the Next Generation",
    date: "2025-02-02",
    author: "Coach B",
    excerpt:
      "Why AI literacy matters and simple classroom projects to introduce it safely.",
    cover: "/images/im3.png",
    tags: ["AI", "Curriculum", "Workshops"],
    content: `
      <p>Teaching AI begins with concepts of data, models, and ethics. Practical projects can use small datasets and visualizations.</p>
      <h3>Projects to try</h3>
      <ul>
        <li>Image classification with tiny datasets</li>
        <li>Sensor-based behavior prediction</li>
      </ul>
    `,
  },
  {
    slug: "summer-camp-highlights",
    title: "Summer Camp Highlights: Creativity & Competition",
    date: "2024-12-20",
    author: "Program Lead",
    excerpt: "Snapshots from our summer program: challenges, builds, and student wins.",
    cover: "/images/home1.png",
    tags: ["Camp", "Projects"],
    content: `
      <p>Our summer camp blends guided lessons with open-ended projects. Students leave with working prototypes and improved problem-solving skills.</p>
      <h3>Outcomes</h3>
      <p>Increased confidence, teamwork, and tangible projects for portfolios.</p>
    `,
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) || null;
}

export function searchPosts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return posts;
  return posts.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.tags.join(" ").toLowerCase().includes(q)
  );
}
