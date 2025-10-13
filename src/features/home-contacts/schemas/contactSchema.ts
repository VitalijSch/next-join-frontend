import { z } from "zod";

export const contactSchema = z.object({
  name: z
  .string()
  .min(1, "Name is required"),
  email: z
  .string()
  .min(1, "Email is required")
  .email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits long")
    .regex(/^\d+$/, "Phone number must contain only numbers"),
});

export type ContactSchema = z.infer<typeof contactSchema>;
