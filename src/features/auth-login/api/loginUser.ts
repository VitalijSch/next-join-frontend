"use server";

interface User {
  email: string;
  password: string;
}

export interface LoginUser {
  token?: string;
  emailError?: string;
  passwordError?: string;
}

export async function loginUser(user: User): Promise<LoginUser> {
  const request = await fetch("http://10.8.6.154:1337/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  return request.json();
}
