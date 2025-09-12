import React, { useContext } from "react";
import { helper } from "../ContextApi/AppContext";

const Check = () => {
  let { state, setState, a, c, b } = useContext(helper);
//   console.log(value);

  return (
    <div>
      <h1
        onClick={() => {
          setState((state += 1));
        }}
      >
        count : {state}
      </h1>
    </div>
  );
};

export default Check;
