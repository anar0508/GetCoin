export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_REGISTER_LOGIN = 'CHANGE_REGISTER_LOGIN';
export const CHANGE_REGISTER_PASSWORD = 'CHANGE_REGISTER_PASSWORD';
export const CHANGE_REPEAT_PASSWORD = 'CHANGE_REPEAT_PASSWORD';
export const SUBMIT_REGISTER_FORM = 'SUBMIT_REGISTER_FORM';
export const SHOW_ERROR = 'SHOW_ERROR';
export const REGISTER_REDIRECT = 'REGISTER_REDIRECT';


export const changeName = (newName) => {
    return {
        type: CHANGE_NAME,
        payload: newName
    }
}

export const changeRegisterLogin = (newLogin) => {
    return {
        type: CHANGE_REGISTER_LOGIN,
        payload: newLogin
    }
}

export const changeRegisterPassword = (newPassword) => {
    return {
        type: CHANGE_REGISTER_PASSWORD,
        payload: newPassword
    }
}

export const changeRepeatPassword = (newRepeatPassword) => {
    return {
        type: CHANGE_REPEAT_PASSWORD,
        payload: newRepeatPassword
    }
}

export const showError = (error) => {
    return {
        type: SHOW_ERROR,
        payload: error
    }
}

export const registerRedirect = (newRed) => {
    return {
        type: REGISTER_REDIRECT,
        payload: newRed
    }
}

export const submittingRegisterForm = () => async (dispatch, getState) => {
    let res = await fetch('/api/register', {
        method: "POST",
        body: JSON.stringify({
            login: getState().registration.registerLogin,
            password: getState().registration.registerPassword,
            name: getState().registration.name
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        }
    })
    if (res.status !== 200) { dispatch(showError(true)); dispatch(registerRedirect(false)); }
    else {
        dispatch(showError(false));
        dispatch(changeRegisterLogin(''));
        dispatch(changeName(''));
        dispatch(changeRegisterPassword(''));
        dispatch(changeRepeatPassword(''))
        dispatch(registerRedirect(true));
    }
}

