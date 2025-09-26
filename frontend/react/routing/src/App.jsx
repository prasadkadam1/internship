import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc, res } from "./main";

const App = () => {
  let data = useSelector((state) => {
    return state.counterRed;
  });
  let dispatch = useDispatch()
  return (
    <div>
      <p>count : {data}</p>
      <button onClick={()=>{dispatch(inc())}}>Inc</button>
      <button onClick={()=>{dispatch(dec())}}>Dec</button>
      <button onClick={()=>{dispatch(res()  )}}>Res</button>
    </div>
  );
};

export default App;
