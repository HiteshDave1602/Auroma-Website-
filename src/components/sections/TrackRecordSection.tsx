import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { trackRecord, trackRecordEyebrow, trackRecordHeadline, trackRecordSupport } from "@/content/shared";

export function TrackRecordSection({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-paper-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px] text-center">
        <Reveal>
          <Eyebrow>{trackRecordEyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-midnight sm:text-5xl lg:text-6xl">
            {trackRecordHeadline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>
        <Reveal delay={180}>
          <p className="mx-auto mt-6 max-w-xl font-body text-[15px] leading-relaxed text-slate sm:text-base">
            {trackRecordSupport}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 text-left sm:mt-14 sm:grid-cols-2">
          {trackRecord.map((phase, i) => {
            // Match each card's image band to its source photos' own aspect
            // ratio rather than forcing a uniform crop — these are wide,
            // panoramic brochure photos, and Phase III's "Internationally
            // Awarded" caption is baked into the photo itself, so a fixed
            // ratio risks slicing text off the edge.
            const totalWidth = phase.images.reduce((sum, img) => sum + img.width, 0);
            const height = phase.images[0].height;
            return (
              <Reveal key={phase.name} delay={220 + i * 90}>
                <div className="card-lift group h-full overflow-hidden rounded-xl border border-slate/10 bg-white shadow-xl shadow-midnight/5 hover:border-gold/30 hover:shadow-2xl hover:shadow-midnight/10">
                  <div
                    className="relative flex w-full overflow-hidden"
                    style={{ aspectRatio: `${totalWidth} / ${height}` }}
                  >
                    {phase.images.map((img) => (
                      <div key={img.src} className="relative h-full flex-1 overflow-hidden">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 640px) 45vw, 90vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-xl text-midnight sm:text-2xl">{phase.name}</h3>
                    <p className="mt-1.5 font-label text-[12px] tracking-[0.16em] uppercase text-gold">
                      {phase.homes}
                    </p>
                    {"award" in phase && phase.award && (
                      <p className="mt-3 font-body text-[13px] leading-snug text-slate/70">{phase.award}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
