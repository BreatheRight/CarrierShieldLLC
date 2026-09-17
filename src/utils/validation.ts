/**
 * Client-side validation utilities for Fleet Integra contact and consultation forms.
 */

// Common consumer / free email providers
export const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "ymail.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "proton.me",
  "protonmail.com",
  "zoho.com",
  "yandex.com",
  "mail.com",
  "gmx.com",
  "fastmail.com",
  "inbox.com",
]);

/**
 * Automatically formats a phone input string into standard US/Canada format:
 * (XXX) XXX-XXXX or +1 (XXX) XXX-XXXX
 */
export function formatPhoneNumber(value: string): string {
  if (!value) return "";

  const hasPlus = value.trim().startsWith("+");
  const digits = value.replace(/\D/g, "");

  // Empty or non-digits
  if (!digits) return hasPlus ? "+" : "";

  // US with leading 1 (11 digits)
  if (digits.length === 11 && digits.startsWith("1")) {
    const area = digits.slice(1, 4);
    const middle = digits.slice(4, 7);
    const last = digits.slice(7, 11);
    return `+1 (${area}) ${middle}-${last}`;
  }

  // Standard US 10-digit format
  if (digits.length <= 3) {
    return `(${digits}`;
  } else if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }
}

/**
 * Validates phone number input.
 */
export function validatePhoneNumber(phone: string): {
  isValid: boolean;
  error: string | null;
} {
  const trimmed = phone.trim();
  if (!trimmed) {
    return { isValid: false, error: "Phone number is required." };
  }

  const digits = trimmed.replace(/\D/g, "");

  // International format with plus
  if (trimmed.startsWith("+") && !trimmed.startsWith("+1")) {
    if (digits.length < 8 || digits.length > 15) {
      return {
        isValid: false,
        error: "Please enter a valid international number with country code.",
      };
    }
    return { isValid: true, error: null };
  }

  // Standard North American Numbering Plan (NANP)
  const is11With1 = digits.length === 11 && digits.startsWith("1");
  const actualDigits = is11With1 ? digits.slice(1) : digits;

  if (actualDigits.length < 10) {
    return {
      isValid: false,
      error: `Please enter a complete 10-digit phone number (${actualDigits.length}/10 digits).`,
    };
  }

  if (actualDigits.length > 10) {
    return {
      isValid: false,
      error: "Phone number exceeds standard 10 digits.",
    };
  }

  // Area code cannot start with 0 or 1 in NANP
  if (actualDigits[0] === "0" || actualDigits[0] === "1") {
    return {
      isValid: false,
      error: "Area code cannot start with 0 or 1.",
    };
  }

  // Central office code cannot start with 0 or 1
  if (actualDigits[3] === "0" || actualDigits[3] === "1") {
    return {
      isValid: false,
      error: "Invalid exchange code: digits cannot start with 0 or 1.",
    };
  }

  return { isValid: true, error: null };
}

/**
 * Validates email address format and checks for professional/business domain.
 */
export function validateEmail(
  email: string,
  allowPersonalOverride: boolean = false
): {
  isValid: boolean;
  isProfessional: boolean;
  domain: string;
  error: string | null;
  warning: string | null;
} {
  const trimmed = email.trim().toLowerCase();

  if (!trimmed) {
    return {
      isValid: false,
      isProfessional: false,
      domain: "",
      error: "Business email is required.",
      warning: null,
    };
  }

  // Standard RFC 5322 compliant regex for web forms
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  if (!emailRegex.test(trimmed)) {
    return {
      isValid: false,
      isProfessional: false,
      domain: "",
      error: "Please enter a properly formatted email address (e.g., name@company.com).",
      warning: null,
    };
  }

  const parts = trimmed.split("@");
  if (parts.length !== 2) {
    return {
      isValid: false,
      isProfessional: false,
      domain: "",
      error: "Invalid email structure.",
      warning: null,
    };
  }

  const domain = parts[1];
  const domainParts = domain.split(".");
  const tld = domainParts[domainParts.length - 1];

  if (!tld || tld.length < 2) {
    return {
      isValid: false,
      isProfessional: false,
      domain,
      error: "Email must include a valid domain extension (e.g., .com, .net, .org).",
      warning: null,
    };
  }

  const isFree = FREE_EMAIL_DOMAINS.has(domain);

  if (isFree) {
    if (allowPersonalOverride) {
      return {
        isValid: true,
        isProfessional: false,
        domain,
        error: null,
        warning: `Notice: @${domain} is a personal email. A company domain is preferred for carrier records.`,
      };
    } else {
      return {
        isValid: false,
        isProfessional: false,
        domain,
        error: `Please enter a professional company email address. Free domains like @${domain} are restricted for commercial quotes.`,
        warning: null,
      };
    }
  }

  return {
    isValid: true,
    isProfessional: true,
    domain,
    error: null,
    warning: null,
  };
}
