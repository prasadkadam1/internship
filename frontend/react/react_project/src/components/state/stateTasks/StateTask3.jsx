// Toggle Text

import { useState } from "react";

// Show "Hello" by default and toggle it to "Goodbye" when a button is clicked.
let StateTask3 = () => {
  let [text, setText] = useState("Hello");
  return (
    <div>
      <h1>{text}</h1>
      <button
        onClick={() => {
          setText("Good Bye.!");
        }}
      >
        Change Text
      </button>
    </div>
  );
};
export default StateTask3;
