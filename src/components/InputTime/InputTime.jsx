import React from "react";

export const InputTime = ({label, name, value, onChange}) => {
    return (
      <div>
        <label htmlFor={label}>{label}:</label>
        <input
        type="time"
        name={name}
        id={name}
        step="1800"
        onChange={onChange}
        value={value}
        />
      </div>
    )
};

export default InputTime;