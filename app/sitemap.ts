import type { MetadataRoute } from "next";
import { posts } from "./blog/posts";

const siteUrl = "https://www.mi3lschool.org";

const staticRoutes = [
  "",
  "/about",
  "/achievements",
  "/activities",
  "/blog",
  "/course-list/aerialdrone",
  "/course-list/robotics",
  "/course-list/summercamp2026",
  "/donation",
  "/history",
  "/history2055A",
  "/history2055B",
  "/history2055C",
  "/history2055X",
  "/jobs",
  "/jobs/robotics-instructor",
  "/policy",
  "/programs",
  "/programs/fllSummerCamp",
  "/programs/girl-guide-workshop",
  "/programs/girl-power",
  "/programs/iqWorkshop",
  "/programs/roboticsWorkshops",
  "/programs/ScienceFair",
  "/programs/speakup",
  "/programs/special-needs-workshop",
  "/programs/SummerCourse",
  "/programs/virtualskills",
  "/registration",
  "/registration/vex",
  "/teams",
  "/teams/arialdrone-team",
  "/teams/vex-v5",
  "/teams/vexrc-all-girl-team",
  "/teams/vexrc-high-school-team",
  "/teams/vexrc-middle-school-team",
  "/volunteer",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...staticEntries, ...postEntries];
}
