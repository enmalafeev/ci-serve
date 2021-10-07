import React from 'react';
import './buildCard.css';
import {ReactComponent as StatusIcon} from '../../assets/svg/done.svg';
import {ReactComponent as CommitIcon} from '../../assets/svg/commit.svg';
import {ReactComponent as UserIcon} from '../../assets/svg/user.svg';
import {ReactComponent as CalendarIcon} from '../../assets/svg/calendar.svg';
import {ReactComponent as WatchIcon} from '../../assets/svg/watch.svg';


function BuildCard() {
  return ( 
    <div className="build-card-container">
      <div className="build-card">
        <div className="build">
          <div className="build__status">
            <StatusIcon />
          </div>
          <div className="build-general-info">
            <div className="build__header">
              <span className="build__number">#1368</span>
              <p className="build__title">add documentation for postgres scaler</p>
            </div>
            <div className="build-info">
              <div className="build-repo">
                <div className="build-repo__icon">
                  <CommitIcon className="build-icon" />
                </div>
                <p className="build-repo__branch">master</p>
                <p className="build-repo__hash">9c9f0b9</p>
              </div>
              <div className="build-commiter">
                <div className="build-commiter__icon">
                  <UserIcon className="build-icon" />
                </div>
                <p className="build-commiter__name">Philip Kirkorov</p>
              </div>
            </div>
          </div>
          <div className="build-time">
            <div className="build-date">
              <div className="build-time__icon">
                <CalendarIcon className="build-icon" />
              </div>
              <p className="build-time__date">21 янв, 03:06</p>
            </div>
            <div className="build-duration">
              <div className="build-time__icon build-time--icon-gap-left">
                <WatchIcon className="build-icon" />
              </div>
              <p className="build-duration__period">1 ч 20 мин</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default BuildCard;

