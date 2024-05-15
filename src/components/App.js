
import React from "react";
import './../styles/App.css';
import {  useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from '../redux/action';


const App = () => {

  const { name, email } = useSelector(state => state);
  const dispatch = useDispatch();

  return ( 
    <div>
        {/* Do not remove the main div */}
        <label for="name">Name:</label>
      <input type="text" id="name" onChange={(e)=>dispatch(updateName(e.target.value))}>
      </input>
      <label for="email">Email:</label>
      <input type="email" id="email" onChange={(e)=>dispatch(updateEmail(e.target.value))}>
      </input>
      <div>
        Current values in store:
        <div>Name - {name}</div>
        <div>Email - {email}</div>
      </div>
    </div>
  )
}

export default App
