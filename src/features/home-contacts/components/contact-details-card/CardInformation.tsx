export interface CardInformationProps {
  email: string;
  phone: string;
}

export default function CardInformation({
  email,
  phone,
}: CardInformationProps) {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="flex flex-col gap-[10px]">
        <span className="font-[700]">Email</span>
        <span className="text-[#007CEE]">{email}</span>
      </div>
      <div className="flex flex-col gap-[10px]">
        <span className="font-[700]">Phone</span>
        <span>{phone}</span>
      </div>
    </div>
  );
}
