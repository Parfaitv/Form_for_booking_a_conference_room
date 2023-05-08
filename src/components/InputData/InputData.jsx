import React from "react";

export const InputData = ({ label, name, value, onChange, type }) => {
    return (
      <div>
        <label htmlFor={name}>{label}:</label>
        <input type={type} name={name} id={name} onChange={onChange} value={value} />
      </div>
    );
};

export default InputData;