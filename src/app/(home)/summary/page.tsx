"use client";

import BottomCard from "@/features/home-summary/components/BottomCard";
import HeaderSummary from "@/features/home-summary/components/HeaderSummary";
import MiddleCard from "@/features/home-summary/components/MiddleCard";
import TopCard from "@/features/home-summary/components/TopCard";
import { getGreeting } from "@/features/home-summary/utils/getGreeting";
import DoneIcon from "@/shared/components/icons/DoneIcon";
import TodoIcon from "@/shared/components/icons/TodoIcon";
import { useUserStore } from "@/shared/stores/useUserStore";

export default function SummaryPage() {
  const user = useUserStore((state) => state.user);

  return (
    <section className="row-start-2 row-end-3 col-start-2 col-end-3 flex pt-[110px] pr-[87px] pb-[127px] pl-[96px]">
      <div className="w-fit flex flex-col justify-between">
        <HeaderSummary />
        <div className="flex flex-col gap-[28px]">
          <div className="flex gap-[32px]">
            <TopCard Icon={TodoIcon} taskNumber="1" taskCategory="To-do" />
            <TopCard Icon={DoneIcon} taskNumber="1" taskCategory="Done" />
          </div>
          <MiddleCard />
          <div className="flex gap-[28px]">
            <BottomCard taskNumber="5" taskCategory="Tasks in Board" />
            <BottomCard taskNumber="2" taskCategory="Tasks in Progress" />
            <BottomCard taskNumber="2" taskCategory="Awaiting Feedback" />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center mt-[131px]">
          <span className="text-[47px] text-[#2A3647] font-[500] leading-[120%]">{getGreeting()},</span>
          <span className="text-[64px] text-[#29ABE2] font-[700] leading-[120%] whitespace-nowrap">{user.name}</span>
      </div>
    </section>
  );
}
