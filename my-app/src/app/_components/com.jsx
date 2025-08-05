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
  return <div>{countries[0]?.fifa} </div>;
};

export default Mycom;
