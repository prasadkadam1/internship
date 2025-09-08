import { useState } from "react";

const Crud3 = () => {
  let [uName, setUName] = useState("");
  let [pass, setPass] = useState("");
  let [list, setList] = useState([{}, {}, {}]);
  const handleClick = (e) => {
    e.preventDefault();
    let temp = {
      username: uName,
      password: pass,
    };
    setList([...list, temp]);
    console.log(list);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(e) => {
            setUName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button onClick={handleClick}>Click</button>
      </form>
    </div>
  );
};
export default Crud3;
