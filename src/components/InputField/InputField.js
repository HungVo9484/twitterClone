import React from 'react';

import './InputField.css';

function InputField(props) {
    const {
      label,
      type,
      name,
      handleChange,
      errorMessage,
      isValid,
      value,
    } = props;
  
    return (
      <div className="inputContainer">
        <label>{label}</label>
        <input type={type} name={name} value={value} onChange={handleChange} />
        {errorMessage && !isValid && (
          <span className="error">{errorMessage}</span>
        )}
      </div>
    );