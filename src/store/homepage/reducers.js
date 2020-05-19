import { LOG_OUT, HANDLE_SEARCH, TOGGLE_ADVANCED_SEARCH, GET_ADVANCED_SEARCH_INFO} from './actions';

const initialState = {
    token: '',
    coins: null,
    advancedSearch: false,
    adSearchInfo: '',
}

export const homepageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...state, token: action.payload
            }
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
