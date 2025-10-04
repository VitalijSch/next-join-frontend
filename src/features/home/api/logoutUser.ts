"use server";

import { User } from "@/shared/interfaces/user";

export async function logoutUser(): Promise<User> {
  const response = await fetch("http://10.8.6.154:1338/users/logout/", {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
