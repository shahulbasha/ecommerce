import React from "react";
import "./forminput.styles.scss";

const FormInput = ({ handleChange, label, ...otherStateProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherStateProps}
      />
      {label ? (
        <label
          className={`${
            otherStateProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
