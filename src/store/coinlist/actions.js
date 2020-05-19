export const GET_COIN = 'GET_COIN';


export const getCoin = (newCoin) => {
    return {
        type: GET_COIN,
        payload: newCoin
    }
}

export const gettingCoin = (id) => (dispatch, getState) => {
    fetch(`http://localhost:8000/coins/${id}`)
    .then(res => res.json()).then(res => { dispatch(getCoin(res[0]))})
}



