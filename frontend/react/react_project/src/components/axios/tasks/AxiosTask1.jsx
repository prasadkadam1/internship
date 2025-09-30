import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosTask1 = () => {
  let [count, setCount] = useState(0);
  useEffect(() => {
    axios.get("https://api.github.com/users").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count += 1));
        }}
      >
        Click : {count}
      </button>
    </div>
  );
};

export default AxiosTask1;
