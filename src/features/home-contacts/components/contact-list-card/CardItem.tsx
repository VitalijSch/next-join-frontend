import useScrollToCreatedContact from "../../hooks/useScrollToCreatedContact";
import { Contact } from "../../interfaces/contact";
import { useContactStore } from "../../stores/useContactStore";
import { getAbbreviation } from "../../utils/getAbbreviation";

interface CardItemProps {
  contact: Contact;
}

export default function CardItem({ contact }: CardItemProps) {
  const { contactRefs } = useScrollToCreatedContact();

  const selectedContact = useContactStore((state) => state.selectedContact);
  const setSelectedContact = useContactStore(
    (state) => state.setSelectedContact
  );

  return (
    <div
      ref={(el) => {
        if (contact.id) {
          contactRefs.current[contact.id.toString()] = el;
        }
      }}
      onClick={() =>
        setSelectedContact(selectedContact !== contact ? contact : null)
      }
      className={`${
        contact.id === selectedContact?.id
          ? "bg-[#2A3647]"
          : "hover:bg-[linear-gradient(180deg,#F9F9F9_0%,#F0F0F0_100%)]"
      } w-[352px] h-[78px] flex items-center gap-[35px] px-[24px] rounded-[10px] cursor-pointer`}
    >
      <div
        style={{ backgroundColor: contact.icon_color }}
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
        <span className="text-[#007CEE] leading-[120%]">{contact.email}</span>
      </div>
    </div>
  );
}
