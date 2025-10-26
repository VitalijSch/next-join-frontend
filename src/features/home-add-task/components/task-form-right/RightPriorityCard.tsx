interface RightPriorityCardProps {
  name: "Urgent" | "Medium" | "Low";
  Icon: React.ElementType;
  color: string;
  onClick: () => void;
  isSelectedPriority: boolean
}

export default function RightPriorityCard({
  name,
  Icon,
  color,
  onClick,
  isSelectedPriority,
}: RightPriorityCardProps) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: isSelectedPriority ? color : "white" }}
      className="group w-[136px] h-[56px] flex justify-center items-center gap-[8px] rounded-[10px] shadow-[0px_0px_4px_0px_#0000001A] cursor-pointer hover:shadow-[0px_4px_4px_0px_#00000040] transition-shadow duration-300 ease-in-out"
    >
      <span
        style={{
          color: isSelectedPriority ? "white" : "",
          fontWeight: isSelectedPriority ? "700" : "",
        }}
        className="text-[20px]"
      >
        {name}
      </span>
      <Icon className={`${isSelectedPriority && "text-white"}`} />
    </div>
  );
}
