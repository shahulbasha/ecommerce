import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const publishableKey = "pk_test_vODJNnbks07dYxUhFM5MOXJs00N7hKX8qb";
  const stripePrice = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert("Payment Success");
  };
  return (
    <StripeCheckout
      amount={stripePrice}
      label="Pay Now"
      name="JB Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};

export default StripeButton;
