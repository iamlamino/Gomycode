// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import "./App.css"

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="container mt-5">
          <h1 className="text-center">Todo List</h1>
          <AddTask />
          <ListTask />
        </div>
      </PersistGate>
    </Provider>
  );
};

export default App;
