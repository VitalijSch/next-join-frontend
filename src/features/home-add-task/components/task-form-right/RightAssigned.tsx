import RightAssignedDropdown from "./RightAssignedDropdown";
import { useGetContacts } from "@/features/home-contacts/hooks/useGetContacts";
import ContactAvatar from "@/shared/components/avatars/ContactAvatar";
import { useFilteredContacts } from "../../hooks/useFilteredContacts";
import { useState } from "react";
import { Contact } from "@/features/home-contacts/interfaces/contact";
import { useFormTask } from "../../hooks/useFormTask";
import { handleRemoveContact } from "../../utils/assignedToUtils";
import { DropdownInput } from "@/shared/components/dropdowns/DropdownInput";

export default function RightAssigned() {
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [search, setSearch] = useState("Select contacts to assign");

  const { watch, setValue } = useFormTask();
  const assignedTo = watch("assigned_to");

  useGetContacts();
  useFilteredContacts(search, setFilteredContacts);

  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">Assigned to</span>
      <DropdownInput
        value={search}
        setValue={(e) => setSearch(e)}
        dropdown={
          <RightAssignedDropdown
            filteredContacts={filteredContacts}
            contacts={assignedTo}
            setValue={setValue}
          />
        }
      />
      {assignedTo && (
        <div className="max-w-full flex items-center gap-[8px] overflow-auto no-scrollbar">
          {assignedTo.map((contact) => (
            <ContactAvatar
              key={contact.id}
              color={contact.icon_color}
              name={contact.name}
              className="cursor-pointer"
              handleClick={() =>
                handleRemoveContact(assignedTo, contact.id, setValue)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
