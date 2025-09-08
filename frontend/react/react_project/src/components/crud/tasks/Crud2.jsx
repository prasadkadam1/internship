import { useState } from "react";
const Crud2 = () => {
  let [uName, setUName] = useState("");
  let [pass, setPass] = useState("");
  let [list, setList] = useState([]);

  const handleCreate = (e) => {
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
          placeholder="Username"
          onChange={(e) => {
            setUName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        <button onClick={handleCreate}>Create</button>
      </form>
    </div>
  );
};
export default Crud2;
