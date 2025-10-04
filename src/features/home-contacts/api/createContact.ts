"use server";

interface Contact {
  id?: number;
  name: string;
  email: string;
  icon_color: string;
  phone: string;
}

interface CreateContact {
  contacts: Contact[];
}

export async function createContact(contact: Contact): Promise<CreateContact> {
  const request = await fetch("http://10.8.6.154:1338/contacts/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  });
  return request.json();
}
