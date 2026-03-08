import { defineCollection, z } from "astro:content"

const sponsors = defineCollection({
  schema: z.object({
    slug: z.string(),
    title: z.string(),
    img: z.string(),
    url: z.string(),
  }),
})


export const collections = { sponsors }