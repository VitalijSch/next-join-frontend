import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useOpenContacts } from "../stores/useOpenContacts";
import { useFormTask } from "./useFormTask";

export function useOpenDropdown(setSearch: Dispatch<SetStateAction<string>>) {
  const inputRef = useRef<HTMLInputElement>(null);

  const open = useOpenContacts((state) => state.open);
  const setOpen = useOpenContacts((state) => state.setOpen);

  const { watch, setValue } = useFormTask();

  const assignedTo = watch("assigned_to");

  function handleDeleteContact(id: number) {
    const newContactList = assignedTo.filter((contact) => contact.id !== id);
    setValue("assigned_to", newContactList);
  }

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    } else {
      setSearch("");
    }
  }, [open, setSearch]);

  return {
    inputRef,
    open,
    setOpen,
    assignedTo,
    handleDeleteContact,
  };
}
