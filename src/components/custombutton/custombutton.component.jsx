import React from "react";
import "./custombutton.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${isGoogleSignIn ? "sign-in-google" : ""} customButton`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
