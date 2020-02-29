import React from "react";
import "./cartdropdown.styles.scss";
import CustomButton from "./../custombutton/custombutton.component";
import CartItem from "./../cartitem/cartitem.component";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems
          ? cartItems.map(cartItem => {
              return <CartItem key={cartItem.id} item={cartItem} />;
            })
          : cartItems}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({ cartItems });

export default connect(mapStateToProps)(CartDropdown);
