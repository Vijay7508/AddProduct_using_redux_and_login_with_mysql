import React, { useState } from 'react';
import Axios from "axios";
import './App.css';

import {useNavigate} from 'react-router-dom';
import { Form,FormControl,Button,Container } from 'react-bootstrap'
import {  useContext } from "react";
import NoteContext from '../NoteContext/NoteContext';

         
export default function Login(props) {
  const valueContext=useContext(NoteContext);
  console.log(valueContext);

  const      [email, setEmail] = useState('');
  const      [password, setPassword] = useState(''); 
 const navigate = useNavigate();
   
  function handleChange1(e)  {
    e.preventDefault();
      
    setEmail(e.target.value);
  };
  function handleChange2(e)  {
    e.preventDefault();
      
    setPassword(e.target.value);
  }; 
  async function mysubmit() 
   
    // const response = Axios.post(' https://sakibapi.onrender.com/api/auth/login',{
      email,
      password
      
    })    
    console.log(response.data)
    
  return (

<>
<div className="login-page">
    <div className='background'>
    <form>

    <h2>Login Here</h2>
      <div className="form-group">
        <label htmlFor="username">Enter Name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder='Please Enter Email'
          value={email}
          onChange={handleChange1}
          required
        />
      </div>
      
     
      <div className="form-group">
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Enter Password'
          value={password}
          onChange={handleChange2}


          required
        />
        </div>
       
        <button type="button" onClick={mysubmit}>submit</button>
        </form>

  </div>

  </div>

   </>
                
  );
}
