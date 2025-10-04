"use server";

import { User } from "@/shared/interfaces/user";

interface AuthUser {
  email: string;
  password: string;
}

export interface LoginUser {
  user?: User;
  non_field_errors?: string[];
}

export async function loginUser(user: AuthUser): Promise<LoginUser> {
  const request = await fetch("http://10.8.6.154:1338/users/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });
  return request.json();
}
