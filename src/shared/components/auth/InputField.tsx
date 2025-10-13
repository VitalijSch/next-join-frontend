import { Path, UseFormRegister } from "react-hook-form";

interface InputFieldProps<T extends Record<string, unknown>> {
  className?: string;
  placeholder: string;
  type: "text" | "email" | "password";
  name: Path<T>;
  Icon: React.ElementType;
  register: UseFormRegister<T>;
  error?: string;
  onChange?: () => void;
  defaulValue?: string;
}

export default function InputField<T extends Record<string, unknown>>({
  className,
  placeholder,
  type,
  name,
  Icon,
  register,
  error,
  onChange,
  defaulValue,
}: InputFieldProps<T>) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className={`${className} w-[422px] relative`}>
        <input
          className={`${
            error
              ? "border-[#FF8190]"
              : "border-[#D1D1D1] hover:border-[grey] focus:border-[#29ABE2]"
          } peer w-full h-full py-[12px] px-[21px] border rounded-[10px] outline-none cursor-pointer placeholder:text-[20px] placeholder:text-[#D1D1D1] transition-colors duration-300 ease-in-out`}
          autoComplete="off"
          placeholder={placeholder}
          type={type}
          id={name as string}
          {...register(name)}
          onChange={(e) => {
            register(name).onChange(e);
            onChange?.();
          }}
          defaultValue={defaulValue}
        />
        <Icon
          className={`${
            error
              ? "text-[#FF8190]"
              : "text-[#A8A8A8] peer-focus:text-[#29ABE2]"
          } absolute top-1/2 right-[21px] -translate-y-1/2  pointer-events-none cursor-pointer`}
        />
      </div>
      {error && <p className="h-[14px] text-[12px] text-[#FF8190]">{error}</p>}
    </div>
  );
}
