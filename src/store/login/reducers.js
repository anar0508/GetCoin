import { CHANGE_LOGIN, CHANGE_PASSWORD, CHANGE_LOGGED, LOG_IN, LOG_OUT, CRED_ERR, REDIRECT } from './actions';


const initialState = {
    login: '',
    password: '',
    logged: false,
    token: '',
    credError: false,
    redirect: false
}

export const logReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {
                ...state, login: action.payload
            }

        case CHANGE_PASSWORD:
            return {
                ...state, password: action.payload
            }

        case CHANGE_LOGGED:
            return {
                ...state, logged: action.payload
            }

        case LOG_IN:
            return {
                ...state, token: action.payload
            }

        case CRED_ERR:
            return {
                ...state, credError: action.payload
            }

        case LOG_OUT:
            return {
                ...state, token: action.payload
            }

        case REDIRECT:
            return {
                ...state, redirect: action.payload
            }

        default:
            return state
    }
}
