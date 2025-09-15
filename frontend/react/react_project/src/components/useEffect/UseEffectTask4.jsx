// rafce (react arrow function component export)
import React, { useEffect, useState } from "react";
const UseEffectTask4 = () => {

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("interval");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("interval stopped");
    };
    //! what are all the task/background processes you want to stop/clear while leaving the page, you can clear them in this function which isn returned from useEffect hook
  }, []);
  return (
    <div>
      <h1>task 4 </h1>
    </div>
  );
};

export default UseEffectTask4;
