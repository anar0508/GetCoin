import { CHANGE_LOGIN, CHANGE_PASSWORD, CHANGE_REPEAT_PASSWORD, SUBMIT_FORM } from '../registration/actions';


const initialState = {
    login: '',
    password: '',
    repeatPassword: '',
    token: ''
}

export const regReducer = (state = initialState, action) => {
    switch (action.type) {

        case CHANGE_LOGIN:
            return {
                ...state, login: action.payload
            }

        case CHANGE_PASSWORD:
            return {
                ...state, password: action.payload
            }

        case CHANGE_REPEAT_PASSWORD:
            return {
                ...state, repeatPassword: action.payload
            }

        case SUBMIT_FORM:
            return {
                ...state, token: action.payload.token
            }

        default:
            return state
    }
}
