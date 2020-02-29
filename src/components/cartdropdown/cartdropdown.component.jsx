import React from "react";
import "./cartdropdown.styles.scss";
import CustomButton from "./../custombutton/custombutton.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
