import { investmentRangeOptions, type InvestmentRange, type LeadFormData } from "@/content/types";

/**
 * Validation rules for the "Send me the brochure" lead form.
 *
 * Kept as pure functions so the rules can be unit-tested and reused by any
 * surface (inline form, modal, sticky bar) without duplicating copy.
 * Message is intentionally optional — it must never block submission.
 */

export const WHATSAPP_DIGIT_LENGTH = 10;

/** Inline error copy shown under the WhatsApp number field. */
export const phoneNumberErrorCopy = "Please enter a valid 10-digit number";

export const NAME_ERROR_COPY = "Please enter your full name.";
export const CITY_ERROR_COPY = "Please enter your city.";
export const INVESTMENT_ERROR_COPY = "Please select an investment range.";
export const CONSENT_ERROR_COPY =
  "Please confirm you'd like the brochure on WhatsApp — this box can't be pre-ticked.";

export interface LeadFormValues {
  fullName: string;
  whatsappNumber: string;
  city: string;
  investmentRange: string;
  message: string;
  consent: boolean;
}

export interface LeadFormErrors {
  fullName?: string;
  whatsappNumber?: string;
  city?: string;
  investmentRange?: string;
  consent?: string;
}

export const EMPTY_LEAD_FORM_VALUES: LeadFormValues = {
  fullName: "",
  whatsappNumber: "",
  city: "",
  investmentRange: "",
  message: "",
  consent: false,
};

/**
 * Strips every non-digit character and hard-caps the length, so the field can
 * only ever hold a bare national number (the +91 prefix is rendered outside
 * the input). Pasted "+91 98765 43210" becomes "9876543210".
 */
export function normalisePhoneDigits(raw: string): string {
  return raw.replace(/\D/g, "").slice(0, WHATSAPP_DIGIT_LENGTH);
}

export function isInvestmentRange(value: string): value is InvestmentRange {
  return (investmentRangeOptions as readonly string[]).includes(value);
}

export function validateLeadForm(values: LeadFormValues): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = NAME_ERROR_COPY;
  }

  const digits = normalisePhoneDigits(values.whatsappNumber);
  if (digits.length !== WHATSAPP_DIGIT_LENGTH) {
    errors.whatsappNumber = phoneNumberErrorCopy;
  }

  if (values.city.trim().length < 2) {
    errors.city = CITY_ERROR_COPY;
  }

  if (!isInvestmentRange(values.investmentRange)) {
    errors.investmentRange = INVESTMENT_ERROR_COPY;
  }

  if (!values.consent) {
    errors.consent = CONSENT_ERROR_COPY;
  }

  return errors;
}

/** True when every required field passes — i.e. the form may be submitted. */
export function isLeadFormSubmittable(errors: LeadFormErrors): boolean {
  return Object.keys(errors).length === 0;
}

export function toLeadFormData(values: LeadFormValues): LeadFormData {
  return {
    fullName: values.fullName.trim(),
    whatsappNumber: `+91${normalisePhoneDigits(values.whatsappNumber)}`,
    city: values.city.trim(),
    investmentRange: isInvestmentRange(values.investmentRange) ? values.investmentRange : "",
    message: values.message.trim(),
    consent: values.consent,
  };
}
