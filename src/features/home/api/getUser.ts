"use server";

import { User } from "@/shared/interfaces/user";

export async function getUser(token: string): Promise<User> {
  const request = await fetch("http://10.8.6.154:1337/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.json();
}
