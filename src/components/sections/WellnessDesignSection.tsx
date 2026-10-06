import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import {
  IconSun,
  IconWind,
  IconThermometer,
  IconMoon,
  IconWaterDrop,
  IconLeaf,
  IconSprout,
  IconWalk,
  IconLotus,
  IconPeople,
} from "@/components/ui/icons";
import { villaImages } from "@/content/shared";

const icons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  light: IconSun,
  air: IconWind,
  cool: IconThermometer,
  sleep: IconMoon,
  water: IconWaterDrop,
  nature: IconLeaf,
  nourish: IconSprout,
  move: IconWalk,
  calm: IconLotus,
  connect: IconPeople,
};

interface Feature {
  icon: string;
  title: string;
  body: string;
}

/**
 * Brochure p.4 — "Wellness Design Features". Spec line, three captioned
 * images and ten icon-led features in two columns. Sits directly after
 * The Wellness Shift.
 */
export function WellnessDesignSection({
  id,
  kicker,
  headlineLine1,
  headlineLine2,
  specLine,
  images,
  features,
  closing,
}: {
  id?: string;
  kicker: string;
  headlineLine1: string;
  headlineLine2: string;
  specLine: readonly string[];
  images: readonly { key: keyof typeof villaImages; caption: string }[];
  features: readonly Feature[];
  closing: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <Eyebrow tone="gold">{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl">
            {headlineLine1}
            <br />
            <em className="text-slate">{headlineLine2}</em>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-8 border-y border-gold/30 py-3 text-center font-label text-[11px] tracking-[0.22em] text-slate uppercase sm:text-xs">
            {specLine.join("  ·  ")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-3">
          {images.map(({ key, caption }, i) => {
            const image = villaImages[key];
            return (
              <Reveal key={caption} delay={180 + i * 70}>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg shadow-midnight/10 sm:aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 90vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight/80 to-transparent px-4 pt-10 pb-3 text-right font-label text-[11px] tracking-[0.18em] text-paper uppercase">
                    {caption}
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>

        <ul className="mt-14 grid gap-x-10 sm:mt-16 md:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <Reveal key={feature.title} as="li" delay={200 + (i % 2) * 60}>
                <div className="flex h-full items-start gap-5 border-b border-midnight/10 py-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-paper/60">
                    {Icon && <Icon className="h-5 w-5 text-gold" aria-hidden="true" />}
                  </span>
                  <div>
                    <h3 className="font-label text-[12px] font-medium tracking-[0.2em] text-gold uppercase">
                      {feature.title}
                    </h3>
                    <p className="mt-2 font-body text-[14px] leading-relaxed text-slate sm:text-[15px]">
                      {feature.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={300}>
          <p className="mx-auto mt-12 max-w-2xl text-center font-display text-xl text-slate italic sm:text-2xl">
            {closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
