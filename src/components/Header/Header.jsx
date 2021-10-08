import React from 'react';
import Button from  '../Button/Button';
import './header.css';
import {usePath, navigate} from 'hookrouter';
import {ReactComponent as GearIcon} from '../../assets/svg/gear.svg';

const Header = () => {
  const path = usePath();
  return ( 
    <header className="header">
      <div className="header__content">
        <div className="container">
          <div className="header__logo">
            School CI server
          </div>
          { path !== '/settings' && <div className="header__icon">
            <Button type="accent" size="small" onClick={() => navigate('/settings')}>
              <GearIcon />
              <span className="icon-label">Settings</span>
            </Button>
          </div>}
        </div>
      </div>
    </header>
   );
}

export default Header ;