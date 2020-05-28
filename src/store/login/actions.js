import { registerRedirect } from "../../store/registration/actions";

export const CHANGE_LOG_NAME = 'CHANGE_LOG_NAME';
export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const CRED_ERR = 'CRED_ERR';
export const REDIRECT = 'REDIRECT';
export const CHANGE_ADMIN = 'CHANGE_ADMIN';

export const changeLogin = (newLogin) => {
    return {
        type: CHANGE_LOGIN,
        payload: newLogin
    }
}

export const changeAdmin = (newAdmin) => {
    return {
        type: CHANGE_ADMIN,
        payload: newAdmin
    }
}

export const changeLogName = (newName) => {
    return {
        type: CHANGE_LOG_NAME,
        payload: newName
    }
}

export const changePassword = (newPassword) => {
    return {
        type: CHANGE_PASSWORD,
        payload: newPassword
    }
}


export const login = (token) => {
    return {
        type: LOG_IN,
        payload: token
    }
}

export const showCredentialsError = (err) => {
    return {
        type: CRED_ERR,
        payload: err
    }
}

export const redirect = (newRed) => {
    return {
        type: REDIRECT,
        payload: newRed
    }
}

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: ''
    }
}

export const loggingIn = () => async (dispatch, getState) => {
    let res = await fetch('/api/login', {
        method: "POST",
        body: JSON.stringify({
            login: getState().login.login,
            password: getState().login.password
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }
    })
    console.log(res);

    if (res.status !== 200) { dispatch(redirect(false)); dispatch(showCredentialsError(true)) }
    else {
        let parsedRes = await res.json();
        dispatch(showCredentialsError(false));
        localStorage.setItem('token', parsedRes.token);
        localStorage.setItem('name', parsedRes.name);
        dispatch(changeLogName(parsedRes.name));
        dispatch(redirect(true));
        dispatch(login(parsedRes.token));
        dispatch(changeLogin(''));
        dispatch(changePassword(''));
        if (parsedRes.admin === 0) {
            localStorage.setItem('admin', true);
            dispatch(changeAdmin(true));
        }
    }
}

export const loggingOut = () => async (dispatch, getState) => {
    fetch('/api/logout', {
        method: "DELETE",
        body: JSON.stringify({
            token: getState().login.token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        }
    }).then(() => {
        dispatch(logOut());
        localStorage.setItem('token', '');
        localStorage.setItem('admin', false);
        localStorage.setItem('name', '');
        localStorage.removeItem('cart');
        dispatch(changeLogName(''));
        dispatch(redirect(false));
        dispatch(registerRedirect(false));
    })
    dispatch(changeAdmin(false));
}