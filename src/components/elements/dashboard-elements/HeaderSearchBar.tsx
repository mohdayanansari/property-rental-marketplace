// icons
import { ImSearch } from "react-icons/im";
type Props = {
  isTab?: boolean;
};

const HeaderSearchBar = ({ isTab }: Props) => {
  return (
    <label
      htmlFor="search"
      className={`relative flex bg-app-primary h-[40px] rounded-full  px-[20px] group animationEaseInOut duration-500 ${
        isTab ? "w-full" : "w-[230px]"
      }`}
    >
      <ImSearch
        size={18}
        className={`absolute top-[10px] group-focus-within:scale-[-1] group-focus-within:rotate-[-90deg] group-focus-within:translate-x-[-10px] animationEaseInOut duration-500 opacity-70`}
      />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search here"
        className="outline-none bg-transparent animationEaseInOut pl-[24px] w-full text-sm font-light group-focus-within:pl-[15px]"
      />
    </label>
  );
};

export default HeaderSearchBar;
