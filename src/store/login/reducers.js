import {CHANGE_FIRST_NAME, CHANGE_SECOND_NAME}  from './actions';


const initialState = {
    firstName: '',
    secondName: ''
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

        default:
            return state
    }
}
