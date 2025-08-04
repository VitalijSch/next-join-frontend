interface ToastMessageProps {
  message: string;
  Icon?: React.ElementType;
}

export default function ToastMessage({ message, Icon }: ToastMessageProps) {
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/20">
      <div className="w-fit h-[74px] flex justify-center items-center gap-[8px] px-[45px] bg-[#2A3647] rounded-[20px] shadow-[0px_0px_4px_0px_#00000026] animate-bottomCenter">
        <span className="text-[20px] text-white">{message}</span>
        {Icon && <Icon />}
      </div>
    </div>
  );
}
