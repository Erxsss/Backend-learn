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
      <div className="flex flex-col items-center">
        <input
        className="w-[300px] "
          placeholder="Enter Task"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={Add}>Add</button>
        <div className="flex flex-col items-center">
          {get.map((ele, index) => {
            return (
              <div key={index}>
                <div>
                  {ele.task} <button onClick={() => del(ele.id)}>Delete</button>
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
