import React from 'react';
import ReactDOM from "react-dom";
import './modal.css';
import Button from '../Button/Button';

function Modal({ show, close, title, children }) {
  return ReactDOM.createPortal(
    <>
      {
        show &&
        <div
          className="modal-container" 
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <header className="modal__header">
              <h2 className="modal__header-title">{title}</h2>
            </header>
            <main className="modal__content">
            {children}
            </main>
            <footer className="modal__footer">
              <Button type="primary" onClick={() => close()}>
                <span>Run build</span>
              </Button>
              <Button type="outline" onClick={() => close()}>
                <span>Cancel</span>
              </Button>
            </footer>
          </div>
        </div>
      }
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
