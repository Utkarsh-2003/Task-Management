import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../Components/Landing";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Home from "../Components/Home";
import NewTask from "../Components/NewTask";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/new" element={<NewTask />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
