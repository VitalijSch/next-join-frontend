"use server";

interface GetRefreshTokenError {
  error: string;
}

interface GetRefreshTokenSuccess {
  message: string;
}

export async function getRefreshToken(): Promise<
  GetRefreshTokenError | GetRefreshTokenSuccess
> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/refresh/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  return res.json();
}
