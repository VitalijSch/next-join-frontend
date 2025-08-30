interface TopCardProps {
  Icon: React.ElementType;
  taskNumber: string;
  taskCategory: string;
}

export default function TopCard({
  Icon,
  taskNumber,
  taskCategory,
}: TopCardProps) {
  return (
    <div className="group w-[264px] h-[168px] flex justify-center items-center gap-[18px] bg-white rounded-[30px] shadow-[0px_0px_4px_0px_#0000001a] cursor-pointer hover:scale-110 hover:bg-[#2A3647] transition-all duration-300 ease-in-out">
      <Icon />
      <div className="flex flex-col items-center">
        <span className="text-[64px] font-[600] leading-[120%] group-hover:text-white transition-colors duration-300 ease-in-out">{taskNumber}</span>
        <span className="text-[20px] text-[#2A3647] leading-[120%] group-hover:text-white transition-colors duration-300 ease-in-out">{taskCategory}</span>
      </div>
    </div>
  );
}
