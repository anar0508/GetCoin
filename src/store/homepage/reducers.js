import {LOG_OUT, DOWNLOAD_CREDITS}  from './actions';


export const menuReducer = (state, action) => {
    switch (action.type) {
        case LOG_OUT:
            return {
                ...state, token: action.payload
            }

            case DOWNLOAD_CREDITS:
                return {
                    ...state, credits: action.payload
                }

        default:
            return state
    }
}
