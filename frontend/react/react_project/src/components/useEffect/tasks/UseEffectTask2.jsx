import React, { useEffect, useState } from "react";

const UseEffectTask2 = () => {
  let [state, setState] = useState(0);
  useEffect(() => {
    console.log("hello");
  }, []);
  //!   useEffect cbf will not get called on each state update when we are not passing any dependency into the array
  //   let func = () => {
  //     console.log("hello");
  //   };
  func();
  return (
    <div>
      <h1>Count : {state}</h1>
      <button
        onClick={() => {
          setState((state += 1));
        }}
      >
        Click
      </button>
    </div>
  );
};

export default UseEffectTask2;
