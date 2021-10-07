import React from 'react';
import './button.css';

const Button = (props) => {
  const { children, onClick, type, size } = props;

	const btnTypes = {
		primary: 'primary',
		accent: 'accent',
		outline: 'outline',
		disabled: 'disabled'
	}

	const SIZES = {
		small: 'small',
	}

	const setBtnType = (type) => btnTypes[type];

	const setBtnSize = (size) => SIZES[size];

	const checkBtnSize = setBtnSize(size) ? SIZES[size] : '';

  return ( 
    <button
			className={`btn ${setBtnType(type)} ${checkBtnSize}`}
      {...props}
      type="button"
			disabled={setBtnType(type) === 'disabled'}
      onClick={setBtnType(type) === 'disabled' ? () => {} : onClick}>
				{children}
		</button>
  );
}

export default Button;