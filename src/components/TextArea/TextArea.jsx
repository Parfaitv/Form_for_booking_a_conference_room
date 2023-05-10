import styles from '../../styleForComponents/components.module.css';
import React from "react";

export const TextArea = ({ label, name, value, onChange }) => {
    return (
      <div className={styles.components}>
        <label className={styles.label} htmlFor={name}>{label}:</label>
        <textarea
        className={styles.select}
        placeholder="Comment"
        name={name}
        id={name}
        onChange={onChange}
        value={value} />
      </div>
    );
};

export default TextArea