"use server";

import { Contact } from "../interfaces/contact";

export async function getContacts(): Promise<Contact[] | { detail: string }> {
  const response = await fetch(
    "http://10.8.6.154:1338/contacts/contact-info/",
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );
  return await response.json();
}
