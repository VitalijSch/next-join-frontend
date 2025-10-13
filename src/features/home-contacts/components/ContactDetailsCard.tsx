"use client";

import { getAbbreviation } from "../utils/getAbbreviation";
import { Dispatch, SetStateAction } from "react";
import { useContactStore } from "../stores/useContactStore";
import CardButtons from "./contact-details-card/CardButtons";
import CardInformation from "./contact-details-card/CardInformation";

interface ContactDetailsCardProps {
  setOpenEditContact: Dispatch<SetStateAction<boolean>>;
}

export default function ContactDetailsCard({
  setOpenEditContact,
}: ContactDetailsCardProps) {
  const selectedContact = useContactStore((state) => state.selectedContact);

  if (!selectedContact) return null;

  return (
    <div className="flex flex-col gap-[21px] animate-slideInRight">
      <div className="flex items-center gap-[54px]">
        <div
          style={{ backgroundColor: selectedContact.icon_color }}
          className="w-[120px] h-[120px] flex justify-center items-center border-3 border-white rounded-[70px] shadow-[0px_0px_4px_0px_#0000001A]"
        >
          <span className="text-[47px] text-white font-[500]">
            {getAbbreviation(selectedContact.name)}
          </span>
        </div>
        <div className="flex flex-col gap-[8px]">
          <span className="text-[47px] font-[500]">{selectedContact.name}</span>
          <CardButtons setOpenEditContact={setOpenEditContact} />
        </div>
      </div>
      <div className="w-[207px] h-[74px] flex items-center text-[20px]">
        Contact Information
      </div>
      <CardInformation
        email={selectedContact.email}
        phone={selectedContact.phone}
      />
    </div>
  );
}
