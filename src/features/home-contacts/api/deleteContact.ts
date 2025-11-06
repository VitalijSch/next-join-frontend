"use server";

interface DeleteContactError {
  detail: string;
}

interface DeleteContactSuccess {
  success: boolean;
}

export async function deleteContact(
  contactId: number
): Promise<DeleteContactError | DeleteContactSuccess> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/delete/${contactId}/`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  if (res.status === 204) return { success: true };
  return res.json();
}
