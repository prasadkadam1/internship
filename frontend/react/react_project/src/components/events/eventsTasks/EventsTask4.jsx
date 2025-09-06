//? Key Press Display: Show which key the user presses inside an input box.
//? Enter Key Action: When pressing Enter inside an input, display the text below.
// Character Limit: Show a warning if the user types more than 20 characters.

import { useState } from "react";

let EventsTask4 = () => {
  let [task1State, setTask1State] = useState("");
  let [task2State, setTask2State] = useState("");
  let [task3State, setTask3State] = useState("");
  return (
    <div>
      <form action="">
        {/* for task 1 */}
        <input
          type="text"
          onChange={(e) => {
            setTask1State(e.target.value);
          }}
        />
        <p>Task1 text : {task1State}</p>
        {/* for task 2 */}

        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              setTask2State(e.target.value.trim());
            }
          }}
        />
        <p>task2 text : {task2State}</p>

        {/* for task 3 */}
        <input
          type="text"
          onChange={(e) => {
            if (task3State.length < 20) {
              setTask3State(e.target.value);
            } else {
              alert("Stack Overflow");
            }
          }}
        />
      </form>
    </div>
  );
};
export default EventsTask4;
