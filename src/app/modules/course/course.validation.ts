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

//update

const updateTagsValidationSchema = z.object({
  name: z.string().optional(),
  isDeleted: z.boolean().optional(),
});

const updateDetailsValidationSchema = z.object({
  level: z.string().optional(),
  description: z.string().optional(),
});

export const updateValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    instructor: z.string().optional(),
    categoryId: z.string().optional(),
    price: z.number().optional(),
    tags: z.array(updateTagsValidationSchema).optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    language: z.string().optional(),
    provider: z.string().optional(),
    durationInWeeks: z.number().optional(),
    details: updateDetailsValidationSchema.optional(),
  }),
});
