import AddTaskIcon from "@/shared/components/icons/AddTaskIcon";
import BoardIcon from "@/shared/components/icons/BoardIcon";
import ContactsIcon from "@/shared/components/icons/ContactsIcon";
import LoginIcon from "@/shared/components/icons/LoginIcon";
import SummaryIcon from "@/shared/components/icons/SummaryIcon";

export const sidebarLinks = [
  {
    icon: LoginIcon,
    name: "Log In",
    href: "/login",
  },
  {
    icon: SummaryIcon,
    name: "Summary",
    href: "/summary",
  },
  {
    icon: AddTaskIcon,
    name: "Add Task",
    href: "/add-task",
  },
  {
    icon: BoardIcon,
    name: "Board",
    href: "/board",
  },
  {
    icon: ContactsIcon,
    name: "Contacts",
    href: "/contacts",
  },
];
