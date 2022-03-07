import React from "react";
import './checkoutitem.component.css';
import {clearCartItems} from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';
import { addItem } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearCartItems(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export const CheckOutItem = connect(null,mapDispatchToProps)(({item,clearItem,addItem,removeItem}) => {
    const {imageUrl,name,quantity,price} = item
    return(
        <div className="checkout-item">
            <div className="image-container block">
                <img src={`${imageUrl}`} alt="item"/>
            </div>
            <div className="block">
                {name}
            </div>
            <div className="block">
                
                
                <span className="decrease" onClick={() => removeItem(item)}>&#10094;</span>

                {quantity}

               <span className="increase" onClick={() => addItem(item)}>&#10095;</span>
                
                 
            </div>
            <div className="block">
                ${price}
            </div>
            <div className="block">
                <span className="remove" onClick={() => clearItem(item)}>&#10006;</span>
            </div>
        </div>
    );
})