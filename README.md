# TerraScapes Website

Live production site for terrascapeslv.com — standalone Next.js app, deployed as
its own Railway project (isolated from R&T Command Center's uptime). The lead
form posts to this app's own `/api/lead` (`app/api/lead/route.ts`), which
proxies server-to-server to the command center's lead engine (Twilio bridge,
Postgres, notifications) — no CORS involved, no coupling to the command
center's own deploys.

A copy of this same source also lives at `R-T-Command-Center/site-sources/terrascapes/`
for the internal `/preview/terrascapes` link shown in the TSA dashboard — that
copy is built differently (static export under a `/preview/terrascapes`
basePath) and is not this site. Content changes should land in both.

## Stack

- Next.js App Router + TypeScript
- Tailwind CSS v4
- Motion for React (`motion/react`)
- Lucide icons
- Local image assets; no remote image dependencies

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Brand-color fix

The logo, buttons, icons, labels, and interactive controls all use one CSS token:

```css
--brand: #e86c1f;
```

Change it once in `app/globals.css` to update the entire site. This prevents the logo-orange mismatch from the mockup.

## Image replacement

Replace files in `public/images/` while keeping the same filenames. Recommended source sizes:

- `hero.jpg`: 2400 × 1500 or larger
- Service images: 1200 × 900 or larger
- Before/after images: matching camera angle and matching dimensions
- `cta.jpg`: 2000 × 900 or larger

## Form integration

`components/contact.tsx` currently provides a functioning front-end demo state. Replace `handleSubmit()` with your preferred CRM, email provider, server action, or form endpoint.

## Notes for Claude / future maintainers

- Preserve the spacing and typography hierarchy before adding content.
- Keep `--brand` as the only orange source of truth.
- Keep transformation pairs at identical dimensions and camera perspective.
- Avoid adding extra card styles, gradients, or UI chrome; the visual direction relies on restraint.
