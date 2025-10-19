import InputField from "@/shared/components/auth/InputField";
import CalendarIcon from "@/shared/components/icons/CalendarIcon";
import { useFormTask } from "../hooks/useFormTask";

export default function TaskFormLeft() {
  const { register, errors } = useFormTask();

  return (
    <div className="w-[440px] flex flex-col gap-[10px]">
      <div className="flex flex-col gap-[8px]">
        <span className="text-[20px] text-[#2A3647]">
          Title<span className="text-[20px] text-[#FF8190]">*</span>
        </span>
        <InputField
          className="h-[48px] w-full"
          placeholder="Enter a title"
          type="text"
          name="title"
          register={register}
          error={errors.title?.message}
        />
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="text-[20px] text-[#2A3647]">Description</span>
        <textarea
          className={`${
            errors.description?.message
              ? "border-[#FF8190]"
              : "border-[#D1D1D1] hover:border-[grey] focus:border-[#29ABE2]"
          } peer w-full h-[120px] py-[12px] px-[21px] bg-white border rounded-[10px] outline-none cursor-pointer placeholder:text-[20px] placeholder:text-[#D1D1D1] transition-colors duration-300 ease-in-out`}
          placeholder="Enter a Description"
          {...register("description")}
          onChange={(e) => {
            register("description").onChange(e);
          }}
        />
        {errors.description?.message && (
          <p className="h-[14px] text-[12px] text-[#FF8190]">
            {errors.description.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-[8px]">
        <span className="text-[20px] text-[#2A3647]">
          Due Date<span className="text-[20px] text-[#FF8190]">*</span>
        </span>
        <InputField
          className="h-[48px] w-full"
          placeholder="dd/mm/yyyy"
          type="text"
          name="due_date"
          Icon={CalendarIcon}
          register={register}
          error={errors.due_date?.message}
        />
      </div>
    </div>
  );
}
