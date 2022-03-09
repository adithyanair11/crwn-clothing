import React from "react";
import './checkoutpage.component.css';
import { CheckOut } from "../../components/check-out/check-out.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selectors";

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
})

export const CheckOutPage = connect(mapStateToProps)(({cartItems}) => {
    console.log(cartItems)
    return(
        <div className="checkout-page">
            {
                cartItems.length ?
                (<CheckOut />)
                :
                (<h1>YOUR CART IS EMPTY</h1>)
            }
        </div>
    );
})