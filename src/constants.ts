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

// Google Play package IDs, keyed by the MDX file slug under `src/content/apps/`.
// This is the single source of truth for the per-app store listing URL.
export const APP_GOOGLE_PLAY_PACKAGE_IDS = {
  "world-of-alphabets": "eu.khonsu.alphabets",
  "world-of-communism": "eu.khonsu.communism",
  "world-of-dinosaurs": "eu.khonsu.dinosaurs",
  "freestyle-rap": "com.lyricspiration.freestyle",
} as const satisfies Record<string, string>;

export type AppGooglePlaySlug = keyof typeof APP_GOOGLE_PLAY_PACKAGE_IDS;

export function googlePlayListingUrl(packageId: string): string {
  return `https://play.google.com/store/apps/details?id=${packageId}`;
}

export function googlePlayListingUrlForApp(slug: AppGooglePlaySlug): string {
  return googlePlayListingUrl(APP_GOOGLE_PLAY_PACKAGE_IDS[slug]);
}
