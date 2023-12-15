import { z } from 'zod';

// Define a numeric enum using a union of literal values
export const RatingEnum = z.union([
  z.literal(1),
  z.literal(2),
  z.literal(3),
  z.literal(4),
  z.literal(5),
]);

export const reviewValidationSchema = z.object({
  body: z.object({
    courseId: z.string(),
    rating: RatingEnum,
    review: z.string().min(1),
  }),
});
