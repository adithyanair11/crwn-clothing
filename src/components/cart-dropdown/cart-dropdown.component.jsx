import React from "react";
import './cart-dropdown.component.css';
import { CustomButton } from "../custom-button/custom-button.component";
import { CartItem } from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";


const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
});

export const CartDropDown = withRouter(connect(mapStateToProps)(({cartItems,history,dispatch}) => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>))
                    :
                    (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={
                () =>{
                    history.push("/check-out");
                    dispatch(toggleCartHidden())
                    }
                }>
                    GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}))