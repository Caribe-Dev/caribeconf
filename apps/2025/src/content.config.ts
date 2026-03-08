import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sponsors = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sponsors' }),
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    img: z.string(),
    url: z.string(),
  }),
});

export const collections = { sponsors };
