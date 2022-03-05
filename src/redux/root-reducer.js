import {combineReducers} from 'redux';
import { CartReducer } from './cart/cart.reducer';
import { UserReducer } from "./user/user.reducer";

export default combineReducers({
    user: UserReducer,
    showCart: CartReducer 
});
