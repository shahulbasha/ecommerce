import React from "react";
import "./custombutton.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <div>
      <button
        className={`
        ${inverted ? "inverted" : ""}
        ${isGoogleSignIn ? "sign-in-google" : ""} customButton`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
