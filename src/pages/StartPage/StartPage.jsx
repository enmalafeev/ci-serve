import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import { navigate } from 'hookrouter';
import './startpage.css';
import {ReactComponent as Settings} from '../../assets/svg/settings.svg';

function StartPage () {
  return (
    <div className="wrapper">
      <Header />
      <main className="content">
        <div className="content-wrapper">
          <Settings className="content__icon" />
          <p className="content__description">
            Configure repository connection
            <br/>
            and synchronization settings
          </p>
          <Button type="primary" onClick={() => navigate('/settings')}>
            <span>Open Settings</span>
          </Button>
        </div>
      </main> 
      <Footer />
    </div>
   );
}

export default StartPage ;