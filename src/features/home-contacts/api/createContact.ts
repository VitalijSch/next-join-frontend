"use server";

import { Contact } from "../interfaces/contact";

interface CreateContactSuccess {
  id: number;
  name: string;
  email: string;
  icon_color: string;
  phone: string;
}

export async function createContact(contact: Contact): Promise<CreateContactSuccess> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/register/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    }
  );
  return res.json();
}