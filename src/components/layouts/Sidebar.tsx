"use client";
import NAV_LINKS from "@/constants/NAV_LINKS";
import useSidebarContext from "@/hooks/useSidebarContext";
import { MaskIcon } from "@/styles/global.styled";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, Fragment, ReactElement, useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { HiArrowLongRight } from "react-icons/hi2";
import { TbSquareRoundedChevronsLeft } from "react-icons/tb";
import { useMediaQuery } from "react-responsive";
import { DashboardNotifications, HeaderSearchBar, SidebarSubMenu } from "..";
type SidebarPropTypes = {};

const Sidebar: FC<SidebarPropTypes> = (): ReactElement => {
  const path = usePathname();
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarContext();
  const [dropdownStates, setDropdownStates] = useState<boolean[]>(
    new Array(NAV_LINKS.length).fill(false)
  );

  const handleDropdownToggle = (index: number) => {
    const newDropdownStates = [...dropdownStates];
    newDropdownStates[index] = !newDropdownStates[index];
    setDropdownStates(newDropdownStates);
  };

  const isTab = useMediaQuery({ query: "(max-width: 1024px)" });

  // setting the tab state of sidebar to default
  useEffect(() => {
    setIsSidebarOpen(isTab ? false : true);
  }, [isTab, setIsSidebarOpen]);

  //    set sidebar to hide whenever the path changes
  useEffect(() => {
    isTab && setIsSidebarOpen(false);
  }, [path]);

  const SIDEBAR_ANIMATION = isTab
    ? // mobile view
      {
        open: {
          x: 0,
          with: "320px",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -320,
          width: "0px",
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : // desktop view
      {
        open: {
          with: "17%",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "80px",
          transition: {
            damping: 40,
          },
        },
      };

  // function to toggle the sidebar collapsed state or open state not closed state
  const handleSidebarButton = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`lg:hidden fixed inset-0 max-h-screen z-[449] bg-black/30 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
      <motion.aside
        variants={SIDEBAR_ANIMATION}
        initial={{ x: isTab ? -320 : 0 }}
        animate={isSidebarOpen ? "open" : "closed"}
        className={`  bg-app-dark-2 text-white shadow-sidebar h-screen z-[500] overflow-y-auto overflow-x-hidden lg:relative fixed  scrollbar-thin scrollbar-track-[#1a1735] scrollbar-thumb-[#231f4f]   pb-[20px] ${
          isSidebarOpen ? "flex flex-col justify-between" : ""
        }`}
        style={{ width: isTab ? "320px" : "17%" }}
      >
        <div>
          {/* Header Section */}
          <header
            className={`w-full h-[80px] flex sticky py-2  top-0 items-center sidebarPaddingX  bg-app-dark-2 z-[600] ${
              isSidebarOpen ? "justify-between" : "justify-center"
            }`}
          >
            <h1 className={`${isSidebarOpen ? "block" : "hidden"}`}>
              weframetech
            </h1>
            <motion.div
              animate={
                isSidebarOpen
                  ? {
                      x: 0,
                      y: 0,
                      rotate: 0,
                    }
                  : {
                      x: 0,
                      y: -20,
                      rotate: 180,
                    }
              }
              transition={{ duration: 0 }}
              className={`text-app-tertiary cursor-pointer hover:scale-110 active:scale-90 transition-all ease-in-out duration-500 w-fit h-fit   `}
              onClick={handleSidebarButton}
            >
              <TbSquareRoundedChevronsLeft size={24} />
            </motion.div>
          </header>

          {/* ------ */}
          {isTab && (
            <div
              className={`flex flex-col gap-[30px] pb-[30px] justify-center items-center sidebarPaddingX`}
            >
              <HeaderSearchBar isTab={isTab} />
              <DashboardNotifications isTab={isTab} />
            </div>
          )}

          {/* Menu Link */}
          <nav
            className={`sidebarPaddingX ${
              isSidebarOpen ? "pr-0 " : "px-[10px]"
            }`}
          >
            {isSidebarOpen ? (
              <h4
                className={`${
                  isSidebarOpen ? "block" : "hidden"
                } text-white/70 text-sm`}
              >
                Main Menu
              </h4>
            ) : (
              <div className="w-full flex items-center justify-center">
                <Image
                  src={"/logo.svg"}
                  alt="ayan dashboard logo"
                  width={40}
                  height={40}
                />
              </div>
            )}
            <hr className={`bg-white opacity-10 mt-1`} />
            <ul className={`flex flex-col gap-[5px] mt-4`}>
              {NAV_LINKS.map((item, index) => {
                const active = path === item.link;
                return (
                  <Fragment key={`nav-${index}`}>
                    <li>
                      <Link
                        href={item.link}
                        className={`flex items-center    h-[40px] hover:cursor-pointer relative text-sm  group ${
                          active
                            ? "text-app-secondary"
                            : `text-[#464366] hover:bg-app-accent-3 hover:text-white/70  ${
                                isSidebarOpen
                                  ? "hover:rounded-l-[14px] hover:pl-[10px]"
                                  : "hover:rounded-[14px]"
                              }`
                        } ${
                          isSidebarOpen ? "justify-between" : "justify-center"
                        } transition-all ease-in-out duration-300`}
                      >
                        {/* col-1 for link icon and name */}
                        <div className={`flex items-center gap-[10px]`}>
                          <MaskIcon
                            url={item.icon}
                            height="28px"
                            width="28px"
                            color={active ? "#6418C3" : "#464366"}
                            className={`  ${
                              active ? "" : "group-hover:bg-app-accent-2"
                            }`}
                          />
                          {/* Link Name */}
                          <p
                            className={`${isSidebarOpen ? "block" : "hidden"}`}
                          >
                            {item.name}
                          </p>
                        </div>
                        {/* col-2 for dropdown icon or custom message/notifications */}
                        <div
                          className={` relative ${
                            isSidebarOpen
                              ? "pr-[30px] flex items-center gap-[10px]"
                              : ""
                          }`}
                        >
                          {/* Custom Component if any* */}
                          {item?.customSideMessage}
                          {item.dropDown && isSidebarOpen && (
                            <div
                              className={`flex justify-center items-center w-[30px] h-[30px] hover:rounded-full hover:bg-app-tertiary hover:drop-shadow-lg animationEaseInOut ${
                                dropdownStates[index] ? "rotate-180" : ""
                              }`}
                              onClick={() => handleDropdownToggle(index)}
                            >
                              <HiChevronDown size={20} />
                            </div>
                          )}
                        </div>
                        {/* Absolute Side Line Element */}
                        <div
                          className={`absolute right-0 w-[5px] rounded-full h-full ${
                            active ? "bg-app-secondary" : ""
                          } ${isSidebarOpen ? "" : "right-[-10px]"}`}
                        />
                      </Link>
                    </li>
                    {/* Drop Downs */}
                    <motion.div
                      animate={
                        dropdownStates[index]
                          ? { height: "fit-content" }
                          : { height: 0 }
                      }
                      className={`h-0 overflow-hidden`}
                    >
                      {item.dropDown && isSidebarOpen && (
                        <div className={`border-y border-white/10 py-2 `}>
                          <small
                            className={`text-slate-500 pl-3 inline-block mb-2`}
                          >
                            {item.subMenuName}
                          </small>
                          <div className={`flex flex-col gap-[15px] pl-5 mt-2`}>
                            {item.dropDown?.map((drop, i) => {
                              return (
                                <SidebarSubMenu
                                  key={`${drop}-${i}`}
                                  data={drop}
                                />
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </Fragment>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Advertisement Section */}
        {isSidebarOpen && (
          <div className={`sidebarPaddingX `}>
            <div
              className={`relative flex flex-col w-full h-[150px]  sidebar-gradient rounded-[32px] justify-center items-start px-[20px] lg:px-[25px] gap-[5px] overflow-hidden`}
            >
              <Image
                src={"/assets/designs/Vector.svg"}
                alt="ayan dashboard example"
                width={22}
                height={30}
                className={`mt-2`}
              />
              <h2>Increase your work with kanban</h2>
              <HiArrowLongRight size={30} />
              <div
                className={`absolute sidebar-design  bottom-[-70px] right-[-70px] w-[170px] h-[170px] rounded-[50%]`}
              />
            </div>
          </div>
        )}
      </motion.aside>
    </>
  );
};

export default Sidebar;
