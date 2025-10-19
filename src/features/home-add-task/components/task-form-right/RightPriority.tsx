import { priorities } from "../../data/priorities";
import RightPriorityCard from "./RightPriorityCard";

export default function RightPriority() {
  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">Priority</span>
      <div className="flex justify-between items-center">
        {priorities.map((priority, index) => (
          <RightPriorityCard
            key={index}
            name={priority.name}
            Icon={priority.Icon}
            color={priority.color}
          />
        ))}
      </div>
    </div>
  );
}
