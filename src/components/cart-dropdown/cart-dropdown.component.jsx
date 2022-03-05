import React from "react";
import './cart-dropdown.component.css';
import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { connect } from "react-redux";

const mapStateToProps = ({showCart: {cartItems}}) => ({
   cartItems
});

export const CartDropDown = connect(mapStateToProps)(({cartItems}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
})