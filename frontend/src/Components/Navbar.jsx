import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      {token ? (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 border rounded">
            <div className="container-fluid">
              <h2 className="mt-2">Task Management Application</h2>
              <Link to="/home" className="text-decoration-none">
                <div className="mx-5 navbar-brand">All Tasks</div>
              </Link>
              <Link to="/new" className="text-decoration-none">
                <div className="navbar-brand">Add Task</div>
              </Link>
              <div className="ms-auto">
                <button className="btn btn-primary" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 border rounded">
            <div className="container-fluid">
              <h2 className="mt-2">Task Management Application</h2>
              <div className="ms-auto">
                <Link to="/login" className="btn btn-dark mx-2 mb-2 mt-1">
                  Login
                </Link>
                <Link to="/register" className="btn btn-dark mx-2 mb-2 mt-1">
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Navbar;
