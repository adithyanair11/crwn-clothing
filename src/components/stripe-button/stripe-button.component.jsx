import React from "react";
import StripeCheckOut from 'react-stripe-checkout'


export const StripeCheckOutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51KbJPPSJOhpX9bPtzIf4iBLHaU6KNeiPncwi3ZNgPiQBcFn7bbcuIomcyGYvxP4KGJQtFcXiUINzZOu4N7eDGoky00kKVg8q8v';

    const onToken = token => {
        console.log(token)
        alert('Payment Sucessful');
    }

    return(
        <StripeCheckOut 
        label='Pay Now'
        name='CRWN Clothing'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
}