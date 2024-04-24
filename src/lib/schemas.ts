import { z } from "zod";

export const firstnameSchema = z
  .string()
  .min(1, { message: "First Name is required" });

export const lastnameSchema = z
  .string()
  .min(1, { message: "Last Name is required" });

export const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters" });

export const emailSchema = z.string().email({ message: "Invalid email" });

export const registerSchema = z.object({
  email: emailSchema,
  firstname: firstnameSchema,
  lastname: lastnameSchema,
  password: passwordSchema,
  password_confirmation: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
