import js from "@eslint/js";
import astroParser from "astro-eslint-parser";
import astro from "eslint-plugin-astro";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".astro/**"],
  },
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
      },
    },
    rules: {
      // Type-only globals from lib.dom.d.ts (e.g. HTMLElementTagNameMap) trip core no-undef.
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,astro}"],
    rules: {
      // Astro frequently uses unused vars in frontmatter during content iteration.
      "no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];
