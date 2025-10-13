"use server";

export async function deleteContact(contactId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/delete/${contactId}/`,
    {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Delete failed: ${response.status} - ${text}`);
  }
}
