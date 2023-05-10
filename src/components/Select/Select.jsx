import styles from '../../styleForComponents/components.module.css'
import React from 'react';

export const Select = ({ label, name, value, options, onChange }) => {
  return (
    <div className={styles.components}>
      <label className={styles.label} htmlFor={name}>{label}:</label>
      <select className={styles.select} name={name} id={name} onChange={onChange} value={value}>
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