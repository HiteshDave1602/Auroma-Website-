/**
 * Visual tokens for the lead form. Centralised so the cream-card look stays
 * consistent across every field, and so the error styling is defined once.
 *
 * Palette reference (globals.css): midnight #1C2B35 · slate #2E4A5A ·
 * mist #8FA8B4 · gold #B8922A · sand #F2EBE0 · paper #FAFAF7.
 */

/** The cream fill used for the form card and its inputs. */
export const CARD_SURFACE = "#FBF6EC";
export const CARD_SURFACE_RAISED = "#FFFDF8";
export const ERROR_INK = "#9E3B2C";

export const fieldLabelClasses =
  "mb-2 block font-label text-[11px] font-medium tracking-[0.16em] uppercase text-slate";

export const fieldErrorClasses =
  "mt-2 flex items-start gap-1.5 font-body text-[12.5px] leading-snug";

export const fieldHintClasses = "mt-2 font-body text-[12px] leading-snug text-slate/55";

const controlBase =
  "w-full rounded-xl border px-3.5 py-3 font-body text-[15px] text-midnight " +
  "placeholder:text-slate/35 transition-colors duration-200 focus:outline-none " +
  "disabled:opacity-60";

const controlValid =
  "border-slate/15 bg-white focus:border-gold focus:ring-2 focus:ring-gold/20";

const controlInvalid =
  "border-[#C25A48] bg-white focus:border-[#9E3B2C] focus:ring-2 focus:ring-[#9E3B2C]/20";

/**
 * Classes for an input / select / textarea. Pass `hasError` to switch the
 * border and focus ring to the invalid state.
 */
export function fieldControlClasses(hasError = false, extra = ""): string {
  return `${controlBase} ${hasError ? controlInvalid : controlValid} ${extra}`.trim();
}

/** The prefix block (e.g. "+91") that sits flush against an input. */
export function fieldPrefixClasses(hasError = false): string {
  const tone = hasError
    ? "border-[#C25A48] bg-[#FBEDEA] text-[#9E3B2C]"
    : "border-slate/15 bg-[#F1E9DA] text-slate";
  return `${tone}`.trim();
}
