import React, { useState } from 'react'
import Axios from 'axios';
import './App.css';


const Register = () => {
    const [username, setUserName]= useState();
    const [email, setEmail]= useState();
    const [password, setPassword]= useState();
    const [file, setFile]= useState(null);
    console.log(file);

    function handleChange1(e)
    { setUserName(e.target.value); }

    function handleChange2(e)
    { setPassword(e.target.value); }



    function handleChange4(e)
    { setEmail(e.target.value); }

    function change3(e) {
        setFile(e.target.files[0]);  
        console.log(file)
    }

    async function mysubmit() 
    {
  
    const url = 'http://localhost:4200/register';
    const formData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    formData.append('email',email);

   
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
     const res = await Axios.post(url,formData,config);
     alert("The file is successfully uploaded");
     console.log(res.data);      




    }

  return (
    <>

    <div className="register-page">
    <div className='Small-background'>
    <form>

    <h2>Create an Account</h2>
      <div className="form-group">
        <label htmlFor="username">Enter Name</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange1}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Enter Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange4}

          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Enter Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange2}

          required
        />
        </div>
        <div className="form-group">
        <label>Upload Your Profile</label>
        <input type="file"
        placeholder='Upload Image'
        name="file"
          id="file"
          onChange={change3}
          required
        />
        <button type="submit" onClick={mysubmit}>Register</button>

        </div>
        </form>

  </div>

  </div>

       </>
  )
}

export default Register
