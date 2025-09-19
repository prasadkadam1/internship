import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Contact from "./components/Contact";

[
  {
    path: "/home/about",
    element: <></>,
  },
];

let pathDefiner = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/help",
    element: <h1>Help</h1>,
  },
]);

const App = () => {
  return <RouterProvider router={pathDefiner}></RouterProvider>;
};

export default App;




// npm i react-router-dom