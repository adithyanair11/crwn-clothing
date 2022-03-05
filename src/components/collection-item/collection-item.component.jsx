import React from "react";
import './collection-item.component.css';
import { CustomButton } from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const mapDispatchToprops = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export const CollectionItem = connect(null,mapDispatchToprops)(({item,addItem}) => {
    const {name,price,imageUrl} = item;
    return(
        <div className="collection-item">
            <div style={{backgroundImage:`url(${imageUrl})`}} className="item-image">
                <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
            </div>
            <div className="item-info">
                <span className="info">{name}</span>
                <span className="info">${`${price}`}</span>
            </div>
        </div>
    );
})