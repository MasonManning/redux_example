import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from './actions'

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
     Redux Test
     <br/>
     <button onClick={() => dispatch(increment())}>+</button>
     <button onClick={() => dispatch(decrement())}>-</button>
     {counter}
    </div>
  );
}

export default App;
