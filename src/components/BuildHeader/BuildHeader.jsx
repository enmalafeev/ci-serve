import React from 'react';
import Button from '../Button/Button';
import './buildHeader.css';
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
          <Button type="accent" size="small">
            <GearIcon />
          </Button>
        </div>
      </div>
    </header>
   );
}

export default BuildHeader;