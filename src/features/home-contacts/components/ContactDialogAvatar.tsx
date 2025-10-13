import NameIcon from "@/shared/components/icons/NameIcon";
import { useContactStore } from "../stores/useContactStore";
import { getAbbreviation } from "../utils/getAbbreviation";

interface ContactDialogAvatarProps {
  subtitle?: string;
}

export default function ContactDialogAvatar({
  subtitle,
}: ContactDialogAvatarProps) {
  const selectedContact = useContactStore((state) => state.selectedContact);

  return (
    <div
      style={{
        backgroundColor:
          !subtitle && selectedContact ? selectedContact.icon_color : "#D1D1D1",
      }}
      className="absolute top-[204px] left-[550px] w-[120px] h-[120px] flex justify-center items-center border-3 border-white rounded-full shadow-[0px_0px_4px_0px_#0000001A]"
    >
      {!subtitle && selectedContact ? (
        <span className="text-[47px] text-white font-[500]">
          {getAbbreviation(selectedContact.name)}
        </span>
      ) : (
        <NameIcon className="w-[64px] h-[64px] text-white" />
      )}
    </div>
  );
}
