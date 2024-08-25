import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>
        &copy; {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
};

export default Footer;

