import { MaskIcon } from "@/styles/global.styled";

type Props = {
  isTab?: boolean;
};

const DashboardNotifications = ({ isTab }: Props) => {
  return (
    <div
      className={`flex items-center gap-[15px] ${
        isTab ? "w-full justify-between pr-2" : ""
      }`}
    >
      {NOTIFICATION_ICON_DATA?.map((item, index) => {
        const notificationColor = Number(item.value) >= 5;
        return (
          <div key={`${item.id}-${index}`} className={`relative  `}>
            <MaskIcon
              url={item.iconUrl}
              height="24px"
              width="24px"
              color="#7879F1"
              className={`hover:bg-app-secondary hover:cursor-pointer`}
            />
            {item.value && (
              <div
                className={`animate-bounce top-[-10px] right-[-5px] drop-shadow-xl absolute flex items-center justify-center w-[20px] h-[20px] text-xs rounded-full ${
                  notificationColor
                    ? "bg-app-accent-2"
                    : "bg-app-accent-1 text-black/90"
                }`}
              >
                {item?.value}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DashboardNotifications;

const NOTIFICATION_ICON_DATA = [
  {
    id: "bell",
    iconUrl: "/assets/icons/bell.svg",
    link: "",
    value: "12",
  },
  {
    id: "course",
    iconUrl: "/assets/icons/courses.svg",
    link: "",
    value: "5",
  },
  {
    id: "check",
    iconUrl: "/assets/icons/checkbox.svg",
    link: "",
    value: "2",
  },
  {
    id: "files",
    iconUrl: "/assets/icons/files.svg",
    link: "",
    value: "1",
  },
];
