import { Contact } from "../interfaces/contact";

export function getFirstNameLetters(contacts: Contact[]) {
  const letters = [
    ...new Set(contacts.map((contact) => contact.name[0].toUpperCase())),
  ].sort();
  return letters;
}
