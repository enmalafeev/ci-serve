import React from 'react';
import Button from  '../Button/Button';
import './header.css';
import {ReactComponent as GearIcon} from '../../assets/svg/gear.svg';

const Header = () => {
  return ( 
    <header className="header">
      <div className="header__content">
        <div className="container">
          <div className="header__logo">
            School CI server
          </div>
          <Button type="accent" size="small">
            <GearIcon />
            <span className="icon-label">Settings</span>
          </Button>
        </div>
      </div>
    </header>
   );
}

export default Header ;