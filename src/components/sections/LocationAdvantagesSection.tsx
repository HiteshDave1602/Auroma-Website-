import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { locationAdvantages } from "@/content/shared";

// Brochure p.6 layout: three rounded photographs, headline and intro, a
// four-up drive-time strip, then the six advantages beside the AQI card and
// the cycling-trail photograph.
export function LocationAdvantagesSection({ id }: { id?: string }) {
  const { aqi, cycling } = locationAdvantages;
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-mist/15 bg-midnight-texture px-6 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-3 gap-2.5 sm:gap-5">
          {locationAdvantages.images.map((img, i) => (
            <Reveal key={img.src} delay={i * 80}>
              <div className="relative aspect-[16/15] overflow-hidden rounded-xl bg-slate/30 shadow-xl shadow-black/20 sm:rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 640px) 360px, 33vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <Eyebrow tone="gold-light" className="mt-14 sm:mt-16">
            {locationAdvantages.eyebrow}
          </Eyebrow>
        </Reveal>
        <Reveal delay={180}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-5xl lg:text-6xl">
            {locationAdvantages.headline} <em className="text-gold-light">{locationAdvantages.headlineItalic}</em>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-5 max-w-3xl font-body text-[15px] leading-relaxed text-paper/85 sm:text-lg">
            {locationAdvantages.intro}
          </p>
        </Reveal>

        <Reveal delay={260}>
          <dl className="mt-10 grid grid-cols-2 border-y border-mist/40 sm:mt-12 sm:grid-cols-4">
            {locationAdvantages.distances.map((d, i) => (
              <div
                key={d.place}
                className={`flex flex-col-reverse items-center justify-start gap-2 px-3 py-6 text-center ${
                  i % 2 === 1 ? "border-l border-mist/40" : ""
                } ${i >= 2 ? "border-t border-mist/40 sm:border-t-0" : ""} ${i === 2 ? "sm:border-l" : ""}`}
              >
                <dt className="font-label text-[10px] tracking-[0.22em] uppercase text-mist">{d.place}</dt>
                <dd className="font-display text-3xl leading-none text-gold-light">{d.time}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-14 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <ul className="flex flex-col gap-8">
            {locationAdvantages.advantages.map((a, i) => (
              <Reveal key={a.label} as="li" delay={180 + i * 60}>
                <h3 className="font-body text-[17px] text-gold-light sm:text-lg">{a.label}</h3>
                <p className="mt-2 max-w-md font-body text-[15px] leading-relaxed text-paper/85 sm:text-base">
                  {a.body}
                </p>
              </Reveal>
            ))}
          </ul>

          <div className="flex flex-col gap-6">
            <Reveal delay={240}>
              <div className="rounded-2xl border border-gold-light/60 px-6 py-8 text-center">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full border border-gold-light/80 p-1.5">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 border-gold-light">
                    <span className="font-label text-[10px] tracking-[0.24em] uppercase text-mist">{aqi.label}</span>
                    <span className="font-display text-5xl leading-none text-paper">{aqi.value}</span>
                    <span className="mt-1 font-display text-sm italic text-gold-light">{aqi.rating}</span>
                  </div>
                </div>
                <p className="mt-6 font-body text-[15px] uppercase tracking-[0.04em] text-gold-light">{aqi.headline}</p>
                <p className="mx-auto mt-3 max-w-xs font-body text-[13px] leading-relaxed text-paper/80">
                  {aqi.body}
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate/30 shadow-xl shadow-black/20">
                  <Image
                    src={cycling.src}
                    alt={cycling.alt}
                    fill
                    sizes="(min-width: 1024px) 420px, 90vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4 text-center font-label text-[11px] tracking-[0.24em] uppercase text-mist">
                  {cycling.caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
