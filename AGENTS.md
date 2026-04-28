# Agent guidelines (Khonsu site)

This repo is a modern marketing site built with **Astro + Tailwind** and deployed on **Cloudflare Pages**.

## Quick start

- **Install**: `npm install`
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

Cloudflare Pages settings:

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Node.js**: `20` (or newer)

## Content model

- **Apps content**: `src/content/apps/*.mdx`
- App list + detail pages are generated from those entries.

## How to work in this repo

- Prefer **small, focused changes** with a clear purpose.
- Match existing formatting and file organization (Astro components, Tailwind utility conventions).
- Avoid introducing new dependencies unless necessary; if you do, explain why and keep them minimal.
- Don’t commit secrets (tokens, Cloudflare credentials, `.env` files, etc.).

## Before you say “done”

- Run `npm run lint` and fix any errors.
- Run `npm run build` and fix any errors.
- If you touched UI/content, sanity-check with `npm run dev` or `npm run preview`.
- Ensure the `dist/` output is not committed unless the repo already does so (default: don’t commit build artifacts).
