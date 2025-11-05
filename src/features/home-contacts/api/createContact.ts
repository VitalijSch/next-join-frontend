"use server";

import { apiRequest } from "@/shared/api/apiRequest";
import { Contact } from "../interfaces/contact";

export async function createContact(contact: Contact) {
  return apiRequest<Contact[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/register/`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    }
  );
}