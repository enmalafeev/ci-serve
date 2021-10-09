import React from 'react';
import Button from '../Button/Button';
import './buildHeader.css';
import { navigate } from 'hookrouter';
import {ReactComponent as PlayIcon} from '../../assets/svg/play.svg';
import {ReactComponent as GearIcon} from '../../assets/svg/gear.svg'

function BuildHeader() {
  return (
    <header className="build-header">
      <div className="container">
        <h2 className="build-header__title">philip1967/my-awesome-repo</h2>
        <div className="button-group">
          <Button type="accent" size="small">
            <PlayIcon />
            <span className="icon-label">Run build</span>
          </Button>
          <div className="button-group__settings-btn">
            <Button type="accent" size="small" onClick={() => navigate('/settings')}>
              <GearIcon />
            </Button>
          </div> 
        </div>
      </div>
    </header>
   );
}

export default BuildHeader;