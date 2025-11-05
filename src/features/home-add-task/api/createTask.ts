"use server";

interface Payload {
  title: string;
  description: string;
  due_date: string;
  priority: "Low" | "Medium" | "Urgent";
  category: "Technical Task" | "User Story" | "Select task category";
  assigned_to: number[];
  subtasks: string[];
}

export async function createTask(task: Payload) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tasks/register/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
      credentials: "include",
    }
  );
  return res.json();
}
