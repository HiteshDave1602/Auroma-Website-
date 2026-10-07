/**
 * Canonical production origin. Drives metadataBase (canonical, og:url, OG
 * image URLs), sitemap.xml, robots.txt and the JSON-LD @ids. Override with
 * NEXT_PUBLIC_SITE_URL only if the primary domain changes — preview
 * deployments should still point their canonical at production.
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.auromaholidayvillas.com";

export const siteName = "Auroma Holiday Villas";
