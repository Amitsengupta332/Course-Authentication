import { z } from 'zod';

export const authValidationSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    role: z.enum(['user', 'admin']),
  }),
});

export const loginValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Id is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});
