import { CART_ACTION_TYPES } from "./cart.type";

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0
}

export const CartReducer = (state = CART_INITIAL_STATE, action= {} ) => {
    const {
        type,
        payload
    } = action;

    switch (type) {

        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
                return {
                    ...state,
                    isCartOpen: payload,
                }
        default:
                return state;
    }
}