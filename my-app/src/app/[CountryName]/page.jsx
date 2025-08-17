"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";
const Page = () => {
  const [country, setcountry] = useState([]);
  const params = useParams();
  const countryName = params.CountryName;
  const fetchdata = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const data = await response.json();
    setcountry(data);
    console.log(data);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  console.log(country[0]?.currencies?.name);

  return (
    <div className="c h-[100vh]">
      <div className="flex flex-col gap-[100px] text-[50px] ">
        <div className="color-[white] ml-[170px]">FLAGS OF THE WORLD</div>
        <div>
          <div className="w-[70px] h-[5px] ml-[170px]">
            <a href="Client-page">
              <img
                src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
                alt=""
              />
            </a>
          </div>
          <div className=" flex justify-center">{country[0]?.name.common}</div>
        </div>
        <div className="flex items-start justify-around">
          <div>
            <img
              className="w-[500px] h-[350px]]"
              src={country[0]?.flags.png}
              alt=""
            />
          </div>
          <div>
            <div>
              <div className="text-gray-500 text-[25px]">Capital:</div>
              <div>{country[0]?.capital}</div>
            </div>
            <div>
              <div className="text-gray-500 text-[25px]">Currency:</div>
              <div>
                {Object.values(country[0]?.currencies ?? {})[0]?.name}
                {Object.values(country[0]?.currencies ?? {})[0]?.symbol}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-[25px]">Area:</div>
              <div>{country[0]?.area} sq km</div>
            </div>
            <div>
              <div className="text-gray-500 text-[25px]">Population:</div>
              <div>{country[0]?.population}</div>
            </div>
          </div>
          <div>
            <div>
              <div className="text-gray-500 text-[25px]">Location:</div>
              <div>{country[0]?.subregion}</div>
            </div>
            <div>
              <div className="text-gray-500 text-[25px]">Continents:</div>
              <div>{country[0]?.continents}</div>
            </div>
            <div>
              <div className="text-gray-500 text-[25px]">Map:</div>
              <div className="underline">
                <a href={country[0]?.maps.googleMaps}>See in googleMaps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
