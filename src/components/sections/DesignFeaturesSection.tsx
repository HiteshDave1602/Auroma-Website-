import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import {
  IconEcoMaterial,
  IconSolar,
  IconWaterDrop,
  IconSprout,
  IconGreenGarden,
  IconDaylight,
  IconBirdHerb,
} from "@/components/ui/icons";

// Ordered to match the brochure's seven design-feature points (p.10): eco
// materials, solar, rainwater harvesting, natural cooling, green gardens,
// bright & airy rooms, birds/shade/herbs.
const icons = [IconEcoMaterial, IconSolar, IconWaterDrop, IconSprout, IconGreenGarden, IconDaylight, IconBirdHerb];

export function DesignFeaturesSection({
  kicker,
  headline,
  points,
  closing,
  id,
}: {
  kicker: string;
  headline: string;
  points: string[];
  closing: string;
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <Eyebrow tone="gold">{kicker}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl lg:text-6xl">
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        {/* Flex-wrap, not grid: with exactly seven cards no fixed column
            count divides evenly, and flex-wrap + justify-center lets an
            incomplete last row settle in the middle instead of trailing
            off with empty space on the right. 2 → 3 → 4 per row. */}
        <ul className="mt-16 flex flex-wrap justify-center gap-6 sm:mt-20">
          {points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={point}
                delay={160 + i * 55}
                as="li"
                className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
              >
                <div className="card-lift group flex h-full flex-col items-center gap-4 rounded-2xl border border-gold/15 bg-[#fbf7ee] px-6 py-9 shadow-lg shadow-midnight/[0.06] hover:border-gold/40 hover:shadow-2xl hover:shadow-midnight/[0.12] sm:px-7 sm:py-10">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold/25 via-gold/12 to-gold/5 ring-1 ring-gold/25 transition-transform duration-300 ease-out group-hover:scale-105">
                    <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                  </span>
                  <p className="font-body text-[13.5px] font-medium leading-snug tracking-[0.01em] text-midnight sm:text-sm">
                    {point}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={160 + points.length * 55 + 120}>
          <div className="mx-auto mt-16 flex max-w-xl flex-col items-center gap-5 sm:mt-20">
            <span className="h-px w-14 bg-gradient-to-r from-transparent via-gold/60 to-transparent" aria-hidden="true" />
            <p className="font-display text-xl font-bold text-gold sm:text-2xl">{closing}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
