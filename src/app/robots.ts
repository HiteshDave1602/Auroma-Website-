import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // /invest only redirects to "/"; /api/ is the lead-form endpoint.
      { userAgent: "*", allow: "/", disallow: ["/invest", "/api/"] },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
