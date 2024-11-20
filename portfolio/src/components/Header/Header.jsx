import React from 'react';
import { useLocation } from 'react-router-dom';
import './HeaderStyle.scss';

const Header = () => {
  const location = useLocation();

    return (
      <header>
        <nav className='Navigation'> 
          <a href="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</a>
          <a href="/about" className={location.pathname === '/about' ? 'active' : ''}>À Propos de moi</a>
          <a href="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projets</a>
        </nav>
      </header>
    );
  };

export default Header;