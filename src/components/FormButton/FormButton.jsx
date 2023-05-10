import styles from '../../styleForComponents/components.module.css';
import React from "react";

export const FormButton = ({ label, type, onClick }) => {
    return (
      <button className={styles.btn} type={type} onClick={onClick}>
        {label}
      </button>
    );
};

export default FormButton