import React from "react";
import "./cartdropdown.styles.scss";
import CustomButton from "./../custombutton/custombutton.component";
import CartItem from "./../cartitem/cartitem.component";
import { selectCartItems } from "./../../redux/cart/cart-selectors";
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

const mapStateToProps = state => ({ cartItems: selectCartItems(state) });

export default connect(mapStateToProps)(CartDropdown);
