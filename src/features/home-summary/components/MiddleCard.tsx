import UrgentIcon from "@/shared/components/icons/UrgentIcon";

export default function MiddleCard() {
  return (
    <div className="group w-[560px] h-[168px] flex justify-center items-center gap-[61px] bg-white rounded-[30px] shadow-[0px_0px_4px_0px_#0000001a] cursor-pointer hover:scale-110 hover:bg-[#2A3647] transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-[18px]">
        <UrgentIcon />
        <div className="flex flex-col items-center">
          <span className="text-[64px] font-[600] leading-[120%] group-hover:text-white transition-colors duration-300 ease-in-out">
            1
          </span>
          <span className="text-[#2A3647] leading-[120%] group-hover:text-white transition-colors duration-300 ease-in-out">
            Urgent
          </span>
        </div>
      </div>
      <div className="w-[2px] h-[102px] bg-[#D1D1D1] rounded-full" />
      <div className="flex flex-col gap-[13px]">
        <span className="text-[21px] text-[#2A3647] font-[700] group-hover:text-white transition-colors duration-300 ease-in-out">
          October 16, 2022
        </span>
        <span className="text-[#2A3647] group-hover:text-white transition-colors duration-300 ease-in-out">
          Upcoming Deadline
        </span>
      </div>
    </div>
  );
}
