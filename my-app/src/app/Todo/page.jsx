"use client";
import { useState, useEffect } from "react";
const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [get, got] = useState([]);
  const Add = () => {
    if (inputValue === "") {
      return;
    }
    [got([...get, { task: inputValue, id: Date.now() }])];
    setInputValue("");
  };
  const del = (id) => {
    const thing = get.filter((ele) => {
      return ele.id !== id;
    });
    got(thing);
  };
  console.log(get);
  return (
    <div className="ok">
      <div className="flex flex-col items-center pt-[20px] gap-[20px]">
        <input
          className="w-[300px] h-[50px] text-[30px]"
          placeholder="Enter Task"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={Add}
          className="w-[100px] h-[50px] bg-green-600 rounded-3xl"
        >
          Add
        </button>
        <div className="flex flex-col items-center">
          {get.map((ele, index) => {
            return (
              <div key={index} >
                <div className="flex gap-[5px]">
                  <div className="text-[30px]">{ele.task} </div>
                  <button
                    onClick={() => del(ele.id)}
                    className="w-[100px] h-[50px] bg-red-600 rounded-3xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Page;
