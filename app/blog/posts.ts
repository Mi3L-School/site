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
    slug: "2055a-university-of-north-dakota-signature-at-the-mall-of-america-2026-08-09",
    title: "Team 2055A Competes at University of North Dakota Signature at the Mall of America",
    date: "2026-08-09",
    excerpt:
      "Team 2055A (2055A Capybaras) competed at University of North Dakota Signature at the Mall of America in Bloomington MN.",
    cover: "/images/amall6.webp",
    tags: ["Robotics", "Competitions"],
    content: `
    <p>Team 2055A (2055A Capybaras) competed at University of North Dakota Signature at the Mall of America in Bloomington MN, representing MI3L School with hard work, sharp engineering, and great sportsmanship.</p>
    <p>Congratulations to the team on another great event — we're proud of the effort and can't wait to see what's next!</p>
  `,
  },
  {
    slug: "vex-worlds-2026-2055a-2055x",
    title: "Congratulations to Teams 2055A and 2055X at VEX Worlds Championship!",
    date: "2026-04-27",
    excerpt:
      "Teams 2055A and 2055X represented MI3L School on the world stage at the VEX Robotics World Championship, with 2055X taking home the Inspire Award in their division.",
    cover: "/images/s.jpeg",
    tags: ["Robotics", "Competitions", "VEX Worlds", "Awards"],
    content: `
      <p>We are incredibly proud to congratulate Teams 2055A and 2055X on an outstanding performance at the VEX Robotics World Championship! Competing against the best teams from around the globe, both squads showcased months of hard work, sharp engineering, and true sportsmanship on one of the biggest stages in robotics. Qualifying for Worlds is itself a remarkable achievement, and our students represented MI3L School with skill, poise, and passion throughout the event.</p>
      <p>Team 2055X capped off the experience by earning the prestigious <strong>Inspire Award</strong> in their division, recognizing their passion, enthusiasm, positivity, and spirit present at the event. Congratulations to both teams on a Worlds run to remember — we can't wait to see what you build next!</p>
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

export function newPost(post: Post) {
  posts.push(post);
}
