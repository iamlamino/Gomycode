import React from "react";

const TaskItem = ({ task, completeTask, deleteTask, editTask }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button
        style={btnStyle}
        onClick={() => completeTask(task.id)}
        className="btn btn-success"
        title={task.completed ? "Undo" : "Complete"}
      >
        {task.completed ? (
          <i className="bi bi-arrow-counterclockwise"></i>
        ) : (
          <i className="bi bi-check"></i>
        )}
      </button>
      <button
        style={btnStyle}
        onClick={() => editTask(task)}
        className="btn btn-warning"
        title="Edit"
      >
        <i className="bi bi-pencil"></i>
      </button>
      <button
        style={btnStyle}
        onClick={() => deleteTask(task.id)}
        className="btn btn-danger"
        title="Delete"
      >
        <i className="bi bi-trash"></i>
      </button>
    </div>
  );
};
const btnStyle = {
  color: "white",
  width: "80px",
  backgroundColor: "None",
};

export default TaskItem;
