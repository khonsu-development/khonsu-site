export const ORG_NAME = "Khonsu Development";

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

export const GOOGLE_PLAY_BADGE_SRC = "/google-play-badges/GetItOnGooglePlay_Badge_Web_color_English.svg";

export const THIRD_PARTY_POLICY_URLS = {
  googleAdMob: "https://policies.google.com/technologies/ads",
  googlePrivacy: "https://policies.google.com/privacy",
  googlePlayTerms: "https://play.google.com/intl/en_us/about/play-terms/",
  firebasePrivacy: "https://firebase.google.com/support/privacy",
  firebaseTerms: "https://firebase.google.com/terms",
} as const;

export const PARTNER_LINKS = {
  doubleRhyme: "https://double-rhyme.com/",
  lyricspiration: "https://play.google.com/store/apps/developer?id=Lyricspiration",
} as const;

// Last review date applied across all legal pages. Bump when the legal copy is updated.
export const LEGAL_LAST_UPDATED = "May 6, 2026";

// Freestyle Rap legal pages were last reviewed separately.
export const LEGAL_FREESTYLE_LAST_UPDATED = "June 28, 2026";

export const FREESTYLE_ACCOUNT_DELETION_MAILTO =
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Freestyle Rap account deletion request")}&body=${encodeURIComponent("Google account email:\n\nPlease delete my Freestyle Rap account and associated cloud data.")}`;

// Original effective date for the per-app terms.
export const LEGAL_APP_TERMS_EFFECTIVE_DATE = "2024-11-17";
