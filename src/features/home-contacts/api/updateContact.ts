"use server";

import { Contact } from "../interfaces/contact";

export async function updateContact(
  contactId: number,
  updatedContact: Contact
) {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/update/${contactId}/`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
      credentials: "include",
    }
  );
  return request.json();
}
