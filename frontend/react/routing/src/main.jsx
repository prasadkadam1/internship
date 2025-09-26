import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

let counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    inc: (state, action) => (state += 1),
    dec: (state, action) => (state -= 1),
    res: (state, action) => 0,
  },
});
export let {inc, dec, res} = counterSlice.actions
let store = configureStore({
  reducer : {
    counterRed : counterSlice.reducer
  }
})
createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
