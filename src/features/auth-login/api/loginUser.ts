"use server";

interface AuthUser {
  email: string;
  password: string;
}

interface LoginUserError {
  non_field_errors: string[];
}

interface LoginUserSuccess {
  user: User;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export async function loginUser(
  user: AuthUser
): Promise<LoginUserError | LoginUserSuccess> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
    credentials: "include",
  });
  return res.json();
}
