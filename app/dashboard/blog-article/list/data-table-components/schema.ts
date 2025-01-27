import { z } from "zod";

// Schema for the Blog data model
export const blogSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  description: z.string(),
  date: z.string(),
});

export type Blog = z.infer<typeof blogSchema>;
