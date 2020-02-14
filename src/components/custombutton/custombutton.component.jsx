import React from "react";
import "./custombutton.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <div>
      <button className="customButton" {...otherProps}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
