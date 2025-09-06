import { useState } from "react";

let EventTask1 = () => {
  let [count, setCount] = useState(0);
  let func = () => {
    setCount((count += 1));
  };
  return (
    <div>
      <h1>count : {count}</h1>
      {/* <button onClick="func()">Click</button> */}
      <button onClick={func} onDoubleClick={()=>{
        alert("button is double clicked")
      }}>Click</button>
    </div>
  );
};
export default EventTask1;
