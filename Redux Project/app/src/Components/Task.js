import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask,deleteTask } from '../Redux/taskSlice';
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
    }}
    const handleDelete = () =>{
        dispatch(deleteTask(task.id))
      };
    
  

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center custom"         onClick={handleToggle}
>
      <span
        style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
      >
        {task.description}
      </span>
      <button className="btn btn-success btn-sm" onClick={handleEdit}>
        Edit
      </button>
      <span>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Delete 
      </button>
        </span>
    </li>
  );
};

export default Task;
