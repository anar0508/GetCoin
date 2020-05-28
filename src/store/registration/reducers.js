import { CHANGE_NAME, CHANGE_REGISTER_LOGIN, CHANGE_REGISTER_PASSWORD, CHANGE_REPEAT_PASSWORD, SHOW_ERROR, REGISTER_REDIRECT } from '../registration/actions';


const initialState = {
    name: '',
    registerLogin: '',
    registerPassword: '',
    repeatPassword: '',
    showError: false,
    registerRedirect: false
}

export const regReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_NAME:
            return {
                ...state, name: action.payload
            }

        case CHANGE_REGISTER_LOGIN:
            return {
                ...state, registerLogin: action.payload
            }

        case CHANGE_REGISTER_PASSWORD:
            return {
                ...state, registerPassword: action.payload
            }

        case CHANGE_REPEAT_PASSWORD:
            return {
                ...state, repeatPassword: action.payload
            }
        case SHOW_ERROR:
            return {
                ...state, showError: action.payload
            }

        case REGISTER_REDIRECT:
            return {
                ...state, registerRedirect: action.payload
            }

        default:
            return state
    }
}
