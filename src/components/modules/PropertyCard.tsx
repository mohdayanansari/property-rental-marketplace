"use client";
import Image from "next/image";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { NumericFormat } from "react-number-format";
import { PropertyModal } from "..";

type Location = {
  street: string;
  state: string;
  country: string;
};

type Ratings = {
  cleanliness: number;
  accuracy: number;
  value: number;
  location: number;
  service: number;
};

type Review = {
  reviewerName: string;
  profileUrl: string;
  review: string;
  createdAt: string;
};

export type Host = {
  name: string;
  profileUrl: string;
  bio: string;
  joinedAt: string;
  totalReviews: number;
  isVerified: boolean;
  isSuperHost: boolean;
};

export type ListingData = {
  id: number;
  title: string;
  about: string;
  spaceDescription: string;
  thumbnailUrl: string;
  overallRating: number;
  imageUrls: string[];
  amenities: string[];
  location: Location;
  ratings: Ratings;
  reviews: Review[];
  host: Host;
  pricePerNightInCents: number;
  cleaningPricePerNightInCents: number;
  servicePricePerNightInCents: number;
  maxGuests: number;
  numberOfBedrooms: number;
  numberOfBeds: number;
  numberOfBathroom: number;
};

type Props = {
  data: ListingData;
};

const PropertyCard = ({ data }: Props) => {
  const [openWithHeader, setOpenWithHeader] = useState(false);
  return (
    <>
      <div
        className="border rounded-2xl flex flex-col w-[300px] h-[440px] hover:scale-105 transition-all hover:cursor-pointer bg-white hover:drop-shadow-xl"
        onClick={() => setOpenWithHeader(true)}
      >
        {/* property image */}
        <div className="relative w-[300px] h-[300px]">
          <Image
            src={data.thumbnailUrl}
            alt={`property image-${data.title}`}
            fill
            className="object-cover object-center rounded-t-2xl"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}
          />
        </div>
        {/* property details */}
        <div className=" flex flex-1 flex-col justify-between p-[10px]">
          <div>
            <h2 className="font-medium">{data.title}</h2>
            <p className="text-gray-400 text-xs">{`${data.location.street}, ${data.location.state}, ${data.location.country}`}</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-sm">
              <NumericFormat
                value={data.pricePerNightInCents}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </p>
            <div className="flex items-center gap-2">
              <FaStar className="text-sm" />
              <p className="text-sm">{data.overallRating}</p>
            </div>
          </div>
        </div>
      </div>
      <PropertyModal
        setOpenWithHeader={setOpenWithHeader}
        openWithHeader={openWithHeader}
        data={data}
      />
    </>
  );
};

export default PropertyCard;
