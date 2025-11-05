"use server";

import { apiRequest } from "@/shared/api/apiRequest";
import { Token } from "../interfaces/token";

export async function getRefreshToken() {
  return apiRequest<Token>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/refresh/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );
}
