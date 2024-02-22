import { ReactNode } from "react";

type Props = {
  text?: string;
  onClick?: () => void;
  icon?: ReactNode;
  tailwind?: string;
};

const Button = ({ text, onClick, icon, tailwind }: Props) => {
  return (
    <button
      className={`${
        tailwind ? tailwind : "m-0 p-0 border-none bg-transparent"
      } `}
      onClick={onClick}
    >
      {icon && icon}
      {text}
    </button>
  );
};

export default Button;
