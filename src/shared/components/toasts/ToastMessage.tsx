interface ToastMessageProps {
  message: string;
  className: string;
  Icon?: React.ElementType;
}

export default function ToastMessage({
  message,
  className,
  Icon,
}: ToastMessageProps) {
  return (
    <div
      className={`${
        message !== "Contact succesfully created" &&
        "fixed inset-0 z-[99999] flex justify-center items-center bg-black/20"
      }`}
    >
      <div
        className={`${className} h-[74px] flex justify-between items-center px-[45px] bg-[#2A3647] rounded-[20px] shadow-[0px_0px_4px_0px_#00000026]`}
      >
        <span className="text-[20px] text-white">{message}</span>
        {Icon && <Icon />}
      </div>
    </div>
  );
}
