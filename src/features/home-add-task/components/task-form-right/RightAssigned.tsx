import ArrowDownIcon from "@/shared/components/icons/ArrowDownIcon";
import RightAssignedDropdown from "./RightAssignedDropdown";
import ArrowUpIcon from "@/shared/components/icons/ArrowUpIcon";
import { useGetContacts } from "@/features/home-contacts/hooks/useGetContacts";
import ContactAvatar from "@/shared/components/avatars/ContactAvatar";
import { useFilteredContacts } from "../../hooks/useFilteredContacts";
import { useOpenDropdown } from "../../hooks/useOpenDropdown";

export default function RightAssigned() {
  useGetContacts();

  const { search, setSearch } = useFilteredContacts();

  const { inputRef, open, setOpen, assignedTo, handleDeleteContact } =
    useOpenDropdown(setSearch);

  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">Assigned to</span>
      <div onClick={(e) => e.stopPropagation()} className="relative">
        <input
          ref={inputRef}
          onClick={() => setOpen(true)}
          className="peer w-full h-full py-[12px] px-[21px] bg-white border border-[#D1D1D1] hover:border-[grey] focus:border-[#29ABE2] rounded-[10px] outline-none relative z-10 cursor-pointer text-[20px] placeholder:text-[#D1D1D1] transition-colors duration-300 ease-in-out"
          type="text"
          value={!open ? "Select contacts to assign" : search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div
          onClick={() => setOpen(!open)}
          className="absolute top-1/2 right-[16px] z-20 -translate-y-1/2 w-[24px] h-[24px] flex justify-center items-center rounded-[72px] cursor-pointer hover:bg-[#EEEEEE] transition-colors duration-300 ease-in-out"
        >
          {!open && <ArrowDownIcon />}
          {open && <ArrowUpIcon />}
        </div>
        {open && <RightAssignedDropdown />}
      </div>
      {assignedTo && (
        <div className="max-w-full flex items-center gap-[8px] overflow-auto no-scrollbar">
          {assignedTo.map((contact) => (
            <ContactAvatar
              key={contact.id}
              color={contact.icon_color}
              name={contact.name}
              className="cursor-pointer"
              handleClick={() => handleDeleteContact(contact.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
