import {CartActionTypes} from './cart.types'
import { addItemToCart } from './cart.utils'
import { removeCartItem } from './cart.utils'
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
            }
        case CartActionTypes.CLEAR_CART_ITEMS:
            return{
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeCartItem(state.cartItems,action.payload)
            }
        default:
            return state;
    }
}
