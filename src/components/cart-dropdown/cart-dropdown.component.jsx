import React from "react";
import './cart-dropdown.component.css';
import { CustomButton } from "../custom-button/custom-button.component";

export const CartDropDown = () => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items" />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}