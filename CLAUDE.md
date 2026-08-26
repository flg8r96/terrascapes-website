# terrascapes-website — Agent Context

## Read Before Writing Any Code

This repo is part of Matt Perkins' agent ecosystem. Before making any architectural decisions, read the shared reference docs:

**Agent Docs Index** (start here — links to everything):
https://www.notion.so/35d7ea9b8ad0817f8509eebed0adf61b

**Master Architecture Doc** (tech stack, Postgres schema, agent roster, build plan):
https://www.notion.so/35c7ea9b8ad08187b8dffc83e9b0e2fb

**Agent Context** (runtime config — active SKUs, velocity windows, fleet status):
https://www.notion.so/35d7ea9b8ad08105b4adc4a047d9e5ac

## About This Repo

Live production site for terrascapeslv.com — standalone Next.js app, deployed as its own
Railway project, deliberately isolated from R&T Command Center's uptime. The lead form posts
to this app's own `/api/lead` route. Domain: TSA / Client Delivery (Terrascapes), not niftly3d.

## Key Decisions Already Made

- Own isolated Railway project — this site's uptime/deploys are independent of R&T Command Center.
- Cloudflare Pages + Cloudflare DNS adopted as the standard host for TSA client marketing sites (Decision Log, 2026-08-01) — this repo was migrating off GitHub Pages under that decision; confirm current hosting state before assuming which is live.
- To propose infrastructure or lead-flow changes: write to the Architecture Proposals DB before writing code.

## Proposing Architecture Changes

Do not change infrastructure, the lead-capture flow, or add new data storage without going through the proposal process first:
1. Write a proposal to the Architecture Proposals DB: https://www.notion.so/66bcffa8b9f3442eb348dbdeb20d65b0
2. **Post it to #agent-comms tagged [@dev].** A Notion row alone is invisible to everyone — IT_guy does not poll the DB, it reacts to being tagged.
3. IT_guy reviews and surfaces it to Matt for approval in #approvals
4. Matt approves
5. Then write the code

## Standing Orders — read before touching git or writing files (non-negotiable)

**Read fresh from Notion, don't rely on a local copy:** Agent Context page, Standing Orders
section — https://www.notion.so/35d7ea9b8ad08105b4adc4a047d9e5ac (SO-001 through SO-014 as of
2026-08-26; append-only, so check for numbers beyond that too).

## Before ending any session

1. `npm run build` passing.
2. Commit written with a clear message.
3. `autopush` skill invoked — do not leave work uncommitted-and-unpushed across a session boundary.
4. If the change touches production (a live, client-facing site): a deploy proposal filed before requesting
   IT_guy review.

## Repo-Specific Notes

- This is a live, client-visible marketing site — a broken build or bad copy is publicly visible immediately, not just internally.
- Post-build asset assertion conventions used elsewhere in the TSA site family (fail-closed on missing required assets) — confirm this site follows the same pattern before assuming an asset copy step is safe to skip.
