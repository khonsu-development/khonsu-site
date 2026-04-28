# Khonsu Development website

Modern marketing site for Khonsu apps, built with Astro + Tailwind and deployed on Cloudflare Pages.

## Local development

```bash
pnpm install
pnpm run dev
```

## Build

```bash
pnpm run build
pnpm run preview
```

The static output is generated in `dist/`.

## Content

- Apps live in `src/content/apps/*.mdx`
- The apps list and app detail pages are generated automatically from those entries.

## Cloudflare Pages

- **Build command**: `pnpm run build`
- **Build output directory**: `dist`
- **Node.js version**: `20` (or newer)

Optional CLI deploy (requires Wrangler login):

```bash
npx wrangler pages deploy dist
```

## Repository

GitHub: `https://github.com/khonsu-development/khonsu-site`
