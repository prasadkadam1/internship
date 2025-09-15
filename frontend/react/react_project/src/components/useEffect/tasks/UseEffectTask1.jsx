import React, { useEffect, useState } from "react";
const UseEffectTask1 = () => {
  let [count, setCount] = useState(0);
  let [cartAmt, setCartAmt] = useState(0);
  useEffect(() => {
    setCartAmt((cartAmt += 100));
  }, [count]);
//! if there is any change into the dependency Array, the callback function will get called
  setInterval(() => {}, 1000);
  return (
    <div>
      <h1>cart Items : {count}</h1>
      <h1>cart amount : {cartAmt}</h1>
      <button
        onClick={() => {
          setCount((count += 1));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default UseEffectTask1;
