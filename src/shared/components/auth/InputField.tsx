interface InputFieldProps {
  placeholder: string;
  type: "text" | "email" | "password";
  name: string;
  Icon: React.ElementType;
}

export default function InputField({
  placeholder,
  type,
  name,
  Icon,
}: InputFieldProps) {
  return (
    <div className="w-[422px] relative">
      <input
        className="peer w-full h-full py-[12px] px-[21px] border border-[#D1D1D1] rounded-[10px] outline-none cursor-pointer placeholder:text-[20px] placeholder:text-[#D1D1D1] focus:border-[#29ABE2] hover:border-[grey] transition-colors duration-300 ease-in-out"
        autoComplete="off"
        placeholder={placeholder}
        type={type}
        name={name}
        id={name}
      />
      <Icon className="absolute top-1/2 right-[21px] -translate-y-1/2 text-[#A8A8A8] pointer-events-none cursor-pointer peer-focus:text-[#29ABE2]" />
    </div>
  );
}
