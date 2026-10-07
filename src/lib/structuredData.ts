import { PENDING } from "@/content/pending";
import { lpB } from "@/content/lp-b";
import { villaImages } from "@/content/shared";
import { siteName, siteUrl } from "@/lib/site";

// schema.org JSON-LD for the homepage. Validate changes at
// https://search.google.com/test/rich-results and https://validator.schema.org/.
// Every fact here must already appear on the page — no invented figures.

const abs = (path: string) => new URL(path, siteUrl).toString();

const ids = {
  organization: `${siteUrl}/#organization`,
  website: `${siteUrl}/#website`,
  listing: `${siteUrl}/#listing`,
  villa: `${siteUrl}/#villa`,
};

const listingImages = [
  villaImages.heroFront,
  villaImages.exteriorFront,
  villaImages.poolCourtyard,
  villaImages.livingRoom,
  villaImages.bedroomSuite,
  villaImages.gameRoom,
].map((img) => abs(img.src));

export function homeJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": ids.organization,
    name: siteName,
    url: siteUrl,
    logo: abs("/images/logo/logo-on-midnight.png"),
    ...(PENDING.reachUsEmail && { email: PENDING.reachUsEmail }),
    ...(PENDING.whatsappNumber && { telephone: PENDING.whatsappNumber.replace(/\s/g, "") }),
    sameAs: [
      "https://www.instagram.com/auromaholidayvillas/",
      "https://www.facebook.com/auromaholidayvillas/",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": ids.website,
    name: siteName,
    url: siteUrl,
    inLanguage: "en-IN",
    publisher: { "@id": ids.organization },
  };

  const villa = {
    "@type": "SingleFamilyResidence",
    "@id": ids.villa,
    name: `${siteName} — Villa Near Auroville`,
    description:
      "A three-storey, architect-designed holiday villa by Ar. Trupti Doshi: 3 ensuite bedrooms, 4 baths, sleeps 8, private pool and a top-floor game room. 10 minutes from the Matrimandir, 15 from Pondicherry.",
    image: listingImages,
    numberOfBedrooms: 3,
    numberOfBathroomsTotal: 4,
    occupancy: { "@type": "QuantitativeValue", maxValue: 8, unitText: "guests" },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private pool", value: true },
      { "@type": "LocationFeatureSpecification", name: "Game room", value: true },
      { "@type": "LocationFeatureSpecification", name: "Roof terrace", value: true },
    ],
    // TODO(owner): add streetAddress, postalCode and geo once the exact plot
    // address is confirmed for publication.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Near Auroville, Pondicherry",
      addressCountry: "IN",
    },
    hasMap: "https://maps.app.goo.gl/Mgb3WSBTKnn9nGWK7",
  };

  const listing = {
    "@type": "RealEstateListing",
    "@id": ids.listing,
    url: siteUrl,
    name: lpB.meta.title,
    description: lpB.meta.description,
    image: listingImages,
    inLanguage: "en-IN",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.villa },
    provider: { "@id": ids.organization },
    ...(PENDING.priceFromInr && {
      offers: {
        "@type": "Offer",
        price: PENDING.priceFromInr,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: siteUrl,
        seller: { "@id": ids.organization },
        itemOffered: { "@id": ids.villa },
      },
    }),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, listing, villa],
  };
}

/** Serialises JSON-LD for a <script> tag, escaping "<" so content can't close it. */
export function jsonLdScript(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
