/**
 * Resend serverless endpoint for Fleet Integra User Feedback & Bug Reports.
 * Delivers submissions to sales@fleetintegra.com (with fallback to admin@fleetintegra.com).
 */
import { Resend } from "resend";

export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return res.status(500).json({ error: "Server missing RESEND_API_KEY" });
  }

  const { type, component, description, file } =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

  const typeLabelMap: Record<string, string> = {
    bug: "Bug Report (Something is broken)",
    feature: "Feature Request (I have an idea)",
    other: "General Feedback (Something else)",
  };

  const formattedType = typeLabelMap[type] || type || "Feedback";

  const plainText = `
New Fleet Integra Feedback / Bug Report:
------------------------------------------
Feedback Type : ${formattedType}
Affected Area : ${component || "Unspecified"}

Description:
${description || "No description provided"}

Attachment:
${file?.filename ? `${file.filename} (${file.contentType || "image"})` : "None"}

Submitted At : ${new Date().toISOString()}
------------------------------------------
  `.trim();

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
      <div style="background-color: #030d1b; color: #ffffff; padding: 20px 24px;">
        <h2 style="margin: 0; font-size: 20px; color: #38bdf8; font-weight: 700;">Fleet Integra Feedback Applet</h2>
        <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8;">User submission from /feedback</p>
      </div>
      <div style="padding: 24px;">
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <tr>
            <td style="padding: 8px 0; width: 140px; font-weight: bold; color: #64748b; font-size: 14px;">Feedback Type:</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px; color: ${type === 'bug' ? '#ef4444' : type === 'feature' ? '#10b981' : '#8b5cf6'};">${formattedType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 14px;">Affected Area:</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px; color: #0f172a;">${component || "N/A"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #64748b; font-size: 14px;">Attachment:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #0f172a;">${file?.filename ? `Attached (${file.filename})` : "None"}</td>
          </tr>
        </table>
        
        <div style="background-color: #f8fafc; border-left: 4px solid #38bdf8; padding: 16px; border-radius: 4px; margin-top: 16px;">
          <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #475569;">Description:</h4>
          <p style="margin: 0; font-size: 15px; color: #0f172a; white-space: pre-wrap;">${description || "No description provided."}</p>
        </div>
      </div>
      <div style="background-color: #f1f5f9; padding: 12px 24px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0;">
        Delivered to sales@fleetintegra.com via Fleet Integra Resend Infrastructure
      </div>
    </div>
  `;

  // Process attachment for Resend
  let attachments: any[] | undefined = undefined;
  if (file && file.content) {
    try {
      // Remove any data URL prefix if present (e.g. data:image/png;base64,)
      const cleanBase64 = file.content.replace(/^data:[^;]+;base64,/, "");
      attachments = [
        {
          filename: file.filename || "screenshot.png",
          content: Buffer.from(cleanBase64, "base64"),
          contentType: file.contentType || "image/png",
        },
      ];
    } catch (attErr) {
      console.error("Failed to parse attachment base64 buffer:", attErr);
    }
  }

  const resend = new Resend(apiKey.trim());

  try {
    // 1. Primary delivery to sales@fleetintegra.com
    const { data: resData, error: resError } = await resend.emails.send({
      from: "Fleet Integra Feedback <onboarding@resend.dev>",
      to: ["sales@fleetintegra.com"],
      subject: `[Website Feedback] ${formattedType}: ${component || "General"}`,
      text: plainText,
      html: htmlContent,
      attachments,
    });

    if (!resError) {
      return res.status(200).json({
        success: true,
        id: resData?.id,
        recipient: "sales@fleetintegra.com",
      });
    }

    // 2. Fallback to admin@fleetintegra.com if domain/recipient restriction occurs in test mode
    if (resError && (resError as any).name === "validation_error") {
      const fallbackResult = await resend.emails.send({
        from: "Fleet Integra Feedback <onboarding@resend.dev>",
        to: ["admin@fleetintegra.com"],
        subject: `[Demo / Fallback Feedback] ${formattedType}: ${component || "General"}`,
        text: plainText,
        html: htmlContent,
        attachments,
      });

      if (!fallbackResult.error) {
        return res.status(200).json({
          success: true,
          id: fallbackResult.data?.id,
          recipient: "admin@fleetintegra.com",
        });
      }
    }

    console.error("Resend API error:", resError);
    return res.status(400).json({ success: false, error: resError });
  } catch (err: any) {
    console.error("Error sending feedback email:", err);
    return res.status(500).json({ success: false, error: err?.message || "Unknown error" });
  }
}
