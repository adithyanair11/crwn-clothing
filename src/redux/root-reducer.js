import {combineReducers} from 'redux';
import { CartReducer } from './cart/cart.reducer';
import { UserReducer } from "./user/user.reducer";
import { directoryReducer } from './directory/directory.reducer';

import { shopReducer } from './shop/shop.reducer';

export default combineReducers({
    user: UserReducer,
    showCart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
});
