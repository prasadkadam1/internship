import { useState } from "react";

// Secret Code Detector: If the user types the word "banana" inside an input, show a dancing banana 🍌.
let EventsTask6 = () => {
  let [state, setState] = useState("");
  return (
    <div>
      <form action="">
        <input
          type="text"
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </form>
      <span style={{fontSize : state == "apple" ? "50px" : "16px"}}>🍎</span>
      <span style={{fontSize : state == "pineapple" ? "50px" : "16px"}}>🍍</span>
      <span style={{fontSize : state == "orange" ? "50px" : "16px"}}>🍊</span>
      <span style={{fontSize : state == "banana" ? "50px" : "16px"}}>🍌</span>
      <span style={{fontSize : state == "kiwi" ? "50px" : "16px"}}>🥝</span>
    </div>
  );
};
export default EventsTask6;
