export const GET_COIN = 'GET_COIN';


export const getCoin = (newCoin) => {
    return {
        type: GET_COIN,
        payload: newCoin
    }
}

export const gettingCoin = (id) => async (dispatch, getState) => {
    let res = await fetch(`/api/coins/${id}`,
        {
            method: "PUT",
            body: JSON.stringify({
                token: getState().login.token,
                date: new Date().toJSON().slice(0, 19).replace('T', ' ')
            }),
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8000',
                'Content-Type': 'application/json'
            }
        });
    let parsedRes = await res.json();
    dispatch(getCoin(parsedRes[0]));
}



