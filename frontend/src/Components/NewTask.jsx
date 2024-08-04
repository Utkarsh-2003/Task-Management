import React, { useState } from "react";

const NewTask = () => {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: taskName }),
    })
      .then((res) => res.json())
      .then((newTask) => setTasks((prevTasks) => [...prevTasks, newTask]))
      .catch((err) => console.error("Error adding task:", err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskName);
    alert("Task Added Successfully!");
    setTaskName("");
  };

  return (
    <>
      <div className="mx-5">
        <h1>Add New Tasks</h1>
        <div className="p-3 border rounded shadow w-50 bg-light">
          <form onSubmit={handleSubmit}>
            <div style={{ width: "500px" }} className="d-flex mx-auto mt-3">
              <input
                type="text"
                value={taskName}
                className="form-control mb-3"
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
                style={{ borderColor: "#198754" }}
                required
              />
              <button type="submit" className="w-25 h-25 btn btn-success mx-3">
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewTask;
