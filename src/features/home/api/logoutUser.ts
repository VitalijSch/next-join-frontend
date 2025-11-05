"use server";

import { apiRequest } from "@/shared/api/apiRequest";
import { User } from "@/shared/interfaces/user";

export async function logoutUser() {
  return apiRequest<User>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/logout/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  )
}