import { Dispatch, SetStateAction } from "react";
import { useDeleteContact } from "../../hooks/useDeleteContact";
import EditIcon from "@/shared/components/icons/EditIcon";
import DeleteIcon from "@/shared/components/icons/DeleteIcon";

interface CardButtonsProps {
  setOpenEditContact: Dispatch<SetStateAction<boolean>>;
}

export default function CardButtons({ setOpenEditContact }: CardButtonsProps) {
  const handleDeleteContact = useDeleteContact();

  return (
    <div className="flex items-center gap-[26px]">
      <div
        onClick={() => setOpenEditContact(true)}
        className="group w-[65px] flex items-center gap-[10px] cursor-pointer"
      >
        <EditIcon className="group-hover:text-[#29ABE2]" />
        <span className="text-[#2A3647] group-hover:text-[#29ABE2] group-hover:font-[700] transition-all duration-300 ease-in-out">
          Edit
        </span>
      </div>
      <div
        onClick={() => handleDeleteContact()}
        className="group flex items-center gap-[10px] cursor-pointer"
      >
        <DeleteIcon className="group-hover:text-[#29ABE2]" />
        <span className="text-[#2A3647] group-hover:text-[#29ABE2] group-hover:font-[700] transition-all duration-300 ease-in-out">
          Delete
        </span>
      </div>
    </div>
  );
}
