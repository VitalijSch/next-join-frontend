"use server";

import { apiRequest } from "@/shared/api/apiRequest";
import { Contact } from "../interfaces/contact";

export async function updateContact(
  contactId: number,
  updatedContact: Contact
) {
  return apiRequest<Contact[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/update/${contactId}/`,
    {
      method: "PATCH",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact),
    }
  );
}
