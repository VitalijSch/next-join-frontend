"use server";

import { Contact } from "../interfaces/contact";

export async function updateContact(
  contactId: number,
  updatedContact: Contact
): Promise<Contact[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/update/${contactId}/`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContact),
    }
  );
  return res.json();
}
