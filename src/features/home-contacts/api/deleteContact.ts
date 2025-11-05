"use server";

import { apiRequest } from "@/shared/api/apiRequest";

export async function deleteContact(contactId: number) {
  return apiRequest(
    `${process.env.NEXT_PUBLIC_API_URL}/contacts/delete/${contactId}/`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }
  );
}