
import React from "react";
import './../styles/App.css';
import {  useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from '../redux/action';


const App = () => {

  const { name, email } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" onChange={(e) => dispatch(updateName(e.target.value))} />
        <br />
        <label htmlFor="name">Email</label>
        <input type="email" onChange={(e) => dispatch(updateEmail(e.target.value))} />
      </div>
      <div className="output">
        <p>Current value in store:</p>
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default App
