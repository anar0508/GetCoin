import { CHANGE_ADMIN, CHANGE_LOG_NAME, CHANGE_LOGIN, CHANGE_PASSWORD, LOG_IN, LOG_OUT, CRED_ERR, REDIRECT } from './actions';

let checkTokenStorage = localStorage.getItem('token');
let checkNameStorage = localStorage.getItem('name');
let checkAdminStorage = JSON.parse(localStorage.getItem('admin'));

const initialState = {
    login: '',
    password: '',
    token: checkTokenStorage ? checkTokenStorage : '',
    credError: false,
    redirect: false,
    logName: checkNameStorage ? checkNameStorage : '',
    admin: checkNameStorage ? checkAdminStorage : false
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

        case CHANGE_LOG_NAME:
            return {
                ...state, logName: action.payload
            }

        case CHANGE_ADMIN:
            return {
                ...state, admin: action.payload
            }

        default:
            return state
    }
}
