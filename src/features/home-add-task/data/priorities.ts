import LowIcon from "@/shared/components/icons/LowIcon";
import MediumIcon from "@/shared/components/icons/MediumIcon";
import UrgentIcon from "@/shared/components/icons/UrgentIcon";

type Priority = {
  name: "Urgent" | "Medium" | "Low";
  Icon: React.ElementType;
  color: string;
};

export const priorities: Priority[] = [
  {
    name: "Urgent",
    Icon: UrgentIcon,
    color: "#FF3D00",
  },
  {
    name: "Medium",
    Icon: MediumIcon,
    color: "#FFA800",
  },
  {
    name: "Low",
    Icon: LowIcon,
    color: "#7AE229",
  },
];
