import type { LeadFormData, PageVariant } from "@/content/types";

/**
 * Sends a "new lead" notification email via Web3Forms (web3forms.com) — a
 * free-tier form backend that forwards a JSON submission to whatever
 * destination address was configured for the access key. Requires
 * WEB3FORMS_ACCESS_KEY to be set (see web/.env.local.example); silently
 * no-ops when it isn't, so local dev without the key never breaks.
 *
 * This must never throw — it is fired from the lead API route with `after()`
 * so a flaky/misconfigured email provider can never delay or fail the lead
 * submission the visitor sees.
 */

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface LeadNotificationInput {
  data: LeadFormData;
  variant: PageVariant;
  sourcePage: string;
  /** ISO timestamp of when the lead was received. */
  submittedAt: string;
}

export async function sendLeadNotificationEmail({
  data,
  variant,
  sourcePage,
  submittedAt,
}: LeadNotificationInput): Promise<void> {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  // TEMP DEBUG — remove once production email delivery is confirmed working.
  console.log(
    "[lead-email][debug] WEB3FORMS_ACCESS_KEY at runtime:",
    accessKey ? `defined (len=${accessKey.length}, starts=${accessKey.slice(0, 4)}…)` : "UNDEFINED",
  );
  if (!accessKey) {
    console.warn("[lead-email] WEB3FORMS_ACCESS_KEY is not set — skipping email notification.");
    return;
  }

  const submittedAtLabel = new Date(submittedAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const payload = {
    access_key: accessKey,
    subject: `New enquiry — ${data.fullName || "Website visitor"} (Auroma Holiday Villas)`,
    from_name: "Auroma Holiday Villas Website",
    "Full Name": data.fullName || "(not provided)",
    "WhatsApp Number": data.whatsappNumber || "(not provided)",
    City: data.city || "(not provided)",
    "Investment Range": data.investmentRange || "(not provided)",
    Message: data.message?.trim() ? data.message.trim() : "(not provided)",
    "Submitted At (IST)": submittedAtLabel,
    "Page Variant": variant,
    "Source Page": sourcePage || "(unknown)",
  };

  try {
    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] calling Web3Forms API now", { endpoint: WEB3FORMS_ENDPOINT });

    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseBody = await res.text().catch(() => "");
    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] Web3Forms API responded", {
      status: res.status,
      ok: res.ok,
      body: responseBody,
    });

    if (!res.ok) {
      console.error("[lead-email] Web3Forms returned an error response", res.status, responseBody);
    }
  } catch (err) {
    console.error("[lead-email] Failed to send lead notification email", err);
  }
}
