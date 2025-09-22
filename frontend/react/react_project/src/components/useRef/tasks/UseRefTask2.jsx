import React, { useRef } from "react";
// Create a text input and a button. When the button is clicked, the input should get focused using useRef.
const UseRefTask2 = () => {
  let inp = useRef();
  let handleClick = () => {
    inp.current.autofocus = true;
    console.log(inp.current.focus());
  };
  return (
    <div>
      <input ref={inp} className="border-2 border-black" type="text" /> <br />{" "}
      <br />
      <button onClick={handleClick} className="border-2 border-black">
        Click
      </button>
    </div>
  );
};

export default UseRefTask2;
