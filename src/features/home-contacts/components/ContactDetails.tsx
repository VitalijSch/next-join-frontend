"use client";

import { useState } from "react";
import { useContactStore } from "../stores/useContactStore";
import ContactDetailsCard from "./ContactDetailsCard";
import ToastMessage from "@/shared/components/toasts/ToastMessage";
import ContactDialog from "./ContactDialog";

export default function ContactDetails() {
  const [openEditContact, setOpenEditContact] = useState(false);

  const selectedContact = useContactStore((state) => state.selectedContact);

  const showToastMessage = useContactStore((state) => state.showToastMessage);

  return (
    <>
      <div className="flex-1 flex flex-col gap-[32px] pt-[110px] pl-[55px]">
        <div className="flex items-center gap-[30px]">
          <span className="text-[61px] font-[700]">Contacts</span>
          <div className="w-[3px] h-[56px] bg-[#29ABE2] rounded-[3px]" />
          <span className="text-[27px] text-[#2A3647]">Better with a team</span>
        </div>
        {selectedContact && (
          <ContactDetailsCard setOpenEditContact={setOpenEditContact} />
        )}
        {showToastMessage && (
          <ToastMessage message="Contact succesfully created" />
        )}
      </div>
      {openEditContact && (
        <ContactDialog
          classHeadlineParent="h-[89px]"
          classLogo="-top-[90px]"
          setOpen={setOpenEditContact}
          headline="Edit contact"
        />
      )}
    </>
  );
}
