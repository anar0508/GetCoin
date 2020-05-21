import { searchHandling } from "../../store/homepage/actions";

export const DELETE_COIN = 'DELETE_COIN';
export const EDIT_COIN = 'EDIT_COIN';



export const deleteCoin = (coins) => {
    return {
        type: DELETE_COIN,
        payload: coins
    }
}

export const editCoin = (editing, coin) => {
    return {
        type: EDIT_COIN,
        payload: {editing, coin}
    }
}

export const coinDeleting = (idCoin) => async (dispatch, getState) => {
    let res = await fetch(`http://localhost:8000/admin/coins/${idCoin}`, {
        method: "DELETE",
        body: JSON.stringify({
            token: getState().login.token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }})
    if (res.status!==200){ console.log('Ups, check error');
    } 
    else {
        dispatch(searchHandling('')); 
    }
}

export const coinEditing = (idCoin) => async (dispatch, getState) => {
    let res = await fetch(`http://localhost:8000/admin/coins/${idCoin}`, {
        method: "PUT",
        body: JSON.stringify({
            type:3,
            name:'Looney',
            country:'Canada',
            composition: 'gold',
            quality:1,
            denomination:'1 dollar',
            year:1970,
            weight:'5.4 g',
            price:65,
            price_currency:1,
            description:'',
            short_description:'"Looney". Unique coin with the image of a goat. Canadian dollar symbol.',
            obverse:'img/obverse/Looney_2',
            reverse:'img/obverse/Looney_1',
            quantity:10,
            token: getState().login.token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }})
    if (res.status!==200){ console.log('Ups, check error');
    } 
    else {
        dispatch(searchHandling('')); 
    }
}