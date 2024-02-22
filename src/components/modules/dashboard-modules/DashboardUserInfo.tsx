// icons -->
import { TiChevronRight } from "react-icons/ti";
type Props = {};

const DashboardUserInfo = (props: Props) => {
  return (
    <div className={`flex items-center gap-[10px]`}>
      <div
        className={`flex items-center justify-center w-[40px] h-[40px] rounded-xl bg-app-gray-1 text-black text-xl`}
      >
        A
      </div>
      <div className={``}>
        <p className={`text-sm`}>Instructor Day</p>
        <p className={`text-xs text-app-tertiary`}>Super Admin</p>
      </div>
      <TiChevronRight size={22} className={`rotate-90 text-app-tertiary`} />
    </div>
  );
};

export default DashboardUserInfo;
