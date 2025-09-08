import { useState } from "react";

let Crud1 = () => {
  let [username, setUsername] = useState("");
  let [list, setList] = useState([]);
  let handleChange = (e) => {
    setUsername(e.target.value);
  };
  let handleCreate = (e) => {
    e.preventDefault();
    setList([...list, username]);
    console.log(list);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <button onClick={handleCreate}>Create</button>
      </form>
    </div>
  );
};
export default Crud1;

// crud using useState
// crud using useReducer
// crud using axios with api
// crud using redux toolkit
// crud using json server
