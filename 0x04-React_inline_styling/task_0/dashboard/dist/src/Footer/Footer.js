import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>
        Copyright &copy; {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
};

export default Footer;

