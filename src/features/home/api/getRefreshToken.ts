"use server";

import { Token } from "../interfaces/token";

export async function getRefreshToken(): Promise<Token> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/refresh/`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
