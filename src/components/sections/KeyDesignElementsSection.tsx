import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { keyDesignElements } from "@/content/shared";

// Brochure p.4 layout: a full-height facade photograph beside a midnight
// panel of five numbered elements, closing on the stone/earth/lime palette.
export function KeyDesignElementsSection({ id }: { id?: string }) {
  const { image } = keyDesignElements;
  return (
    <section
      id={id}
      className="scroll-mt-20 bg-midnight-texture lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
    >
      <div className="relative h-80 overflow-hidden sm:h-[28rem] lg:h-auto">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-[46%_50%]"
        />
      </div>

      <div className="px-6 py-20 sm:px-8 sm:py-28 lg:px-16 xl:px-20">
        <div className="max-w-[620px]">
          <Reveal>
            <Eyebrow tone="gold-light">{keyDesignElements.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-5xl lg:text-6xl">
              {keyDesignElements.headline}
              <br />
              <em className="text-gold-light">{keyDesignElements.headlineItalic}</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-7 font-body text-[15px] leading-relaxed text-paper/85 sm:text-base">
              {keyDesignElements.intro}
            </p>
          </Reveal>

          <ol className="mt-10 flex flex-col gap-9 border-y border-mist/25 py-10 sm:mt-12 sm:gap-11 sm:py-12">
            {keyDesignElements.elements.map((el, i) => (
              <Reveal key={el.label} as="li" delay={180 + i * 60} className="flex gap-6 sm:gap-8">
                <span className="w-8 shrink-0 pt-0.5 font-display text-2xl leading-none text-mist" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-label text-[12px] tracking-[0.22em] uppercase text-gold-light">{el.label}</h3>
                  <p className="mt-2.5 font-body text-[15px] leading-relaxed text-paper/85 sm:text-base">{el.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200}>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-10">
              <ul className="flex gap-6">
                {keyDesignElements.palette.map((swatch) => (
                  <li key={swatch.label} className="flex flex-col items-center gap-2.5">
                    <span
                      className="h-12 w-12 rounded-full ring-1 ring-paper/10"
                      style={{ backgroundColor: swatch.color }}
                      aria-hidden="true"
                    />
                    <span className="font-label text-[11px] tracking-[0.24em] uppercase text-mist">
                      {swatch.label}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-display text-2xl italic leading-snug text-gold-light sm:text-[1.7rem]">
                {keyDesignElements.quote}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
