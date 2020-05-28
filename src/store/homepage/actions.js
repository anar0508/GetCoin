export const HANDLE_SEARCH = 'HANDLE_SEARCH';
export const TOGGLE_ADVANCED_SEARCH = 'TOGGLE_ADVANCED_SEARCH';
export const GET_ADVANCED_SEARCH_INFO = 'GET_ADVANCED_SEARCH_INFO';


export const toggleAdvancedSearch = () => {
    return {
        type: TOGGLE_ADVANCED_SEARCH
    }
}

export const getAdvancedSearchInfo = (info) => {
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

export const searchHandling = (search) => (dispatch, getState) => {
    const country = getState().adSearch.country;
    const composition = getState().adSearch.composition;
    const priceFrom = getState().adSearch.priceFrom;
    const priceTo = getState().adSearch.priceTo;
    const yearFrom = getState().adSearch.yearFrom;
    const yearTo = getState().adSearch.yearTo;
    fetch(`/api/searchCoins?text=${search}&country=${country}&composition=${composition}&priceFrom=${priceFrom}&priceTo=${priceTo}&yearFrom=${yearFrom}&yearTo=${yearTo}`, {
        method: "POST",
        body: JSON.stringify({
            token: getState().login.token,
            coin: getState().coinlist.coin
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(res => { dispatch(getSearchResult(res)) })
}

export const gettingAdvancedSearchInfo = () => async (dispatch, getState) => {
    const info = await fetch('/api/advanced');
    const parsedInfo = await info.json();
    await dispatch(getAdvancedSearchInfo(parsedInfo));
}
