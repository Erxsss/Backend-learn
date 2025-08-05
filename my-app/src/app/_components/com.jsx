"use client";
import { useEffect, useState } from "react";

const Mycom = () => {
  const [countries, setcountries] = useState([]);
  const fetchdata = async () => {
    const response = await fetch(
      "https://restcountries.com/v3.1/independent?status=true",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    setcountries(data);
  };
  console.log(countries);
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="m-[30px]">
      <div className="flex flex-col gap-[100px] text-[50px]">
        <div>FLAGS OF THE WORLD</div>
        <div className="flex justify-between">
          <div>{countries.length} countries in the world</div>
          <div>
            <input placeholder="Enter country" className="border-[3px] rounded-xl border-gray-500"/>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 ml-30 mr-30 mt-[200px]">
        <div className="flex flex-wrap gap-20 m-20 justify-center">
          {countries.map((country, index) => {
            const name = country.name.common;
            return (
              <div key={index} className="flex flex-col gap-2">
                <img src={country.flags.png} alt="" />
                <div className="text-[30px] flex justify-center">{name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mycom;
