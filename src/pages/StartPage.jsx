import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import './startpage.css';
import {ReactComponent as Settings} from '../assets/svg/settings.svg';

function StartPage () {
  return (
    <>
      <Header />
      <main className="content">
        <div className="content-wrapper">
          <Settings class="content__icon"/>
          <p className="content__description">
            Configure repository connection
            <br/>
            and synchronization settings
          </p>
          <Button btnColor="#FFCC00" label="Open Settings" />
        </div>
      </main>
      <Footer />
    </>
   );
}

export default StartPage ;