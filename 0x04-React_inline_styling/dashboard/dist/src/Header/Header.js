import React from 'react';
import './Header.css';
import logo from '../assets/holberton-logo.jpg';

const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt='Holberton Logo' />
      <h1>School Dashboard</h1>
    </header>
  );
};

export default Header;

