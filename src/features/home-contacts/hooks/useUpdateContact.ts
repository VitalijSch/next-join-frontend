import { Dispatch, SetStateAction } from "react";
import { useLoading } from "@/shared/contexts/LoadingContext";
import { ContactSchema } from "../schemas/contactSchema";
import { useContactStore } from "../stores/useContactStore";
import { Contact } from "../interfaces/contact";
import { updateContact } from "../api/updateContact";

export function useUpdateContact(
  reset: () => void,
  setOpen: Dispatch<SetStateAction<boolean>>
) {
  const { startLoading, stopLoading } = useLoading();

  const contacts = useContactStore((state) => state.contacts);
  const setContacts = useContactStore((state) => state.setContacts);

  const selectedContact = useContactStore((state) => state.selectedContact);
  const setSelectedContact = useContactStore(
    (state) => state.setSelectedContact
  );

  async function handleUpdateContact(userData: ContactSchema) {
    const updatedContact = getUpdatedContact(userData);
    startLoading();
    await updateContact(updatedContact.id, updatedContact);
    setContacts(
      contacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
    setSelectedContact(updatedContact);
    resetFormAndCloseModal();
    stopLoading();
  }

  function getUpdatedContact(userData: ContactSchema): Contact {
    return {
      ...selectedContact!,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
    };
  }

  function resetFormAndCloseModal() {
    reset();
    setOpen(false);
  }

  return handleUpdateContact;
}
