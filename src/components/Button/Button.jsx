import React, { useState } from 'react';
import './button.css';

const Button = (props) => {
  const { children, label, onClick, btnColor, labelColor, type, disabled, style } = props;
  const [hover, setHover] = useState(false);

	const toggleHover = () => {
		setHover(!hover);
	};
  const mainStyles = {
		backgroundColor: btnColor,
		color: labelColor || 'white'
	};
	const outlineStyles = {
		border: `1px solid ${btnColor}`,
		color: btnColor,
		backgroundColor : 'white'
	};
  const disabledStyle = {
		cursor: 'default',
		backgroundColor: btnColor,
		color: labelColor || 'black',
		opacity: 0.4
	};

  let btnStyle;
	switch (type) {
		case 'main':
			btnStyle = mainStyles;
			break;
		case 'outline':
			btnStyle = outlineStyles;
			break;
		default:
			btnStyle = {
				backgroundColor: btnColor,
				color: labelColor || 'black'
			};
			break;
	}

  return ( 
    <button className="btn" style={
      disabled ? { ...mainStyles, ...btnStyle, ...disabledStyle, ...style } :
      { ...mainStyles, ...btnStyle, ...style }
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      {...props}
      type="button"
      onClick={
        !disabled ? onClick :
        () => {}
      }>{children || label}</button>
    );
}

export default Button;