export type PageVariant = "investor" | "home";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const investmentRangeOptions = [
  "₹2.95cr – ₹3.45cr",
  "₹3.45cr – ₹3.95cr",
  "₹3.95cr – ₹4cr+",
] as const;

export type InvestmentRange = (typeof investmentRangeOptions)[number];

export interface LeadFormData {
  fullName: string;
  whatsappNumber: string;
  city: string;
  investmentRange: InvestmentRange | "";
  /** Optional free-text note from the prospect. Never required. */
  message?: string;
  consent: boolean;
}

export interface LeadRecord extends LeadFormData {
  variant: PageVariant;
  sourcePage: string;
  utm: Record<string, string>;
  consentTimestamp: string;
}

export interface BrochureLeadData {
  name: string;
  email: string;
  phone: string;
}
