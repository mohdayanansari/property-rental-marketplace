"use client";
import useSidebarContext from "@/hooks/useSidebarContext";
// icons -->
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
// components -->
import { useMediaQuery } from "react-responsive";
import {
  DashboardNotifications,
  DashboardUserInfo,
  HeaderSearchBar,
  LanguagesDropDown,
} from "..";

type Props = {};

const DashboardHeader = (props: Props) => {
  const { setIsSidebarOpen } = useSidebarContext();
  const isTab = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <header
      className={`flex  items-center justify-between w-full bg-app-dark-2 h-[70px] px-[20px]`}
    >
      {isTab && (
        <div
          onClick={() => setIsSidebarOpen(true)}
          className="flex items-center gap-2 cursor-pointer group hover:text-app-accent-2"
        >
          <BsLayoutSidebarInsetReverse
            size={30}
            className={`group-hover:cursor-pointer group-hover:text-app-accent-2 ̧animationEaseInOut`}
          />
          weframetech
        </div>
      )}
      {/* Two Big Sections */}

      {!isTab && (
        <div>
          {/* Search Col */}
          <HeaderSearchBar />
        </div>
      )}
      <div className={`flex  justify-between gap-[30px]`}>
        {!isTab && (
          <>
            {/* Notification Col */}
            <DashboardNotifications />
            {/* Language Col */}
            <LanguagesDropDown />
          </>
        )}
        {/* Users Col */}
        <DashboardUserInfo />
      </div>
    </header>
  );
};

export default DashboardHeader;
