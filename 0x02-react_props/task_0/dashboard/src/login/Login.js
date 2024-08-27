import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <>
      <div className="App-body">
        <p>Sign in to access the full dashboard</p>
        <div className="form">
          <label htmlFor="email">Email: </label>
          <input type="text" id="email" />
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" />
          <button type="button">OK</button>
        </div>
      </div>
    </>
  );
};

export default Login;

