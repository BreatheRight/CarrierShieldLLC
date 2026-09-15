/**
 * Simple Resend serverless function for Vercel.
 * Matches standard Mailgun/Resend tutorial patterns.
 */
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

  const { name, email, phone, company, fleetSize, serviceInterest, message } =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

  const emailBody = `
New Fleet Integra Contact / Quote Request:
------------------------------------------
Name: ${name || "N/A"}
Email: ${email || "N/A"}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}
Fleet Size: ${fleetSize || "N/A"}
Service Interest: ${serviceInterest || "General Inquiry"}

Message:
${message || "No message provided"}
  `.trim();

  try {
    // 1. Primary Attempt: Send from verified domain to sales@fleetintegra.com
    let resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Fleet Integra <sales@fleetintegra.com>",
        to: ["sales@fleetintegra.com"],
        reply_to: email || undefined,
        subject: `New Fleet Inquiry: ${name || "Prospective Client"} (${company || "Carrier"})`,
        text: emailBody,
      }),
    });

    let resData = await resendResponse.json();

    // 2. Fallback Attempt: If fleetintegra.com domain DNS is not yet verified in Resend,
    // deliver to your registered Resend account address (admin@fleetintegra.com) using onboarding@resend.dev
    if (!resendResponse.ok && resData?.name === "validation_error") {
      const fallbackResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey.trim()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Fleet Integra Demo <onboarding@resend.dev>",
          to: ["admin@fleetintegra.com"],
          reply_to: email || undefined,
          subject: `[Demo / Test Mode] New Fleet Inquiry: ${name || "Prospective Client"} (${company || "Carrier"})`,
          text: emailBody,
        }),
      });

      const fallbackData = await fallbackResponse.json();

      if (fallbackResponse.ok) {
        return res.status(200).json({
          success: true,
          id: fallbackData.id,
          note: "Delivered to admin@fleetintegra.com via test mode (domain verification pending).",
        });
      }
    }

    if (!resendResponse.ok) {
      console.error("Resend API error:", resData);
      return res.status(resendResponse.status).json({ success: false, error: resData });
    }

    return res.status(200).json({ success: true, id: resData.id });
  } catch (err: any) {
    console.error("Error sending email:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
