/**
 * Single source of truth for the downloadable brochure.
 *
 * The file lives at `public/assets/brochure/` so Next.js serves it as a static
 * asset. The URL keeps the exact human filename from the source file, which
 * means the spaces have to be percent-encoded for use in an href.
 */

export const brochureFileName = "Auroma Holiday Villa Brochure.pdf";

export const brochureHref = "/assets/brochure/Auroma%20Holiday%20Villa%20Brochure.pdf";

/** Approximate size label shown beside the download button, in megabytes. */
export const brochureSizeLabel = "7.4 MB";
