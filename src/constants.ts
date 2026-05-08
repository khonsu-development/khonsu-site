export const CONTACT_EMAIL = "hello@khonsu.eu";
export const CONTACT_EMAIL_MAILTO = `mailto:${CONTACT_EMAIL}`;

export const SOCIAL_LINKS = {
  youtube: "https://www.youtube.com/@khonsudevelopment",
  instagram: "https://www.instagram.com/khonsu.development/",
  github: "https://github.com/khonsu-development",
  googlePlay: "https://play.google.com/store/apps/dev?id=5635874583313520174",
} as const;

// Per-app social accounts. Keyed by the app slug used in `src/content/apps/*.mdx`.
export const APP_SOCIAL_LINKS = {
  alphabets: {
    facebook: "https://www.facebook.com/alphabetsapp",
  },
} as const;
