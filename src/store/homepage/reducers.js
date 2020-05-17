import {LOG_OUT}  from './actions';

const initialState = {
    token: ''
}

export const homepageReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...state, token: action.payload
            }

        default:
            return state
    }
}
