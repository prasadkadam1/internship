import React, { useEffect, useState } from "react";

const UseEffectTask3 = () => {
  let [state, setState] = useState(0);
  let fetching = async () => {
    let data = await fetch("https://api.github.com/users");
    data = await data.json();
    console.log(data);
  };
  useEffect(() => {
    fetching();
    //! this func will get called only once at the time of component loading/mounting. 
  }, []);
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

export default UseEffectTask3;
