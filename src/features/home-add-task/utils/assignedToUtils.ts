import { Contact } from "@/features/home-contacts/interfaces/contact";
import { UseFormSetValue } from "react-hook-form";
import { TaskSchema } from "../schemas/taskSchema";

export function handleRemoveContact(
  contacts: Contact[],
  id: number,
  setValue: UseFormSetValue<TaskSchema>
) {
  const newContactList = contacts.filter((contact) => contact.id !== id);
  setValue("assigned_to", newContactList);
}

export function handleSelectedContact(
  contacts: Contact[],
  contact: Contact,
  setValue: UseFormSetValue<TaskSchema>
) {
  const alreadySelected = contacts.some((c) => c.id === contact.id);
  setValue(
    "assigned_to",
    alreadySelected
      ? contacts.filter((c) => c.id !== contact.id)
      : [...contacts, contact]
  );
}

export function isSelected(contacts: Contact[], id: number) {
  return contacts.some((contact) => contact.id === id);
}
