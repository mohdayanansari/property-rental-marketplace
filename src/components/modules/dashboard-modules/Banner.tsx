// icons -->
import { MaskIcon } from "@/styles/global.styled";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { Avatar, Button } from "../..";

type Props = {};

function Banner(props: Props) {
  return (
    <section
      className={`flex items-start justify-between p-[10px] lg:p-[20px] bg-app-dark-2 rounded-[12px] h-[150px] `}
    >
      {/* col-1 */}
      <div className={`flex  gap-[5px] lg:gap-[10px] h-full`}>
        {/* back button */}
        <div
          className={`w-[30px] h-[30px] rounded-full bg-app-gray-1 hover:drop-shadow-lg hover:bg-app-gray-2 flex items-center justify-center hover:cursor-pointer`}
        >
          <IoIosArrowRoundBack size={22} className={`text-black`} />
        </div>
        {/* details section */}
        <div className="flex flex-col justify-between h-full ">
          <h2 className="text-xl">School November Tasks</h2>
          <p className="text-xs text-white/70">
            Created by Instructor Day on November 31, 2022
          </p>
          <div className="mt-5 flex items-center gap-[10px]">
            <div className="flex items-center  ">
              <Avatar
                borderSize="border-2"
                borderColor="border-white/90"
                collapsed={true}
                bgColor="#cacaca"
                // text="+10"
              />
              <Avatar
                borderSize="border-2"
                borderColor="border-white/90"
                collapsed={true}
                bgColor="#cacaca"
                // text="+10"
              />
              <Avatar
                borderSize="border-2"
                borderColor="border-white/90"
                collapsed={true}
                bgColor="#cacaca"
                // text="+10"
              />
              <Avatar
                borderSize="border-2"
                borderColor="border-white/90"
                collapsed={true}
                bgColor="#cacaca"
                // text="+10"
              />
              <Avatar
                borderSize="border-2"
                borderColor="border-white/90"
                collapsed={true}
                bgColor="#cacaca"
                text="+10"
              />
            </div>
            <Button
              tailwind="flex items-center justify-center gap-[10px] ml-[10px] w-[130px] h-[40px] bg-app-secondary rounded-[12px] text-xs hover:bg-app-primary animationEaseInOut"
              text="Invite People"
              icon={
                <Image
                  src={"assets/icons/add-friend.svg"}
                  alt="ayan dashboard"
                  width={22}
                  height={22}
                />
              }
            />
            <Button
              tailwind="flex items-center justify-center gap-[10px] max-w-max px-[20px] h-[40px] border border-app-secondary rounded-[12px] text-xs hover:bg-app-secondary animationEaseInOut"
              text="Private"
            />
            <Button
              tailwind="flex items-center justify-center gap-[10px] max-w-max px-[20px] h-[40px] bg-app-tertiary rounded-[12px] text-xs hover:bg-app-secondary animationEaseInOut"
              text="Edit"
            />
            <Button
              tailwind="flex items-center justify-center gap-[5px] max-w-max px-[10px] h-[40px] bg-app-tertiary rounded-[12px] text-xs hover:bg-app-secondary animationEaseInOut"
              text="45 Comments"
              icon={
                <MaskIcon
                  url={"assets/icons/chat.svg"}
                  width={"22px"}
                  height={"22px"}
                />
              }
            />
          </div>
        </div>
      </div>
      {/* col-2 */}
      <div className="flex flex-col h-full  w-[50%] justify-between items-end ">
        {/* details-section */}
        <div className={`flex h-full gap-[10px] items-start justify-end  `}>
          {/* info */}
          <div className={`flex flex-col items-end`}>
            <h2 className="text-lg  ">Centered Martial Arts</h2>
            <p className="text-xs text-white/70 mt-[-5px]">Sunnyvale, Ca</p>
          </div>
          {/* profile pic */}
          <div className="rounded-lg bg-app-gray-2 w-[50px] h-[50px]"></div>
          {/* option button */}
          <div className={`cursor-pointer hover:animate-pulse`}>
            <SlOptionsVertical size={18} className={`opacity-70 mt-1`} />
          </div>
        </div>
        {/* progress section */}
        <div className={`flex items-center gap-[10px] w-full justify-end`}>
          <p className="text-xs min-w-fit">Total progress 60%</p>
          <div className="w-[50%] lg:w-[60%] h-[10px] bg-[#1E1C3A] rounded-full after:content-[' '] after:flex after:w-[50%] after:rounded-full  after:lg:w-[60%] after:bg-app-secondary after:h-[10px]" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
