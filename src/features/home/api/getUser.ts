"use server";

interface GetUserError {
  detail: string;
}

interface GetUserSuccess {
  user: User;
}

interface User {
  id: number;
  name: string;
  email: string;
}

export async function getUser(): Promise<GetUserError | GetUserSuccess> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/user-info/`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  return res.json();
}
