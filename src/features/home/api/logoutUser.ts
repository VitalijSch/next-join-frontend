"use server";

import { User } from "@/shared/interfaces/user";

export async function logoutUser(): Promise<User> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/logout/`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
