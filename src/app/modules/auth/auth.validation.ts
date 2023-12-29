import { z } from 'zod';

export const authValidationSchema = z.object({
  body: z.object({
    username: z.string(),
    email: z.string(),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
      })
      .min(6, {
        message: 'Password should be at least 6 characters long, e.g., 123Az#',
      })
      .max(20, {
        message: 'Password should not exceed 20 characters, e.g., 123Az#',
      })
      .regex(/[A-Z]/, {
        message:
          'Password must include at least one uppercase letter, e.g., 123Az#',
      })
      .regex(/[0-9]/, {
        message: 'Password must include at least one number, e.g., 123Az#',
      })
      .regex(/[^a-zA-Z0-9]/, {
        message:
          'Password must include at least one special character, e.g., 123Az#',
      }),
    role: z.enum(['user', 'admin']),
  }),
});

export const loginValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Id is required.' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const changePasswordValidationSchema = z.object({
  body: z.object({
    currentPassword: z.string({
      required_error: 'Current password is required',
    }),
    newPassword: z
      .string({
        invalid_type_error: 'Password must be a string',
      })
      .min(6, {
        message: 'Password should be at least 6 characters long, e.g., 123Az#',
      })
      .max(20, {
        message: 'Password should not exceed 20 characters, e.g., 123Az#',
      })
      .regex(/[A-Z]/, {
        message:
          'Password must include at least one uppercase letter, e.g., 123Az#',
      })
      .regex(/[0-9]/, {
        message: 'Password must include at least one number, e.g., 123Az#',
      })
      .regex(/[^a-zA-Z0-9]/, {
        message:
          'Password must include at least one special character, e.g., 123Az#',
      }),
  }),
});
