import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
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
            <div className="settings-form__field">
              <label className="settings-form__label" htmlFor="repo">GitHub repository <span className="settings-form__required">*</span></label>
              <input className="settings-form__input" type="text" placeholder="user-name/repo-name" id="repo" required />
            </div>
            <div className="settings-form__field">
              <label className="settings-form__label" htmlFor="command">Build command <span className="settings-form__required">*</span></label>
              <input className="settings-form__input" type="text" placeholder="enter command" id="command" required />
            </div>
            <div className="settings-form__field">
              <label className="settings-form__label" htmlFor="branch">Main branch</label>
              <input className="settings-form__input" type="text" placeholder="branch name" id="branch" />
            </div>
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