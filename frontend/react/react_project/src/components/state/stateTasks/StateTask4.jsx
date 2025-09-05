// Hide/Show Paragraph

// A button should hide or show a paragraph when clicked.
import { useState } from "react";

let StateTask4 = () => {
  let [state, setState] = useState(true);
  console.log(state);
  return (
    <div>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        Click
      </button>
      <p
        style={{
          background: "gray",
          padding: "20px",
          margin: "20px",
          display: state ? "block" : "none",
        }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, id
        voluptatibus? Corrupti recusandae est quidem fuga minima sapiente ab
        atque.
      </p>
    </div>
  );
};
export default StateTask4;
