import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

interface Bar {
  year: string;
  label: string;
  value: number;
  forecast: boolean;
}

interface Stat {
  figure: string;
  tag: string;
  body: string;
}

/**
 * Brochure p.3 — "The Wellness Shift". Market chart (bar heights scale to
 * the largest value), four headline stats, a closing statement and the
 * source line. Sits directly after Designed for Hosting.
 */
export function WellnessShiftSection({
  id,
  kicker,
  headlineLine1,
  headlineLine2,
  body,
  chart,
  stats,
  closingLine1,
  closingLine2,
  sources,
}: {
  id?: string;
  kicker: string;
  headlineLine1: string;
  headlineLine2: string;
  body: string;
  chart: {
    title: string;
    subtitle: string;
    bars: readonly Bar[];
    highlight: string;
    highlightBody: string;
    highlightNote: string;
  };
  stats: readonly Stat[];
  closingLine1: string;
  closingLine2: string;
  sources: string;
}) {
  const max = Math.max(...chart.bars.map((b) => b.value));

  return (
    <section id={id} className="scroll-mt-20 bg-paper-texture px-6 py-20 sm:px-8 sm:py-28">
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
          <p className="mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-slate sm:text-base">{body}</p>
        </Reveal>

        {/* Market chart */}
        <Reveal delay={200}>
          <div className="mt-12 grid gap-10 rounded-2xl border border-gold/15 bg-white px-6 py-8 shadow-lg shadow-midnight/[0.06] sm:mt-14 sm:px-10 sm:py-10 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-14">
            <figure>
              <figcaption>
                <span className="block font-label text-[12px] font-medium tracking-[0.14em] text-midnight uppercase">
                  {chart.title}
                </span>
                <span className="mt-1 block font-body text-xs text-mist">{chart.subtitle}</span>
              </figcaption>
              <div
                className="mt-6 flex h-56 items-end gap-5 border-b border-midnight/15 sm:h-64 sm:gap-8"
                role="img"
                aria-label={chart.bars.map((b) => `${b.year}: ${b.label}`).join(", ")}
              >
                {chart.bars.map((bar) => (
                  <div key={bar.year} className="flex h-full flex-1 flex-col items-center justify-end">
                    <span className="mb-2 font-display text-lg font-semibold text-midnight sm:text-xl">
                      {bar.label}
                    </span>
                    <div
                      className={`w-full max-w-[90px] rounded-t-md ${
                        bar.forecast ? "border border-gold bg-gold/10" : "bg-gold"
                      }`}
                      style={{
                        height: `${Math.max((bar.value / max) * 78, 3)}%`,
                        backgroundImage: bar.forecast
                          ? "repeating-linear-gradient(135deg, rgba(184,146,42,0.45) 0 2px, transparent 2px 9px)"
                          : undefined,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex gap-5 sm:gap-8">
                {chart.bars.map((bar) => (
                  <span key={bar.year} className="flex-1 text-center font-label text-[11px] tracking-[0.08em] text-slate sm:text-xs">
                    {bar.year}
                  </span>
                ))}
              </div>
            </figure>

            <div className="border-t border-gold/40 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <p className="font-display text-6xl leading-none text-gold sm:text-7xl">{chart.highlight}</p>
              <p className="mt-3 font-display text-xl leading-snug text-slate sm:text-2xl">{chart.highlightBody}</p>
              <p className="mt-5 font-display text-base text-mist sm:text-lg">{chart.highlightNote}</p>
            </div>
          </div>
        </Reveal>

        {/* Headline stats */}
        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:mt-14 sm:grid-cols-2">
          {stats.map((stat, i) => (
            <Reveal key={stat.figure} as="li" delay={240 + i * 60}>
              <div className="border-t border-gold/50 pt-5">
                <p className="font-display text-4xl leading-none text-midnight sm:text-5xl">
                  {stat.figure} <em className="text-xl text-gold sm:text-2xl">{stat.tag}</em>
                </p>
                <p className="mt-3 font-body text-[14px] leading-relaxed text-slate sm:text-[15px]">{stat.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        {/* Closing statement */}
        <Reveal delay={480}>
          <div className="mt-14 rounded-2xl bg-midnight-texture px-6 py-10 sm:mt-16 sm:px-10 sm:py-12">
            <p className="font-display text-2xl leading-snug text-paper sm:text-3xl">{closingLine1}</p>
            <p className="mt-1 font-display text-xl leading-snug text-gold-light italic sm:text-2xl">{closingLine2}</p>
          </div>
        </Reveal>

        <p className="mt-6 font-body text-[11px] leading-relaxed text-mist">{sources}</p>
      </div>
    </section>
  );
}
