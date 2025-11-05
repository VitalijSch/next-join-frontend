import { getAbbreviation } from "@/features/home-contacts/utils/getAbbreviation";

interface ContactAvatarProps {
  color: string;
  name: string;
  className?: string;
  handleClick?: () => void;
}

export default function ContactAvatar({
  color,
  name,
  className,
  handleClick,
}: ContactAvatarProps) {
  return (
    <div
      onClick={handleClick}
      style={{ backgroundColor: color }}
      className={`${className} min-w-[42px] min-h-[42px] flex justify-center items-center border-2 border-white rounded-[45px]`}
    >
      <span className="text-[12px] text-white">{getAbbreviation(name)}</span>
    </div>
  );
}
