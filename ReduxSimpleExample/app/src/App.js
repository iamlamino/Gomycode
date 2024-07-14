import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './Redux/Actions/actions';
import {colors} from './Components/colors';

export default function App() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const name = useSelector(state => state.name); 
  const  dispatch = useDispatch();

  const handleChangeName = () => {dispatch(changeName())};

  const changeColor = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
  };



  return (
    <div>
      <h1>Hi, my name is <span style={{ color: colors[currentColorIndex] }}>{name}</span></h1>
      <button onClick={changeColor}>Change color</button><span><button onClick={handleChangeName}>Change Name</button></span>
    </div>
  );
}
