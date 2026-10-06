/**
 * Single source of truth for the downloadable brochure.
 *
 * The file lives at `public/assets/brochure/` so Next.js serves it as a static
 * asset. The URL keeps the exact human filename from the source file, which
 * means the spaces have to be percent-encoded for use in an href.
 *
 * Bump `brochureVersion` whenever the PDF is replaced, so browsers and CDNs
 * holding the previous copy fetch the new one.
 */

export const brochureFileName = "Auroma Holiday Villa Brochure.pdf";

const brochureVersion = "2026-10-06-wellness";

export const brochureHref = `/assets/brochure/Auroma%20Holiday%20Villa%20Brochure.pdf?v=${brochureVersion}`;

/** Approximate size label shown beside the download button, in megabytes. */
export const brochureSizeLabel = "7.7 MB";
