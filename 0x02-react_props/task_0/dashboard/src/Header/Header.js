import React from 'react';
import './Header.css'
import logo from './logo.jpg';

function Header(){
    return(
        <header className="App-header">
        <img src={logo} alt="School-logo" />
        <h1>
        School Dashboard
        </h1>
      </header>
    )
}

export default Header
