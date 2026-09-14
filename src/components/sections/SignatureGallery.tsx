import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const toneClasses = {
  paper: {
    section: "bg-paper-texture",
    eyebrow: "gold" as const,
    headline: "text-midnight",
    divider: "gold" as const,
  },
  midnight: {
    section: "bg-midnight-texture",
    eyebrow: "gold-light" as const,
    headline: "text-paper",
    divider: "mist" as const,
  },
};

export function SignatureGallery({
  eyebrow,
  headline,
  items,
  tone = "paper",
  id,
}: {
  eyebrow: string;
  headline: string;
  items: readonly GalleryItem[];
  tone?: keyof typeof toneClasses;
  id?: string;
}) {
  const t = toneClasses[tone];

  return (
    <section id={id} className={`scroll-mt-20 ${t.section} px-6 py-20 sm:px-8 sm:py-28`}>
      <div className="mx-auto max-w-[1300px] text-center">
        <Reveal>
          <Eyebrow tone={t.eyebrow}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className={`mt-4 font-display text-3xl font-normal leading-[1.15] ${t.headline} sm:text-5xl lg:text-6xl`}>
            {headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider tone={t.divider} className="mt-7 sm:mt-8" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.src} delay={180 + i * 45}>
              <div className="card-lift group relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl shadow-midnight/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 90vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-midnight/85 via-midnight/5 to-transparent"
                  aria-hidden="true"
                />
                <p className="absolute inset-x-0 bottom-0 p-4 text-left font-label text-[11px] tracking-[0.14em] uppercase text-paper sm:text-[12px]">
                  {item.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
