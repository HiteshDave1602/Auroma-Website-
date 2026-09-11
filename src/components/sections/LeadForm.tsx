"use client";

import { useEffect, useRef, useState, type ComponentType, type FormEvent, type SVGProps } from "react";
import { buttonClasses } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { IconBadge } from "@/components/ui/Card";
import { IconPin } from "@/components/ui/icons";
import { confirmationCopy } from "@/content/shared";
import { submitLead } from "@/lib/leadService";
import { trackEvent } from "@/lib/analytics";
import { investmentRangeOptions } from "@/content/types";
import type { PageVariant } from "@/content/types";
import {
  EMPTY_LEAD_FORM_VALUES,
  isLeadFormSubmittable,
  normalisePhoneDigits,
  toLeadFormData,
  validateLeadForm,
  type LeadFormErrors,
  type LeadFormValues,
} from "@/lib/leadFormValidation";
import { brochureFileName, brochureHref, brochureSizeLabel } from "@/lib/brochure";

type Stage = "form" | "done";

type FieldName = keyof LeadFormValues;
type ErrorFieldName = keyof LeadFormErrors;

const borderNormal = "border-midnight/25 bg-paper focus:border-gold focus:bg-white";
const borderError = "border-[#8A3324]/60 bg-paper focus:border-[#8A3324]";

/** Shared input look, minus any width class so callers pick their own. */
function fieldClasses(hasError: boolean, widthClass: string, extra = "") {
  return (
    `rounded-lg border px-4 py-3 font-body text-[15px] text-midnight placeholder:text-midnight/35 ` +
    `focus:outline-none ${widthClass} ${hasError ? borderError : borderNormal} ${extra}`
  ).trim();
}

/** Fixed non-editable prefix chip — separate box, no w-full, never red. */
const prefixClasses =
  "flex w-16 shrink-0 items-center justify-center rounded-lg border border-midnight/25 " +
  "bg-sand/60 px-0 py-3 font-body text-[15px] text-slate";

const labelClasses = "block font-label text-[11px] tracking-[0.16em] uppercase text-slate mb-2.5";

const fieldErrorClasses = "mt-1.5 font-body text-[12.5px] text-[#8A3324]";

/** Field order used when scrolling to the first invalid field on submit. */
const scrollFieldOrder: ErrorFieldName[] = ["fullName", "whatsappNumber", "city", "investmentRange"];

export function LeadForm({
  variant,
  headline,
  body,
}: {
  variant: PageVariant;
  headline: string;
  body: string;
}) {
  const [stage, setStage] = useState<Stage>("form");
  const [submitting, setSubmitting] = useState(false);
  const [values, setValues] = useState<LeadFormValues>(EMPTY_LEAD_FORM_VALUES);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const startedTracking = useRef(false);

  const fieldRefs = useRef<Record<ErrorFieldName, HTMLElement | null>>({
    fullName: null,
    whatsappNumber: null,
    city: null,
    investmentRange: null,
    consent: null,
  });

  const doneCardRef = useRef<HTMLDivElement>(null);

  /**
   * When the form successfully swaps to the "done" state, smooth-scroll the
   * success card right below the sticky header — never to the viewport center,
   * so the page can't overshoot into the FAQ/footer. Runs exactly once (only
   * when `stage` becomes "done"), never during typing or on an invalid
   * submission. The double requestAnimationFrame defers until React has
   * committed the new layout so the scroll target sits in its final position.
   */
  useEffect(() => {
    if (stage !== "done") return;
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const card = doneCardRef.current;
        if (!card) return;
        const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
        card.style.scrollMarginTop = `${headerHeight + 16}px`;
        card.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [stage]);

  /**
   * Field-level errors come straight from the shared validator, but only
   * surface once the field has been touched (typed/blurred) or the user has
   * actually tried to submit. Empty, untouched fields never show an error.
   */
  const validation = validateLeadForm(values);
  const showError = (field: ErrorFieldName): string | undefined =>
    attemptedSubmit || touched[field] ? validation[field] : undefined;

  const onFirstFocus = () => {
    if (!startedTracking.current) {
      startedTracking.current = true;
      trackEvent("form_start", { variant });
    }
  };

  function markTouched(field: FieldName) {
    setTouched((prev) => (prev[field] ? prev : { ...prev, [field]: true }));
  }

  function handleChange(field: FieldName, value: string | boolean) {
    markTouched(field);
    setValues((prev) => ({ ...prev, [field]: value }));
    if (submitError) setSubmitError(null);
  }

  function handlePhoneChange(raw: string) {
    markTouched("whatsappNumber");
    setValues((prev) => ({ ...prev, whatsappNumber: normalisePhoneDigits(raw) }));
    if (submitError) setSubmitError(null);
  }

  /**
   * Scrolls smoothly to the first field (in visual order) that failed
   * validation and moves the cursor into it. Anchors the field just below the
   * sticky header so the scroll never overshoots into adjacent sections.
   */
  function focusFirstInvalid(validationErrors: LeadFormErrors) {
    const firstInvalid = scrollFieldOrder.find((field) => validationErrors[field]);
    if (!firstInvalid) return;
    const el = fieldRefs.current[firstInvalid];
    if (!el) return;
    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 80;
    el.style.scrollMarginTop = `${headerHeight + 16}px`;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.focus({ preventScroll: true });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);
    setAttemptedSubmit(true);

    const nextValidation = validateLeadForm(values);
    if (!isLeadFormSubmittable(nextValidation)) {
      focusFirstInvalid(nextValidation);
      return;
    }

    const data = toLeadFormData(values);

    setSubmitting(true);
    try {
      await submitLead(data, variant);
      trackEvent("lead", { variant });
      setStage("done");
    } catch {
      setSubmitError("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  /**
   * Triggers the brochure download from a detached anchor. Programmatic click
   * keeps the download attribute authoritative so the page can never navigate
   * to the PDF — the user's viewport stays exactly where it is.
   */
  function handleDownloadBrochure() {
    trackEvent("brochure_download", { variant });
    const link = document.createElement("a");
    link.href = brochureHref;
    link.download = brochureFileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  return (
    <section id="form" className="scroll-mt-20 bg-midnight-texture px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow tone="gold-light">Contact</Eyebrow>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-4 font-display text-3xl font-normal leading-[1.15] text-paper sm:text-4xl">
                {headline}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <SectionDivider align="start" className="mt-6" />
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md font-body text-[14.5px] leading-relaxed text-sand/80 sm:text-[15px]">
                {body.split("\n").map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>

            <div className="mt-10 space-y-5">
              <Reveal delay={200}>
                <InfoCard icon={IconPin} title="Location" body="Near Auroville, Pondicherry" />
              </Reveal>
            </div>
          </div>

          {/*
            The submit card. stage === "done" swaps ONLY its own content — the
            FAQ section is a separate component rendered after this one and is
            never touched by anything in this component.
          */}
          <div className="rounded-3xl border-2 border-midnight bg-sand p-7 shadow-2xl shadow-black/30 sm:p-10 lg:self-start">
            {stage === "form" ? (
              <Reveal delay={100} key="form">
                <form onSubmit={handleSubmit} onFocus={onFirstFocus} noValidate className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className={labelClasses}>
                      Full name *
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      required
                      autoComplete="name"
                      value={values.fullName}
                      onChange={(e) => handleChange("fullName", e.target.value)}
                      onBlur={() => markTouched("fullName")}
                      ref={(el) => {
                        fieldRefs.current.fullName = el;
                      }}
                      className={fieldClasses(Boolean(showError("fullName")), "w-full")}
                      aria-invalid={Boolean(showError("fullName"))}
                    />
                    {showError("fullName") && (
                      <p role="alert" className={fieldErrorClasses}>
                        {showError("fullName")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="whatsappNumber" className={labelClasses}>
                      WhatsApp number *
                    </label>
                    <div className="flex gap-3">
                      <span aria-hidden="true" className={prefixClasses}>
                        +91
                      </span>
                      <input
                        id="whatsappNumber"
                        name="whatsappNumber"
                        type="tel"
                        inputMode="numeric"
                        autoComplete="tel-national"
                        placeholder="10-digit number"
                        maxLength={10}
                        value={values.whatsappNumber}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        onBlur={() => markTouched("whatsappNumber")}
                        ref={(el) => {
                          fieldRefs.current.whatsappNumber = el;
                        }}
                        className={fieldClasses(Boolean(showError("whatsappNumber")), "min-w-0 flex-1")}
                        aria-invalid={Boolean(showError("whatsappNumber"))}
                      />
                    </div>
                    {showError("whatsappNumber") && (
                      <p role="alert" className={fieldErrorClasses}>
                        {showError("whatsappNumber")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="city" className={labelClasses}>
                      City *
                    </label>
                    <input
                      id="city"
                      name="city"
                      required
                      autoComplete="address-level2"
                      value={values.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      onBlur={() => markTouched("city")}
                      ref={(el) => {
                        fieldRefs.current.city = el;
                      }}
                      className={fieldClasses(Boolean(showError("city")), "w-full")}
                      aria-invalid={Boolean(showError("city"))}
                    />
                    {showError("city") && (
                      <p role="alert" className={fieldErrorClasses}>
                        {showError("city")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="investmentRange" className={labelClasses}>
                      Investment range *
                    </label>
                    <select
                      id="investmentRange"
                      name="investmentRange"
                      required
                      value={values.investmentRange}
                      onChange={(e) => handleChange("investmentRange", e.target.value)}
                      onBlur={() => markTouched("investmentRange")}
                      ref={(el) => {
                        fieldRefs.current.investmentRange = el;
                      }}
                      className={fieldClasses(
                        Boolean(showError("investmentRange")),
                        "w-full",
                        values.investmentRange === "" ? "text-midnight/50" : "",
                      )}
                      aria-invalid={Boolean(showError("investmentRange"))}
                    >
                      <option value="" disabled>
                        Select a range
                      </option>
                      {investmentRangeOptions.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {showError("investmentRange") && (
                      <p role="alert" className={fieldErrorClasses}>
                        {showError("investmentRange")}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      Message <span className="normal-case text-slate/60">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us anything else"
                      value={values.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={fieldClasses(false, "w-full resize-none")}
                    />
                  </div>

                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={values.consent}
                      onChange={(e) => handleChange("consent", e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0 border-slate/40 accent-[#B8922A]"
                      aria-invalid={Boolean(showError("consent"))}
                    />
                    <span className="font-body text-[13px] leading-relaxed text-slate">
                      Send me the brochure and project updates on WhatsApp.
                    </span>
                  </label>
                  {showError("consent") && (
                    <p role="alert" className={fieldErrorClasses}>
                      {showError("consent")}
                    </p>
                  )}

                  {submitError && (
                    <p role="alert" className="font-body text-[13px] text-[#8A3324]">
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className={`${buttonClasses("primary", "w-full")} disabled:opacity-60`}
                  >
                    {submitting ? "Sending…" : confirmationCopy.submitCta}
                  </button>

                  <p className="text-center font-body text-[12px] text-slate/70">
                    <a href="/privacy" className="underline decoration-slate/30 underline-offset-4 hover:text-gold">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </Reveal>
            ) : (
              <Reveal key="done">
                <div ref={doneCardRef} className="scroll-mt-20" aria-live="polite">
                  <h2 className="font-display text-3xl font-normal text-midnight sm:text-4xl">
                    {confirmationCopy.headline}
                  </h2>
                  <p className="mt-3 font-body text-[15px] leading-relaxed text-midnight/75">
                    {confirmationCopy.body}
                  </p>
                  <button
                    type="button"
                    onClick={handleDownloadBrochure}
                    className={`${buttonClasses("primary", "mt-8 w-full")} inline-flex`}
                  >
                    Download Brochure
                    <span className="font-body text-[11px] font-normal opacity-80">({brochureSizeLabel})</span>
                  </button>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  body,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  body: string;
}) {
  return (
    <div className="card-lift flex items-start gap-4 rounded-xl border border-mist/15 bg-white/[0.03] p-6 transition-colors hover:border-gold-light/30 hover:bg-white/[0.06]">
      <IconBadge tone="gold">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </IconBadge>
      <div>
        <h3 className="font-label text-[11px] tracking-[0.14em] uppercase text-gold-light">{title}</h3>
        <p className="mt-1.5 font-body text-[13.5px] leading-relaxed text-sand/85">{body}</p>
      </div>
    </div>
  );
}