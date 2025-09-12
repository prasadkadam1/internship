import React, { useState } from "react";
import { createContext } from "react";
export let helper = createContext();

const AppContext = (kyBhetl) => {
  //   console.log(props.children);
  console.log(kyBhetl);
  let a = 10;
  let b = 20;
  let c = 30;
  let [state, setState] = useState(0);
  return (
    <div>
      <helper.Provider value={{ a, b, c, state, setState }}>{kyBhetl.children}</helper.Provider>
    </div>
  );
};

export default AppContext;
