interface BottomCardProps {
  taskNumber: string;
  taskCategory: string;
}

export default function BottomCard({
  taskNumber,
  taskCategory,
}: BottomCardProps) {
  return (
    <div className="group w-[168px] h-[168px] flex flex-col justify-center items-center bg-white rounded-[30px] shadow-[0px_0px_4px_0px_#0000001a] cursor-pointer hover:scale-110 hover:bg-[#2A3647] transition-all duration-300 ease-in-out">
      <span className="text-[64px] font-[600] leading-[120%] group-hover:text-white transition-colors duration-300 ease-in-out">
        {taskNumber}
      </span>
      <span className="text-[20px] text-[#2A3647] text-center leading-[120%] px-6 group-hover:text-white transition-colors duration-300 ease-in-out">
        {taskCategory}
      </span>
    </div>
  );
}
