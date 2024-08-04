import React from "react";

const AllTask = ({ tasks }) => {
  return (
    <ol className="list-group list-group-numbered">
      {tasks.map((task, index) => (
        <li className="list-group-item" key={index}>
          {task.name}
        </li>
      ))}
    </ol>
  );
};

export default AllTask;
