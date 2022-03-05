import React from "react";
import './cart-icon.component.css';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const mapDispatchToprops = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIcon = connect(null,mapDispatchToprops)(({toggleCartHidden}) => {
    return(
      <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}/>
        <span className="item-count">0</span>
      </div>  
    );
});



