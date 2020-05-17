export const LOG_OUT = 'LOG_OUT';
export const DOWNLOAD_CREDITS = 'DOWNLOAD_CREDITS';


export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: ''
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

export const downloadCredits = (credits) => {
    return {
        type: DOWNLOAD_CREDITS,
        payload: credits
    }
}

export const downloading = () => (dispatch, getState) => {
    fetch('http://localhost:3000/credits', 
    {
        method: "GET",
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Content-Type": "application/json",
            "token": getState().login.token
        }
    }).then(res => res.json).then((res) => { dispatch(downloadCredits(res)) })
}