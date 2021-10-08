import React from 'react';
import './input.css';

function Input({ label, placeholder, required }) {
  return ( 
    <div className="input-wrapper">
      <label className="input__label" htmlFor="repo">{label}</label>
      <input className="input__field" type="text" placeholder={placeholder} id="repo" required={required} />
    </div>
  );
}

export default Input;