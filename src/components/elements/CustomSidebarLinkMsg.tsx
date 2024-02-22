import useSidebarContext from "@/hooks/useSidebarContext";

type Props = {
  msg: string;
  bgColor?: string;
  color?: string;
};

const CustomSidebarLinkMsg = ({ msg, bgColor, color }: Props) => {
  const { isSidebarOpen } = useSidebarContext();
  return (
    <div
      style={{
        backgroundColor: bgColor || "#7879F1",
        color: color || "#fff",
      }}
      className={`text-[10px]  rounded-full  font-light ${
        !isSidebarOpen
          ? "absolute w-[10px] h-[10px] top-[-15px] right-[25px]"
          : "block px-[8px] py-[2px]"
      }`}
    >
      {!isSidebarOpen ? "" : msg}
    </div>
  );
};

export default CustomSidebarLinkMsg;
