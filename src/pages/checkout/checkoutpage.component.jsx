import React from "react";
import "./checkoutpage.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "./../../redux/cart/cart-selectors";
import { selectCartTotal } from "./../../redux/cart/cart-selectors";
import CheckoutItem from "./../../components/checkoutitem/checkoutitem.component";
import StripeButton from "./../../components/stripebutton/stripebutton.component";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">TOTAL : $ {total}</div>
      <div className="test-warning">
        Please use the test credit card 4242 4242 4242 4242 for payment.
        <br />
        Exp: 12/20 CVV : 123
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
