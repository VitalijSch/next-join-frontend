"use server";

import { Contact } from "../interfaces/contact";

export async function getContacts(): Promise<Contact[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/contact-info/`,
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
