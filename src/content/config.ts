import { z, defineCollection } from "astro:content";

const tramas = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    location: z.string(),
    coAuthor: z.string().optional(),
    privacyStatus: z.enum(["public", "private"]),
    featuredImage: z.string(),
    featuredVideo: z.string().optional(),
  }),
});

const perfiles = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    location: z.string(),
    coAuthor: z.string().optional(),
    privacyStatus: z.enum(["public", "private"]),
    featuredImage: z.string(),
    featuredVideo: z.string().optional(),
  }),
});

export const collections = {
  tramas: tramas,
  perfiles: perfiles,
};
