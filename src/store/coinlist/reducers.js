import { GET_COIN} from './actions';

const initialState = {
    coin:{}
}

export const coinslistReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COIN:
            return {
                ...state, coin: action.payload
            }
        default:
            return state
    }
}
