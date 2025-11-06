"use server";

interface LogoutUserError {
  error: string;
}

interface LogoutUserSuccess {
  message: string;
}

export async function logoutUser(): Promise<
  LogoutUserError | LogoutUserSuccess
> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/logout/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res.json();
}
