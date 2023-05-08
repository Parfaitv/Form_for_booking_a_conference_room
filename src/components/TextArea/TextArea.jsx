import React from "react";

export const TextArea = ({ label, name, value, onChange }) => {
    return (
      <div>
        <label htmlFor={name}>{label}:</label>
        <textarea placeholder="Comment" name={name} id={name} onChange={onChange} value={value} />
      </div>
    );
};

export default TextArea