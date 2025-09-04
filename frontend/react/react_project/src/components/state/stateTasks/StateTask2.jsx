import { useState } from "react";

let StateTask2 = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount((count += 1));
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount((count -= 1));
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default StateTask2;
