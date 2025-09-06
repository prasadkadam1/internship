import { useState } from "react";

// Mischievous Button: Make a button that runs away (moves position randomly) every time you try to hover over it.
let EventsTask5 = () => {
  let [state, setstate] = useState(100);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form action="">
        <input type="text" /> <br /> <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onMouseOver={(e) => {
              setstate(Math.random() * 200);
              e.clientX = state;
              e.clientY = state;
              console.log(e.clientX);
              console.log(e.clientY);
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default EventsTask5;
