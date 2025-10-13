"use server";

import { User } from "@/shared/interfaces/user";

export async function getUser(): Promise<User> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/user-info/`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
