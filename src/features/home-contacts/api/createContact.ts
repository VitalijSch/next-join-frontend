"use server";

import { Contact } from "../interfaces/contact";

export async function createContact(contact: Contact): Promise<Contact> {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/register/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }
  );
  return request.json();
}
