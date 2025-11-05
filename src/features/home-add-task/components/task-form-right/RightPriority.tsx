import { useFormContext } from "react-hook-form";
import { priorities } from "../../data/priorities";
import RightPriorityCard from "./RightPriorityCard";

export default function RightPriority() {
  const { watch, setValue } = useFormContext();
  const priority = watch("priority");

  return (
    <div className="flex flex-col gap-[8px]">
      <span className="text-[20px] text-[#2A3647]">Priority</span>
      <div className="flex justify-between items-center">
        {priorities.map((item, index) => (
          <RightPriorityCard
            key={index}
            name={item.name}
            Icon={item.Icon}
            color={item.color}
            onClick={() => setValue("priority", item.name)}
            isSelectedPriority={priority === item.name}
          />
        ))}
      </div>
    </div>
  );
}
