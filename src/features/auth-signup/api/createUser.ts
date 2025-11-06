"use server";

interface User {
  name: string;
  email: string;
  password: string;
}

interface CreateUserError {
  email: string[];
}

interface CreateUserSuccess {
  name: string;
  email: string;
}

export async function createUser(user: User): Promise<CreateUserError | CreateUserSuccess> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/register/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  return res.json();
}
