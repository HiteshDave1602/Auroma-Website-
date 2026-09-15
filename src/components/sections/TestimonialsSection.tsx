"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { testimonials, testimonialsEyebrow, testimonialsHeadline } from "@/content/shared";

const SWIPE_THRESHOLD = 45;

// Manual navigation only (arrows, dots, swipe) — no auto-advance. The site's
// own animation guidance is deliberately restrained; a carousel that moves
// on its own competes with the quote it's meant to showcase.
export function TestimonialsSection({ id }: { id?: string }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const count = testimonials.length;
  const goTo = (i: number) => setIndex((i + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > SWIPE_THRESHOLD) prev();
    else if (delta < -SWIPE_THRESHOLD) next();
    touchStartX.current = null;
  };

  return (
    <section id={id} className="scroll-mt-20 bg-midnight-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <Eyebrow tone="gold-light">{testimonialsEyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-5xl lg:text-6xl">
            {testimonialsHeadline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider tone="mist" className="mt-7 sm:mt-8" />
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mx-auto mt-14 max-w-[760px] sm:mt-16">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 z-10 hidden h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-mist/40 text-paper transition-all duration-300 hover:border-gold-light hover:text-gold-light sm:flex"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-mist/40 text-paper transition-all duration-300 hover:border-gold-light hover:text-gold-light sm:flex"
            >
              →
            </button>

            <div
              className="overflow-hidden rounded-2xl"
              role="region"
              aria-label="Homeowner testimonials"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t) => (
                  <div key={t.attribution} className="w-full shrink-0 px-1">
                    <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-mist/15 bg-white/[0.03] p-8 text-center shadow-2xl shadow-midnight/30 sm:min-h-[380px] sm:p-12">
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/40 sm:h-24 sm:w-24">
                        <Image
                          src={t.photo.src}
                          alt={t.photo.alt}
                          fill
                          sizes="96px"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-4 font-label text-[11px] tracking-[0.2em] uppercase text-mist/60">
                        Auroma {t.phase} Homeowner
                      </p>
                      <p className="mt-6 max-w-xl font-display text-xl italic leading-relaxed text-paper sm:text-2xl lg:text-[26px]">
                        “{t.quote}”
                      </p>
                      <p className="mt-7 font-label text-[12px] tracking-[0.1em] uppercase text-gold-light">
                        {t.attribution}
                      </p>
                      <p className="mt-1 font-body text-[12.5px] text-mist/70">{t.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center justify-center gap-4 sm:hidden">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist/40 text-paper transition-all duration-300 hover:border-gold-light hover:text-gold-light"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist/40 text-paper transition-all duration-300 hover:border-gold-light hover:text-gold-light"
              >
                →
              </button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((t, i) => (
                <button
                  key={t.attribution}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial from ${t.attribution}`}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-gold-light" : "w-2 bg-mist/30 hover:bg-mist/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
