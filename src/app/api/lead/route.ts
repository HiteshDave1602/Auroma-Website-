import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";
import { randomUUID } from "crypto";
import { sendLeadNotificationEmail } from "@/lib/leadNotification";
import type { LeadFormData, PageVariant } from "@/content/types";

/**
 * TODO(crm): this is a placeholder lead store, not a real backend. Replace
 * with the actual CRM / Onbbits integration before launch (BUILD-SPEC v3
 * §5.12, §7). Leads are kept in memory only and are lost on server restart;
 * nothing here sends a WhatsApp message.
 */
const leads = new Map<string, Record<string, unknown>>();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const leadId = randomUUID();
  const createdAt = new Date().toISOString();

  leads.set(leadId, {
    ...body,
    leadId,
    createdAt,
  });

  console.log("[lead]", leads.get(leadId));

  // Contact-section submissions (not the brochure-download gate) also get an
  // email notification. Scheduled with after() so it runs once the response
  // below has already been sent — it can never delay or fail the visitor's
  // WhatsApp/download-brochure success flow, even if the email provider is
  // slow or down.
  if (body?.type !== "brochure_download") {
    after(() =>
      sendLeadNotificationEmail({
        data: body as LeadFormData,
        variant: (body?.variant as PageVariant) ?? "home",
        sourcePage: typeof body?.sourcePage === "string" ? body.sourcePage : "",
        submittedAt: createdAt,
      }),
    );
  }

  return NextResponse.json({ leadId });
}
