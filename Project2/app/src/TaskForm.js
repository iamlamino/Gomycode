import React, { useState, useEffect } from "react";

const TaskForm = ({ addTask, currentTask, updateTask }) => {
  const [task, setTask] = useState({ name: "", description: "" });

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    } else {
      setTask({ name: "", description: "" });
    }
  }, [currentTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      if (currentTask) {
        updateTask(task);
      } else {
        addTask(task);
      }
      setTask({ name: "", description: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Task Name"
          value={task.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="description"
          placeholder="Task Description"
          value={task.description}
          onChange={handleChange}
          required
        />
      </div>
      <button
        style={{ marginTop: "12px", width: "100px" }}
        type="submit"
        className="btn btn-primary"
      >
        {currentTask ? "Update Task" : <i className="bi bi-plus"></i>}
      </button>
    </form>
  );
};

export default TaskForm;
