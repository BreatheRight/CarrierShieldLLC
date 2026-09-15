# Fleet Integra Deployment & Resend Integration Guide

This project is configured to dispatch leads and automated client confirmations via **Resend** transactional email service.

---

## 1. Resend Email Setup

When a prospective client submits a contact or demo request on `fleetintegra.com`:
1. **Admin Lead Notification**: Dispatched to `sales@fleetintegra.com` with all form fields (Name, Company, Email, Phone, Fleet Size, Service Interest, and Message) and Reply-To set to the user's email.
2. **Client Confirmation Email**: Dispatched directly to the user's email confirming receipt of their inquiry, outlining next steps, and providing rapid contact info (+1 201 293-7774).

### Step A: Add Your Resend API Key
1. In your **Resend Dashboard** ([resend.com](https://resend.com)), go to **API Keys**.
2. Click **Create API Key**, give it a name (e.g., `Fleet Integra Production`), and copy the key (starts with `re_...`).
3. Add the key as an environment variable in **Google AI Studio** (via the Settings/Secrets panel) and in **Vercel** / **Cloudflare**:
   - `RESEND_API_KEY`: `re_your_api_key_here`
   - `CONTACT_EMAIL_RECIPIENT`: `sales@fleetintegra.com`
   - `RESEND_FROM_EMAIL`: `Fleet Integra <sales@fleetintegra.com>`

### Step B: Verify Your Domain in Resend (Crucial for Client Confirmations)
> **Why this matters**: Unverified Resend accounts can only send test emails to your registered Resend email address. To send confirmation emails to outside prospective clients from `@fleetintegra.com`, verify the domain:

1. In the **Resend Dashboard**, go to **Domains** > **Add Domain**.
2. Enter `fleetintegra.com` (and select your preferred region, e.g., `us-east-1`).
3. Resend will display 3 DNS records:
   - **DKIM** (TXT or CNAME record)
   - **SPF** (TXT record, e.g. `v=spf1 include:resend.com ~all`)
   - **DMARC** (TXT record)
4. Add these DNS records in your domain registrar / DNS provider (Cloudflare, Google Domains, or Google Workspace).
5. Click **Verify DNS Records** in Resend. Once verified (green checkmark), Resend will deliver emails from `Fleet Integra <sales@fleetintegra.com>` to any recipient worldwide.

---

## 2. Vercel Deployment Steps

1. Connect your repository to **Vercel**.
2. Under **Project Settings** > **Environment Variables**, add:
   - `RESEND_API_KEY`: Your Resend API key (`re_...`)
   - `CONTACT_EMAIL_RECIPIENT`: `sales@fleetintegra.com`
   - `RESEND_FROM_EMAIL`: `Fleet Integra <sales@fleetintegra.com>`
   - `WEBHOOK_URL`: *(Optional CRM or Slack webhook)*
3. Vercel automatically deploys:
   - The Vite frontend
   - The serverless function at `/api/contact` (`api/contact.ts`)

---

## 3. Cloudflare Pages Deployment Steps

1. In Cloudflare Dashboard, go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
2. Select your repository.
3. Build Configuration:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
4. Environment Variables:
   - `RESEND_API_KEY`: Your Resend API key (`re_...`)
   - `CONTACT_EMAIL_RECIPIENT`: `sales@fleetintegra.com`
   - `RESEND_FROM_EMAIL`: `Fleet Integra <sales@fleetintegra.com>`
5. Custom Domain: Add `fleetintegra.com` under **Custom domains**.

---

## 4. Google Voice Phone Integration

- Direct dialing across desktop and mobile is wired to Google Voice:
  ```html
  <a href="tel:+12012937774">+1 (201) 293-7774</a>
  ```
- Urgent inquiries or calls from any page route straight to your Google Voice app or forwarded carrier phone line.
