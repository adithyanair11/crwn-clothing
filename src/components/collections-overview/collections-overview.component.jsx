import React from "react";
import './collections-overview.component.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectShopItems} from '../../redux/shop/shop.selectors'
import { Collections } from "../collections/collections.component";

const mapStateToProps = createStructuredSelector({
    collections: selectShopItems
})

export const CollectionsOverview = connect(mapStateToProps)(({collections}) => {
    return(
        <div className="collections-overview">
        {
            collections.map(({id,...others}) => <Collections key={id} {...others}/>)
        }
        </div>
    )
})