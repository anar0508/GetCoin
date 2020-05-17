export const LOG_OUT = 'LOG_OUT';

export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: null
    }
}

export const loggingOut = () => (dispatch, getState) => {
    fetch('http://localhost:3000/logout', {
        method: "POST",
        body: JSON.stringify({
            token: getState().token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Content-Type': 'application/json'
        }
    }).then(() => { dispatch(logOut()) })
}
