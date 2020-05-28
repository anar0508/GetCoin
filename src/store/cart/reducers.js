import { PURCHASE } from './actions';

const initialState = {
    purchasedCoins: []
}

export const coinReducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE:
            return {
                ...state, purchasedCoins: action.payload
            }
        default:
            return state
    }
}
