"use server";

import { apiRequest } from "@/shared/api/apiRequest";

interface User {
  name: string;
  email: string;
  password: string;
}

interface CreateUser {
  email: string[];
}

export async function createUser(user: User) {
  return apiRequest<CreateUser>(
    `${process.env.NEXT_PUBLIC_API_URL}/users/register/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );
}
