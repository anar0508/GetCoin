import { CHANGE_FIRST_NAME, CHANGE_SECOND_NAME, CHANGE_LOGGED } from './actions';


const initialState = {
    firstName: '',
    secondName: '',
    logged: false
}

export const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_FIRST_NAME:
            return {
                ...state, firstName: action.payload
            }

        case CHANGE_SECOND_NAME:
            return {
                ...state, secondName: action.payload
            }

        case CHANGE_LOGGED:
            return {
                ...state, logged: action.payload
            }

        default:
            return state
    }
}
