# Kirunda Constructions Ltd — Website

Next.js (App Router) site for Kirunda Constructions Ltd. **No CMS, no backend, no API keys.**
Everything is hardcoded and edited directly in the source files, then deployed.

## Structure

- `src/lib/constants.ts` — company info, contact details, mission/vision/values, CEO, services list.
  **Edit this file to update text content across the site.**
- `src/lib/data.ts` — projects, gallery photos, and architectural plans.
  **Edit this file to add/remove projects or photos.**
- `public/images/gallery/` — all uploaded project photos.
- `src/app/` — one folder per route (Next.js App Router). Each `page.tsx` is a page.
- `src/components/` — reusable UI pieces (header, footer, forms, homepage sections).

## Forms

The Contact and Quote forms submit via Next.js API routes (`/api/send-contact` and
`/api/send-quote`) which forward the data to **FormSubmit** — a free email delivery
service that sends the message to `kirundaconstructions@gmail.com`. No email client
is required on the visitor's device, so the buttons always work.

> **First-time setup:** FormSubmit requires a one-time email confirmation. The first
> time a form is submitted, FormSubmit sends a confirmation email to
> `kirundaconstructions@gmail.com`. Click the confirmation link once, and all future
> submissions will be delivered automatically.
>
> If you prefer a different provider, edit the API routes in `src/app/api/`.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo in Vercel.
3. No environment variables are required to build. Optionally set:
   - `NEXT_PUBLIC_SITE_URL` — your production URL, used in metadata/sitemap.xml (defaults to
     `https://kirundaconstructions.vercel.app`)
4. Deploy.

## SEO checklist (already wired up)

- Per-page metadata + Open Graph tags: `src/lib/seo.ts`
- `sitemap.xml`: `src/app/sitemap.ts` (auto-includes every project & plan page)
- `robots.txt`: `src/app/robots.ts`
- Structured data (LocalBusiness/GeneralContractor JSON-LD): rendered in `src/app/layout.tsx`
- PWA manifest + service worker: `public/manifest.json`, `public/sw.js`

To finish SEO setup after deploying:
- Submit `https://yourdomain.com/sitemap.xml` in Google Search Console
- Replace `public/icon-192.png` / `public/icon-512.png` with your real logo-based icons
  (placeholders are generated for now)
- Add a real Open Graph image at `public/icon-512.png` or update the path in `src/lib/seo.ts`

## Adding real photos to a project

1. Drop the image files into `public/images/gallery/`.
2. Reference them by path in `src/lib/data.ts`, e.g. `/images/gallery/your-file.jpg`.
