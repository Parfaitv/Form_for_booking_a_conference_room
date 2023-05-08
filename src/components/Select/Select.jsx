import styles from './select.module.css'
import React from 'react';

export const Select = ({ label, name, value, options, onChange }) => {
  return (
    <div className={styles.selectData}>
      <label htmlFor={name}>{label}:</label>
      <select className={styles.selectDataOption} name={name} id={name} onChange={onChange} value={value}>
        <option value="">Choose a {name}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {label} {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select