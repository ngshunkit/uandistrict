import { z } from 'zod';

// Contact form validation schema
export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional().or(z.literal('')),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters")
});

// Signup request validation schema
export const signupRequestSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  full_name: z.string().trim().min(1, "Full name is required").max(100, "Full name must be less than 100 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional().or(z.literal('')),
  message: z.string().trim().max(1000, "Message must be less than 1000 characters").optional().or(z.literal(''))
});

// Auth validation schema
export const authSignupSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  full_name: z.string().trim().min(1, "Full name is required").max(100, "Full name must be less than 100 characters")
});

export const authSigninSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type SignupRequestFormData = z.infer<typeof signupRequestSchema>;
export type AuthSignupFormData = z.infer<typeof authSignupSchema>;
export type AuthSigninFormData = z.infer<typeof authSigninSchema>;
