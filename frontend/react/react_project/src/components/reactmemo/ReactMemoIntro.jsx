import React, { useState } from "react";
import ReactMemochild from "./ReactMemochild";

const ReactMemoIntro = () => {
  let [state1, setState1] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setState1((state1 += 1));
        }}
        className="bg-gray-700 text-white rounded-sm px-5"
      >
        INC state : {state1}
      </button>
      <ReactMemochild></ReactMemochild>
    </div>
  );
};

export default ReactMemoIntro;
