import BackgroundButton from "@/shared/components/buttons/BackgroundButton";
import AddNewContactIcon from "@/shared/components/icons/AddNewContactIcon";
import ScrollbarArrowDownIcon from "@/shared/components/icons/ScrollbarArrowDownIcon";
import ScrollbarArrowUpIcon from "@/shared/components/icons/ScrollbarArrowUpIcon";

export default function ContactList() {
  return (
    <div className="w-[456px] h-[932px] bg-white shadow-[4px_0px_6px_0px_#00000014]">
      <div className="w-full min-h-[22.5px] flex justify-end items-center pr-[6px] bg-white z-10">
        <ScrollbarArrowUpIcon />
      </div>
      <div className="w-[452px] h-[880px] flex flex-col items-center overflow-auto">
        <div className="sticky top-0 w-full min-h-[78.5px] flex justify-center bg-white">
          <BackgroundButton
            classButton="w-[352px] h-[56px] gap-[16px]"
            classSpan="text-[21px]"
            name="Add new contact"
            Icon={AddNewContactIcon}
          />
        </div>
        <div className="w-[400px] flex-1 px-[24px]">
          <div className="w-full h-[58px] flex items-center pl-[36px] text-[20px]">
            A
          </div>
          <div className="w-[352px] h-[1px] my-[8px] bg-[#D1D1D1] rounded-[3px]" />
          {[1, 1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1,1,1,].map((key, index) => (
            <div
              key={index}
              className="w-[352px] h-[78px] flex items-center gap-[35px] px-[24px]"
            >
              <div className="w-[42px] h-[42px] flex justify-center items-center bg-[#FF7A00] border-2 border-white rounded-[45px]">
                <span className="text-[12px] text-white">AM</span>
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[20px] leading-[120%]">Anton Mayer</span>
                <span className="text-[#007CEE] leading-[120%]">
                  antom@gmail.com
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full min-h-[22.5px] flex justify-end items-center pr-[6px] bg-white z-10">
        <ScrollbarArrowDownIcon />
      </div>
    </div>
  );
}
