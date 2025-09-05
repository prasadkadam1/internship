import { useState } from "react";

// Use buttons to increase or decrease the font size of a paragraph.
let StateTask7 = () => {
  let [state, setState] = useState(16);
  return (
    <div>
      <button
        onClick={() => {
          setState((state += 1));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setState((state -= 1));
        }}
      >
        -
      </button>
      <p style={{ fontSize: state }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, aut
        doloremque? Dolorem fugiat nemo ducimus? Architecto recusandae placeat
        nulla pariatur?
      </p>
    </div>
  );
};
export default StateTask7;
