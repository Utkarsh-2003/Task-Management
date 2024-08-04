import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AllTask from "../Components/AllTask";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetch("https://task-management-api-utk.vercel.app/tasks")
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((err) => console.error("Error fetching tasks:", err));
    }
  }, [navigate]);

  if (!localStorage.getItem("token")) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-3 w-50 border rounded shadow bg-light p-5">
      <h1 className="mb-3">List of All Tasks</h1>
      <AllTask tasks={tasks} />
    </div>
  );
};

export default Home;
