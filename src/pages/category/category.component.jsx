import React from "react";
import './category.component.css';
import { connect } from "react-redux";
import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { selectCategory } from "../../redux/shop/shop.selectors";

const mapStateToProps = (state,ownProps) => ({
    category: selectCategory(ownProps.match.params.categoryId)(state)
})

export const CategoryPage = connect(mapStateToProps)(({category}) => {
    const {items,title} = category
    return(
        <div className="category-page">
            <h2>{title}</h2>
            <div className="category-page-item">
            {
                items.map(item => <CollectionItem key={item.id} item={item}/>)
            }
            </div>
        </div>
    )
})