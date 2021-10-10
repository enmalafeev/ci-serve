import React, { useState } from 'react';
import Button from '../Button/Button';
import './buildHeader.css';
import { navigate } from 'hookrouter';
import {ReactComponent as PlayIcon} from '../../assets/svg/play.svg';
import {ReactComponent as GearIcon} from '../../assets/svg/gear.svg'
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../slices/modal';

function BuildHeader({ title }) {
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.modal.isVisible);
  const showModal = () => dispatch(actions.changeVisibilty(true));
  const closeModal = () => dispatch(actions.changeVisibilty(false));

  const [hash, setHash] = useState('');
  return (
    <header className="build-header">
      <div className="container">
        <h2 className="build-header__title">{title}</h2>
        <div className="button-group">
          <Button type="accent" size="small" onClick={() => showModal()}>
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
      <Modal show={isVisible} close={closeModal} title="New build">
        <Input
          value={hash}
          onChange={(e) => setHash(e.target.value)}
          clearInput={() => setHash('')}
          name="commit-hash"
          placeholder="Commit hash"
          label="Enter the commit hash which you want to build."
        />
      </Modal>
    </header>
   );
}

export default BuildHeader;