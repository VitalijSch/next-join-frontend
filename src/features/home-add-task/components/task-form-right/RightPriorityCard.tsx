import { useFormTask } from "../../hooks/useFormTask";

interface RightPriorityCardProps {
  name: "Urgent" | "Medium" | "Low";
  Icon: React.ElementType;
  color: string;
}

export default function RightPriorityCard({
  name,
  Icon,
  color,
}: RightPriorityCardProps) {
  const { watch, setValue } = useFormTask();

  const priority = watch("priority");

  return (
    <div
      onClick={() => setValue("priority", name)}
      style={{ backgroundColor: priority === name ? color : "white" }}
      className="group w-[136px] h-[56px] flex justify-center items-center gap-[8px] rounded-[10px] shadow-[0px_0px_4px_0px_#0000001A] cursor-pointer hover:shadow-[0px_4px_4px_0px_#00000040] transition-shadow duration-300 ease-in-out"
    >
      <span
        style={{
          color: priority === name ? "white" : "",
          fontWeight: priority === name ? "700" : "",
        }}
        className="text-[20px]"
      >
        {name}
      </span>
      <Icon className={`${priority === name && "text-white"}`} />
    </div>
  );
}
