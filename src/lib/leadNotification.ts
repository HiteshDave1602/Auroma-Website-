import type { LeadFormData, PageVariant } from "@/content/types";

/**
 * Sends a "new lead" notification email via Resend (resend.com) — a
 * transactional email API designed for server-to-server use (unlike
 * Web3Forms, whose free tier rejects non-browser callers with a 403; see
 * https://docs.web3forms.com/getting-started/troubleshooting.md). Requires
 * RESEND_API_KEY and RESEND_FROM_EMAIL to be set (see
 * web/.env.local.example); silently no-ops when the key isn't, so local dev
 * without it never breaks.
 *
 * This must never throw — it is fired from the lead API route with `after()`
 * so a flaky/misconfigured email provider can never delay or fail the lead
 * submission the visitor sees.
 */

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const DEFAULT_TO_EMAIL = "hello@auromaholidayvillas.com";

interface LeadNotificationInput {
  data: LeadFormData;
  variant: PageVariant;
  sourcePage: string;
  /** ISO timestamp of when the lead was received. */
  submittedAt: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendLeadNotificationEmail({
  data,
  variant,
  sourcePage,
  submittedAt,
}: LeadNotificationInput): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  // TEMP DEBUG — remove once production email delivery is confirmed working.
  console.log(
    "[lead-email][debug] RESEND_API_KEY at runtime:",
    apiKey ? `defined (len=${apiKey.length}, starts=${apiKey.slice(0, 4)}…)` : "UNDEFINED",
  );
  if (!apiKey) {
    console.warn("[lead-email] RESEND_API_KEY is not set — skipping email notification.");
    return;
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL;
  if (!fromEmail) {
    console.warn("[lead-email] RESEND_FROM_EMAIL is not set — skipping email notification.");
    return;
  }

  const toEmail = process.env.LEAD_NOTIFICATION_TO_EMAIL || DEFAULT_TO_EMAIL;

  const submittedAtLabel = new Date(submittedAt).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fields: Record<string, string> = {
    "Full Name": data.fullName || "(not provided)",
    "WhatsApp Number": data.whatsappNumber || "(not provided)",
    City: data.city || "(not provided)",
    "Investment Range": data.investmentRange || "(not provided)",
    Message: data.message?.trim() ? data.message.trim() : "(not provided)",
    "Submitted At (IST)": submittedAtLabel,
    "Page Variant": variant,
    "Source Page": sourcePage || "(unknown)",
  };

  const textBody = Object.entries(fields)
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const htmlBody = `<h2>New enquiry — ${escapeHtml(data.fullName || "Website visitor")}</h2><table>${Object.entries(
    fields,
  )
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:600;">${escapeHtml(label)}</td><td style="padding:4px 0;">${escapeHtml(
          value,
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("")}</table>`;

  const payload = {
    from: `Auroma Holiday Villas Website <${fromEmail}>`,
    to: [toEmail],
    subject: `New enquiry — ${data.fullName || "Website visitor"} (Auroma Holiday Villas)`,
    text: textBody,
    html: htmlBody,
  };

  try {
    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] calling Resend API now", { endpoint: RESEND_ENDPOINT, to: toEmail });

    const res = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseBody = await res.text().catch(() => "");
    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] Resend API responded", {
      status: res.status,
      ok: res.ok,
      body: responseBody,
    });

    if (!res.ok) {
      console.error("[lead-email] Resend returned an error response", res.status, responseBody);
    }
  } catch (err) {
    console.error("[lead-email] Failed to send lead notification email", err);
  }
}
