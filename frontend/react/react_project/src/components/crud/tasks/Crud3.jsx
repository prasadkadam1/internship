import { useState } from "react";

let Crud3 = () => {
  let [state, setState] = useState({
    username: "",
    password: "",
    id: Date.now(),
    list: [
      {
        username: "abc",
        password: 1234,
        id: 394863248762387,
      },
    ],
  });
  let handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  let handleSubmit = (e) => {
    e.preventDefault();
    let tempObj = {
      username: state.username,
      password: state.password,
      id: state.id,
      // list : state.list //! it will create a nested unnecessary arrays.
    };
    setState({
      list: [...state.list, tempObj],
      username: "",
      password: "",
      id: Date.now(),
    });
  };
  console.log(state);
  return (
    <div>
      //! create operation
      <form action="">
        <input
          type="text"
          placeholder=""
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder=""
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Create new user</button>
      </form>
      //! read operation
      <div>
        {state.list.map((obj) => {
          return (
            <div key={obj.id}>
              <p>Username : {obj.username}</p>
              <p>Password : {obj.password}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Crud3;
