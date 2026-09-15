"use client";

import { useState } from "react";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { plans, planImages } from "@/content/shared";
import { SectionDivider } from "@/components/ui/SectionDivider";

const planImageByFloor = [planImages.ground, planImages.first, planImages.second];

export function PlansSection({ id }: { id?: string }) {
  const [active, setActive] = useState(0);
  const floor = plans.floors[active];
  const image = planImageByFloor[active];

  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <Eyebrow tone="slate">Plans &amp; Areas</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal text-midnight sm:text-5xl lg:text-6xl">{plans.headline}</h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-12 flex flex-wrap justify-center gap-3 sm:mt-14" role="tablist" aria-label="Villa floors">
            {plans.floors.map((f, i) => (
              <button
                key={f.label}
                type="button"
                role="tab"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={`rounded-lg border px-5 py-3 text-left transition-all duration-300 ${
                  active === i
                    ? "border-gold bg-white shadow-lg shadow-midnight/10"
                    : "border-slate/15 bg-white/40 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white hover:shadow-md hover:shadow-midnight/5"
                }`}
              >
                <span className="block font-body text-[14px] font-bold text-midnight sm:text-[15px]">
                  {f.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div
            role="tabpanel"
            className="mt-10 grid grid-cols-1 gap-10 rounded-2xl border border-slate/10 bg-white p-7 text-left shadow-xl shadow-midnight/5 sm:mt-12 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-16"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-sand/30 shadow-lg shadow-midnight/10 lg:max-w-none">
              {image ? (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  loading="lazy"
                  className="object-contain p-5 sm:p-7"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-3 border border-dashed border-slate/30 px-6 text-center">
                  <svg viewBox="0 0 100 100" className="h-10 w-10 text-slate/40" aria-hidden="true">
                    <path
                      d="M50 15 L82 75 H18 Z M50 15 L67 75"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-slate">
                    Drawing in progress
                  </span>
                </div>
              )}
            </div>

            <div className="lg:pl-4">
              <span className="block font-display text-5xl leading-none text-gold/20 sm:text-6xl">
                {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-label text-[12px] tracking-[0.24em] uppercase text-gold sm:text-[13px]">
                {floor.label}
              </h3>
              <SectionDivider align="start" className="mt-5" />
              <p className="mt-6 max-w-md font-body text-[15px] leading-relaxed text-slate sm:text-[16px]">
                {floor.detail}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={260}>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3">
            <AreaStat label="Built-up area" value={plans.areas.builtUp} />
            <AreaStat label="Semi-open" value={plans.areas.semiOpen} />
            <AreaStat label="Total" value={plans.areas.total} />
          </div>
          <p className="mt-6 font-body text-[12.5px] text-slate/60">All figures in sq. ft.</p>
        </Reveal>
      </div>
    </section>
  );
}

function AreaStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-lift rounded-xl border border-slate/10 bg-white px-6 py-6 shadow-lg shadow-midnight/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-midnight/10">
      <span className="font-display text-3xl text-midnight sm:text-4xl">{value}</span>
      <span className="mt-1 block font-label text-[11px] tracking-[0.14em] uppercase text-slate/70">
        {label}
      </span>
    </div>
  );
}
