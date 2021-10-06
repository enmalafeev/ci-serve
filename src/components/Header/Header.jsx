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
          <Button label="Settings" btnColor="#F0F2F3" />
        </div>
      </div>
    </header>
   );
}

export default Header ;