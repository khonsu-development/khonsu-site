# Agent guidelines (Khonsu site)

This repo is a modern marketing site built with **Astro + Tailwind** and deployed on **Cloudflare Pages**.

## Quick start

- **Install**: `pnpm install`
- **Dev**: `pnpm run dev`
- **Build**: `pnpm run build`
- **Preview**: `pnpm run preview`

Cloudflare Pages settings:

- **Build command**: `pnpm run build`
- **Output directory**: `dist`
- **Node.js**: `20` (or newer)

## Content model

- **Apps content**: `src/content/apps/*.mdx`
- App list + detail pages are generated from those entries.

## IntelliJ IDEA and Prettier

The repo expects **consistent whitespace** from [`.editorconfig`](.editorconfig) and **`pnpm format`** from [`prettier.config.cjs`](prettier.config.cjs) (including Astro parsing and Tailwind class sorting).

1. **EditorConfig**: In IntelliJ, ensure EditorConfig files are honored (typically **Settings** → **Editor** → **Code Style** → enable **Enable EditorConfig support**).
2. **Match right margin**: Set **Hard wrap at** (or **Visual guides**) / **HTML / TypeScript/JavaScript Right margin** to **120 columns** where applicable, because Prettier [`printWidth`](https://prettier.io/docs/options#printwidth) is **120**.
3. **Prettier plugin**: Install JetBrains Prettier (**Settings** → **Plugins**) if needed.
4. **Use project Prettier**: **Settings** → **Languages & Frameworks** → **JavaScript** → **Prettier** (or Prettier panel): **Prettier package** = `khonsu-site/node_modules/prettier`; enable **On 'Reformat Code' action**, **Run for files**, etc., for `js`, `ts`, `tsx`, `mjs`, `cjs`, `astro`, `md`, `json`, etc.
5. **Commit-time formatting**: If you use **Reformat code** on commit, either **disable** it for file types Prettier handles and run **Format with Prettier** instead, or run **Reformat** then **Prettier** so Prettier (and Tailwind sort) win. Otherwise `pnpm format` will rewrite files again.

## How to work in this repo

- Prefer **small, focused changes** with a clear purpose.
- **Do not use em dashes** (`—`) in user-facing copy. Prefer commas, colons, parentheses, or separate sentences.
- Match existing formatting and file organization (Astro components, Tailwind utility conventions).
- Avoid introducing new dependencies unless necessary; if you do, explain why and keep them minimal.
- Don’t commit secrets (tokens, Cloudflare credentials, `.env` files, etc.).

## Before you say “done”

- Run `pnpm run lint` and fix any errors.
- Run `pnpm run build` and fix any errors.
- If you touched UI/content, sanity-check with `pnpm run dev` or `pnpm run preview`.
- Ensure the `dist/` output is not committed unless the repo already does so (default: don’t commit build artifacts).
