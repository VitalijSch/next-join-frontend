"use client";

import EditIcon from "@/shared/components/icons/EditIcon";
import { getAbbreviation } from "../utils/getAbbreviation";
import DeleteIcon from "@/shared/components/icons/DeleteIcon";
import { Dispatch, SetStateAction } from "react";
import { useContactStore } from "../stores/useContactStore";
import { useDeleteContact } from "../hooks/useDeleteContact";

interface ContactDetailsCardProps {
  setOpenEditContact: Dispatch<SetStateAction<boolean>>;
}

export default function ContactDetailsCard({
  setOpenEditContact,
}: ContactDetailsCardProps) {
  const selectedContact = useContactStore((state) => state.selectedContact);

  const handleDeleteContact = useDeleteContact();

  if (!selectedContact) return null;

  return (
    <div className="flex flex-col gap-[21px] animate-slideInRight">
      <div className="flex items-center gap-[54px]">
        <div
          style={{ backgroundColor: selectedContact.icon_color }}
          className="w-[120px] h-[120px] flex justify-center items-center border-3 border-white rounded-[70px] shadow-[0px_0px_4px_0px_#0000001A]
"
        >
          <span className="text-[47px] text-white font-[500]">
            {getAbbreviation(selectedContact.name)}
          </span>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span className="text-[47px] font-[500]">{selectedContact.name}</span>
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
        </div>
      </div>
      <div className="w-[207px] h-[74px] flex items-center text-[20px]">
        Contact Information
      </div>
      <div className="flex flex-col gap-[22px]">
        <div className="flex flex-col gap-[10px]">
          <span className="font-[700]">Email</span>
          <span className="text-[#007CEE]">{selectedContact.email}</span>
        </div>
        <div className="flex flex-col gap-[10px]">
          <span className="font-[700]">Phone</span>
          <span>{selectedContact.phone}</span>
        </div>
      </div>
    </div>
  );
}
