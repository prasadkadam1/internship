import React from "react";
import UseCBChild from "./UseCBChild";
import { useState , useCallback} from "react";

const UseCBIntroComp = () => {
  let [state, setstate] = useState(0);
  let [state2, setstate2] = useState(0);
  console.log("parent");
  // let val = ()=>{};
  let val = useCallback(()=>{}, [state2]);
  return (
    <div>
      <button
        onClick={() => {
          setstate((state += 1));
        }}
        className="bg-[olive] px-3 text-white"
      >
        state1 : {state}
      </button>
          <button
        onClick={() => {
          setstate2((state2 += 1));
        }}
        className="bg-[olive] px-3 text-white"
      >
        state2 : {state2}
      </button>
      <UseCBChild props={val}></UseCBChild>
    </div>
  );
};

export default UseCBIntroComp;
