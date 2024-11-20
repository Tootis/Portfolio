import React from 'react';
import './FooterStyle.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} - Mon Portfolio</p>
    </footer>
  );
};

export default Footer;
