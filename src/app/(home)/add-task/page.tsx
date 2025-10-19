import TaskForm from "@/features/home-add-task/components/TaskForm";

export default function AddTaskPage() {
  return (
    <section
      className="relative flex-1 flex flex-col gap-[48px] pt-[110px] px-[96px] pb-[71px]"
    >
      <h1 className="text-[61px] font-[700]">Add Task</h1>
      <TaskForm />
      <span className="mt-auto">
        <span className="text-[20px] text-[#FF8190]">*</span>This field is
        required
      </span>
    </section>
  );
}
