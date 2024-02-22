type Props = {
  data: string;
};

const SidebarSubMenu = ({ data }: Props) => {
  return (
    <ul>
      <li
        className={`capitalize flex-1 cursor-pointer text-xs hover:bg-app-accent-3 w-full text-app-accent-3 hover:text-white/80 p-2 hover:rounded-l-full animationEaseInOut`}
      >
        {data}
      </li>
    </ul>
  );
};

export default SidebarSubMenu;
