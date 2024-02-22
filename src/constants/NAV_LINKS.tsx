import { CustomSidebarLinkMsg } from "../components";

type NavLink = {
  name: string;
  icon: string;
  link: string;
  customSideMessage?: React.ReactNode;
  subMenuName?: string;
  dropDown?: string[];
};

const NAV_LINKS: NavLink[] = [
  {
    name: "Dashboard",
    icon: "/assets/icons/dashboard.svg",
    link: "/dashboard",
  },
  {
    name: "Email",
    icon: "/assets/icons/email.svg",
    link: "/email",
    customSideMessage: <CustomSidebarLinkMsg msg="17" />,
    subMenuName: "Updates",
    dropDown: ["one", "two", "three", "four"],
  },
  {
    name: "Chat",
    icon: "/assets/icons/chat.svg",
    link: "/chat",
    // dropDown: [],
  },
  {
    name: "Kanban",
    icon: "/assets/icons/kanban.svg",
    link: "/kanban",
    subMenuName: "My Boards",
    dropDown: ["one", "two", "three", "four"],
  },
  {
    name: "Contact",
    icon: "/assets/icons/contact.svg",
    link: "/contact",
    customSideMessage: <CustomSidebarLinkMsg msg="NEW" bgColor="#E328AF" />,
    // dropDown: [],
  },
  {
    name: "Calender",
    icon: "/assets/icons/calender.svg",
    link: "/calender",
    // dropDown: [],
  },
  {
    name: "Courses",
    icon: "/assets/icons/courses.svg",
    link: "/courses",
    subMenuName: "List",
    dropDown: ["one", "two", "three", "four"],
  },
  {
    name: "Shop",
    icon: "/assets/icons/shop.svg",
    link: "/shop",
    // dropDown: [],
  },
  {
    name: "Invoices",
    icon: "/assets/icons/invoices.svg",
    link: "/invoices",
    subMenuName: "History",
    dropDown: ["one", "two", "three", "four"],
  },
  {
    name: "Settings",
    icon: "/assets/icons/settings.svg",
    link: "/settings",
    // dropDown: [],
  },
];

export default NAV_LINKS;
