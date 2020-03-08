import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_P8dVvyqZ3fRPb88uyBCMlSGS00fs91ROFr";

  const onToken = token => {
    alert("Payment Successful: " + token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing LLC"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total Is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
