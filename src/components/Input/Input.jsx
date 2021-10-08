import React, { useState } from 'react';
import './input.css';
import {ReactComponent as CloseIcon} from '../../assets/svg/close.svg';

function Input({ label, placeholder, required }) {
  const [inputValue, setInputValue] = useState('');
  const onChange = (event) => setInputValue(event.target.value);
  const clearHandle = () => setInputValue('');
  return ( 
    <div className="input-wrapper">
      <label className="input__label" htmlFor="repo">
        {label}
        {inputValue.length > 0 && <div className="input__close-icon" onClick={clearHandle}>
          <CloseIcon />
        </div>}
      </label>
      <input
        id="repo"
        type="text"
        value={inputValue}
        className="input__field"
        placeholder={placeholder}
        required={required}
        onChange={onChange} />
    </div>
  );
}

export default Input;