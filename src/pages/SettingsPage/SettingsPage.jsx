import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import './settings.css';

function SettingsPage() {
  return ( 
    <div className="wrapper">
      <Header />
      <main className="settings">
        <div className="settings__wrapper">
          <h3 className="settings__title">Settings</h3>
          <p className="settings__description">Configure repository connection and synchronization settings.</p>
          <form action="" className="settings-form">
            <Input label="GitHub repository *" placeholder="user-name/repo-name" required />
            <Input label="Build command *" placeholder="enter command" required />
            <Input label="Main branch" placeholder="branch name"/>
            <div className="settings-form__field settings-form--row">
              <label className="settings-form__label" htmlFor="sync">Synchronize every</label>
              <input className="settings-form__input" type="number" id="sync" />
              <p className="settings-form__caption">minutes</p>
            </div>
            <div className="settings-form__field settings-form--row settings-form--narrow">
              <Button type="primary">
                <span>Save</span>
              </Button>
              <Button type="accent">
                <span>Cancel</span>
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
   );
}

export default SettingsPage;