import './input.css';
import {ReactComponent as CloseIcon} from '../../assets/svg/close.svg';

function Input({ id, name, value, label, type, placeholder, required, onChange, clearInput }) {
  return ( 
    <div className="input-wrapper">
      <label className="input__label" htmlFor={id}>
        {label}
        {value.length > 0 && <div className="input__close-icon" onClick={clearInput}>
          <CloseIcon />
        </div>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        className="input__field"
        placeholder={placeholder}
        required={required}
        onChange={onChange} />
    </div>
  );
}

export default Input;