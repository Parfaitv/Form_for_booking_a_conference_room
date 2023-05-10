import styles from '../../styleForComponents/components.module.css'
import React from "react";

export const InputDate = ({ label, name, value, onChange, type }) => {
    return (
      <div className={styles.components}>
        <label className={styles.label} htmlFor={name}>{label}:</label>
        <input className={styles.select} type={type} name={name} id={name} onChange={onChange} value={value} />
      </div>
    );
};

export default InputDate;