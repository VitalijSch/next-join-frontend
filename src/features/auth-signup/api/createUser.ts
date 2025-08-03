"use server";

import { User } from "../interfaces/user";

export async function createUser(user: User) {
  const request = await fetch("http://10.8.6.154:1337/create/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });
  return request.json();
}
