import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../Redux/taskSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    const newDescription = prompt("Edit task description:", task.description);
    if (newDescription !== null) {
      dispatch(editTask({ id: task.id, description: newDescription }));
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center custom">
      <span
        style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
        onClick={handleToggle}
      >
        {task.description}
      </span>
      <button className="btn btn-secondary btn-sm" onClick={handleEdit}>
        Edit
      </button>
    </li>
  );
};

export default Task;
