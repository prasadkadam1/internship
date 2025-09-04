import { useState } from "react";

let StateTask1 = () => {
  //! Javascript
  //   let a = 0;
  //   let useState = (x) => {
  //       let func = ()=>{}
  //       let temp = [x, func];
  //       return temp
  //   };
  //   let state = useState(0);
  //   console.log(state); // [0 , F]
  //   let [a, b] = state;
  //   console.log(a, b);

  //   let [count,setCount] = useState(0);
  //   let [state,setState] = useState(0);
  //   let [color,setColor] = useState(0);
  //   let [salary,setSalary] = useState(0);
  //   console.log(a, b);

  //   let map = (cb) => {
  //     let temp = [];
  //     {
  //       let rv = cb();
  //       temp.push(rv);
  //     }
  //     return temp;
  //   };

  //   let val = [].map(() => {});
  //   console.log(val);

  let [state, setState] = useState(0);

  return (
    //! JSX
    <div>
      <p>Count : {state}</p>
      <button
        onClick={() => {
          // ! wrong(cant directly update the state). to update the current state we must take the help of setState function
          // !  state++;
          // ===============
          setState((state += 1));
        }}
      >
        Click
      </button>
      {/* <p>Counter : {a} </p> */}
      {/* //!  it will not work because change in value of a variable increases the count but it does not rerenders the component to update the ui. */}
      {/* <button
        onClick={() => {
          a += 1;
          console.log(a);
        }}
      >
        Click
      </button> */}
    </div>
  );
};

export default StateTask1;
