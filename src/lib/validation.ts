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
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
  full_name: z.string().trim().min(1, "Full name is required").max(100, "Full name must be less than 100 characters")
});

export const authSigninSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  password: z.string().min(1, "Password is required")
});

// Job application validation schema
export const jobApplicationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  message: z.string().trim().max(2000, "Cover letter must be less than 2000 characters").optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type SignupRequestFormData = z.infer<typeof signupRequestSchema>;
export type AuthSignupFormData = z.infer<typeof authSignupSchema>;
export type AuthSigninFormData = z.infer<typeof authSigninSchema>;
export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;
