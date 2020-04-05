import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart-actions";
import { selectItemCount } from "./../../redux/cart/cart-selectors";
import { ReactComponent as ShoppingBag } from "./../../assets/shoppingbag.svg";
import "./carticon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingBag className="shopping-bag"></ShoppingBag>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectItemCount(state)
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
