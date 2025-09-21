import React, { useMemo, useState } from "react";

const UseMemoTask1 = () => {
  let [state1, setState1] = useState(0);
  let [state2, setState2] = useState(0);
  let checkState1 = () => {
    return state1 % 2 == 0 ? "even" : "odd";
  };
  //   let checkState2 = () => {
  //     console.log("Hello");
  //     let x = 0;
  //     while (x < 1000000000) {
  //       x++;
  //     }
  //     return state2 % 2 == 0 ? "even" : "odd";
  //   };
  //!   useMemo is used to memoize the values
  let checkState2 = useMemo(() => {
    console.log("Hello");
    let x = 0;
    while (x < 1000000000) {
      x++;
    }
    return state2 % 2 == 0 ? "even" : "odd";
  }, [state2]);
  return (
    <div>
      <h1>
        State1 : {state1} ({checkState1()})
      </h1>
      <button
        onClick={() => {
          setState1((state1 += 1));
        }}
        className="bg-gray-700 text-white p-2 rounded-lg"
      >
        Update State 1
      </button>{" "}
      <br /> <br /> <br />
      <h1>
        State2 : {state2} ({checkState2})
      </h1>
      <button
        onClick={() => {
          setState2((state2 += 1));
        }}
        className="bg-gray-700 text-white p-2 rounded-lg"
      >
        Update State 2
      </button>
    </div>
  );
};

export default UseMemoTask1;

// 10*10 = 100
// 2354*745 = ?

//  2354
// * 745
// --------
// 1753730

// 2354*745 = memoized value
