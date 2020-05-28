import { COIN_TO_CART } from './actions';

const initialState = {
    coinsInCart: !localStorage.getItem('cart') ? [] : JSON.parse(localStorage.getItem('cart'))
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case COIN_TO_CART:
            return {
                ...state, coinsInCart: action.payload
            }
        default:
            return state
    }
}
