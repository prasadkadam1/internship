import { useState } from "react";

let StateTask9 = () => {
  let [state, setState] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setState((state += 1));
        }}
      >
        Click
      </button>
      <h1>count : {state}</h1>
    </div>
  );
};

export default StateTask9;
