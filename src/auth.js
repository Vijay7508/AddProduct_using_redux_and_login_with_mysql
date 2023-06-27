import axios from 'axios';
import React, { useState } from 'react';


const LoginForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  console.log(email);
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Perform API request to authenticate user
    try {
      const response = await axios.post('https://sakibapi.onrender.com/api/auth/register', {
        name,
        email,
        password
      });

      // Handle the successful registration response as needed
      console.log(response.data.token);
    } catch (error) {
      // Handle error cases, such as displaying an error message
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <input
        type="name"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default LoginForm;
