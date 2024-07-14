import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, setFilter } from '../Redux/taskSlice';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
        <div className='justify-content-center'>
        <div className='mb-3 mt-3 text-center '>Click on Task to mark as done or undone</div>
        </div>
        
      <div className="mb-3">
        <button
          className={`btn btn-${filter === 'all' ? 'primary' : 'outline-primary'} me-2`}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </button>
        <button
          className={`btn btn-${filter === 'done' ? 'primary' : 'outline-primary'} me-2`}
          onClick={() => dispatch(setFilter('done'))}
        >
          Done
        </button>
        <button
          className={`btn btn-${filter === 'notDone' ? 'primary' : 'outline-primary'}`}
          onClick={() => dispatch(setFilter('notDone'))}
        >
          Not Done
        </button>
      </div>
      <ul className="list-group">
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
