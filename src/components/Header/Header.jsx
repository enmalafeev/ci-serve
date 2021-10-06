import React from 'react';
import Button from  '../Button/Button';
import './header.css';

const Header = () => {
  return ( 
    <header className="header">
      <div className="header__content">
        <div className="container">
          <div className="header__logo">
            School CI server
          </div>
          <Button label="Settings" btncolor="#E6E6E6" />
        </div>
      </div>
    </header>
   );
}

export default Header ;