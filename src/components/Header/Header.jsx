import React from 'react';
import './header.css';

const Header = () => {
  return ( 
    <header className="header">
      <div className="header__content">
        <div className="container">
          <div className="header__logo">
            School CI server
          </div>
          <a href="#">
            Settings
          </a>
        </div>
      </div>
    </header>
   );
}

export default Header ;