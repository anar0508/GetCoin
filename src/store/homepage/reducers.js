import { HANDLE_SEARCH, TOGGLE_ADVANCED_SEARCH, GET_ADVANCED_SEARCH_INFO } from './actions';

const initialState = {
    advancedSearch: false,
    adSearchInfo: '',
    coins: []
}

export const homepageReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_SEARCH:
            return {
                ...state, coins: action.payload
            }

        case TOGGLE_ADVANCED_SEARCH:
            return {
                ...state, advancedSearch: !state.advancedSearch
            }

        case GET_ADVANCED_SEARCH_INFO:
            return {
                ...state, adSearchInfo: action.payload
            }

        default:
            return state
    }
}
