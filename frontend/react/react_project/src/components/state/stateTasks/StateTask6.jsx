// Input Box
// Create an input box that updates and displays the text you type in real-time
import { useEffect, useState } from "react";

let StateTask6 = () => {
  let [state, setState] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <h1>{state}</h1>
    </div>
  );
};
export default StateTask6;
