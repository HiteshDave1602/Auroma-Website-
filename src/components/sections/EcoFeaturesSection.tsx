import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconSolar,
  IconBreezeLeaf,
  IconSolarHotWater,
  IconRain,
  IconEvCharge,
  IconCompostBin,
  IconWaterDrop,
} from "@/components/ui/icons";
import { ecoFeatures } from "@/content/shared";

const icons: Record<(typeof ecoFeatures.features)[number]["key"], typeof IconSolar> = {
  solar: IconSolar,
  cooling: IconBreezeLeaf,
  hotWater: IconSolarHotWater,
  rainwater: IconRain,
  ev: IconEvCharge,
  compost: IconCompostBin,
  drinkingWater: IconWaterDrop,
};

// Brochure p.5 layout: headline and intro, two captioned photographs, then a
// two-column ruled grid of seven features with a midnight call-out in the
// eighth cell.
export function EcoFeaturesSection({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <Eyebrow tone="gold">{ecoFeatures.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl lg:text-6xl">
            {ecoFeatures.headline}
            <br />
            <em className="text-slate">{ecoFeatures.headlineItalic}</em>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-2xl font-body text-[15px] leading-relaxed text-midnight/85 sm:text-base">
            {ecoFeatures.intro}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 sm:gap-5">
          {ecoFeatures.images.map(({ image, caption }, i) => (
            <Reveal key={caption} delay={180 + i * 90}>
              <figure>
                <div className="relative aspect-[5/3] w-full overflow-hidden bg-midnight/10 shadow-xl shadow-midnight/10">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 540px, 90vw"
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

        <ul className="mt-12 grid grid-cols-1 border-t border-midnight/15 sm:mt-14 md:grid-cols-2 md:gap-x-10">
          {ecoFeatures.features.map((feature, i) => {
            const Icon = icons[feature.key];
            return (
              <Reveal
                key={feature.key}
                as="li"
                delay={200 + i * 50}
                className="flex gap-5 border-b border-midnight/15 py-8"
              >
                <Icon className="mt-0.5 h-7 w-7 shrink-0 text-gold" aria-hidden="true" />
                <div>
                  <h3 className="font-label text-[12px] tracking-[0.22em] uppercase text-gold">{feature.label}</h3>
                  <p className="mt-2.5 font-body text-[15px] leading-relaxed text-midnight/85 sm:text-base">
                    {feature.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
          <Reveal as="li" delay={200 + ecoFeatures.features.length * 50} className="pt-8 md:pb-0">
            <div className="bg-midnight px-8 py-8 sm:px-9">
              <p className="font-display text-2xl leading-snug text-paper sm:text-[1.7rem]">
                {ecoFeatures.closing.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <em className="block text-gold-light">{ecoFeatures.closingItalic}</em>
              </p>
            </div>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
