"use client";
import Image from "next/image";
import { FaRegHeart, FaRegUserCircle, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { Button, Drawer } from "rsuite";
import {
  AmenitiesCard,
  HostContainer,
  IconContainer,
  PricingCard,
  ReviewsContainer,
} from "..";
import { ListingData } from "./PropertyCard";

type Props = {
  openWithHeader: boolean;
  setOpenWithHeader: React.Dispatch<React.SetStateAction<boolean>>;
  data: ListingData;
};

const PropertyModal = ({ openWithHeader, setOpenWithHeader, data }: Props) => {
  return (
    <Drawer
      open={openWithHeader}
      onClose={() => setOpenWithHeader(false)}
      className=" "
      backdrop="static"
      size="calc(100vw - 380px)"
    >
      <Button
        className="absolute top-[10px] left-[-50px] w-[40px] h-[40px] bg-slate-100 rounded-full"
        onClick={() => setOpenWithHeader(false)}
      >
        <IoClose className="text-2xl" />
      </Button>
      {/* Model Body */}
      <div className="p-5 min-h-screen h-full overflow-y-scroll">
        {/* ---------Images------ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3">
          <div className="relative w-full h-[500px] col-span-2">
            <Image
              src={data.imageUrls[0]}
              alt="images"
              fill
              className="object-cover object-center rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 h-[500px]">
            <div className="relative w-full h-[250px] col-span-2">
              <Image
                src={data.imageUrls[1]}
                alt="images"
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>
            <div className="relative w-full h-[250px] col-span-2">
              <Image
                src={data.imageUrls[2]}
                alt="images"
                fill
                className="object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
        {/* --------Data Display------ */}
        <div className="grid grid-cols-1 md:grid-cols-3 pt-5 gap-x-4">
          <div className="col-span-2">
            <div className="">
              <div className="flex w-full justify-between items-center">
                <h1 className="text-3xl font-medium">{data.title}</h1>
                {/* Icons */}
                <div className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center hover:cursor-pointer">
                    <LuUpload />
                  </div>
                  <div className="w-[40px] h-[40px] bg-slate-100 rounded-full flex justify-center items-center hover:cursor-pointer">
                    <FaRegHeart />
                  </div>
                </div>
              </div>
              <p className="text-lg text-gray-400 mt-2">{`${data.location.street}, ${data.location.state}, ${data.location.country}`}</p>

              <div className="flex items-center gap-8 mt-5">
                <IconContainer
                  icon={
                    <FaRegUserCircle className="text-xl text-zinc-800 font-medium" />
                  }
                  title={`${data.maxGuests}+ Guests`}
                />
                <IconContainer
                  icon={
                    <FaRegUserCircle className="text-xl text-zinc-800 font-medium" />
                  }
                  title={`${data.numberOfBedrooms} Bedrooms`}
                />
                <IconContainer
                  icon={
                    <FaRegUserCircle className="text-xl text-zinc-800 font-medium" />
                  }
                  title={`${data.numberOfBeds} Beds`}
                />
                <IconContainer
                  icon={
                    <FaRegUserCircle className="text-xl text-zinc-800 font-medium" />
                  }
                  title={`${data.numberOfBathroom} Baths`}
                />
              </div>

              <hr className="mt-8" />

              {/* -----Description---- */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-zinc-900">
                  About this space
                </h4>
                <p className="text-gray-400 mt-2 text-sm leading-6">
                  {data.spaceDescription}
                </p>
                <p className="text-rose-700 text-xs font-medium mt-4">
                  Read More
                </p>
              </div>

              <hr className="mt-8" />

              {/* whats the place offer */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-zinc-900">
                  What this place offers
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-5">
                  {data.amenities.map((item, index) => (
                    <AmenitiesCard key={index} title={item} />
                  ))}
                </div>
                <p className="text-rose-700 text-xs font-medium mt-4">
                  View More
                </p>
              </div>

              <hr className="mt-8" />

              <div className="mt-8">
                <div className="flex w-full justify-between items-center">
                  <h4 className="text-lg font-medium text-zinc-900">Reviews</h4>
                  <div className="flex items-center gap-2">
                    <FaStar className="text-xl" />
                    <p className="mt-1">
                      {`${data.overallRating} - ${data.reviews.length} reviews`}
                    </p>
                  </div>
                </div>
                {/* Reviews Container */}
                <div className="flex flex-col gap-4 border border-gray-100 rounded-xl p-5 mt-8 bg-white drop-shadow-sm">
                  <ReviewsContainer
                    rating={data.ratings.accuracy}
                    title="Accuracy"
                  />
                  <ReviewsContainer
                    rating={data.ratings.cleanliness}
                    title="Cleanliness"
                  />
                  <ReviewsContainer
                    rating={data.ratings.location}
                    title="Location"
                  />
                  <ReviewsContainer
                    rating={data.ratings.service}
                    title="Service"
                  />
                  <ReviewsContainer rating={data.ratings.value} title="Value" />
                </div>

                <p className="text-rose-700 text-xs font-medium mt-4">
                  View More
                </p>
              </div>

              <hr className="mt-8" />
              {/* --------Host reviews--------– */}
              <div className="mt-8">
                <h4 className="text-lg font-medium text-zinc-900">Host</h4>
                <HostContainer data={data.host} />
              </div>
            </div>
          </div>
          <div className="col-span-1 relative">
            {/* Pricing Card */}
            <PricingCard data={data} />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default PropertyModal;
