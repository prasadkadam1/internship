import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./layouts/Login";
import { RouterProvider } from "react-router-dom";
import Home from "./layouts/Home";
import Products from "./layouts/Products";
import Cart from "./layouts/Cart";
import Payments from "./layouts/Payments";

const RoutingIntro = () => {
  let paths = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/home",
      element: <Home></Home>,
      children: [
        {
          path: "/home",
          element: <Products></Products>,
        },
        {
          path: "/home/cart",
          element: <Cart></Cart>,
        },
        {
          path: "/home/payments",
          element: <Payments></Payments>,
        },
      ],
    },
  ]);
  return <RouterProvider router={paths}></RouterProvider>;
};

export default RoutingIntro;
