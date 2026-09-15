import type { LeadFormData, PageVariant } from "@/content/types";

/**
 * Sends a "new lead" notification email via the Resend API
 * (https://resend.com). Requires RESEND_API_KEY and RESEND_FROM_EMAIL to be
 * set (see web/.env.local.example); silently no-ops when they aren't, so
 * local dev without them never breaks.
 *
 * We previously tried sending directly through Titan Mail's SMTP server
 * (smtp.titan.email) via nodemailer to avoid a third-party API, but SMTP
 * auth kept failing in production, so this reverts to the known-working
 * Resend setup. The SMTP_* env vars are no longer used — see
 * .env.local.example.
 *
 * This must never throw — it is fired from the lead API route with `after()`
 * so a flaky/misconfigured email provider can never delay or fail the lead
 * submission the visitor sees.
 */

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
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;

  // TEMP DEBUG — remove once production email delivery is confirmed working.
  console.log("[lead-email][debug] Resend env at runtime:", {
    apiKey: resendApiKey ? `defined (len=${resendApiKey.length})` : "UNDEFINED",
    fromEmail: resendFromEmail || "UNDEFINED",
  });

  if (!resendApiKey || !resendFromEmail) {
    console.warn(
      "[lead-email] RESEND_API_KEY or RESEND_FROM_EMAIL is not set — skipping email notification.",
    );
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

  try {
    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] sending via Resend now", { from: resendFromEmail, to: toEmail });

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Auroma Holiday Villas Website <${resendFromEmail}>`,
        to: [toEmail],
        subject: `New enquiry — ${data.fullName || "Website visitor"} (Auroma Holiday Villas)`,
        text: textBody,
        html: htmlBody,
      }),
    });

    const responseBody = await response.text();

    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] Resend API responded", {
      status: response.status,
      ok: response.ok,
      body: responseBody,
    });

    if (!response.ok) {
      console.error(
        `[lead-email] Resend API returned an error status (${response.status})`,
        responseBody,
      );
    }
  } catch (err) {
    console.error("[lead-email] Failed to send lead notification email", err);
  }
}
