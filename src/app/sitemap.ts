import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// One-page site: every section lives on "/" as an #anchor, and search
// engines ignore URL fragments, so "/" is the only URL to list. /privacy is
// noindex and /invest redirects to "/", so both are left out.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteUrl}/images/villa/hero-front.jpg`,
        `${siteUrl}/images/villa/exterior-front.jpg`,
        `${siteUrl}/images/villa/pool-courtyard.jpg`,
        `${siteUrl}/images/villa/living-room.jpg`,
        `${siteUrl}/images/villa/bedroom-suite.jpg`,
        `${siteUrl}/images/villa/game-room.jpg`,
      ],
    },
  ];
}
