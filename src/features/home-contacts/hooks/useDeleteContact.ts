import { useLoading } from "@/shared/contexts/LoadingContext";
import { deleteContact } from "../api/deleteContact";
import { useContactStore } from "../stores/useContactStore";

export function useDeleteContact() {
  const { startLoading, stopLoading } = useLoading();

  const contacts = useContactStore((state) => state.contacts);
  const setContacts = useContactStore((state) => state.setContacts);

  const selectedContact = useContactStore((state) => state.selectedContact);
  const setSelectedContact = useContactStore(
    (state) => state.setSelectedContact
  );

  async function handleDeleteContact() {
    if (!selectedContact) return;
    try {
      startLoading();
      await deleteContact(selectedContact.id);
      setContacts(
        contacts.filter((contact) => contact.id !== selectedContact.id)
      );
      setSelectedContact(null);
    } finally {
      stopLoading();
    }
  }

  return handleDeleteContact;
}
