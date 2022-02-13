import React from "react";
import './collection-item.component.css';

export const CollectionItem = ({image,name,price}) => {
    return(
        <div className="collection-item">
            <div style={{backgroundImage:`url(${image})`}} className="item-image">
                <button class="cart-btn">ADD TO CART</button>
            </div>
            <div className="item-info">
                <span className="info">{name}</span>
                <span className="info">${`${price}`}</span>
            </div>
        </div>
    );
}