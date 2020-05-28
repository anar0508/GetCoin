import { searchHandling } from "../../store/homepage/actions";
import { gettingAdvancedSearchInfo as getSelectInfo } from "../../store/homepage/actions";

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
        payload: { editing, coin }
    }
}

export const coinDeleting = (idCoin) => async (dispatch, getState) => {
    let res = await fetch(`/api/admin/coins/${idCoin}`, {
        method: "DELETE",
        body: JSON.stringify({
            token: getState().login.token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }
    })
    if (res.status !== 200) {
        console.log('Ups, check error');
    }
    else {
        dispatch(searchHandling(''));
    }
}

export const coinEditing = (idCoin, coin) => async (dispatch, getState) => {

    let res = await fetch(`/api/admin/coins/${idCoin}`, {
        method: "PUT",
        body: JSON.stringify({
            type: coin.coin_type,
            name: coin.coin_name,
            country: coin.country,
            composition: coin.сomposition,
            quality: coin.quality,
            denomination: coin.denomination,
            year: +coin.year,
            weight: coin.weight,
            price: +coin.price,
            price_currency: 1,
            description: coin.description,
            short_description: coin.shortDescription,
            obverse: coin.obverse,
            reverse: coin.reverse,
            quantity: coin.quantity,
            token: getState().login.token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }
    })
    if (res.status !== 200) {
        console.log('Ups, check error');
    }
    else {
        dispatch(searchHandling(''));
        dispatch(editCoin(false, {}));
    }

    let filesUpload = await fetch(`/api/admin/upload`, {
        method: "POST",
        body: coin.formData
    })
    if (filesUpload.status !== 200) {
        console.log('Ups, check error');
    }
}

export const coinAdding = (coin) => async (dispatch, getState) => {
    let res = await fetch(`/api/admin/coins`, {
        method: "POST",
        body: JSON.stringify({
            type: coin.coin_type,
            name: coin.coin_name,
            country: coin.country,
            composition: coin.сomposition,
            quality: coin.quality,
            denomination: coin.denomination,
            year: +coin.year,
            weight: coin.weight,
            price: +coin.price,
            price_currency: 1,
            description: coin.description,
            short_description: coin.shortDescription,
            obverse: coin.obverse,
            reverse: coin.reverse,
            popularity: 0,
            token: getState().login.token
        }),
        headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8000',
            'Content-Type': 'application/json'
        }
    })

    if (res.status !== 200) {
        console.log('Ups, check error');
    }
    else {
        dispatch(searchHandling(''));
        dispatch(editCoin(false, {}));
    }

    let filesUpload = await fetch(`/api/admin/upload`, {
        method: "POST",
        body: coin.formData
    })
    if (filesUpload.status !== 200) {
        console.log('Ups, check error');
    }
}


export const startCoinEditing = (editing, coin) => async (dispatch, getState) => {
    await dispatch(getSelectInfo());
    dispatch(editCoin(editing, coin));
}


