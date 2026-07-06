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

The current build uses Unsplash-hosted temporary visuals through `next/image`. They are configured in:

```text
src/lib/content.ts
src/components/provider-image-slot.tsx
src/app/page.tsx
```

Replace the provider visual with the real Virginie Chavannes headshot when ready. Keep the same aspect ratio or update the surrounding layout carefully to avoid layout shift.

## Booking Link Or Embed

Set the real scheduling URL in Vercel or `.env.local`:

```bash
NEXT_PUBLIC_BOOKING_URL="https://your-booking-link.example"
```

The booking component is `src/components/booking-embed-slot.tsx`. Replace that component’s inner block with the scheduling iframe or script when the exact platform is known.

## Contact Form And Resend

The contact form posts to `POST /api/contact` and sends email through Resend only when these env vars are configured:

```bash
RESEND_API_KEY="re_placeholder"
CONTACT_TO_EMAIL="practice@example.com"
CONTACT_FROM_EMAIL="Premier NP Care <onboarding@resend.dev>"
```

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

## Pre-Launch Review Checklist

- Confirm Virginie Chavannes' exact credential line and licensing language.
- Replace temporary Unsplash visuals with approved practice imagery.
- Set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_BOOKING_URL`.
- Add Resend environment variables.
- Review service scope and safety language with the provider.
- Submit a test contact form in production preview before launch.
