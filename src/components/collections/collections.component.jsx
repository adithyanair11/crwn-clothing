import React from "react";
import './collections.component.css';
import { CollectionItem } from "../collection-item/collection-item.component";

export const Collections = ({title,items}) => {
    return(
        <div className="collections">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div class="collection-items">
                {
                    items.filter((item,idx) => idx < 4).map((item) => <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
} 