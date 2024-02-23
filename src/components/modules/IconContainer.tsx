import { ReactNode } from "react";

type Props = {
  title: string | number;
  icon: ReactNode;
};

const IconContainer = ({ title, icon }: Props) => {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <p className="text-sm text-zinc-800 font-medium">{title}</p>
    </div>
  );
};

export default IconContainer;
