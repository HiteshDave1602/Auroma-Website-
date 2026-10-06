import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { siteLocation } from "@/content/shared";
import { PENDING } from "@/content/pending";

const photos = [siteLocation.aerial, ...siteLocation.details];

// The aerials are supplied separately from the rest of the brochure art, so
// the section stays hidden until every photograph is in public/ rather than
// rendering broken images.
function photosReady() {
  return photos.every((p) =>
    existsSync(path.join(process.cwd(), "public", p.src)),
  );
}

// Brochure p.8 layout: a wide aerial of the plot with the map link
// pinned bottom-right, two aerials side by side beneath it, then a sand band
// carrying the eyebrow and line.
export function SiteLocationSection({ id }: { id?: string }) {
  if (!photosReady()) return null;

  return (
    <section
      id={id}
      className="scroll-mt-20 bg-sand-texture px-6 pt-20 sm:px-8 sm:pt-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl bg-midnight">
          <Image
            src={siteLocation.aerial.src}
            alt={siteLocation.aerial.alt}
            fill
            quality={90}
            sizes="(min-width: 1100px) 1100px, 100vw"
            className="object-cover"
          />
          {PENDING.siteLocationUrl && (
            <a
              href={PENDING.siteLocationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 bottom-4 rounded-xl bg-paper px-5 py-3 font-label text-[11px] tracking-[0.2em] uppercase text-midnight shadow-lg shadow-midnight/20 transition-colors duration-300 hover:bg-gold hover:text-paper sm:right-8 sm:bottom-8 sm:px-6 sm:py-3.5"
            >
              {siteLocation.cta}
            </a>
          )}
        </div>

        <div className="mt-1.5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
          {siteLocation.details.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative aspect-[16/9] overflow-hidden bg-midnight ${
                i === 0
                  ? "sm:rounded-bl-2xl"
                  : "rounded-b-2xl sm:rounded-bl-none"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                quality={90}
                sizes="(min-width: 1100px) 550px, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] py-14 sm:py-20">
        <Reveal>
          <Eyebrow tone="gold">{siteLocation.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-3xl font-body text-xl leading-snug text-midnight sm:text-2xl lg:text-[1.75rem]">
            {siteLocation.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
