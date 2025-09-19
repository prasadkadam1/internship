import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  let handleLogin = (e) => {
    e.preventDefault();
    if (true) {
      navigate("/home");
    } else {
      alert("wrong credentials");
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form action="">
        <input type="text" className="border-[1px] border-[black]" />
        <input type="text" className="border-[1px] border-[black]" />
        {/* <Link to="/home">Login</Link> */}
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
