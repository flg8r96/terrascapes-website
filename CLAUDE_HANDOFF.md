# Claude Maintenance Handoff

Use this project as the visual source of truth. Do not redesign the page unless Matt explicitly requests it.

## Non-negotiable visual rules

1. Preserve the hero height, left-aligned type, dark image treatment, and overlapping trust strip.
2. Keep the page accent centralized in `--brand` in `app/globals.css`.
3. Do not introduce additional orange/gold hex values. The logo and all page accents must inherit `--brand`.
4. Maintain large editorial headings, restrained rounded corners, and the cream/dark section rhythm.
5. Do not compress vertical spacing to make the page shorter.
6. Keep the service cards image-led and the transformation section dark.
7. Before/after pairs must have matching dimensions and camera perspective.
8. Prefer changing data arrays and assets over rewriting component structure.

## Safe enhancement areas

- Connect the estimate form to a server action, CRM, or email service.
- Replace placeholder imagery in `public/images/`.
- Add real routes for service pages, gallery, reviews, and privacy policy.
- Add analytics, local-business schema, metadata, and sitemap.
- Add CMS-backed project and review data without changing the visual hierarchy.

## Files that control the design

- `app/globals.css`: tokens and global presentation
- `components/hero.tsx`: hero hierarchy and CTAs
- `components/services.tsx`: service cards
- `components/transformations.tsx`: before/after portfolio
- `components/reviews.tsx`: social proof
- `components/logo.tsx`: brand mark and matching orange
