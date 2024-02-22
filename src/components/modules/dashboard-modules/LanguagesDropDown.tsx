"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
// icons -->
import { HiChevronDown } from "react-icons/hi";
type Props = {};

const LanguagesDropDown = (props: Props) => {
  const [isDropOpen, setIsDropOpen] = useState(false);
  return (
    <div className="relative">
      <div
        className={`relative flex items-center gap-[10px] px-[10px] rounded-full py-[10px] bg-app-primary group select-none cursor-pointer`}
        onClick={() => setIsDropOpen(!isDropOpen)}
      >
        <Image
          src={"/assets/icons/united-states.svg"}
          alt="ayan dashboard"
          width={24}
          height={24}
        />
        <p className={`uppercase text-sm`}>English</p>
        <HiChevronDown size={22} className={`group-hover:animate-pulse `} />
      </div>
      <motion.div
        animate={isDropOpen ? { height: "fit-content" } : { height: 0 }}
        className={`absolute h-0 overflow-hidden top-[60px] right-0 bg-app-accent-3 rounded-lg z-[500]`}
      >
        {LANGUAGE_DATA.map((item, index) => (
          <div key={index} className={`px-5 py-2 first:pt-4 last:pb-4`}>
            Language 1
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LanguagesDropDown;

const LANGUAGE_DATA = [
  {
    name: "Language 1",
  },
  {
    name: "Language 1",
  },
  {
    name: "Language 1",
  },
  {
    name: "Language 1",
  },
  {
    name: "Language 1",
  },
  {
    name: "Language 1",
  },
  {
    name: "Language 1",
  },
];
