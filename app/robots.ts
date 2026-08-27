import type { MetadataRoute } from "next";

const siteUrl = "https://www.mi3lschool.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/programs/full-vrc-guide"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
