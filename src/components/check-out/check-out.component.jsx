import React from "react";
import './check-out.component.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { selectCartTotal } from "../../redux/cart/cart-selectors";
import { CheckOutItem } from "../../components/checkoutitem/checkoutitem.component";
import { StripeCheckOutButton } from "../stripe-button/stripe-button.component";

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export const CheckOut = connect(mapStateToProps)(({cartItems,total}) => {
    return(
        <div className="checkout">
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
            {
                cartItems.map(cartItem => 
                    <CheckOutItem key={cartItem.id} item={cartItem} />
                )
            }
            <div className="test-warning">
                For test payment use the card details, card number: 4242 4242 4242 4242, exp:01/22, cvv:123
            </div>
            <div className="total-price">
                <span className="total">TOTAL: ${total}</span>
                <StripeCheckOutButton price={total} />
            </div>
        </div>
    );
})