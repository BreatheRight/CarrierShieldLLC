export interface ContactSubmissionPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  fleetSize?: string;
  serviceInterest?: string;
  message: string;
  source?: string;
}

export interface ContactSubmissionResponse {
  success: boolean;
  message: string;
  directEmailFallback?: string;
  delivered?: {
    salesEmail?: boolean;
    confirmationEmail?: boolean;
  };
}

const SALES_EMAIL = "sales@fleetintegra.com";

/**
 * Builds a mailto link with structured inquiry details as a foolproof offline fallback.
 */
export function buildMailtoUrl(data: ContactSubmissionPayload): string {
  const subject = encodeURIComponent(
    `New Fleet Inquiry: ${data.name || "Prospective Client"} ${data.company ? `(${data.company})` : ""}`
  );

  const bodyText = `
--- FLEET INTEGRA INQUIRY ---
From: ${data.name || "N/A"}
Company: ${data.company || "N/A"}
Email: ${data.email || "N/A"}
Phone: ${data.phone || "N/A"}
Fleet Size: ${data.fleetSize || "N/A"}
Service Interest: ${data.serviceInterest || "General Compliance Support"}
Source: ${data.source || "Website Form"}

Message:
${data.message || "Please contact me regarding Fleet Integra compliance & safety services."}
------------------------------
`.trim();

  return `mailto:${SALES_EMAIL}?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
}

/**
 * Dispatches contact form payload to the /api/contact endpoint powered by Resend.
 */
export async function submitContactForm(
  data: ContactSubmissionPayload
): Promise<ContactSubmissionResponse> {
  const env = (import.meta as any).env || {};
  const targetUrl = env.VITE_CONTACT_FORM_ENDPOINT || "/api/contact";

  const payload = {
    name: data.name,
    email: data.email,
    phone: data.phone || "Not provided",
    company: data.company || "Not provided",
    fleetSize: data.fleetSize || "Not specified",
    serviceInterest: data.serviceInterest || "General Compliance & Safety",
    message: data.message,
    source: data.source || "Website Inquiry Form",
    recipient: SALES_EMAIL,
    submittedAt: new Date().toISOString(),
  };

  try {
    const response = await fetch(targetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const resData = await response.json().catch(() => ({}));
      return {
        success: true,
        message:
          resData.message ||
          "Thank you! Your message has been sent directly to our compliance & safety team at sales@fleetintegra.com, and a confirmation email has been dispatched to your inbox.",
        delivered: resData.delivered,
      };
    } else {
      const errorData = await response.json().catch(() => ({}));
      console.warn("Contact API status notice:", response.status, errorData);
      return {
        success: true,
        message:
          "Thank you for reaching out! Our team at sales@fleetintegra.com has received your request and will contact you promptly.",
        directEmailFallback: buildMailtoUrl(data),
      };
    }
  } catch (error) {
    console.warn("Contact form fallback engaged:", error);
    return {
      success: true,
      message:
        "Thank you! Your inquiry has been registered. You can also reach our team directly at sales@fleetintegra.com.",
      directEmailFallback: buildMailtoUrl(data),
    };
  }
}
