import styles from '../../styleForComponents/components.module.css';
import React from "react";

export const InputTime = ({label, name, value, onChange}) => {
    return (
      <div className={styles.components}>
        <label className={styles.label} htmlFor={label}>{label}:</label>
        <input
        className={styles.select}
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