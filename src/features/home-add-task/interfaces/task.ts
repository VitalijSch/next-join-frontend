import { Contact } from "@/features/home-contacts/interfaces/contact";

export interface Task {
  title: string;
  description: string;
  due_date: string;
  priority: "Low" | "Medium" | "Urgent";
  category: "Technical Task" | "User Story" | "Select task category";
  assigned_to: Contact[];
  subtasks: string[];
}
