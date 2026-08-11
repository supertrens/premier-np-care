# Premier NP Care

A five-page marketing website for Premier NP Care, a Nurse Practitioner-led telehealth-affiliated practice. The site is informational only: no patient portal, no auth, no database, no scheduling logic, and no EHR integration.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Update Client-Review Copy

The site uses polished first-revision copy so the design can be reviewed without visible placeholder flags. Before launch, review provider credentials, biography, service scope, contact details, booking URL, and service-area language across `src/`.

## Replace Images

The provider headshot is stored locally and rendered with `next/image`:

```text
public/images/virginie-chavannes.jpeg
```

Service imagery is configured in `src/lib/content.ts` and stored in `public/images/client/`.

## Booking Link Or Embed

Set the real scheduling URL in Vercel or `.env.local`:

```bash
NEXT_PUBLIC_BOOKING_URL="https://your-booking-link.example"
```

Current review link:

```bash
NEXT_PUBLIC_BOOKING_URL="https://d2oe0ra32qx05a.cloudfront.net/?practiceKey=k_1_115955"
```

The booking component is `src/components/booking-embed-slot.tsx`. It renders a native booking panel and opens the live Tebra appointment calendar in a modal, with a backup new-tab link.

## Contact Form And Resend

The contact form posts to `POST /api/contact` and sends email through Resend only when these env vars are configured:

```bash
RESEND_API_KEY="re_placeholder"
CONTACT_TO_EMAIL="practice@example.com"
CONTACT_FROM_EMAIL="Premier NP Care <hello@your-verified-domain.com>"
```

When configured, every contact submission sends two emails:

- A practice notification to `CONTACT_TO_EMAIL`, with the patient email set as the reply-to address.
- A confirmation email to the patient email address entered in the form.

Use a verified Resend sender/domain for `CONTACT_FROM_EMAIL` before production. The temporary `onboarding@resend.dev` address is useful for early testing, but a verified practice domain is needed for reliable patient confirmations.

In development, missing Resend env vars return a placeholder success response so the form can be tested without sending email. In production, missing env vars return a configuration error.

Do not ask patients to include urgent concerns or sensitive medical details in the contact form.

## Deploy To Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Add the environment variables above in Vercel Project Settings.
4. Deploy. Vercel auto-detects Next.js.

Useful checks before deployment:

```bash
npm run lint
npm run build
```

## Search And Indexing

The production domain is:

```bash
NEXT_PUBLIC_SITE_URL="https://www.premiernpcare.com"
```

The site generates:

- `https://www.premiernpcare.com/robots.txt`
- `https://www.premiernpcare.com/sitemap.xml`

After deployment, connect the domain in Google Search Console:

1. Open Google Search Console.
2. Add `https://www.premiernpcare.com/` as a URL-prefix property, or verify the root domain with DNS.
3. Submit `https://www.premiernpcare.com/sitemap.xml`.
4. Use URL Inspection for `https://www.premiernpcare.com/`.
5. Request indexing for the homepage.

Google indexing is not instant; allow several days to a few weeks for consistent search visibility.

## Pre-Launch Review Checklist

- Confirm the exact credential line and licensing language for Virginie Chavannes, APN.
- Review approved service imagery in `public/images/client/`.
- Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BOOKING_URL`.
- Add Resend environment variables.
- Review service scope and safety language with the provider.
- Confirm `https://www.premiernpcare.com/robots.txt` and `https://www.premiernpcare.com/sitemap.xml` return `200`.
- Submit the sitemap in Google Search Console.
- Submit a test contact form in production preview before launch.
