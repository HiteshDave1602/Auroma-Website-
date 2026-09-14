import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { paymentPlan } from "@/content/shared";

export function PaymentPlanSection({ id }: { id?: string }) {
  return (
    <section id={id} className="scroll-mt-20 bg-sand-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[720px] text-center">
        <Reveal>
          <Eyebrow tone="slate">{paymentPlan.tag}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 font-display text-3xl font-normal text-midnight sm:text-5xl">
            {paymentPlan.headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <SectionDivider className="mt-7 sm:mt-8" />
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-slate/10 bg-white shadow-xl shadow-midnight/5 sm:mt-14">
            {paymentPlan.milestones.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between gap-6 px-6 py-5 text-left sm:px-10 ${
                  i !== 0 ? "border-t border-slate/10" : ""
                } ${i % 2 === 1 ? "bg-sand/30" : ""}`}
              >
                <span className="font-body text-[14.5px] font-bold text-midnight sm:text-[15.5px]">
                  {row.label}
                </span>
                <span className="shrink-0 font-display text-2xl text-gold sm:text-3xl">{row.percent}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={260}>
          <p className="mt-6 font-body text-[12.5px] text-slate/60">
            Payments raised against construction progress, in the stages above.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
