"use server";

import { Contact } from "../interfaces/contact";

export async function getContacts(): Promise<Contact[] | { detail: string }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/contact-info/`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );
  return await response.json();
}
