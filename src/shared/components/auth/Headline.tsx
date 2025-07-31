interface HeadlineProps {
  name: string;
}

export default function Headline({ name }: HeadlineProps) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[61px] font-[700]">{name}</h1>
      <div className="w-[150px] h-[3px] bg-[#29ABE2] rounded-full" />
    </div>
  );
}
