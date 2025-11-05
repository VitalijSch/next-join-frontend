import { useFormContext } from "react-hook-form";

export default function LeftDescription() {
  const { register, formState: { errors } } = useFormContext();

  return (
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
      {errors.description?.message === "string" && (
        <p className="h-[14px] text-[12px] text-[#FF8190]">
          {errors.description.message}
        </p>
      )}
    </div>
  );
}
