import { z } from 'zod';

const createTagsValidationSchema = z.object({
  name: z.string(),
  isDeleted: z.boolean().optional(),
});

const createDetailsValidationSchema = z.object({
  level: z.string(),
  description: z.string(),
});

export const courseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    instructor: z.string(),
    categoryId: z.string(),
    price: z.number(),
    tags: z.array(createTagsValidationSchema),
    startDate: z.string(),
    endDate: z.string(),
    language: z.string(),
    provider: z.string(),
    durationInWeeks: z.number().optional(),
    details: createDetailsValidationSchema,
  }),
});
