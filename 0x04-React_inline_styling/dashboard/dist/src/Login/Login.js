import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <main role="main" className="login">
      <p>Please log in to access the complete dashboard</p>
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="button">Submit</button>
    </main>
  );
};

export default Login;

