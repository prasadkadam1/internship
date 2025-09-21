import React, { useCallback, useState } from "react";
import UseCBChild from "./UseCBChild";

const UseCBIntroComp = () => {
  let [state, setState] = useState(0);
  let [state2, setState2] = useState(0);
  let func = useCallback(() => {}, [state2]);
  let a = 10;
  return (
    <div>
      <p>Parent</p>
      <button
        onClick={() => {
          setState((state += 1));
        }}
        className="bg-gray-700 text-white px-3"
      >
        inc state : {state}
      </button>
      <button
        onClick={() => {
          setState2((state2 += 1));
        }}
        className="bg-gray-700 text-white px-3"
      >
        inc state2 : {state2}
      </button>
      <br /> <br /> <hr /> <br /> <hr /> <br />
      <UseCBChild props={func}></UseCBChild>
    </div>
  );
};

export default UseCBIntroComp;
