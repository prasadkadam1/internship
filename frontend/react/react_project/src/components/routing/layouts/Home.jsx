import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="h-[80vh] bg-blue-200">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
