import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const apps = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    topics: z.array(z.string()).default([]),
    platforms: z.array(z.enum(['android', 'ios', 'web'])).default([]),
    googlePlayUrl: z.string().url().optional(),
    appStoreUrl: z.string().url().optional(),
    websiteUrl: z.string().url().optional(),
    icon: z.string().optional(),
    screenshots: z.array(z.string()).default([]),
    releaseStatus: z.enum(['released', 'beta', 'coming_soon']).default('released'),
    lastUpdated: z.string().optional(),
    privacyUrl: z.string().url().optional(),
    termsUrl: z.string().url().optional()
  })
});

export const collections = { apps };

