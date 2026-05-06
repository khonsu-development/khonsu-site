// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://www.khonsu.eu",
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname;
        // Legacy legal URLs redirect to shorter paths and use noindex; omit from sitemap.
        if (
          path === "/privacy-policy/" ||
          path === "/privacy-policy" ||
          path.includes("/privacy-policy-for-") ||
          path.includes("/terms-and-conditions-for-")
        )
          return false;
        return true;
      },
    }),
    mdx(),
  ],
});
