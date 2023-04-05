import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AutoBatching = () => {
  //   const [count, setCount] = useState(1);
  const [name, setName] = useState("Khoa");
  //   const [flag, setFlag] = useState(false);

  //   function handleClick() {
  //     setCount((c) => c + 1);
  //     setFlag((f) => !f);
  //   }

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setCount((c) => c + 1);
  //       setFlag((f) => !f);
  //     }, 1000);
  //   }, []);

  console.log("render");
  return (
    <div>
      <button onClick={() => setName("Phuoc")}>Change name</button>
    </div>
  );
};

export default AutoBatching;
