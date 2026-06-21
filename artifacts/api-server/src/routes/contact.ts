import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { z } from "zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

function getResendClient(): Resend {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY environment variable is not set");
  }
  return new Resend(key);
}

const ContactSchema = z.object({
  companyName: z.string().min(1),
  industry: z.string().min(1),
  location: z.string().min(1),
  spaceType: z.string().min(1),
  footfall: z.string().min(1),
  contactName: z.string().min(1),
  email: z.string().email(),
  message: z.string().optional(),
});

function buildHtml(data: z.infer<typeof ContactSchema>): string {
  const rows = [
    ["Company", data.companyName],
    ["Industry", data.industry],
    ["Location", data.location],
    ["Space Type", data.spaceType],
    ["Footfall", data.footfall],
    ["Contact Name", data.contactName],
    ["Email", data.email],
    ["Message", data.message ?? "—"],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 12px;font-weight:600;color:#4a5568;background:#f7fafc;white-space:nowrap;border:1px solid #e2e8f0">${label}</td>
          <td style="padding:8px 12px;color:#1a202c;border:1px solid #e2e8f0">${value}</td>
        </tr>`
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
      <body style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
        <h2 style="color:#1a202c;margin-bottom:4px">New partner enquiry</h2>
        <p style="color:#718096;margin-top:0">Submitted via sorta.co.jp</p>
        <table style="width:100%;border-collapse:collapse;margin-top:16px">
          ${rowsHtml}
        </table>
        <p style="margin-top:24px;color:#718096;font-size:13px">
          Reply directly to this email to respond to ${data.contactName} at ${data.email}.
        </p>
      </body>
    </html>
  `;
}

router.post("/contact", async (req, res) => {
  const result = ContactSchema.safeParse(req.body);
  if (!result.success) {
    res.status(400).json({ ok: false, error: "Invalid form data" });
    return;
  }

  const data = result.data;

  try {
    const { error } = await getResendClient().emails.send({
      from: "Sorta <noreply@sorta.co.jp>",
      to: ["hello@sorta.co.jp"],
      replyTo: data.email,
      subject: `New partner enquiry — ${data.companyName}`,
      html: buildHtml(data),
    });

    if (error) {
      logger.error({ error }, "Resend API error");
      res.status(500).json({ ok: false, error: "Failed to send email" });
      return;
    }

    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Unexpected error sending contact email");
    res.status(500).json({ ok: false, error: "Internal server error" });
  }
});

export default router;
