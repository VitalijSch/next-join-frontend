"use server";

interface Token {
  message?: string;
  error?: string; 
}

export async function getRefreshToken(): Promise<Token> {
  const response = await fetch("http://10.8.6.154:1338/users/refresh/", {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
}
