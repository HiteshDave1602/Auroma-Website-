import nodemailer from "nodemailer";
import type { LeadFormData, PageVariant } from "@/content/types";

/**
 * Sends a "new lead" notification email by connecting directly to Titan
 * Mail's SMTP server (Titan hosts email for this domain via BigRock) and
 * sending as hello@auromaholidayvillas.com — no third-party email API
 * involved. Requires SMTP_HOST, SMTP_PORT, SMTP_USER and SMTP_PASSWORD to be
 * set (see web/.env.local.example); silently no-ops when they aren't, so
 * local dev without them never breaks.
 *
 * This must never throw — it is fired from the lead API route with `after()`
 * so a flaky/misconfigured mail server can never delay or fail the lead
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
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;

  // TEMP DEBUG — remove once production email delivery is confirmed working.
  console.log("[lead-email][debug] SMTP env at runtime:", {
    host: smtpHost || "UNDEFINED",
    port: smtpPort || "UNDEFINED",
    user: smtpUser || "UNDEFINED",
    password: smtpPassword ? `defined (len=${smtpPassword.length})` : "UNDEFINED",
  });

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
    console.warn(
      "[lead-email] SMTP_HOST, SMTP_PORT, SMTP_USER or SMTP_PASSWORD is not set — skipping email notification.",
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

  const port = Number.parseInt(smtpPort, 10);

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      // Titan Mail: port 465 is implicit SSL, port 587 is STARTTLS.
      secure: port === 465,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] sending via SMTP now", { host: smtpHost, port, to: toEmail });

    const info = await transporter.sendMail({
      from: `Auroma Holiday Villas Website <${smtpUser}>`,
      to: toEmail,
      subject: `New enquiry — ${data.fullName || "Website visitor"} (Auroma Holiday Villas)`,
      text: textBody,
      html: htmlBody,
    });

    // TEMP DEBUG — remove once production email delivery is confirmed working.
    console.log("[lead-email][debug] SMTP server responded", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    });
  } catch (err) {
    console.error("[lead-email] Failed to send lead notification email", err);
  }
}
