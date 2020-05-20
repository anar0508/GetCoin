export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_LOGGED = 'CHANGE_LOGGED';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const CRED_ERR = 'CRED_ERR';
export const REDIRECT = 'REDIRECT';


export const changeLogin = (newLogin) => {
    return {
        type: CHANGE_LOGIN,
        payload: newLogin
    }
}

export const changePassword = (newPassword) => {
    return {
        type: CHANGE_PASSWORD,
        payload: newPassword
    }
}

export const changeLogged = (logged) => {
    return {
        type: CHANGE_LOGGED,
        payload: logged
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
    let res = await fetch('http://localhost:8000/login', {
        method: "POST",
        body: JSON.stringify({
            login: getState().login.login,
            password: getState().login.password
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }})
    if (res.status!==200){ dispatch(redirect(false)); dispatch(showCredentialsError(true))} 
    else {
        let parsedRes =await res.json();
        dispatch(showCredentialsError(false)); 
        dispatch(redirect(true));
        dispatch(login(parsedRes.token)); 
        dispatch(changeLogged(true)); 
        dispatch(changeLogin('')); 
        dispatch(changePassword('')); 
    }
}



export const loggingOut = () => async(dispatch, getState) => {
    fetch('http://localhost:8000/logout', {
        method: "DELETE",
        body: JSON.stringify({
            token: getState().token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        }
    }).then(() => { dispatch(logOut()); dispatch(changeLogged(false)) })
}