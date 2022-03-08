import React from "react";
import './shoppage.component.css'
import {Route} from 'react-router-dom';
import { CollectionsOverview } from "../../components/collections-overview/collections-overview.component";

import {CategoryPage} from '../category/category.component'

export const ShopPage = ({match}) => {
    return(
        <div className="shop-page">
           <Route exact path={`${match.path}`} component={CollectionsOverview} />
           <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
        </div>
    )
}