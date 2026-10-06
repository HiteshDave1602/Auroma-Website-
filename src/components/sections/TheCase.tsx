import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

/**
 * CHANGE-ORDER-03 §1 — replaces the old rental-yield framing with a short,
 * text-only beat. Deliberately not a full screen: no sub-heads, numbering,
 * icons or dividers.
 */
export function TheCase({
  kicker,
  headline,
  body,
  closing,
  id,
}: {
  kicker: readonly string[];
  headline: { line1: string; line2Lead: string; line2Accent: string };
  body: string;
  closing: readonly string[];
  id?: string;
}) {
  return (
    <section id={id} className="scroll-mt-20 bg-midnight-texture px-6 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[760px] text-center">
        <Reveal>
          <Eyebrow tone="gold" className="text-[12px] sm:text-[13px]">
            {kicker.map((part, j) => (
              <span key={j}>
                {j > 0 && <span aria-hidden="true" className="mx-3 sm:mx-4">·</span>}
                {part}
              </span>
            ))}
          </Eyebrow>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="mt-5 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-5xl">
            {headline.line1}
            <br />
            {headline.line2Lead} <em className="text-gold-light">{headline.line2Accent}</em>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 font-body text-[15px] leading-relaxed text-paper/75 sm:text-base">
            {body.split("\n").map((segment, j) => (
              <span key={j} className="block">
                {segment}
              </span>
            ))}
          </p>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-display text-xl italic text-gold-light sm:gap-x-6 sm:text-2xl">
            {closing.map((phrase, j) => (
              <span key={j} className="flex items-center gap-x-4 sm:gap-x-6">
                {j > 0 && <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold" />}
                {phrase}
              </span>
            ))}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
