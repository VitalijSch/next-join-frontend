"use server";

import { apiRequest } from "@/shared/api/apiRequest";
import { User } from "@/shared/interfaces/user";

export async function getUser() {
  return apiRequest<User>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/user-info/`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  )
}