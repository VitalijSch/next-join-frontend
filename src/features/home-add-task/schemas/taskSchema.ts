import { z } from "zod";

export const ContactSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  icon_color: z.string(),
  phone: z.string(),
});

export const taskSchema = z.object({
  title: z.string().min(1, "This field is required"),
  description: z.string(),
  due_date: z
    .string()
    .regex(
      /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
      "Date must be in dd/mm/yyyy format"
    ),
  priority: z.enum(["Urgent", "Medium", "Low"]),
  assigned_to: z.array(ContactSchema),
  category: z.enum(["Technical Task", "User Story", "Select task category"], {
    message: "This field is required",
  }),
  subtasks: z.array(z.string()),
});

export type TaskSchema = z.infer<typeof taskSchema>;
