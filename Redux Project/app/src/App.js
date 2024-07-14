import React from 'react';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Todo List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
