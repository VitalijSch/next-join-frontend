import { useResetSelectedContact } from "../hooks/useResetSelectedContact";
import { useContactStore } from "../stores/useContactStore";
import { getFirstNameLetters } from "../utils/getFirstNameLetters";
import CardItem from "./contact-list-card/CardItem";

export default function ContactListCard() {
  useResetSelectedContact();

  const contacts = useContactStore((state) => state.contacts);

  return (
    <>
      {getFirstNameLetters(contacts).map((letter, index) => (
        <div key={index} className="w-[400px] h-fit px-[24px]">
          <div className="w-full h-[58px] flex items-center pl-[36px] text-[20px]">
            {letter}
          </div>
          <div className="w-[352px] h-[1px] my-[8px] bg-[#D1D1D1] rounded-[3px]" />
          {contacts
            .filter((contact) => contact.name[0].toUpperCase() === letter)
            .map((contact) => (
              <CardItem key={contact.id} contact={contact} />
            ))}
        </div>
      ))}
    </>
  );
}
