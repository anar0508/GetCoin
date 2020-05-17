export const CHANGE_LOGIN = 'CHANGE_LOGIN';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const CHANGE_REPEAT_PASSWORD = 'CHANGE_REPEAT_PASSWORD';
export const SUBMIT_FORM = 'SUBMIT_FORM';

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

export const changeRepeatPassword = (newRepeatPassword) => {
    return {
        type: CHANGE_REPEAT_PASSWORD,
        payload: newRepeatPassword
    }
}

export const submitForm = (token) => {
    return {
        type: SUBMIT_FORM,
        payload: token
    }
}

export const submittingForm = () => (dispatch, getState) => {
    fetch('http://localhost:3000/register', {
        method: "POST",
        body: JSON.stringify({
            login: getState().registration.login,
            password: getState().registration.password
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json).then((res) => {
        fetch('http://localhost:3000/token', {
            method: "POST",
            body: JSON.stringify({
                login: getState().registration.login,
                password: getState().registration.password
            }),
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json).then(res => { dispatch(submitForm(res)); dispatch(changePassword('')); dispatch(changeRepeatPassword('')) })
    })
}