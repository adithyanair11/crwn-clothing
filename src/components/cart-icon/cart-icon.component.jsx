import React from "react";
import './cart-icon.component.css';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToprops = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export const CartIcon = connect(mapStateToProps,mapDispatchToprops)(({toggleCartHidden,itemCount}) => {
    return(
      <div className="cart-icon">
        <ShoppingIcon className="shopping-icon" onClick={toggleCartHidden}/>
        <span className="item-count">{itemCount}</span>
      </div>  
    );
});



