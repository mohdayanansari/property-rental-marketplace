import moment from "moment";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaPeopleRoof, FaShield } from "react-icons/fa6";
import { Button } from "rsuite";
import { IconContainer } from "..";

import { Host } from "./PropertyCard";

type Props = {
  data: Host;
};

const HostContainer = ({ data }: Props) => {
  return (
    <div className="mt-8">
      {/* user section */}

      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-2">
          {/* img */}
          <Image
            src={data.profileUrl}
            alt="user info"
            width={70}
            height={70}
            className="object-cover rounded-full"
          />
          {/* name  */}
          <div>
            <h4 className="text-xl font-medium">{data.name}</h4>
            <p className="text-gray-400 text-sm">
              Joined in {moment(data.joinedAt).format("MMMM YYYY")}
            </p>
          </div>
        </div>
        {/* contact */}
        <Button
          appearance="ghost"
          className="!border !border-gray-400 !text-zinc-800"
        >
          Contact Host
        </Button>
      </div>
      {/* misc details */}
      <div className="flex items-center w-full gap-8 mt-5">
        <IconContainer
          icon={<FaStar />}
          title={`${data.totalReviews} reviews`}
        />
        <IconContainer
          icon={<FaShield />}
          title={`${data.isVerified ? "Identity Verified" : "Not Verified"}`}
        />
        <IconContainer
          icon={<FaPeopleRoof />}
          title={`${data.isSuperHost ? "Superhost" : "Normalhost"}`}
        />
      </div>
      {/* Description */}
      <div>
        <p className="text-gray-400 text-sm leading-6 mt-5">{data.bio}</p>
        <p className="text-rose-700 text-xs font-medium mt-4">Read More</p>
      </div>
    </div>
  );
};

export default HostContainer;
