export const LOG_OUT = 'LOG_OUT';
export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const TOGGLE_ADVANCED_SEARCH = 'TOGGLE_ADVANCED_SEARCH';
export const GET_ADVANCED_SEARCH_INFO = 'GET_ADVANCED_SEARCH_INFO';


export const logOut = () => {
    return {
        type: LOG_OUT,
        payload: null
    }
}

export const loggingOut = () => (dispatch, getState) => {
    fetch('http://localhost:8000/logout', {
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

export const toggleAdvancedSearch=()=>{
    return {
        type: TOGGLE_ADVANCED_SEARCH
    }
}

export const getAdvancedSearchInfo=(info)=>{
    return {
        type: GET_ADVANCED_SEARCH_INFO,
        payload: info
    }
}

export const getSearchResult = (coins) => {
    return {
        type: HANDLE_SEARCH,
        payload: coins
    }
}

export const searchHandling = () => (dispatch, getState) => {
    fetch('http://localhost:8000/searchCoins', {
        method: "GET",
        body: JSON.stringify({
            login: getState().registration.login,
            password: getState().registration.password
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json).then(res => { dispatch(getSearchResult(res))})
    
}

export const gettingAdvancedSearchInfo = () => (dispatch, getState) => {
    fetch('http://localhost:8000/advanced').then(res => { return res.json()}).then(res => { 
dispatch(getAdvancedSearchInfo(res));})
    
}

