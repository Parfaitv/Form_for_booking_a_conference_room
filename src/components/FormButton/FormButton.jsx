import React from "react";

export const FormButton = ({ label, type, onClick }) => {
    return (
      <button type={type} onClick={onClick}>
        {label}
      </button>
    );
};

export default FormButton