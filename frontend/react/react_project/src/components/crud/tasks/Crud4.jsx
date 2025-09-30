import React, { use, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Crud4 = () => {
  let [state, setState] = useState({
    uName: "",
    pass: "",
    list: [],
    id: uuidv4(),
  });
  let handleChange = (e) =>
    setState({ ...state, [e.target.name]: e.target.value });

  let handleSubmit = (e) => {
    e.preventDefault();
    setState({
      uName: "",
      pass: "",
      id: uuidv4(),
      list: [
        ...state.list,
        { uName: state.uName, pass: state.pass, id: state.id },
      ],
    });
  };
  let handleDelete = (id) => {
    setState({ ...state, list: state.list.filter((user) => user.id != id) });
  };
  let handleUpdate = (id) => {
    let userToUpdate = state.list.find((user) => user.id == id);
    setState({ ...state, list: state.list.filter((user) => user.id != id) , uName : userToUpdate.uName, pass : userToUpdate.pass});
  };
  return (
    <div className="p-5">
      <form action="">
        <input
          type="text"
          name="uName"
          value={state.uName}
          onChange={handleChange}
          className="bg-black text-white border-none px-3 py-1"
        />{" "}
        <br /> <br />
        <input
          type="text"
          name="pass"
          value={state.pass}
          onChange={handleChange}
          className="bg-black text-white border-none px-3 py-1"
        />{" "}
        <br /> <br />
        <button
          onClick={handleSubmit}
          className="bg-blue-700 text-white px-3 text-xl py-1"
        >
          Create
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>password</th>
            <th>Update</th>
            <th>delete</th>
          </tr>
        </thead>
        {state.list.length > 0 &&
          state.list.map((user) => {
            return (
              <tbody key={user.id}>
                <tr>
                  <td>Username : {user.uName}</td>
                  <td>Password : {user.pass}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleUpdate(user.id);
                      }}
                      className="bg-green-800 text-white px-3 text-xl py-1"
                    >
                      Click
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                      className="bg-red-500 text-white px-3 text-xl py-1"
                    >
                      Click
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Crud4;
