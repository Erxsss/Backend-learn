"use client";
import { useEffect, useState } from "react";

const Mycom = () => {
  const [countries, setcountries] = useState([]);
  const [inputValue, setInputValue] = useState("");
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
  console.log(inputValue);
  console.log(many);
  useEffect(() => {
    fetchdata();
  }, []);
  if (many > 0) {
    return (
      <div className="c">
        <div className="flex flex-col gap-[100px] text-[50px]">
          <div className="color-[white]">FLAGS OF THE WORLD</div>
          <div className="flex justify-between">
            <div>{many} countries in the world</div>
            <div>
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
          <div className="flex flex-wrap gap-20 m-20 justify-center ">
            {countries
              .filter((a) => {
                return a.name.common.toLowerCase().includes(inputValue);
              })
              .map((country, index) => {
                const name = country.name.common;
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-2 border-[3px] p-7 rounded-xl border-gray-500 bg-[white] "
                  >
                    <img src={country.flags.png} alt="" />
                    <div className="text-[30px] flex justify-center">
                      {name}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="c">
        <div className="flex flex-col gap-[100px] text-[50px] justify-center">
          <div className="color-[white]">FLAGS OF THE WORLD</div>
          <div className="flex justify-between">
            <div>{many} countries in the world</div>
            <div>
              <input
                placeholder="Enter country"
                className="border-[3px] rounded-xl border-gray-500"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">NO COUNTRY BRO</div>
        </div>
      </div>
    );
  }
};

export default Mycom;
