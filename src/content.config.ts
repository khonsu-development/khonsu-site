import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const absoluteOrSitePathUrl = z
  .string()
  .refine((value) => value.startsWith('/') || /^https?:\/\//i.test(value), {
    message: 'Must be an absolute URL or a root-relative site path.'
  });

const apps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    topics: z.array(z.string()).default([]),
    platforms: z.array(z.enum(['android', 'ios', 'web'])).default([]),
    googlePlayUrl: absoluteOrSitePathUrl.optional(),
    appStoreUrl: absoluteOrSitePathUrl.optional(),
    websiteUrl: absoluteOrSitePathUrl.optional(),
    icon: z.string().optional(),
    screenshots: z.array(z.string()).default([]),
    releaseStatus: z.enum(['released', 'beta', 'coming_soon']).default('released'),
    lastUpdated: z.string().optional(),
    privacyUrl: absoluteOrSitePathUrl.optional(),
    termsUrl: absoluteOrSitePathUrl.optional()
  })
});

export const collections = { apps };

