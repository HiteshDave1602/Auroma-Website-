import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { PENDING } from "@/content/pending";
import { siteLocation, trackRecord } from "@/content/shared";

/**
 * Brochure p.5 — "Designed by Ar. Trupti Doshi". Aerial site banner with the
 * architect's portrait, credential stats, her four-step wellness design
 * method, two supporting photos and her quote. Sits directly before The
 * Architect section.
 */
/** Sharpened 2× upscales of the low-res track-record photos (`-hd`). */
const hd = (src: string) => src.replace(/\.jpg$/, "-hd.jpg");

export function DesignedBySection({
  id,
  siteTag,
  kicker,
  headlineLine1,
  headlineLine2,
  stats,
  methodTitle,
  method,
  greeneryCaption,
  ecovillaCaption,
  quote,
  quoteBy,
}: {
  id?: string;
  siteTag: string;
  kicker: string;
  headlineLine1: string;
  headlineLine2: string;
  stats: readonly { figure: string; label: string }[];
  methodTitle: string;
  method: readonly { title: string; body: string }[];
  greeneryCaption: string;
  ecovillaCaption: string;
  quote: string;
  quoteBy: string;
}) {
  const ecovilla = trackRecord.find((p) => p.name === "Auroma Phase III")?.images[0];
  const greenery = siteLocation.details[1];

  return (
    <section id={id} className="scroll-mt-20 bg-midnight-texture pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
        {/* Aerial site banner, kept to the content width. */}
        <div className="relative h-[240px] w-full overflow-hidden rounded-2xl sm:h-[360px]">
          <Image
            src={siteLocation.aerial.src}
            alt={siteLocation.aerial.alt}
            fill
            quality={90}
            sizes="(min-width: 1100px) 1036px, 100vw"
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight/90" aria-hidden="true" />
          <span className="absolute top-4 right-4 rounded-full bg-midnight/70 px-4 py-2 font-label text-[10px] tracking-[0.2em] text-gold-light uppercase backdrop-blur-sm sm:top-6 sm:right-6 sm:text-[11px]">
            {siteTag}
          </span>
        </div>

        <div className="relative flex flex-col-reverse gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="sm:pt-6">
            <Reveal>
              <Eyebrow tone="gold-light">{kicker}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-5xl">
                {headlineLine1}
                <br />
                <em className="text-gold-light">{headlineLine2}</em>
              </h2>
            </Reveal>
          </div>
          {PENDING.architectPortraitUrl && (
            <Reveal className="-mt-24 shrink-0 self-center sm:-mt-40 sm:self-auto">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-midnight shadow-2xl ring-2 ring-gold sm:h-52 sm:w-52">
                <Image
                  src={PENDING.architectPortraitUrl}
                  alt={quoteBy}
                  fill
                  quality={90}
                  sizes="208px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}
        </div>

        {/* Credentials */}
        <Reveal delay={140}>
          <dl className="mt-10 grid grid-cols-2 border-y border-gold/30 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.figure}
                className={`px-4 py-5 first:pl-0 sm:py-6 ${i % 2 === 1 ? "border-l border-gold/30" : ""} ${
                  i >= 2 ? "border-t border-gold/30 lg:border-t-0" : ""
                } ${i === 2 ? "pl-0 lg:border-l lg:pl-4" : ""}`}
              >
                <dt className="font-display text-2xl text-gold-light sm:text-3xl">{stat.figure}</dt>
                <dd className="mt-1 font-body text-xs leading-snug text-paper/70">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Wellness design method */}
        <Reveal delay={180}>
          <h3 className="mt-12 font-display text-2xl text-paper italic sm:text-3xl">{methodTitle}</h3>
        </Reveal>
        <ol className="mt-5">
          {method.map((step, i) => (
            <Reveal key={step.title} as="li" delay={220 + i * 60}>
              <div className="flex items-start gap-6 border-b border-paper/10 py-5">
                <span className="w-10 shrink-0 font-display text-3xl leading-none text-gold-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-label text-[12px] font-medium tracking-[0.2em] text-gold-light uppercase">
                    {step.title}
                  </h4>
                  <p className="mt-1.5 font-body text-[14px] leading-relaxed text-paper/80 sm:text-[15px]">{step.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Supporting photos */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { src: greenery.src, alt: greenery.alt, caption: greeneryCaption },
            ...(ecovilla ? [{ src: hd(ecovilla.src), alt: ecovilla.alt, caption: ecovillaCaption }] : []),
          ].map((photo, i) => (
            <Reveal key={photo.caption} delay={300 + i * 70}>
              <figure className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  quality={90}
                  sizes="(min-width: 640px) 520px, 90vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/85 to-transparent px-4 pt-10 pb-3 text-right font-label text-[10px] tracking-[0.18em] text-paper uppercase sm:text-[11px]">
                  {photo.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Quote */}
        <Reveal delay={380}>
          <blockquote className="mt-12 border-l-2 border-gold pl-5 sm:pl-6">
            <p className="font-display text-xl leading-snug text-gold-light italic sm:text-2xl">“{quote}”</p>
            <footer className="mt-3 font-label text-[11px] tracking-[0.2em] text-paper/70 uppercase">— {quoteBy}</footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
