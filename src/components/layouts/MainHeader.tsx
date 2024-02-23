import Image from "next/image";
import Link from "next/link";

type Props = {};

const MainHeader = (props: Props) => {
  return (
    <header className="flex justify-between w-full h-[80px] paddingX drop-shadow border-b bg-white ">
      {/* col-1 logo */}
      <div className="w-[20%]">
        <div className="relative w-[100px] h-full border-gray-200">
          <Image
            src={"/airLogo.png"}
            alt="company logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      {/* col-2 search for stay */}
      <div className="flex-1 flex justify-center items-center ">
        <ul className="flex gap-8 items-center font-medium">
          <Link href={"#"}>
            <li className="text-sm text-zinc-900 ">Stays</li>
          </Link>
          <Link href={"#"}>
            <li className="text-sm text-gray-400">Experiences</li>
          </Link>
          <Link href={"#"}>
            <li className="text-sm text-gray-400">Online Experiences</li>
          </Link>
        </ul>
      </div>
      {/* col-3 settings */}
      <div className="w-[20%] flex justify-end items-center">
        <div className="w-[40px] h-[40px] bg-gray-500 text-white rounded-full hover:cursor-pointer hover:drop-shadow-md transition-all hover:scale-105 flex justify-center items-center">
          A
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
