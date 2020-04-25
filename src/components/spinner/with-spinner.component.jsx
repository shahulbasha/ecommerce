import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

export const WithSpinner = (WrappedComponent) => {
  const SpinnerComponent = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return SpinnerComponent;
};
