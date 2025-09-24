import React, { useReducer } from "react";
// Manage a form with two fields (name and email) using useReducer.
// Display the entered data below the form.

const UseReducerTask2 = () => {
  let initialState = {
    name: "",
    email: "",
    id: Date.now(),
    list: [],
  };

  let reducer = (state, action) => {
    switch (action.method) {
      case "updateProp":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };

      case "updateList":
        return {
          list: [...state.list, action.payload],
          name: "",
          email: "",
          id: Date.now(),
        };

      default:
        return state;
    }
  };

  let [state, dispatch] = useReducer(reducer, initialState);
  let { name, email, id, list } = state;

  let handleChange = (e) => {
    dispatch({
      method: "updateProp",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: state.name,
      email: state.email,
      id: state.id,
    };
    if (state.name && state.email) {
      dispatch({
        method: "updateList",
        payload: obj,
      });
    }else{
        alert('Please fill all the fields.!')
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center text-olive-800">
        User Form
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-5 space-y-4"
      >
        <input
          type="text"
          className="w-full rounded-md px-3 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive-500"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Enter name"
        />

        <input
          type="email"
          className="w-full rounded-md px-3 py-2 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-olive-500"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
        />

        <button
          type="submit"
          className="w-full bg-olive-600 hover:bg-olive-700  py-2 rounded-md shadow-md transition"
        >
          Create
        </button>
      </form>

      <div className="mt-6">
        {list.length > 0 && (
          <h2 className="text-xl font-semibold mb-3">User List</h2>
        )}
        <div className="space-y-4">
          {list.map((val) => {
            return (
              <div
                key={val.id}
                className="bg-gray-100 shadow-sm p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-gray-800">{val.name}</p>
                  <p className="text-gray-600">{val.email}</p>
                </div>
                <div className="space-x-2">
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Update
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600">
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseReducerTask2;
