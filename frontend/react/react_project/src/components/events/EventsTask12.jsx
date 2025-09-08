// Password Judge: When typing a password, show funny messages:
// Weak → "💤 Come on, even my grandma can guess this."

import { useEffect, useState } from "react";

// Strong → "💪 Now that’s a tough password!".
const EventsTask12 = () => {
  let [msg, setMsg] = useState("Start creating new password");
  let [state, setState] = useState("");
  let handleChange = (e) => {
    setState(e.target.value);
  };
  useEffect(() => {
    console.log("useEffect called");
    if (state.includes("@")) {
      setMsg("you are doing good");
      if (state.length > 8) {
        setMsg("this is a great step ahead");
        if (/\d/.test(state)) {
          setMsg("💪 Now that’s a tough password!");
        }
      }
    } else {
      setMsg("💤 Come on, even my grandma can guess this.");
    }
  }, [state]);

  if (/\d/.test(state)) {
    console.log("matching");
  }
  return (
    <div>
      <form action="">
        {/* <input type="text" pattern="\d*" onChange={handleChange} /> */}
        <input
          type="text"
          title="Only numbers allowed"
          required
          onChange={(e)=>{
            if(/^[0-9]*$/.test(e.target.value)){
              console.log("patter is still matching"); 
            }else{
              alert("wrong pattern")
            }
          }}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
      <p>password strength : {msg}</p>
    </div>
  );
};
export default EventsTask12;
