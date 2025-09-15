import React, { useEffect, useState } from "react";
// Timer Starter
// Start a timer when the component mounts.
// Display how many seconds the component has been visible.
const UseEffectTask5 = () => {
  let [time, settime] = useState(0);
  useEffect(() => {
    // if(state == 'show'){

    // }
    setInterval(() => {
      settime((time += 1));
    }, 1000);
  }, []);
  return (
    <div>
      <h1>UseEffectTask5</h1>
      <h1>duration : {time}</h1>
    </div>
  );
};

export default UseEffectTask5;
