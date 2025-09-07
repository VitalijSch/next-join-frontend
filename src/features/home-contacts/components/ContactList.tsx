"use client";

import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import AddNewContactIcon from "@/shared/components/icons/AddNewContactIcon";
import ScrollbarArrowDownIcon from "@/shared/components/icons/ScrollbarArrowDownIcon";
import ScrollbarArrowUpIcon from "@/shared/components/icons/ScrollbarArrowUpIcon";
import { useGetContacts } from "../hooks/useGetContacts";
import ContactListCard from "./ContactListCard";
import ContactForm from "./ContactForm";
import { useState } from "react";

export default function ContactList() {
  const [openAddNewContact, setOpenAddNewContact] = useState(false);

  useGetContacts();

  return (
    <>
      <div className="w-[456px] h-[932px] bg-white shadow-[4px_0px_6px_0px_#00000014]">
        <div className="w-full min-h-[22.5px] flex justify-end items-center pr-[6px] bg-white z-10">
          <ScrollbarArrowUpIcon />
        </div>
        <div className="w-[452px] h-[880px] flex flex-col items-center overflow-auto">
          <div className="sticky top-0 w-full min-h-[78.5px] flex justify-center bg-white">
            <BackgroundButton
              handleOnClick={() => setOpenAddNewContact(true)}
              classButton="w-[352px] h-[56px] gap-[16px]"
              classSpan="text-[21px]"
              name="Add new contact"
              Icon={AddNewContactIcon}
            />
          </div>
          <ContactListCard />
        </div>
        <div className="w-full min-h-[22.5px] flex justify-end items-center pr-[6px] bg-white z-10">
          <ScrollbarArrowDownIcon />
        </div>
      </div>
      {openAddNewContact && (
        <ContactForm
          classHeadlineParent="h-[129px]"
          classLogo="-top-[70px]"
          setOpen={setOpenAddNewContact}
          headline="Add contact"
          subtitle="Tasks are better with a team!"
        />
      )}
    </>
  );
}
