import {createSelector} from 'reselect';



const shopSelect = state => state.shop;

export const selectShopItems = createSelector([shopSelect], (shop) => shop.collections);

export const selectCollectionsForPreview = createSelector([selectShopItems] , collections => Object.keys(collections).map(key => collections[key]))


export const selectCategory = categoryUrlParam => createSelector([selectShopItems], categories => categories[categoryUrlParam]);