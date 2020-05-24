export const GET_COIN = 'GET_COIN';


export const getCoin = (newCoin) => {
    return {
        type: GET_COIN,
        payload: newCoin
    }
}

export const gettingCoin = (id) => async (dispatch, getState) => {
   let res = await fetch(`http://localhost:8000/coins/${id}`);
   let parsedRes = await res.json();
   dispatch(getCoin(parsedRes[0]));
   
   let history = await fetch(`http://localhost:8000/coins/${id}`);
}



