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
    title: "All Girls Team: Won Innovate Award at iDesign Robotics Event",
    date: "2026-01-31",
    excerpt:
      "A new all-girls team of just two members clinched the Innovate Award at iDesign in Toronto. With a standout engineering solution, they beat larger teams, challenging STEM stereotypes and showcasing the power of skill and determination",
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
    slug: "gateway event",
    title: "2055A Wins Think Award at Gateway to the West VEX V5 Competition",
    date: "2026-01-30",
    excerpt:
      "Team 2055A secured the Think Award at the Gateway to the West VEX V5 Robotics Competition Signature Event, showcasing exceptional engineering and strategic design.",
    cover: "/images/im3.png",
    tags: ["Robotics", "Competitions", "Awards"],
    content: `
      <p>Congratulations to Team 2055A for winning the prestigious Think Award at the Gateway to the West VEX V5 Robotics Competition Signature Event!</p>
      <h3>About the Think Award</h3>
      <p>The Think Award recognizes teams that demonstrate excellent engineering design, problem-solving methodology, and strategic planning. It reflects a team's ability to approach challenges methodically and develop innovative solutions.</p>
      <h3>Team 2055A's Achievement</h3>
      <p>This award highlights the team's dedication, technical expertise, and collaborative spirit. Through consistent practice and expert coaching at MI3L School, they developed a competitive robot that impressed judges with its design and functionality.</p>
      <h3>What's Next</h3>
      <p>With this momentum, Team 2055A continues to refine their robot and strategy for upcoming tournaments. The MI3L coaching team is proud of their progress and excited for their future competitions.</p>
    `,
  },
  {
    slug: "girl power workshop",
    title: "Girl Power Workshop: Inspiring Young Women in Robotics",
    date: "2026-01-18",
    excerpt: "MI3L School's all-girls team hosted an empowering workshop to inspire young women to pursue STEM and robotics, breaking barriers and building confidence.",
    cover: "/images/blog/sn1.jpg",
    tags: ["Workshop", "Girls in STEM", "Robotics"],
    content: `
      <p>On January 18, 2026, MI3L School's all-girls robotics team hosted an inspiring Girl Power Workshop designed to encourage young women to explore STEM fields and robotics.</p>
      <h3>Workshop Goals</h3>
      <p>The workshop aimed to:</p>
      <ul>
        <li>Introduce girls to hands-on robotics and engineering</li>
        <li>Showcase successful female role models in STEM</li>
        <li>Build confidence and foster collaboration</li>
        <li>Demonstrate that robotics is for everyone</li>
      </ul>
      <h3>Participant Feedback</h3>
      <p>Young attendees engaged in building challenges, learned about competition robotics, and heard inspiring stories from our all-girls team members about their journey in STEM. Participants left motivated and excited to pursue robotics.</p>
      <h3>Impact</h3>
      <p>This workshop is part of MI3L School's commitment to promoting diversity and inclusion in robotics. We believe that empowering young women today creates the innovators and leaders of tomorrow.</p>
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
