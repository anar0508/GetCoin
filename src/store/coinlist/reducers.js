import { GET_COIN } from './actions';

const initialState = {
    coin: {
        coin_name: "",
        coin_type: "",
        country: "",
        den_currency: "",
        denomination: 0,
        description: '',
        idCoin: 0,
        issuance_year: 0,
        obverse_coin: "",
        popularity: 0,
        price: 0,
        price_currency: "",
        quality: "",
        quantity: 0,
        reverse_coin: "",
        short_description: '',
        weight: "",
        сomposition: ""
    }
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
