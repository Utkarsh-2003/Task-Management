import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginImage from "../Image/login.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://task-management-api-wheat.vercel.app/login", {
        username,
        password,
      });
      localStorage.setItem("token", response.data.token);
      alert("Login Successfully!");
      navigate("/home");
    } catch (error) {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <>
      <div className="d-flex mx-5 ">
        <div>
          <img src={LoginImage} alt="Login Image" />
        </div>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
            <form onSubmit={handleLogin}>
              <h2 className="text-center mb-4">Login</h2>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid w-25 mx-auto">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
