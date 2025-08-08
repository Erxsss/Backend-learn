"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export const Mycom = () => {
  const [countries, setcountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();
  let many = 0;
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].name.common.toLowerCase().includes(inputValue)) {
      many++;
    }
  }
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
  useEffect(() => {
    fetchdata();
  }, []);

  const filteredCountries = countries.filter((a) => {
    return a.name.common.toLowerCase().includes(inputValue.toLowerCase());
  });

  return (
    <div className="c">
      <div className="flex flex-col gap-[100px] text-[50px]">
        <div className="color-[white] ml-[220px]">FLAGS OF THE WORLD</div>
        <div className="flex justify-between ml-[220px]">
          <div>{many} countries in the world</div>
          <div className="mr-[240px]">
            <input
              placeholder="Enter country"
              className="border-[3px] rounded-xl border-gray-500"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 ml-30 mr-30 mt-[200px] ">
        <div className="flex gap-20 flex-wrap m-20 justify-center text-7xl">
          {filteredCountries.length > 0
            ? filteredCountries.map((country, index) => {
                const name = country.name.common;
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-[3px] p-7 rounded-xl border-gray-500 bg-white hover:bg-gray-500 hover:text-amber-50 transition-colors duration-200 ease-in-out"
                    onClick={() => {
                      router.push(`/${country.name.common}`);
                    }}
                  >
                    <img src={country.flags.png} alt="" />
                    <div className="text-[30px] flex justify-center">
                      {name}
                    </div>
                  </div>
                );
              })
            : "NOT FOUND"}
        </div>
      </div>
    </div>
  );
};
