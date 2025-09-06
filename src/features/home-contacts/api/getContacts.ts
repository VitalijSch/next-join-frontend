"use server";

import { Contact } from "../interfaces/contact";

export async function getContacts(token: string): Promise<Contact[]> {
  const request = await fetch("http://10.8.6.154:1337/contacts", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return request.json();
}
