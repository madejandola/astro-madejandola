import { z, defineCollection } from "astro:content";

const videoSchema = defineCollection({
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    location: z.string(),
    coauthor: z.string().optional(),
    privacyStatus: z.enum(["public", "private"]),
    featuredImage: z.string(),
    featuredVideo: z.string().optional(),
  }),
});

export const collections = {
  tramas: videoSchema,
};
