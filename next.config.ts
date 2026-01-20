import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.discordapp.net",
      },
      {
        protocol: "https",
        hostname: "kb.vex.com",
      },
      {
        protocol: "https",
        hostname: "ms-vsliveshare.gallerycdn.vsassets.io",
      },
      {
        protocol: "https",
        hostname: "github.githubassets.com",
      },
      {
        protocol: "https",
        hostname: "www.gitkraken.com",
      },
    ],
  },
};

export default nextConfig;
