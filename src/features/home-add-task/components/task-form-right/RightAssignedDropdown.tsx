import ContactAvatar from "@/shared/components/avatars/ContactAvatar";
import CheckboxIcon from "@/shared/components/icons/CheckboxIcon";
import { useUserStore } from "@/shared/stores/useUserStore";
import CheckedBoxIcon from "@/shared/components/icons/CheckedBoxIcon";
import { useFilteredContacts } from "../../hooks/useFilteredContacts";

export default function RightAssignedDropdown() {
  const user = useUserStore((state) => state.user);

  const { filteredContacts, handleSelectedContact, isSelected } =
    useFilteredContacts();

  return (
    <div className="absolute top-[40px] w-full max-h-[296px] h-fit flex flex-col gap-[2px] pt-[8px] bg-white rounded-b-[10px] overflow-auto">
      {filteredContacts
        .slice()
        .sort((a, b) => {
          const aIsUser = a.email === user.email;
          const bIsUser = b.email === user.email;
          if (aIsUser && !bIsUser) return -1;
          if (!aIsUser && bIsUser) return 1;
          return 0;
        })
        .map((contact) => (
          <div
            key={contact.id}
            onClick={() => handleSelectedContact(contact)}
            className={`${
              isSelected(contact.id)
                ? "bg-[#2A3647] hover:bg-[#091931]"
                : "hover:bg-[#EEEEEE]"
            } w-full min-h-[56px] flex justify-between items-center px-[16px] rounded-[10px]  cursor-pointer transition-colors duration-300 ease-in-out`}
          >
            <div className="flex items-center gap-[16px]">
              <ContactAvatar color={contact.icon_color} name={contact.name} />
              <span
                style={{ color: isSelected(contact.id) ? "white" : "black" }}
                className="text-[20px]"
              >
                {contact.name} {user.email === contact.email && "(You)"}
              </span>
            </div>
            {!isSelected(contact.id) && <CheckboxIcon />}
            {isSelected(contact.id) && (
              <CheckedBoxIcon className="!text-white" />
            )}
          </div>
        ))}
    </div>
  );
}
