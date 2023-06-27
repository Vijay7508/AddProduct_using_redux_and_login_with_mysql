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

  const      [username, setUserName] = useState('');
  const      [password, setPassword] = useState(''); 
 const navigate = useNavigate();
   
  function handleChange1(e)  {
    e.preventDefault();
      
    setUserName(e.target.value);
  };
  function handleChange2(e)  {
    e.preventDefault();
      
    setPassword(e.target.value);
  }; 
  async function mysubmit() 
    {

  const data={"username":username,"password":password};

     const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('http://localhost:4200/login', config)    
    const json = await response.json();
    console.log(json)
    valueContext.setUser(json[0].username);
    valueContext.setPassword(json[0].password);
    valueContext.setType(json[0].type);
    valueContext.setImage(json[0].image);





 

console.log(json);
if(json.length==0)
  {
   console.log("invalid user try again");
     
    }
else if(json[0].type=="admin")
 { console.log("welcome admin");
      navigate("/admin");
  }
else if(json[0].type=="customer")
 { console.log("customer ");
    localStorage.setItem("cname",username);
     navigate("/customer");
  }


    
}
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
          placeholder='Enter Your Name'
          value={username}
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
