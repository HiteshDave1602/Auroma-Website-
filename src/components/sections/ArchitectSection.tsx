import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { architect } from "@/content/shared";
import { PENDING } from "@/content/pending";
import { SectionDivider } from "@/components/ui/SectionDivider";

/**
 * Brochure p.27 — "The Architect". Portrait, name and role, her credentials
 * as a ruled list, and the closing line. Sits after Testimonials on a sand
 * ground so it doesn't run into the dark testimonials band and footer.
 */
export function ArchitectSection({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-12 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-16">
        {PENDING.architectPortraitUrl && (
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl bg-midnight shadow-2xl shadow-midnight/15 lg:max-w-none">
              <Image
                src={PENDING.architectPortraitUrl}
                alt={`${architect.name}, ${architect.role}`}
                fill
                quality={90}
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        )}

        <div>
          <Reveal>
            <Eyebrow>{architect.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-4 font-display text-3xl font-normal leading-[1.1] text-midnight sm:text-5xl">
              <span className="block font-label text-[13px] tracking-[0.2em] uppercase text-gold sm:text-sm">
                {architect.designedByLabel}
              </span>
              <span className="mt-2 block">{architect.name}</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-3 font-label text-[13px] tracking-[0.02em] text-slate sm:text-sm">{architect.role}</p>
          </Reveal>
          <Reveal delay={160}>
            <SectionDivider align="start" className="mt-6" />
          </Reveal>

          <ul className="mt-8 border-t border-gold/30">
            {architect.credentials.map((c, i) => (
              <Reveal
                key={c}
                as="li"
                delay={200 + i * 50}
                className="flex gap-4 border-b border-gold/30 py-4 font-body text-[15px] leading-relaxed text-slate sm:text-base"
              >
                <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                <span>{c}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200 + architect.credentials.length * 50 + 100}>
            <p className="mt-10 font-display text-2xl leading-snug text-midnight sm:text-3xl">
              {architect.closingLine1}
              <br />
              <em className="text-gold">{architect.closingLine2}</em>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
