"use client";
import React, { useState } from "react";
export default function Home() {
  const [count, setcount] = useState(0);
  const add = () => {
    setcount(count+1);
  };
  const minus = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <button onClick={() => add()}>Add</button>
      <p>{count}</p>
      <button onClick={() => minus()}>Minus</button>
    </div>
  );
}
