// Change Background Color

import { useState } from "react";

// Create two buttons: one makes the background "lightblue", the other makes it "yellow".
let StateTask5 = () => {
  let [color, setColor] = useState("lightblue");
  return (
    <div style={{ height: "100vh", background: color }}>
      <button
        onClick={() => {
          setColor("lightblue");
        }}
      >
        LightBlue
      </button>
      <button
        onClick={() => {
          setColor("yellow");
        }}
      >
        Yellow
      </button>
    </div>
  );
};
export default StateTask5;
