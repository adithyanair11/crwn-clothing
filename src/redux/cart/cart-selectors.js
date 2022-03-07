import {createSelector} from 'reselect';


const selectCart = state => state.showCart;

export const selectCartItems = createSelector([selectCart],(cart) => cart.cartItems);


export const selectCartItemsCount = createSelector([selectCartItems],(cartItems) => cartItems.reduce((total,cartItem) => {
    total+=cartItem.quantity;
    return total
  },0))

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)


export const selectCartTotal = createSelector([selectCartItems],(cartItems) => cartItems.reduce((total,cartItem) => {
  total+=cartItem.price;
  return total;
},0))