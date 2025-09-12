import React, { useContext } from "react";
import { context } from "../ContextApi/AppContext";

const Check = () => {
  let data = useContext(context);
  console.log(data);
  return <div>Check</div>;
};

export default Check;
