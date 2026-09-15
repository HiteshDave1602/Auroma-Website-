import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { IconGrid, IconSprout, IconKey, IconWaterDrop, IconBolt, IconSofa, IconCheck } from "@/components/ui/icons";
import { specifications } from "@/content/shared";

const categoryIcons: Record<string, typeof IconGrid> = {
  "Key Design Elements": IconGrid,
  "Sustainability Features": IconSprout,
  "Value Added Features": IconKey,
  "Amenities – Water": IconWaterDrop,
  "Amenities – Energy": IconBolt,
  "Interior Finishes": IconSofa,
};

function CategoryIconBadge({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold ring-1 ring-gold/20"
      aria-hidden="true"
    >
      {children}
    </span>
  );
}

function SpecList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <IconCheck className="mt-[3px] h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
          <span className="font-body text-[14px] leading-relaxed text-slate">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SpecificationsSection({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-specifications-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px] text-center">
        <Reveal>
          <Eyebrow tone="gold">{specifications.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl lg:text-6xl">
            {specifications.headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        {/* Column-based (masonry) layout: cards stack tightly within each
            column instead of matching row heights, so a short card never
            leaves a gap under a taller neighbour. */}
        <div className="mt-14 columns-1 gap-6 text-left sm:mt-16 sm:columns-2 sm:gap-7 lg:columns-3 lg:gap-8">
          {specifications.categories.map((cat, i) => {
            const Icon = categoryIcons[cat.label];
            const isMultiGroup = cat.groups.length > 1;
            return (
              <Reveal key={cat.label} delay={160 + i * 70} className="mb-6 break-inside-avoid sm:mb-7 lg:mb-8">
                <div className="card-lift rounded-2xl border border-gold/15 bg-[#fbf7ee] p-7 shadow-lg shadow-midnight/5 hover:border-gold/35 hover:shadow-2xl hover:shadow-midnight/10 sm:p-8">
                  <div className="flex items-center gap-4">
                    <CategoryIconBadge>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </CategoryIconBadge>
                    <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-midnight">
                      {cat.label}
                    </h3>
                  </div>

                  {isMultiGroup ? (
                    <div className="mt-6">
                      {cat.groups.map((group, gi) => (
                        <div key={group.label ?? gi} className={gi > 0 ? "mt-6" : ""}>
                          {gi > 0 && (
                            <div
                              className="mb-6 h-px w-full bg-gradient-to-r from-gold/50 via-gold/20 to-transparent"
                              aria-hidden="true"
                            />
                          )}
                          {group.label && (
                            <p className="mb-4 border-b border-gold/20 pb-2.5 font-label text-[11px] font-normal tracking-[0.24em] uppercase text-gold">
                              {group.label}
                            </p>
                          )}
                          <SpecList items={group.items} />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mt-6">
                      <SpecList items={cat.groups[0].items} />
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={160 + specifications.categories.length * 70 + 80}>
          <p className="mx-auto mt-12 max-w-[900px] font-body text-[12px] leading-relaxed text-slate/60">
            {specifications.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
