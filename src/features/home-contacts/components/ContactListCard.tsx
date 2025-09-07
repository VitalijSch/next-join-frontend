import { useContactStore } from "../stores/useContactStore";
import { getAbbreviation } from "../utils/getAbbreviation";
import { getFirstNameLetters } from "../utils/getFirstNameLetters";

export default function ContactListCard() {
  const contacts = useContactStore((state) => state.contacts);

  const selectedContact = useContactStore((state) => state.selectedContact);
  const setSelectedContact = useContactStore(
    (state) => state.setSelectedContact
  );

  return (
    <>
      {getFirstNameLetters(contacts).map((letter, index) => (
        <div key={index} className="w-[400px] flex-1 px-[24px]">
          <div className="w-full h-[58px] flex items-center pl-[36px] text-[20px]">
            {letter}
          </div>
          <div className="w-[352px] h-[1px] my-[8px] bg-[#D1D1D1] rounded-[3px]" />
          {contacts
            .filter((contact) => contact.name[0].toUpperCase() === letter)
            .map((contact, index) => (
              <div
                key={index}
                onClick={() => setSelectedContact(selectedContact !== contact ? contact : null)}
                className={`${
                  contact.id === selectedContact?.id
                    ? "bg-[#2A3647]"
                    : "hover:bg-[linear-gradient(180deg,#F9F9F9_0%,#F0F0F0_100%)]"
                } w-[352px] h-[78px] flex items-center gap-[35px] px-[24px] rounded-[10px] cursor-pointer`}
              >
                <div
                  style={{ backgroundColor: contact.iconColor }}
                  className="w-[42px] h-[42px] flex justify-center items-center border-2 border-white rounded-[45px]"
                >
                  <span className="text-[12px] text-white">
                    {getAbbreviation(contact.name)}
                  </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                  <span
                    className={`${
                      contact.id === selectedContact?.id ? "text-white" : ""
                    } text-[20px] leading-[120%]`}
                  >
                    {contact.name}
                  </span>
                  <span className="text-[#007CEE] leading-[120%]">
                    {contact.email}
                  </span>
                </div>
              </div>
            ))}
        </div>
      ))}
    </>
  );
}
