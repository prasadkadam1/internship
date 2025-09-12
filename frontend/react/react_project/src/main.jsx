import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import React from "react";
import AppContext from "./components/ContextApi/AppContext.jsx";
console.log(App);

createRoot(document.getElementById("root")).render(
  <AppContext name="Prasad">
    {/* children */}
    <App />
  </AppContext>
);
