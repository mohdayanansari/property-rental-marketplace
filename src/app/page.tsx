"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { PropertyCard } from "../components";

type Props = {};

const page = (props: Props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      const { data } = await axios.get("http://localhost:3030/properties");
      if (data) {
        setData(data);
        setLoading(false);
      }
    })();
  }, []);

  console.log(data);

  return (
    <main className="paddingX paddingY">
      <div>
        {!loading ? (
          <>
            {data.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-2 md:gap-10 justify-around">
                {data.map((item, index) => {
                  return <PropertyCard key={index} data={item} />;
                })}
              </div>
            ) : (
              <div>No Property Found!</div>
            )}
          </>
        ) : (
          <div>Loading!</div>
        )}
      </div>
    </main>
  );
};

export default page;
