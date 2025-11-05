"use server";

import { apiRequest } from "@/shared/api/apiRequest";
import { Contact } from "../interfaces/contact";

export async function getContacts() {
  return apiRequest<Contact[]>(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/contact-info/`,
    {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }
  );
}
