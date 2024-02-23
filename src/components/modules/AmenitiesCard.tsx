import { FaRegUserCircle } from "react-icons/fa";
type Props = {
  title: string;
};

const AmenitiesCard = ({ title }: Props) => {
  return (
    <div className="flex items-center gap-3">
      <FaRegUserCircle className="text-zinc-800 text-xl" />
      <p className="text-zinc-800">{title}</p>
    </div>
  );
};

export default AmenitiesCard;
