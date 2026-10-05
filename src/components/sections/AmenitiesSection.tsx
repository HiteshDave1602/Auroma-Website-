import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { amenities } from "@/content/shared";

// Brochure p.3 layout: headline, a four-up stat strip, feature copy on the
// left with two captioned photographs on the right, closing line between rules.
export function AmenitiesSection({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-gold/15 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <Eyebrow tone="gold">{amenities.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl lg:text-6xl">
            {amenities.headline}
            <br />
            <em className="text-slate">{amenities.headlineItalic}</em>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <dl className="mt-12 grid grid-cols-2 border-y border-midnight/15 sm:mt-14 sm:grid-cols-4">
            {amenities.stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse items-center gap-2 px-4 py-7 text-center sm:py-9 ${
                  i % 2 === 1 ? "border-l border-midnight/15" : ""
                } ${i >= 2 ? "border-t border-midnight/15 sm:border-t-0" : ""} ${
                  i === 2 ? "sm:border-l" : ""
                }`}
              >
                <dt className="font-label text-[11px] tracking-[0.24em] uppercase text-slate">{stat.label}</dt>
                <dd
                  className={`font-display text-5xl leading-none sm:text-6xl ${
                    "accent" in stat && stat.accent ? "text-gold" : "text-midnight"
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-16 lg:grid-cols-2 lg:gap-16">
          <ul className="flex flex-col gap-10 sm:gap-12">
            {amenities.features.map((feature, i) => (
              <Reveal key={feature.label} as="li" delay={180 + i * 60}>
                <h3 className="font-label text-[12px] tracking-[0.22em] uppercase text-gold">{feature.label}</h3>
                <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-midnight/85 sm:text-base">
                  {feature.body}
                </p>
              </Reveal>
            ))}
          </ul>

          <div className="flex flex-col gap-10">
            {amenities.images.map(({ image, caption }, i) => (
              <Reveal key={caption} delay={220 + i * 90}>
                <figure>
                  <div className="relative aspect-square w-full overflow-hidden bg-midnight/10 shadow-xl shadow-midnight/10">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 520px, 90vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="mt-4 font-label text-[11px] tracking-[0.24em] uppercase text-slate/80">
                    {caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 flex items-center gap-5 sm:mt-20 sm:gap-8">
            <span className="h-px flex-1 bg-gold/50" aria-hidden="true" />
            <p className="max-w-[34rem] text-center font-display text-xl italic text-midnight sm:text-2xl lg:max-w-none">
              {amenities.closing}
            </p>
            <span className="h-px flex-1 bg-gold/50" aria-hidden="true" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
