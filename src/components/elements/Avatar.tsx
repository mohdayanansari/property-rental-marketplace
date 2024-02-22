import Image from "next/image";

type Props = {
  text?: string;
  img?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  collapsed?: boolean;
  borderSize?: string;
  borderColor?: string;
  textSize?: string;
  textBold?: boolean;
};

const Avatar = ({
  text,
  img,
  width,
  height,
  bgColor,
  color,
  collapsed,
  borderSize,
  borderColor,
  textSize,
  textBold,
}: Props) => {
  return (
    <div
      style={{
        width: width || "35px",
        height: height || "35px",
        backgroundColor: bgColor || "gray",
        color: color || "black",
        fontSize: textSize || "10px",
        fontWeight: textBold ? "900" : "400",
      }}
      className={`rounded-full   flex items-center justify-center relative ${
        collapsed ? "mr-[-10px]" : "mr-0"
      } ${borderSize ? `${borderSize} ${borderColor} ` : "border-none"}`}
    >
      {img && (
        <Image
          src={img}
          alt="ayan dashboard avatar images"
          fill
          className={`object-cover`}
        />
      )}
      {text && <p>{text}</p>}
    </div>
  );
};

export default Avatar;
