import React from "react";
import './collections-overview.component.css';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import { Collections } from "../collections/collections.component";

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
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