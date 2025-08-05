"use server";

interface User {
  email: string;
  password: string;
}

export async function loginUser(user: User) {
  const request = await fetch("http://10.8.6.154:1337/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(user),
  });
  return request.json();
}
