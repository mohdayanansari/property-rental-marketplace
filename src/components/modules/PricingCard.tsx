"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { NumericFormat } from "react-number-format";
import { Button, DateRangePicker, InputPicker } from "rsuite";
import { DateRange } from "rsuite/esm/DateRangePicker";
import { ListingData } from "./PropertyCard";

type Props = {
  data: ListingData;
};

const PricingCard = ({ data }: Props) => {
  const { beforeToday } = DateRangePicker;
  const [date, setDate] = useState<DateRange | null>();
  console.log(date);
  const days = [
    {
      label: "One",
      value: 1,
    },
    {
      label: "Two",
      value: 2,
    },
    {
      label: "Three",
      value: 3,
    },
    {
      label: "Four",
      value: 4,
    },
  ].map((item) => ({ label: item.label, value: item.value }));

  //   Calculate days for stays
  function calculateDaysBetweenDates(dateRange: DateRange): number {
    if (dateRange?.[0] && dateRange?.[1]) {
      const date1 = new Date(dateRange[0]);
      const date2 = new Date(dateRange[1]);

      // Calculate the time difference in milliseconds
      const timeDifference = date2.getTime() - date1.getTime();

      // Convert the time difference to days
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      return daysDifference;
    }

    return 0; // or any default value when date range is not set
  }
  return (
    <div className="bg-neutral-100 p-4 rounded-2xl border border-neutral-200 drop-shadow-xl sticky top-0">
      <div className="flex w-full justify-between items-center ">
        <p className="text-xl font-medium">
          <NumericFormat
            value={data.pricePerNightInCents}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />{" "}
          <span className="text-sm text-gray-400">/ night</span>
        </p>
        <div className="flex items-center gap-2">
          <FaStar className="text-sm" />
          <p className="text-sm">{data.overallRating}</p>
        </div>
      </div>

      {/* Check-In Check-Out Input */}
      <div className="mt-5 relative flex flex-col gap-4">
        <DateRangePicker
          showOneCalendar
          block
          showHeader={false}
          size="md"
          placement="autoVertical"
          shouldDisableDate={beforeToday()}
          placeholder="Select Check-In & Check-Out"
          value={date}
          onChange={(value: DateRange | null) => setDate(value)}
        />

        {/* No Of guest Input */}
        <InputPicker data={days} block size="md" />
      </div>
      {date && <hr className="mt-5" />}

      <div className="mt-5 text-sm flex flex-col gap-2">
        {/* total days fee */}
        {date ? (
          <>
            <div className="flex items-center justify-between w-full">
              <p className="font-medium">
                {calculateDaysBetweenDates(date)} nights
              </p>
              <p>
                {
                  <NumericFormat
                    value={
                      calculateDaysBetweenDates(date) *
                      data.pricePerNightInCents
                    }
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                }
              </p>
            </div>
            {/* cleaning fee */}
            <div className="flex items-center justify-between w-full">
              <p className="font-medium">Cleaning Fee</p>
              <p>
                <NumericFormat
                  value={
                    calculateDaysBetweenDates(date) *
                    data.cleaningPricePerNightInCents
                  }
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
            </div>
            {/* Airbnb Service Fee */}
            <div className="flex items-center justify-between w-full">
              <p className="font-medium">Airbnb Service Fee</p>
              <p>
                <NumericFormat
                  value={
                    calculateDaysBetweenDates(date) *
                    data.servicePricePerNightInCents
                  }
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>

      {date && <hr className="mt-5" />}

      {/* Total Amount */}
      <div className="mt-5">
        {date ? (
          <div className="flex items-center justify-between w-full">
            <p className="font-medium">Total</p>
            <p>
              <NumericFormat
                value={
                  calculateDaysBetweenDates(date) * data.pricePerNightInCents +
                  calculateDaysBetweenDates(date) *
                    data.cleaningPricePerNightInCents +
                  calculateDaysBetweenDates(date) *
                    data.servicePricePerNightInCents
                }
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Reserve Button */}

      <Button
        appearance="default"
        block
        size="lg"
        disabled={date === null}
        className="!bg-rose-700 !text-white mt-5"
      >
        Reserve
      </Button>
    </div>
  );
};

export default PricingCard;
