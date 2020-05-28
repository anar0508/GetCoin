import { CHANGE_COUNTRY, CHANGE_COMPOSITION, CHANGE_QUALITY, CHANGE_PRICE_FROM, CHANGE_PRICE_TO, CHANGE_YEAR_FROM, CHANGE_YEAR_TO } from './actions';

const initialState = {
    country: '',
    composition: '',
    quality: '',
    priceFrom: '',
    priceTo: '',
    yearFrom: '',
    yearTo: ''
}

export const advancedSearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COUNTRY:
            return {
                ...state, country: action.payload
            }
        case CHANGE_COMPOSITION:
            return {
                ...state, composition: action.payload
            }

        case CHANGE_QUALITY:
            return {
                ...state, quality: action.payload
            }
        case CHANGE_PRICE_FROM:
            return {
                ...state, priceFrom: action.payload
            }
        case CHANGE_PRICE_TO:
            return {
                ...state, priceTo: action.payload
            }

        case CHANGE_YEAR_FROM:
            return {
                ...state, yearFrom: action.payload
            }

        case CHANGE_YEAR_TO:
            return {
                ...state, yearTo: action.payload
            }

        default:
            return state
    }
}
