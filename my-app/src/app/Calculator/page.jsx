"use client";
import { useEffect, useState } from "react";
const Page = () => {
  const [input, setinput] = useState("");
  const [input1, setinput1] = useState("");
  const [select, setselect] = useState("");
  const [resut, setresult] = useState("");
  useEffect(() => {
    result();
  }, [input, input1, select]);
  const result = () => {
    let res;
    if (select === "+") {
      setresult(input + input1);
    } else if (select === "-") {
      setresult(input - input1);
    } else if (select === "*") {
      setresult(input * input1);
    } else if (select === "/") {
      setresult(input / input1);
    }
  };
  console.log(input1, input);

  return (
    <div>
      <input
        type="number"
        placeholder="Number 1"
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      <select value={select} onChange={(e) => setselect(e.target.value)}>
        <option value={"+"}>+</option>
        <option value={"-"}>-</option>
        <option value={"*"}>*</option>
        <option value={"/"}>/</option>
      </select>
      <input
        type="number"
        placeholder="Number 2"
        value={input1}
        onChange={(e) => setinput1(e.target.value)}
      />
      <p>result :{resut}</p>
    </div>
  );
};
export default Page;
